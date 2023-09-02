import { createBrowserRouter } from "react-router-dom";

import App from "../App";
import Navbar from "../components/Navbar/Navbar";
import ReactQull from "../components/reactQull/ReactQull";



export const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <Navbar></Navbar>,
      },
      {
        path: "/reactQuills",
        element: <ReactQull></ReactQull>,
      },
    ],
  },
]);