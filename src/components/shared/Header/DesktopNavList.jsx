import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setGroupType } from "../../../redux/features/stateSlice";
import { languageValue } from "../../../utils/language";
import useLanguage from "../../../hooks/useLanguage";
import { LanguageKey } from "../../../const";

const DesktopNavList = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { valueByLanguage } = useLanguage();
  return (
    <div className="hidden lg:block">
      <div className="flex w-full overflow-y-auto no-scrollbar gap-3 bg-bg_Quaternary items-center p-1 justify-center  headerDeskNav-content__list">
        <button
          onClick={() => {
            navigate("/");
            dispatch(setGroupType(4));
          }}
          className="text-xs cursor-pointer uppercase    rounded-full text-nowrap whitespace-nowrap font-semibold   w-max px-3  py-1 text-text_HeaderDeskNavMenu list-item relative"
        >
          <span className="font font-lato text-[12px]">
            {" "}
            {languageValue(valueByLanguage, LanguageKey.CRICKET)}
          </span>
        </button>
        <button
          onClick={() => {
            navigate("/");
            dispatch(setGroupType(1));
          }}
          className="text-xs cursor-pointer uppercase    rounded-full text-nowrap whitespace-nowrap font-semibold   w-max px-3  py-1 text-text_HeaderDeskNavMenu list-item relative"
        >
          <span className="font font-lato text-[12px]">
            {" "}
            {languageValue(valueByLanguage, LanguageKey.FOOTBALL)}
          </span>
        </button>

        <button
          onClick={() => {
            navigate("/");
            dispatch(setGroupType(2));
          }}
          className="text-xs cursor-pointer uppercase    rounded-full text-nowrap whitespace-nowrap font-semibold   w-max px-3  py-1 text-text_HeaderDeskNavMenu list-item relative"
        >
          <span className="font font-lato text-[12px]">
            {languageValue(valueByLanguage, LanguageKey.TENNIS)}
          </span>
        </button>
        <button
          onClick={() => {
            navigate("/");
            dispatch(setGroupType(5));
          }}
          className="text-xs cursor-pointer uppercase    rounded-full text-nowrap whitespace-nowrap font-semibold   w-max px-3  py-1 text-text_HeaderDeskNavMenu list-item relative"
        >
          <span className="font font-lato text-[12px]">
            {languageValue(valueByLanguage, LanguageKey.KABADDI)}
          </span>
        </button>
        <button
          onClick={() => {
            navigate("/horse-racing");
          }}
          className="text-xs cursor-pointer uppercase    rounded-full text-nowrap whitespace-nowrap font-semibold   w-max px-3  py-1 text-text_HeaderDeskNavMenu list-item relative"
        >
          <span className="font font-lato text-[12px]">
            {languageValue(valueByLanguage, LanguageKey.HORSE)}
          </span>
        </button>
        <button
          onClick={() => {
            navigate("/greyhound-racing");
          }}
          className="text-xs cursor-pointer uppercase    rounded-full text-nowrap whitespace-nowrap font-semibold   w-max px-3  py-1 text-text_HeaderDeskNavMenu list-item relative"
        >
          <span className="font font-lato text-[12px]">
            {languageValue(valueByLanguage, LanguageKey.GREYHOUND)}
          </span>
        </button>
        <button
          onClick={() => {
            navigate("/indian-card-games");
          }}
          className="text-xs cursor-pointer uppercase    rounded-full text-nowrap whitespace-nowrap font-semibold   w-max px-3  py-1 text-text_HeaderDeskNavMenu  list-item relative"
        >
          <span className="font font-lato text-[12px]">Indian Card Games</span>
        </button>
        <button
          onClick={() => {
            navigate("/live-casino");
          }}
          className="text-xs cursor-pointer uppercase    rounded-full text-nowrap whitespace-nowrap font-semibold   w-max px-3  py-1 text-text_HeaderDeskNavMenu  list-item relative"
        >
          <span className="font font-lato text-[12px]">
            {languageValue(valueByLanguage, LanguageKey.LIVE_CASINO)}
          </span>
        </button>
        <button
          onClick={() => {
            navigate("/slots");
          }}
          className="text-xs cursor-pointer uppercase    rounded-full text-nowrap whitespace-nowrap font-semibold   w-max px-3  py-1 text-text_HeaderDeskNavMenu  list-item relative"
        >
          <span className="font font-lato text-[12px]">Slots Games</span>
        </button>
      </div>
    </div>
  );
};

export default DesktopNavList;
