/* eslint-disable react/no-unknown-property */
import { useSelector } from "react-redux";
import Banner from "../../../components/ui/mobile/home/Banner";
import InPlay from "../../../components/ui/mobile/home/InPlay";

// import UpcomingEvents from "../../../components/ui/mobile/home/UpcomingEvents";

import { useGetAllGroupEventsQuery } from "../../../redux/features/events/events";
// import WithdrawDepositButton from "../../../components/ui/mobile/home/WithdrawDepositButton";
import Group from "../../../components/ui/mobile/home/Group";
import { userToken } from "../../../redux/features/auth/authSlice";
import LiveCasino from "../../../components/ui/LiveCasino/LiveCasino";
import { useEffect } from "react";
import useBalance from "../../../hooks/useBalance";
import AuraWolf from "../../../components/ui/AuraWolf/AuraWolf";
import PopularGames from "../../../components/ui/PopularGames/PopularGames";
import CasinoProvider from "../../../components/ui/CasinoProvider/CasinoProvider";
import Originals from "../../../components/ui/desktop/Home/Originals";
import useLotusHomeLobby from "../../../hooks/useLotusHomeLobby";
import filterUpcoming from "../../../utils/filterUpcoming";
import SingleGroup from "../../../components/ui/mobile/home/SingleGroup";

const Home = () => {
  const { lotusLobby } = useLotusHomeLobby();
  const { refetchBalance } = useBalance();
  const token = useSelector(userToken);
  const { group } = useSelector((state) => state.state);
  const { data } = useGetAllGroupEventsQuery(group, {
    pollingInterval: 1000,
  });
  const { data: upcomingCricket } = useGetAllGroupEventsQuery(4);

  useEffect(() => {
    if (token) {
      refetchBalance();
    }
  }, [refetchBalance, token]);
  let upComing = [];

  if (data) {
    upComing = filterUpcoming(upcomingCricket);
  }

  return (
    <>
      <div className="flex items-start justify-start w-full lg:px-12 xl:px-20 xlg:px-24">
        {group === 0 && (
          <div
            className="w-full md:mt-[0px] lg:overflow-auto lg:w-[59%]"
            style={{ minHeight: "calc(-54px + 100dvh)" }}
          >
            <Banner />

            <div
              id="home"
              className="py-1 flex flex-col items-start justify-start"
            >
              {/* {token && <WithdrawDepositButton />} */}
              <Originals trendingGames={lotusLobby?.trendingGames} />
              {data && <InPlay data={data} />}
              <CasinoProvider casinoProviders={lotusLobby?.casinoProviders} />
              <AuraWolf />
              <PopularGames popularGames={lotusLobby?.popularGames} />
              {upComing?.length > 0 && (
                <SingleGroup
                  cricket={true}
                  data={upcomingCricket}
                  filterData={upComing}
                  title="Upcoming Events"
                />
              )}
              {/* <UpcomingEvents /> */}
            </div>
            <div className="px-[6px]"></div>
          </div>
        )}
        {group === 2 || group === 4 || group === 1 || group === 5 ? (
          <Group data={data} />
        ) : null}
        {group === "liveCasinoWolf" ||
        group === "slotWolf" ||
        group === "auraWolf" ? (
          <div
            className="w-full md:mt-[0px] lg:overflow-auto lg:w-[59%] page-body"
            style={{ minHeight: "calc(-110px + 100dvh)" }}
            _ngcontent-ng-c1965075897=""
          >
            <LiveCasino />
          </div>
        ) : null}
      </div>
    </>
  );
};

export default Home;
