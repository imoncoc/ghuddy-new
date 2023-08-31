import { createBrowserRouter } from "react-router-dom";

import App from "../App";
import Header from "../components/header/Header";
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
        path: "/reactQull",
        element: <ReactQull></ReactQull>,
      },
      
    ],
  },
]);