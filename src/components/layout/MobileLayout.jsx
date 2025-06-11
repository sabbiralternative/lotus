import { Outlet, useLocation } from "react-router-dom";
import Footer from "../shared/Footer/Footer";
import Header from "../shared/Header/Header";
import { useSelector } from "react-redux";
import LeftDeskSidebar from "../shared/mobile/LeftDeskSidebar/LeftDeskSidebar";
import RightDeskSidebar from "../shared/mobile/RightDeskSidebar/RightDeskSidebar";
import WhatsApp from "../ui/desktop/Home/WhatsApp";

const MobileLayout = () => {
  // overflow-x-hidden overflow-y-auto
  const { pathname } = useLocation();
  const {
    showAppPopUp,
    showNotification,
    showLeftSidebar,
    showRightSidebar,
    group,
  } = useSelector((state) => state.state);

  const calculatePadding = () => {
    if (!location.pathname.includes("/casino")) {
      if (showAppPopUp && showNotification) {
        return "pt-[150px]";
      } else if (showAppPopUp) {
        return "pt-[130px]";
      } else if (showNotification) {
        return "pt-[80px]";
      } else {
        return "pt-[60px]";
      }
    }
  };

  return (
    <>
      <LeftDeskSidebar />
      <RightDeskSidebar />
      {group === 0 && <WhatsApp />}
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
