import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import JobGrid from "./pages/JobGrid";
import JobList from "./pages/JobList";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "job-grid",
        element: <JobGrid />,
      },
      {
        path: "job-list",
        element: <JobList />,
      },
    ],
  },
]);

export default routes;
