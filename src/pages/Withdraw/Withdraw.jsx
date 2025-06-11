import { useState } from "react";
import LeftDeskSidebar from "../../components/shared/desktop/LeftDeskSidebar/LeftDeskSidebar";
import RightDeskSidebar from "../../components/shared/desktop/RightDeskSidebar/RightDeskSidebar";
import ChooseAmount from "../../components/ui/withdraw/ChooseAmount";
import BankAccounts from "../../components/ui/withdraw/BankAccounts/BankAccounts";

const Withdraw = () => {
  const [amount, setAmount] = useState("");
  const [showBanks, setShowBanks] = useState(false);

  return (
    <div className="flex items-start justify-start w-full lg:px-12 xl:px-20 xlg:px-24">
      <LeftDeskSidebar />
      {!showBanks && (
        <ChooseAmount
          setShowBanks={setShowBanks}
          setAmount={setAmount}
          amount={amount}
        />
      )}
      {showBanks && <BankAccounts amount={amount} />}
      <RightDeskSidebar />
    </div>
  );
};

export default Withdraw;
