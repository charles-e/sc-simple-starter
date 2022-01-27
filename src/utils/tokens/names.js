import EventEmitter from 'events';
import { useConnectionConfig } from '../connection';
import { useListener } from '../utils';
import { useCallback } from 'react';
import { clusterApiUrl } from '@safecoin/web3.js';

export const TOKENS = {
  [clusterApiUrl('devnet')]: [
    {
      mintAddress: 'SRmaJesFc3feD9WxoHg85oLA443b5g8G6qPnQgUvbhC',
      tokenName: 'Serum',
      tokenSymbol: 'SRM',
      mintable: false,
    },
    {
      mintAddress: 'msmUmQ7BEftBi5DLUL5Vwk46HcMGjVNdNuAJcX8vELy',
      tokenName: 'MegaSerum',
      tokenSymbol: 'MSRM',
      mintable: false,
    },
    {
      mintAddress: 'w11yCpEEJCCS2gnr7xSPCuTbccaLrsDnq9DUJN9qEGu',
      tokenName: 'Wally Token',
      tokenSymbol: 'WALL',
      mintable: true,
    },
    {
      mintAddress: 'v7NACe6ZGC9TjU2bd4knm8oYULrQjZxnJDsuGGGWMtm',
      tokenName: 'V-7',
      tokenSymbol: 'VSEV',
      mintable: true,
    },
    {
      mintAddress: 'ARA7gp3zXoTi9gzqKPW4xg5z4xwt9on7cfegCZ6VmhEm',
      tokenName: 'ARAVEL',
      tokenSymbol: 'ARA',
      mintable: true,
    },
  ],
};

const customTokenNamesByNetwork = JSON.parse(
  localStorage.getItem('tokenNamesZ') ?? '{}',
);

const nameUpdated = new EventEmitter();
nameUpdated.setMaxListeners(100);

export function useTokenName(mint) {
  const { endpoint } = useConnectionConfig();
  useListener(nameUpdated, 'update');

  if (!mint) {
    return { name: null, symbol: null, mintable: false };
  }
  let mintKey = mint.toBase58();
  console.log('mintKey ', mintKey);

  let info = customTokenNamesByNetwork?.[endpoint]?.[mintKey];
  if (!info) {
    let tokensList = TOKENS?.[endpoint];
    let match = tokensList?.find((token) => token.mintAddress == mintKey);
    if (match) {
      info = {
        name: match.tokenName,
        symbol: match.tokenSymbol,
        mintable: match?.mintable === true,
      };
    }
  }
  return { name: info?.name, symbol: info?.symbol, mintable: info?.mintable };
}

export function useUpdateTokenName() {
  const { endpoint } = useConnectionConfig();
  return useCallback(
    function updateTokenName(mint, name, symbol) {
      if (!customTokenNamesByNetwork[endpoint]) {
        customTokenNamesByNetwork[endpoint] = {};
      }
      customTokenNamesByNetwork[endpoint][mint.toBase58()] = { name, symbol };
      localStorage.setItem(
        'tokenNamesZ',
        JSON.stringify(customTokenNamesByNetwork),
      );
      nameUpdated.emit('update');
    },
    [endpoint],
  );
}
