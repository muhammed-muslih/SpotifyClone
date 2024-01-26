import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Layout, MobileLayout } from "./layout";
import Home from "./pages/Home";
import Playlist from "./pages/Playlist";
import { useMediaQuery } from "react-responsive";
function App() {
  const isSmallScreen = useMediaQuery({ maxWidth: "1024px" });
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
          path: "playlist/:id",
          element: <Playlist />,
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
