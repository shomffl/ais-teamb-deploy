import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import AllEvent from "./components/page/AllEvent";
import Main from "./components/page/Main";
import Profile from "./components/page/Profile";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
  },
  {
    path: "profile",
    element: <Profile />,
  },
  {
    path: "allevent",
    element: <AllEvent />,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
