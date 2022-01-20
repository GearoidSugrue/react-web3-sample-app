
import { useUserBalance } from "../hooks";


function WalletBalance() {
  const [balance] = useUserBalance();

  return (
    <div>
      <h5 >Your ETH Balance: {balance}</h5>
    </div>
  );
};

export default WalletBalance;