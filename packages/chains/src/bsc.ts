import { Chain } from './types'

export const bsc = {
  id: 56,
  name: 'BNB Smart Chain',
  network: 'bsc',
  nativeCurrency: {
    decimals: 18,
    name: 'BNB',
    symbol: 'BNB',
  },
  rpcUrls: {
    chainstack: {
      http: ['https://bsc-mainnet.core.chainstack.com/'],
      webSocket: ['wss://bsc-mainnet.core.chainstack.com/ws/'],
    },
    default: { http: ['https://rpc.ankr.com/bsc'] },
    public: { http: ['https://rpc.ankr.com/bsc'] },
  },
  blockExplorers: {
    etherscan: { name: 'BscScan', url: 'https://bscscan.com' },
    default: { name: 'BscScan', url: 'https://bscscan.com' },
  },
  contracts: {
    multicall3: {
      address: '0xca11bde05977b3631167028862be2a173976ca11',
      blockCreated: 15921452,
    },
  },
} as const satisfies Chain
