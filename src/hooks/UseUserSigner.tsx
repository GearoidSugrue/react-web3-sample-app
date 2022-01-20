import { ethers } from "ethers";

export function useUserSigner() {
  const provider = new ethers.providers.JsonRpcProvider();
  const signer = provider.getSigner()
  return [signer]
}
