import Events from "../pages/mobile/Events/Events";
import Home from "../pages/mobile/Home/Home";
import IFrame from "../pages/mobile/IFrame/IFrame";
import OpenBets from "../pages/mobile/OpenBets/OpenBets";
import Transaction from "../pages/mobile/Transaction/Transaction";

export const mobileRoutes = [
  {
    index: true,
    element: <Home />,
  },
  {
    path: "/game-details/:eventTypeId/:eventId",
    element: <Events />,
  },
  {
    path: "/:route/:name/:gameId",
    element: <IFrame />,
  },
  {
    path: "/deposit-withdraw-report",
    element: <Transaction />,
  },
  {
    path: "/open-bets",
    element: <OpenBets />,
  },
];
