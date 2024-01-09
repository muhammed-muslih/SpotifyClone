import { createBrowserRouter,RouterProvider } from "react-router-dom"
import SideBar from "./components/sidebar/SideBar"
function App() {
  const router = createBrowserRouter([{
    path:"/",
    element:<SideBar/>,
  }])

  return (
  <>
  <RouterProvider router={router}/>
  </>
  )
}

export default App
