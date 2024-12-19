import { createBrowserRouter } from "react-router-dom";

import Layout from "@/pages/Layout";
import Home from "@/pages/Home";
import TodoList from "@/pages/TodoList";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: '',
        element: <Home />
      },
      {
        path: "/todolist",
        element: <TodoList />,
      }
    ]
  },
]);

export default router;
