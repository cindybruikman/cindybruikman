import { Outlet } from "react-router-dom";
import EventsNavigation from "../components/EventsNavigation";

function EventsRootLayout() {
  return (
    <>
      <Outlet />
    </>
  );
}

export default EventsRootLayout;
