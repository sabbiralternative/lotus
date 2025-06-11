import Events from "../pages/desktop/Events/Events";
import Home from "../pages/desktop/Home/Home";
import IFrame from "../pages/desktop/IFrame/IFrame";
import OpenBets from "../pages/desktop/OpenBets/OpenBets";
import Transaction from "../pages/desktop/Transaction/Transaction";

export const desktopRoutes = [
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
