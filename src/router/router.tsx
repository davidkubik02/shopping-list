import { createBrowserRouter, Navigate } from "react-router-dom";
import App from "../App.tsx";
import {} from "react-router-dom";
import ShopingLists from "../pages/shoping-lists/ShopingLists.tsx";
import ListCreation from "../pages/list-creation/ListCreation.tsx";
import ListItem from "../pages/list-item/ListItem.tsx";
import NotFound from "../pages/not-found/NotFound.tsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Navigate to={"/shopping-list"} replace={true} /> },
      {
        path: "/shopping-list",
        element: <ShopingLists />,
      },
      {
        path: "/shopping-list/new",
        element: <ListCreation />,
      },
      {
        path: "/shopping-list/edit/:id",
        element: <ListCreation />,
      },
      {
        path: "/shopping-list/:id",
        element: <ListItem />,
      },
    ],
    errorElement: <NotFound />,
  },
]);

export default router;
