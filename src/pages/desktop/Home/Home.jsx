/* eslint-disable react/no-unknown-property */
import { useSelector } from "react-redux";
import { useGetAllGroupEventsQuery } from "../../../redux/features/events/events";

import RightDeskSidebar from "../../../components/shared/desktop/RightDeskSidebar/RightDeskSidebar";
import InPlay from "../../../components/ui/desktop/Home/InPlay";

// import UpcomingEvents from "../../../components/ui/desktop/Home/UpcomingEvents";

import WhatsApp from "../../../components/ui/desktop/Home/WhatsApp";
// import WithdrawAndDepositButton from "../../../components/ui/desktop/Home/WithdrawAndDepositButton";
import LeftDeskSidebar from "../../../components/shared/desktop/LeftDeskSidebar/LeftDeskSidebar";
import Group from "../../../components/ui/desktop/Home/Group";
// import CasinoProvider from "../../../components/ui/CasinoProvider/CasinoProvider";
// import IndianCardGames from "../../../components/ui/IndianCardGames/IndianCardGames";
import LiveCasino from "../../../components/ui/LiveCasino/LiveCasino";
import useBalance from "../../../hooks/useBalance";
import { useEffect } from "react";
import AuraWolf from "../../../components/ui/AuraWolf/AuraWolf";
import Originals from "../../../components/ui/desktop/Home/Originals";
import CasinoProvider from "../../../components/ui/CasinoProvider/CasinoProvider";
import PopularGames from "../../../components/ui/PopularGames/PopularGames";
import useLotusHomeLobby from "../../../hooks/useLotusHomeLobby";
import Banner from "../../../components/ui/mobile/home/Banner";
import filterUpcoming from "../../../utils/filterUpcoming";
import SingleGroup from "../../../components/ui/desktop/Home/SingleGroup";

// import CardGames from "../../../components/ui/CardGames/CardGames";
// import IndianLiveCasino from "../../../components/ui/IndianLiveCasino/IndianLiveCasino";
// import Casino from "../../../components/ui/Casino/Casino";
// import PopularGames from "../../../components/ui/PopularGames/PopularGames";

const Home = () => {
  const { lotusLobby } = useLotusHomeLobby();
  const { refetchBalance } = useBalance();
  const { group } = useSelector((state) => state.state);
  const { data } = useGetAllGroupEventsQuery(group, {
    pollingInterval: 1000,
  });
  const { data: upcomingCricket } = useGetAllGroupEventsQuery(4);

  useEffect(() => {
    refetchBalance();
  }, [refetchBalance]);
  let upComing = [];

  if (data) {
    upComing = filterUpcoming(upcomingCricket);
  }

  return (
    <>
      <div className="flex items-start justify-start w-full lg:px-12 xl:px-20 xlg:px-24">
        <LeftDeskSidebar />
        {group === 0 && (
          <>
            <div
              className="w-full md:mt-[0px] lg:overflow-auto lg:w-[59%]"
              style={{ minHeight: "calc(-54px + 100dvh)" }}
            >
              <WhatsApp />

              <Banner />

              <div
                id="home"
                className="py-1 flex flex-col items-start justify-start"
              >
                <Originals trendingGames={lotusLobby?.trendingGames} />
                {/* <WithdrawAndDepositButton /> */}
                {data && <InPlay data={data} />}
                <CasinoProvider casinoProviders={lotusLobby?.casinoProviders} />
                <AuraWolf />
                <PopularGames popularGames={lotusLobby?.popularGames} />

                {upComing?.length > 0 && (
                  <SingleGroup
                    cricket={true}
                    margin={true}
                    data={upcomingCricket}
                    filterData={upComing}
                    title="Upcoming Events"
                  />
                )}

                {/* <UpcomingEvents /> */}
                {/* <CardGames /> */}
                {/* <IndianLiveCasino />
                  <Casino /> */}
              </div>
            </div>
          </>
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

        <RightDeskSidebar />
      </div>
    </>
  );
};

export default Home;
