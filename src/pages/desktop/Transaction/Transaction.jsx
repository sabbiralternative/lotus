import LeftDeskSidebar from "../../../components/shared/desktop/LeftDeskSidebar/LeftDeskSidebar";
import RightDeskSidebar from "../../../components/shared/desktop/RightDeskSidebar/RightDeskSidebar";
import DepositWithdrawReport from "../../../components/ui/Reports/Transaction";

const Transaction = () => {
  return (
    <div className="flex flex-col transition-all">
      <div className="flex items-start justify-start w-full lg:px-12 xl:px-20 xlg:px-24">
        <LeftDeskSidebar />
        <DepositWithdrawReport />
        <RightDeskSidebar />
      </div>
    </div>
  );
};

export default Transaction;
