import { useNavigate } from "react-router-dom";
import isOddSuspended from "../../../../utils/isOddSuspended";
import SuspendedOdd from "../../../shared/SuspendedOdd/SuspendedOdd";
import { useSelector } from "react-redux";
import assets from "../../../../assets";
import Score from "../../desktop/Home/Score";

const SingleGroup = ({ data, filterData, title, cricket }) => {
  const { group } = useSelector((state) => state.state);
  const eventName = { 4: "Cricket", 2: "Tennis", 1: "Football", 5: "Kabbadi" };
  const navigate = useNavigate();
  const navigateGameList = (keys) => {
    navigate(`/game-details/${data[keys]?.eventTypeId}/${keys}`);
  };

  return (
    <div className="w-full md:mt-[0px] lg:overflow-auto lg:w-[59%]">
      <div className="w-full h-full">
        <div className="w-full mt-[15px] px-2">
          <div title="In Play" className="w-full">
            <div className="w-full font-helvetica-neue">
              <div
                className={`w-full flex items-center justify-between rounded-t-[3px] py-1.5 px-[7px]  ${
                  title === "In Play"
                    ? "bg-competetionInPlayUpComingBg"
                    : "bg-[#cc5f36]"
                }`}
              >
                <div className="flex items-center text-text_Quaternary font-semibold text-[18px] tracking-wide justify-start w-full gap-[5px]">
                  {title === "In Play" ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="29"
                      height="29"
                      viewBox="0 0 29 29"
                      fill="none"
                    >
                      <g clipPath="url(#clip0_1696_2272)">
                        <path
                          d="M14.5 2.83337C8.06004 2.83337 2.83337 8.06004 2.83337 14.5C2.83337 20.94 8.06004 26.1667 14.5 26.1667C20.94 26.1667 26.1667 20.94 26.1667 14.5C26.1667 8.06004 20.94 2.83337 14.5 2.83337ZM12.1667 19.75V9.25004L19.1667 14.5L12.1667 19.75Z"
                          fill="var(--color-quaternary)"
                        ></path>
                      </g>
                      <defs>
                        <clipPath id="clip0_1696_2272">
                          <rect
                            width="28"
                            height="28"
                            fill="white"
                            transform="translate(0.5 0.5)"
                          ></rect>
                        </clipPath>
                      </defs>
                    </svg>
                  ) : (
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 16 16"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      fill="var(--color-quaternary)"
                    >
                      <rect
                        width="16"
                        height="16"
                        id="icon-bound"
                        fill="none"
                      ></rect>
                      <path d="M7,9h2V4H7V9z M9,11c0-0.553-0.447-1-1-1s-1,0.447-1,1s0.447,1,1,1S9,11.553,9,11z M16,8c0-4.419-3.581-8-8-8S0,3.581,0,8 s3.581,8,8,8S16,12.419,16,8z M14,8c0,1.603-0.625,3.109-1.756,4.244C11.109,13.375,9.603,14,8,14s-3.109-0.625-4.244-1.756 C2.625,11.109,2,9.603,2,8s0.625-3.109,1.756-4.244C4.891,2.625,6.397,2,8,2s3.109,0.625,4.244,1.756C13.375,4.891,14,6.397,14,8z"></path>
                    </svg>
                  )}
                  <span>{title}</span>
                </div>
              </div>
              <div className="bg-bg_Quaternary rounded-b border border-ternary4 border-t-0 border-b-0 shadow-lg">
                <div className="eventHeadName grid grid-cols-12">
                  <div className="text-text_Ternary px-2 h-full py-2.5 col-span-6 lg:col-span-5 pl-2 flex items-center justify-start w-full gap-x-2">
                    <span>
                      {group === 4 || cricket ? (
                        <img src={assets.cricket} alt="" />
                      ) : null}
                      {group === 2 && <img src={assets.tennis} alt="" />}
                      {group === 1 && <img src={assets.football} alt="" />}
                      {group === 5 && (
                        <img className="size-7" src={assets.kabbadi} alt="" />
                      )}
                    </span>
                    <div className="text-text_Ternary md:text-[18px] text-base font-semibold leading-3 tracking-wide text-center">
                      {cricket ? eventName[4] : eventName[group]}
                    </div>
                  </div>
                  <div className="col-span-6 py-2.5 lg:col-span-7 grid grid-cols-12 h-full">
                    <span className="text-text_Ternary text-xs font-semibold col-span-4 text-center flex items-center justify-center tracking-0.3">
                      1
                    </span>
                    <span className="text-text_Ternary text-xs font-semibold col-span-4 text-center flex items-center justify-center tracking-0.3">
                      X
                    </span>
                    <span className="text-text_Ternary text-xs font-semibold col-span-4 text-center flex items-center justify-center tracking-0.3">
                      2
                    </span>
                  </div>
                  {data &&
                    filterData.map((keys) => {
                      return (
                        <>
                          <div
                            onClick={() => navigateGameList(keys)}
                            className="col-span-6 h-12 lg:col-span-5 grid grid-cols-7 border-t border-borderColorOfMarket"
                          >
                            <span
                              id="inPlayTime"
                              className="flex text-selection-none items-center justify-center flex-col col-span-2 pl-[2px] pr-[2px] min-h-9 active:scale-[94%] transition-all ease-in-out duration-100"
                            >
                              <Score
                                data={data}
                                group={cricket ? 4 : group}
                                keys={keys}
                              />
                            </span>
                            <span
                              id="inPlayTeamName"
                              className="text-selection-none flex items-center justify-start col-span-5 px-1 relative border-l border-r border-borderColorOfMarket active:scale-[94%] transition-all ease-in-out duration-100"
                            >
                              <span className="flex flex-col items-center justify-start w-[87%]">
                                <span className="text-selection-none w-full flex items-center justify-start">
                                  <span className="w-[5px] h-[5px] p-[1px] mr-[2px]"></span>
                                  <span className="text-[11px] font-bold text-text_Ternary truncate sm:text-xs md:text-sm">
                                    {data[keys]?.player1}
                                  </span>
                                </span>
                                <span className="text-selection-none w-full flex items-center justify-start">
                                  <span className="w-[5px] h-[5px] p-[1px] mr-[2px]"></span>
                                  <span className="text-[11px] font-bold text-text_Ternary truncate sm:text-xs md:text-sm">
                                    {data[keys]?.player2}
                                  </span>
                                </span>
                              </span>
                              {data[keys]?.isTv == 1 && (
                                <span className="absolute top-0.5 right-0.5">
                                  <svg
                                    width="13"
                                    height="11"
                                    viewBox="0 0 13 11"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M11.8182 0H1.18182C0.525909 0 0 0.543889 0 1.22222V8.55556C0 9.22778 0.525909 9.77778 1.18182 9.77778H4.13636V11H8.86364V9.77778H11.8182C12.4682 9.77778 12.9941 9.22778 12.9941 8.55556L13 1.22222C13 0.543889 12.4682 0 11.8182 0ZM11.8182 8.55556H1.18182V1.22222H11.8182V8.55556ZM8.86364 4.88889L4.72727 7.33333V2.44444L8.86364 4.88889Z"
                                      fill="#257B24"
                                    ></path>
                                  </svg>
                                </span>
                              )}
                            </span>
                          </div>
                          {isOddSuspended(data[keys]) ? (
                            <SuspendedOdd colSpan={6} />
                          ) : (
                            <span
                              onClick={() => navigateGameList(keys)}
                              className="col-span-6 h-12 lg:col-span-7 w-full overflow-auto border-t border-borderColorOfMarket font-lato"
                            >
                              <div
                                className="w-full overflow-x-auto flex h-full sm:px-[2px]"
                                id="hideScrollBar"
                              >
                                <span className="grid grid-cols-12 grid-flow-col overflow-auto h-full min-w-[100%]">
                                  <span className="col-span-4">
                                    <span className="flex items-center justify-center w-full h-full p-[1px] md:p-[2px] overflow-hidden">
                                      <div className="overflow-hidden relative opacity-100 cursor-pointer active:scale-95 w-full h-full px-1 py-[1px] rounded-sm flex flex-col items-center justify-center bg-bg_BackBtnBg border border-backBtn undefined">
                                        <span
                                          id="oddBtnPrice"
                                          className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full text-text_OddValue leading-5 text-[12px] font-semibold"
                                        >
                                          {
                                            data[keys]?.[0]?.ex
                                              ?.availableToBack[0]?.price
                                          }
                                        </span>
                                        <span
                                          id="oddBtnSize"
                                          className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full text-[10px] text-text_OddValue leading-3 text-center whitespace-normal font-normal"
                                        >
                                          <span className="w-max break-all truncate text-[9px]">
                                            {
                                              data[keys]?.[0]?.ex
                                                ?.availableToBack[0]?.size
                                            }
                                          </span>
                                        </span>
                                      </div>
                                    </span>
                                  </span>
                                  <span className="col-span-4">
                                    <span className="flex items-center justify-center w-full h-full p-[1px] md:p-[2px] overflow-hidden">
                                      <div
                                        className={`
                                    ${
                                      data[keys]?.[2]?.ex?.availableToBack[0]
                                        ?.price
                                        ? "opacity-100 cursor-pointer active:scale-95"
                                        : "opacity-50 cursor-not-allowed"
                                    }
                                    overflow-hidden relative  w-full h-full px-1 py-[1px] rounded-sm flex flex-col items-center justify-center bg-bg_BackBtnBg border border-backBtn undefined   `}
                                      >
                                        <span
                                          id="oddBtnPrice"
                                          className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full text-text_OddValue leading-5 text-[12px]  font-semibold"
                                        >
                                          {data[keys]?.[2]?.ex
                                            ?.availableToBack[0]?.price || "-"}
                                        </span>
                                        <span
                                          id="oddBtnSize"
                                          className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full text-[10px] text-text_OddValue leading-3 text-center whitespace-normal font-normal"
                                        >
                                          <span className="w-max break-all truncate text-[9px]">
                                            {" "}
                                            {
                                              data[keys]?.[2]?.ex
                                                ?.availableToBack[0]?.size
                                            }
                                          </span>
                                        </span>
                                      </div>
                                    </span>
                                  </span>
                                  <span className="col-span-4">
                                    <span className="flex items-center justify-center w-full h-full p-[1px] md:p-[2px] overflow-hidden">
                                      <div className="overflow-hidden relative opacity-100 cursor-pointer active:scale-95 w-full h-full px-1 py-[1px] rounded-sm flex flex-col items-center justify-center bg-bg_BackBtnBg border border-backBtn undefined">
                                        <span
                                          id="oddBtnPrice"
                                          className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full text-text_OddValue leading-5 text-[12px] font-semibold"
                                        >
                                          {
                                            data[keys]?.[1]?.ex
                                              ?.availableToBack[0]?.price
                                          }
                                        </span>
                                        <span
                                          id="oddBtnSize"
                                          className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full text-[10px] text-text_OddValue leading-3 text-center whitespace-normal font-normal"
                                        >
                                          <span className="w-max break-all truncate text-[9px]">
                                            {
                                              data[keys]?.[1]?.ex
                                                ?.availableToBack[0]?.size
                                            }
                                          </span>
                                        </span>
                                      </div>
                                    </span>
                                  </span>
                                </span>
                                <span className="grid grid-cols-12 grid-flow-col overflow-auto h-full min-w-[100%]">
                                  <span className="col-span-4">
                                    <span className="flex items-center justify-center w-full h-full p-[1px] md:p-[2px] overflow-hidden">
                                      <div className="overflow-hidden relative opacity-100 cursor-pointer active:scale-95 w-full h-full px-1 py-[1px] rounded-sm flex flex-col items-center justify-center bg-bg_LayBtnBg border border-layBtn undefined">
                                        <span
                                          id="oddBtnPrice"
                                          className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full text-text_OddValue leading-5 text-[12px] font-semibold"
                                        >
                                          {
                                            data[keys]?.[0]?.ex
                                              ?.availableToLay[0]?.price
                                          }
                                        </span>
                                        <span
                                          id="oddBtnSize"
                                          className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full text-[10px] text-text_OddValue leading-3 text-center whitespace-normal font-normal"
                                        >
                                          <span className="w-max break-all truncate text-[9px]">
                                            {
                                              data[keys]?.[0]?.ex
                                                ?.availableToLay[0]?.size
                                            }
                                          </span>
                                        </span>
                                      </div>
                                    </span>
                                  </span>
                                  <span className="col-span-4">
                                    <span className="flex items-center justify-center w-full h-full p-[1px] md:p-[2px] overflow-hidden">
                                      <div className="overflow-hidden relative opacity-100 cursor-pointer active:scale-95 w-full h-full px-1 py-[1px] rounded-sm flex flex-col items-center justify-center bg-bg_LayBtnBg border border-layBtn undefined">
                                        <span
                                          id="oddBtnPrice"
                                          className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full text-text_OddValue leading-5 text-[12px] font-semibold"
                                        >
                                          {
                                            data[keys]?.[2]?.ex
                                              ?.availableToLay[0]?.price
                                          }
                                        </span>
                                        <span
                                          id="oddBtnSize"
                                          className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full text-[10px] text-text_OddValue leading-3 text-center whitespace-normal font-normal"
                                        >
                                          <span className="w-max break-all truncate text-[9px]">
                                            {
                                              data[keys]?.[2]?.ex
                                                ?.availableToLay[0]?.size
                                            }
                                          </span>
                                        </span>
                                      </div>
                                    </span>
                                  </span>
                                  <span className="col-span-4">
                                    <span className="flex items-center justify-center w-full h-full p-[1px] md:p-[2px] overflow-hidden">
                                      <div className="overflow-hidden relative opacity-100 cursor-pointer active:scale-95 w-full h-full px-1 py-[1px] rounded-sm flex flex-col items-center justify-center bg-bg_LayBtnBg border border-layBtn undefined">
                                        <span
                                          id="oddBtnPrice"
                                          className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full text-text_OddValue leading-5 text-[12px]  font-semibold"
                                        >
                                          {
                                            data[keys]?.[1]?.ex
                                              ?.availableToLay[0]?.price
                                          }
                                        </span>
                                        <span
                                          id="oddBtnSize"
                                          className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full text-[10px] text-text_OddValue leading-3 text-center whitespace-normal font-normal"
                                        >
                                          <span className="w-max break-all truncate text-[9px]">
                                            {
                                              data[keys]?.[1]?.ex
                                                ?.availableToLay[0]?.size
                                            }
                                          </span>
                                        </span>
                                      </div>
                                    </span>
                                  </span>
                                </span>
                              </div>
                            </span>
                          )}
                        </>
                      );
                    })}

                  {/* <div className="col-span-6 h-12 lg:col-span-5 grid grid-cols-7 border-t border-borderColorOfMarket">
                    <span
                      id="inPlayTime"
                      className="flex text-selection-none items-center justify-center flex-col col-span-2 pl-[2px] pr-[2px] min-h-9 active:scale-[94%] transition-all ease-in-out duration-100"
                    >
                      <span
                        id="inPlayTime"
                        className="flex items-center justify-center flex-col pl-[1px] pr-[1px]"
                      >
                        <span className="text-text_InPlayEventsScoreAndTime text-[9px] font-medium text-ellipsis overflow-hidden w-full text-center">
                          11 Ov
                        </span>
                        <span className="text-text_InPlayEventsScoreAndTime text-[6px] xs:text-[9px] font-medium w-full text-center">
                          Tgt 154
                        </span>
                        <span className="text-text_InPlayEventsScoreAndTime text-[9px] font-medium w-full text-center">
                          80/3
                        </span>
                      </span>
                    </span>
                    <span
                      id="inPlayTeamName"
                      className="text-selection-none flex items-center justify-start col-span-5 px-1 relative border-l border-r border-borderColorOfMarket active:scale-[94%] transition-all ease-in-out duration-100"
                    >
                      <span className="flex flex-col items-center justify-start w-[87%]">
                        <span className="text-selection-none w-full flex items-center justify-start">
                          <span className="w-[5px] h-[5px] p-[1px] mr-[2px]"></span>
                          <span className="text-[11px] font-bold text-text_Ternary truncate sm:text-xs md:text-sm">
                            Hong Kong
                          </span>
                        </span>
                        <span className="text-selection-none w-full flex items-center justify-start">
                          <span className="w-[5px] h-[5px] p-[1px] mr-[2px]"></span>
                          <span className="text-[11px] font-bold text-text_Ternary truncate sm:text-xs md:text-sm">
                            Malaysia
                          </span>
                        </span>
                      </span>
                      <span className="absolute top-0.5 right-0.5">
                        <svg
                          width="13"
                          height="11"
                          viewBox="0 0 13 11"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M11.8182 0H1.18182C0.525909 0 0 0.543889 0 1.22222V8.55556C0 9.22778 0.525909 9.77778 1.18182 9.77778H4.13636V11H8.86364V9.77778H11.8182C12.4682 9.77778 12.9941 9.22778 12.9941 8.55556L13 1.22222C13 0.543889 12.4682 0 11.8182 0ZM11.8182 8.55556H1.18182V1.22222H11.8182V8.55556ZM8.86364 4.88889L4.72727 7.33333V2.44444L8.86364 4.88889Z"
                            fill="#257B24"
                          ></path>
                        </svg>
                      </span>
                    </span>
                  </div>
                  <span className="col-span-6 h-12 lg:col-span-7 w-full overflow-auto border-t border-borderColorOfMarket">
                    <div
                      id="hideScrollBar"
                      className="w-full overflow-x-auto flex h-full sm:px-[2px]"
                    >
                      <span className="grid grid-cols-12 grid-flow-col overflow-auto h-full min-w-[100%]">
                        <span className="col-span-4">
                          <span className="flex items-center justify-center w-full h-full p-[1px] md:p-[2px] overflow-hidden">
                            <div className="overflow-hidden relative opacity-50 cursor-not-allowed w-full h-full px-1 py-[1px] rounded-sm flex flex-col items-center justify-center bg-bg_BackBtnBg border border-backBtn undefined">
                              <span
                                id="oddBtnPrice"
                                className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full text-text_OddValue leading-5 text-sm md:text-[15px] font-semibold"
                              >
                                1.53
                              </span>
                              <span
                                id="oddBtnSize"
                                className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full text-[10px] text-text_OddValue leading-3 text-center whitespace-normal font-normal"
                              >
                                <span className="w-max break-all truncate">
                                  3
                                </span>
                              </span>
                            </div>
                          </span>
                        </span>
                        <span className="col-span-4">
                          <span className="flex items-center justify-center w-full h-full p-[1px] md:p-[2px] overflow-hidden">
                            <div className="overflow-hidden relative opacity-50 cursor-not-allowed w-full h-full px-1 py-[1px] rounded-sm flex flex-col items-center justify-center bg-bg_BackBtnBg border border-backBtn undefined">
                              <span
                                id="oddBtnPrice"
                                className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full text-text_OddValue leading-5 text-sm md:text-[15px] font-semibold"
                              >
                                -
                              </span>
                              <span
                                id="oddBtnSize"
                                className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full text-[10px] text-text_OddValue leading-3 text-center whitespace-normal font-normal"
                              >
                                <span className="w-max break-all truncate"></span>
                              </span>
                            </div>{" "}
                          </span>
                        </span>
                        <span className="col-span-4">
                          <span className="flex items-center justify-center w-full h-full p-[1px] md:p-[2px] overflow-hidden">
                            <div className="overflow-hidden relative opacity-50 cursor-not-allowed w-full h-full px-1 py-[1px] rounded-sm flex flex-col items-center justify-center bg-bg_BackBtnBg border border-backBtn undefined">
                              <span
                                id="oddBtnPrice"
                                className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full text-text_OddValue leading-5 text-sm md:text-[15px] font-semibold"
                              >
                                2.8
                              </span>
                              <span
                                id="oddBtnSize"
                                className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full text-[10px] text-text_OddValue leading-3 text-center whitespace-normal font-normal"
                              >
                                <span className="w-max break-all truncate">
                                  108
                                </span>
                              </span>
                            </div>
                          </span>
                        </span>
                      </span>
                      <span className="grid grid-cols-12 grid-flow-col overflow-auto h-full min-w-[100%]">
                        <span className="col-span-4">
                          <span className="flex items-center justify-center w-full h-full p-[1px] md:p-[2px] overflow-hidden">
                            <div className="overflow-hidden relative opacity-50 cursor-not-allowed w-full h-full px-1 py-[1px] rounded-sm flex flex-col items-center justify-center bg-bg_LayBtnBg border border-layBtn undefined">
                              <span
                                id="oddBtnPrice"
                                className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full text-text_OddValue leading-5 text-sm md:text-[15px] font-semibold"
                              >
                                1.55
                              </span>
                              <span
                                id="oddBtnSize"
                                className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full text-[10px] text-text_OddValue leading-3 text-center whitespace-normal font-normal"
                              >
                                <span className="w-max break-all truncate">
                                  128
                                </span>
                              </span>
                            </div>
                          </span>
                        </span>
                        <span className="col-span-4">
                          <span className="flex items-center justify-center w-full h-full p-[1px] md:p-[2px] overflow-hidden">
                            <div className="overflow-hidden relative opacity-50 cursor-not-allowed w-full h-full px-1 py-[1px] rounded-sm flex flex-col items-center justify-center bg-bg_LayBtnBg border border-layBtn undefined">
                              <span
                                id="oddBtnPrice"
                                className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full text-text_OddValue leading-5 text-sm md:text-[15px] font-semibold"
                              >
                                -
                              </span>
                              <span
                                id="oddBtnSize"
                                className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full text-[10px] text-text_OddValue leading-3 text-center whitespace-normal font-normal"
                              >
                                <span className="w-max break-all truncate"></span>
                              </span>
                            </div>{" "}
                          </span>
                        </span>
                        <span className="col-span-4">
                          <span className="flex items-center justify-center w-full h-full p-[1px] md:p-[2px] overflow-hidden">
                            <div className="overflow-hidden relative opacity-50 cursor-not-allowed w-full h-full px-1 py-[1px] rounded-sm flex flex-col items-center justify-center bg-bg_LayBtnBg border border-layBtn undefined">
                              <span
                                id="oddBtnPrice"
                                className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full text-text_OddValue leading-5 text-sm md:text-[15px] font-semibold"
                              >
                                2.9
                              </span>
                              <span
                                id="oddBtnSize"
                                className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full text-[10px] text-text_OddValue leading-3 text-center whitespace-normal font-normal"
                              >
                                <span className="w-max break-all truncate">
                                  2
                                </span>
                              </span>
                            </div>
                          </span>
                        </span>
                      </span>
                    </div>
                  </span>
                  <div className="col-span-6 h-12 lg:col-span-5 grid grid-cols-7 border-t border-borderColorOfMarket border-b">
                    <span
                      id="inPlayTime"
                      className="flex items-center justify-center flex-col col-span-2 pl-[1px] pr-[1px] active:scale-[94%] transition-all ease-in-out duration-100"
                    >
                      <span className="text-text_InPlayEventsScoreAndTime text-[6px] xs:text-[8px] md:text-[10px] font-semibold w-full text-center">
                        Today
                      </span>
                      <span className="text-text_InPlayEventsScoreAndTime text-[6px] xs:text-[8px] md:text-[10px] font-semibold w-full text-center uppercase">
                        09:30 AM
                      </span>
                    </span>
                    <span
                      id="inPlayTeamName"
                      className="text-selection-none flex items-center justify-start col-span-5 px-1 relative border-l border-r border-borderColorOfMarket active:scale-[94%] transition-all ease-in-out duration-100"
                    >
                      <span className="flex flex-col items-center justify-start w-[92%] md:w-[89%] mr-1">
                        <span className="text-selection-none w-full flex items-center justify-start">
                          <span className="w-[5px] h-[5px] p-[1px] mr-[2px]"></span>
                          <span className="text-[11px] font-bold text-text_Ternary truncate sm:text-xs md:text-sm">
                            St Lucia Kings Srl
                          </span>
                        </span>
                        <span className="text-selection-none w-full flex items-center justify-start">
                          <span className="w-[5px] h-[5px] p-[1px] mr-[2px]"></span>
                          <span className="text-[11px] font-bold text-text_Ternary truncate sm:text-xs md:text-sm">
                            St Kitts And Nevis Patriots Srl
                          </span>
                        </span>
                      </span>
                    </span>
                  </div>
                  <span className="col-span-6 h-12 lg:col-span-7 w-full overflow-auto border-t border-borderColorOfMarket border-b">
                    <span className="w-full flex items-center px-[1px] md:px-[3px] justify-center h-full">
                      <span className="text-xs text-center w-full h-full flex items-center bg-bg_SuspendedBgColor text-text_SuspendedFontColor font-bold justify-center rounded-sm">
                        SUSPENDED
                      </span>
                    </span>
                  </span> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleGroup;
