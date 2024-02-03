import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Layout, MobileLayout } from "./layout";
import { Home,Playlist,Login } from "./pages";
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
          path: "playlist/:playlist/:id",
          element: <Playlist />,
        },
      ],
    },
    {
      path:"/login",
      element: <Login />,
    }
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
