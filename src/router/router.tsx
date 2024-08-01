import { createBrowserRouter, Link } from "react-router-dom";
import App from "../App.tsx";
import {} from "react-router-dom";
import ShopingLists from "../pages/shoping-lists/ShopingLists.tsx";
import ListCreation from "../pages/list-creation/ListCreation.tsx";
import ListItem from "../pages/list-item/ListItem.tsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/shoping-lists",
        element: <ShopingLists />,
      },
      {
        path: "/shoping-lists/new",
        element: <ListCreation />,
      },
      {
        path: "/shoping-lists/edit/:id",
        element: <ListCreation />,
      },
      {
        path: "/shoping-lists/:id",
        element: <ListItem />,
      },
    ],
    errorElement: <Link to="/">404 Not Found</Link>,
  },
]);

export default router;
