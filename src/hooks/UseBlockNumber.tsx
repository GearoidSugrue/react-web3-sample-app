import { useEffect, useState } from "react";
import { useWeb3Provider } from "./UseWeb3Provider";

const TEN_SECONDS_IN_MS = 10 * 1000;

export function useBlockNumber() {
  const [provider] = useWeb3Provider();
  const [blockNumber, setBlockNumber] = useState(-1);

  useEffect(() => {
    const getBlockNumber = async () => {
      console.log('Loading current block number...');

      const blockNum = await provider.getBlockNumber();
      setBlockNumber(blockNum);
    }

    getBlockNumber();
    setInterval(getBlockNumber, TEN_SECONDS_IN_MS);
  }, []);


  return [blockNumber];
}
