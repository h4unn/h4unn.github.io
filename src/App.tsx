import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Layout from "./components/Layout/Layout";
import Home from "./pages/Home";

import "./styles/index.scss";
import "./styles/global.scss";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
