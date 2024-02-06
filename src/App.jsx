import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Layout, MobileLayout } from "./layout";
import { Home, Playlist, Login } from "./pages";
import { useMediaQuery } from "react-responsive";
import { UserProvider } from "./contexts/user";
import { useState } from "react";

function App() {
  const isSmallScreen = useMediaQuery({ maxWidth: "1024px" });
  const [isUserLiggedIn, setIsUserLoggedIn] = useState(
    JSON.parse(localStorage.getItem("user"))?.isLoggedIn ?? false
  );
  const [userId, setUserId] = useState(
    JSON.parse(localStorage.getItem("user"))?.userId ?? ""
  );
  const router = createBrowserRouter([
    {
      path: "/",
      element: isSmallScreen ? <MobileLayout /> : <Layout />,
      children: [
        {
          path: "",
          element: <Home />,
        },
        {
          path: "playlist/:playlist/:id",
          element: <Playlist />,
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
  ]);
  const handleUserLoggedIn = (bool) => {
    setIsUserLoggedIn(bool);
  };
  const handleUserId = (userId) => {
    setUserId(userId);
  };

  return (
    <>
      <UserProvider
        value={{ isUserLiggedIn, userId, handleUserId, handleUserLoggedIn }}
      >
        <RouterProvider router={router} />
      </UserProvider>
    </>
  );
}

export default App;
