import HomePage from "./pages/homePage/homePage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ListPage } from "./pages/listPage/ListPage";
import SinglePage from "./pages/singlePage/singlePage";
import Layout from "./pages/layout/Layout";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },

        {
          path: "/list",
          element: <ListPage />,
        },
        {
          path: "/:id",
          element: <SinglePage />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default App;
