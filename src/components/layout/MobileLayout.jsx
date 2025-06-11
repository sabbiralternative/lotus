import { Outlet, useLocation } from "react-router-dom";
import Footer from "../shared/Footer/Footer";
import Header from "../shared/Header/Header";
import { useSelector } from "react-redux";
import LeftDeskSidebar from "../shared/mobile/LeftDeskSidebar/LeftDeskSidebar";
import RightDeskSidebar from "../shared/mobile/RightDeskSidebar/RightDeskSidebar";

const MobileLayout = () => {
  // overflow-x-hidden overflow-y-auto
  const { pathname } = useLocation();
  const { showAppPopUp, showNotification, showLeftSidebar, showRightSidebar } =
    useSelector((state) => state.state);

  const calculatePadding = () => {
    if (!location.pathname.includes("/casino")) {
      if (showAppPopUp && showNotification) {
        return "pt-[180px]";
      } else if (showAppPopUp) {
        return "pt-[160px]";
      } else if (showNotification) {
        return "pt-[110px]";
      } else {
        return "pt-[90px]";
      }
    }
  };
  return (
    <>
      <LeftDeskSidebar />
      <RightDeskSidebar />
      <div
        className={`w-full flex flex-col app-bg h-[100%] transition-all duration-[0.25s]  ${
          showLeftSidebar ? "translate-x-[60%]" : "translate-x-[0%]"
        } `}
      >
        <div
          className={`transition-all duration-[0.25s] ${
            showRightSidebar ? "-translate-x-[70%]" : "-translate-x-[0%]"
          }`}
        >
          {!pathname.includes("/casino") && <Header />}
          <div
            className={`flex flex-col transition-all ease-in-out duration-100   ${calculatePadding()} `}
          >
            <Outlet />
          </div>
          {!pathname.includes("/casino") && <Footer />}
        </div>
      </div>
    </>
  );
};

export default MobileLayout;
