import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import {
  setGroupType,
  setShowAppPopUp,
  setShowLeftSidebar,
} from "../../../redux/features/stateSlice";
import useContextState from "../../../hooks/useContextState";
import LoggedIn from "./LoggedIn";
import UnAuthorized from "./UnAuthorized";
import { userToken } from "../../../redux/features/auth/authSlice";
import useBalance from "../../../hooks/useBalance";
import useBonusBalance from "../../../hooks/useBonusBalance";
import moment from "moment";
import { useEffect, useState } from "react";
import { settings } from "../../../api";
import SearchBox from "./SearchBox";
import MobileSearch from "./MobileSearch";
// import { MobileView, isMobile } from "react-device-detect";
import AppPopup from "./AppPopUp";
// import MobileHeader from "./MobileHeader";

import Notification from "./Notification";
import DesktopNavList from "./DesktopNavList";

const Header = () => {
  const location = useLocation();
  const [showMobileSearch, setShowMobileSearch] = useState(false);
  const [time, setTime] = useState();
  const { balance } = useBalance();
  const { bonusBalance } = useBonusBalance();
  const { logo } = useContextState();
  const token = useSelector(userToken);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { showAppPopUp, windowWidth } = useSelector((state) => state?.state);

  useEffect(() => {
    setTimeout(() => {
      setTime(moment().format("h:mm:ss a"));
    }, 1000);
  }, [time]);

  useEffect(() => {
    const closePopupForForever = localStorage.getItem("closePopupForForever");
    if (location?.state?.pathname === "/apk" || location.pathname === "/apk") {
      localStorage.setItem("closePopupForForever", true);
      localStorage.removeItem("installPromptExpiryTime");
    } else {
      if (!closePopupForForever) {
        const expiryTime = localStorage.getItem("installPromptExpiryTime");
        const currentTime = new Date().getTime();

        if ((!expiryTime || currentTime > expiryTime) && settings?.apkLink) {
          localStorage.removeItem("installPromptExpiryTime");

          dispatch(setShowAppPopUp(true));
        }
      }
    }
  }, [
    dispatch,
    windowWidth,
    showAppPopUp,
    location?.state?.pathname,
    location.pathname,
  ]);

  return (
    <>
      <div
        id="header"
        title="header"
        className=" fixed top-0 w-full   z-[100]"
        style={{ zIndex: 1000, backgroundColor: "white" }}
      >
        <Notification />
        {settings?.apkLink && showAppPopUp && windowWidth < 1040 && (
          <AppPopup />
        )}
        <header>
          <div className="flex flex-col bg-headerBg">
            <div className=" flex flex-col shadow-lg autoAnimate">
              <div
                id="header_body"
                className="w-full lg:px-14 xl:px-[82px] xlg:px-24  h-[54px] lg:h-[72px] pr-[4px] md:px-4 flex items-center justify-between gap-1  relative "
              >
                <div
                  id="logoContainer"
                  className="logo flex   w-full h-full md:w-fit "
                >
                  <div
                    onClick={() => dispatch(setShowLeftSidebar(true))}
                    className=" flex items-center w-[40px] md:w-fit justify-center  lg:hidden "
                  >
                    <button
                      className="inline-block  leading-normal relative overflow-hidden  transition duration-150 ease-in-out bg-none border-none h-full flex items-center justify-center active:scale-150  w-[100%] shadow-none px-1  
cursor-pointer
"
                      type="button"
                    >
                      <span>
                        <svg
                          height="19"
                          width="16"
                          fill="var(--color-quaternary)"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 448 512"
                        >
                          <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"></path>
                        </svg>
                      </span>
                    </button>
                  </div>
                  {/* Mobile search */}
                  {showMobileSearch && (
                    <MobileSearch setShowMobileSearch={setShowMobileSearch} />
                  )}

                  <div
                    onClick={() => {
                      navigate("/");
                      dispatch(setGroupType(0));
                    }}
                    className={`ml-[2px] md:ml-[0px]  flex items-center ${
                      showMobileSearch ? "hidden" : ""
                    }`}
                  >
                    <div className="   cursor-pointer">
                      <img
                        height={settings.logoHeight}
                        width={settings.logoWidth}
                        src={logo}
                        alt=""
                      />
                    </div>
                  </div>
                </div>
                <div
                  id="currentDateTime"
                  className=" hidden font-lato lg:block "
                >
                  <div className=" w-full text-text_Quaternary1 text-[10px] lg:text-[12px] flex  px-2">
                    <div className="flex gap-1 items-center text-nowrap whitespace-nowrap">
                      {/* Aug 16th, 2024 ( GMT +5.5:30 ) */}
                      {moment().format("MMMM Do YYYY")}
                    </div>
                    <span className="text-text_Quaternary text-xs lg:text-[14px] text-nowrap whitespace-nowrap font-semibold ">
                      {time}
                    </span>
                  </div>
                </div>
                <SearchBox />

                {token ? (
                  <LoggedIn
                    setShowMobileSearch={setShowMobileSearch}
                    showMobileSearch={showMobileSearch}
                    balance={balance}
                    bonusBalance={bonusBalance}
                  />
                ) : (
                  <UnAuthorized
                    setShowMobileSearch={setShowMobileSearch}
                    showMobileSearch={showMobileSearch}
                  />
                )}
              </div>
              {/* <MobileHeader /> */}
              <DesktopNavList />
            </div>
          </div>
        </header>
      </div>
    </>
  );
};

export default Header;
