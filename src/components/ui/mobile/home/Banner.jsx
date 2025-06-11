import { useDispatch } from "react-redux";
import {
  setGroupType,
  // setSelectedCategory,
  // setShowLoginModal,
  // setShowLoginModal,
} from "../../../../redux/features/stateSlice";
// import { userToken } from "../../../../redux/features/auth/authSlice";
// import { settings } from "../../../../api";
// import { useNavigate } from "react-router-dom";

// import BannerSlider from "../../BannerSlider/BannerSlider";
import { useNavigate } from "react-router-dom";
import assets from "../../../../assets";
const Banner = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleNavigate = (link) => {
    navigate(link);
  };

  const groups = [
    {
      id: 4,
      name: "Cricket",
      image: assets.cricket_bg,
    },
    {
      id: 1,
      name: "Football",
      image: assets.football_bg,
    },
    {
      id: 2,
      name: "Tennis",
      image: assets.tennis_bg,
    },
    {
      path: "/horse-racing",
      name: "Horse",
      image: assets.horse_bg,
    },
    {
      path: "/greyhound-racing",
      name: "Greyhound",
      image: assets.greyhound_bg,
    },
  ];

  const quickGames = [
    {
      path: "/",
      name: "Aura Casino",
      image: assets.aura_bg,
    },
    {
      path: "/",
      name: "Sportsbook",
      image: assets.sportsbook_quick_bg,
    },
    {
      path: "/",
      name: "Slot",
      image: assets.slot_quick_bg,
    },
    {
      path: "/",
      name: "Multiplier",
      image: assets.multiplayer_quick_bg,
    },
    {
      path: "/",
      name: "Live Casino",
      image: assets.livecasino_quick_bg,
    },
    {
      path: "/",
      name: "Fortune",
      image: assets.fortunebg,
    },
    {
      path: "/",
      name: "Fishing Games",
      image: assets.fishinggames_quick_bg,
    },
    {
      path: "/",
      name: "Evolution Games",
      image: assets.evolution_quick_bg,
    },
    {
      path: "/",
      name: "E Cricket",
      image: assets.e_cricket_quick_bg,
    },
    {
      path: "/",
      name: "Card Games",
      image: assets.cardgames_quick_bg,
    },
  ];

  const handleNavigateGroup = (group) => {
    if (group?.id) {
      dispatch(setGroupType(group.id));
    } else {
      navigate(group.path);
    }
  };

  const chunkArray = (arr, size) => {
    return Array.from({ length: Math.ceil(arr.length / size) }, (_, index) =>
      arr.slice(index * size, index * size + size)
    );
  };
  return (
    <>
      {/* {showWarning && (
        <WarningCondition gameInfo={gameInfo} setShowWarning={setShowWarning} />
      )} */}

      <div className="py-1 px-[2px] w-full">
        <div className="flex flex-col items-center justify-start w-full scrollSmooth no-scrollbar">
          <div title="QuickButtons-group" className=" grid grid-cols-5">
            {groups.slice(0, 5).map((group, i) => (
              <span
                key={i}
                onClick={() => handleNavigateGroup(group)}
                title="Evolution"
                className=" col-span-1 px-[3px] py-[3px]"
              >
                <div
                  className="relative w-full active:scale-95 cursor-pointer  bg-bg_SkeletonBgLoaderColor transition-all ease-in-out duration-150 shadow-quickAccessBtnBoxShadows min-h-9 bg-cover bg-center bg-no-repeat rounded-[4px] overflow-hidden undefined"
                  style={{
                    backgroundImage: `url(${group.image})`,
                  }}
                >
                  <div className="flex justify-center w-full h-full min-h-9 relative z-10 items-center min-w-[175px] sm:min-w-[240px] md:min-w-[280px] pl-[5px] pt-[2px] pb-[2px] pr-1  opacity-100">
                    <img
                      src={group.image}
                      width="16"
                      height="16"
                      className="  w-4 h-4 sm:w-5 sm:h-5  ml-1 autoAnimate  "
                      alt="Evolution-image"
                      loading="lazy"
                      title="Evolution"
                    />
                    <span className=" ml-1 autoAnimate text-text_Quaternary text-xs capitalize pr-[2px] md:text-sm text-nowrap w-full truncate font-lato-bold  font-semibold md:font-semibold">
                      {group.name}
                    </span>
                  </div>
                  <div className="absolute top-0 left-0 w-full h-full  min-h-9 rounded-[4px] "></div>
                </div>
              </span>
            ))}
          </div>
          <div className="flex overflow-auto w-full scrollSmooth no-scrollbar">
            {chunkArray(quickGames, 2).map((chunk, i) => (
              <div
                key={i}
                title={`QuickButtons-${i * 2}`}
                className="grid grid-row-2"
              >
                {chunk.map((game, j) => (
                  <span
                    key={j}
                    onClick={() => handleNavigate(game.path)}
                    title={game.name}
                    className="col-span-1 px-[3px] py-[3px]"
                  >
                    <div
                      className="relative w-full active:scale-95 cursor-pointer bg-bg_SkeletonBgLoaderColor transition-all ease-in-out duration-150 shadow-quickAccessBtnBoxShadows min-h-9 bg-cover bg-center bg-no-repeat rounded-[4px] overflow-hidden"
                      style={{ backgroundImage: `url(${game.image})` }}
                    >
                      <div className="flex justify-center w-full h-full min-h-9 relative z-10 items-center min-w-[175px] sm:min-w-[240px] md:min-w-[280px] pl-[5px] pt-[2px] pb-[2px] pr-1 opacity-100">
                        <img
                          src={game.image}
                          width="16"
                          height="16"
                          className="w-4 h-4 sm:w-5 sm:h-5 ml-1 autoAnimate"
                          alt={`${game.name}-image`}
                          loading="lazy"
                          title={game.name}
                        />
                        <span className="ml-1 autoAnimate text-text_Quaternary text-xs capitalize pr-[2px] md:text-sm text-nowrap w-full truncate font-lato-bold font-semibold md:font-semibold">
                          {game.name}
                        </span>
                      </div>
                      <div className="absolute top-0 left-0 w-full h-full min-h-9 rounded-[4px]" />
                    </div>
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
