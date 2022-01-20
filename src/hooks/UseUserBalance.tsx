import { ethers } from "ethers";
import { useEffect, useState } from "react";
import { useUserSigner } from "./UseUserSigner";

const THIRTY_SECONDS_IN_MS = 30 * 1000;

export function useUserBalance() {
  const [signer] = useUserSigner();
  const [balance, setBalance] = useState('');


  useEffect(() => {
    const getBalance = async () => {
      console.log('Loading user ETH balance...')
      const ethereum = (window as any).ethereum;

      const [account] = await ethereum.request({ method: 'eth_requestAccounts' });
      const provider = new ethers.providers.Web3Provider(ethereum);
      const balance = await provider.getBalance(account);

      setBalance(ethers.utils.formatEther(balance));
    };

    getBalance();
    setInterval(getBalance, THIRTY_SECONDS_IN_MS);
  }, []);


  return [balance];
}
