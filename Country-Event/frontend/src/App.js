import React from "react";
import {
  BrowserRouter,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import HomePage from "./pages/Home";
import EventsPage, { loader as eventLoader } from "./pages/Events";
import EventDetailPage, {
  loader as eventDetailLoader,
} from "./pages/EventDetail";
import RootLayout from "./pages/Root";
import EventsRootLayout from "./components/EventsRoot";

const basename = "/Country";

// Creëer een browser-router voor het routeren.
const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <RootLayout />,
      children: [
        { index: true, element: <HomePage /> },
        {
          path: "events",
          element: <EventsRootLayout />,
          children: [
            {
              index: true,
              element: <EventsPage />,
            },
            {
              path: ":eventId",
              element: <EventDetailPage />,
            },
          ],
        },
      ],
    },
  ],
  { basename } // Voeg de basename toe als optie voor createBrowserRouter
);

function App() {
  // Render de applicatie met de geconfigureerde router.
  return <RouterProvider router={router} />;
}

export default App;
