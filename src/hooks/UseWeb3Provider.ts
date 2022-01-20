import { ethers } from 'ethers'
import type { providers } from 'ethers'


type UseWeb3Provider = [
  provider: providers.Provider
]

export function useWeb3Provider(): UseWeb3Provider {
  const ethereum = (window as any).ethereum
  const provider = ethereum ? new ethers.providers.Web3Provider((window as any).ethereum) : null as any

  return [
    provider,
  ]
}