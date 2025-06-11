import LeftDeskSidebar from "../../../components/shared/desktop/LeftDeskSidebar/LeftDeskSidebar";
import RightDeskSidebar from "../../../components/shared/desktop/RightDeskSidebar/RightDeskSidebar";
import OpenBetsComponent from "../../../components/ui/OpenBets/OpenBets";

const OpenBets = () => {
  return (
    <div className="flex flex-col transition-all  ease-in-out duration-100">
      <div className="flex items-start justify-start w-full lg:px-12 xl:px-20 xlg:px-24">
        <LeftDeskSidebar />
        <OpenBetsComponent />
        <RightDeskSidebar />
      </div>
    </div>
  );
};

export default OpenBets;
