import { useBlockNumber } from "../hooks/";
import WalletBalance from "./WalletBalance";

function HasMetaMaskView() {
  const [blockNumber] = useBlockNumber();

  return (
    <div>
      <p>MetaMask is installed</p>
      <p>Block Number: {blockNumber} </p>
      <WalletBalance />
    </div>
  )
}

export default HasMetaMaskView
