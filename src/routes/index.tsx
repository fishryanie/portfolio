/** @format */

import App from "../App";
import { page } from "@pages";
import { ROUTER } from "@constants";
import { createBrowserRouter, useRouteError } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: ROUTER.HOME_PAGE,
        element: page[ROUTER.HOME_PAGE],
      },
      {
        path: ROUTER.ABOUT_PAGE,
        element: page[ROUTER.PROJECT_DETAIL_PAGE],
      },
      {
        path: ROUTER.PROJECT_PAGE,
        element: page[ROUTER.PROJECT_PAGE],
      },
      {
        path: ROUTER.PROJECT_DETAIL_PAGE,
        element: page[ROUTER.PROJECT_DETAIL_PAGE],
      },
      {
        path: ROUTER.WORK_EXP_PAGE,
        element: page[ROUTER.WORK_EXP_PAGE],
      },
      {
        path: ROUTER.EDUCATION_PAGE,
        element: page[ROUTER.EDUCATION_PAGE],
      },
      {
        path: ROUTER.SKILL_PAGE,
        element: page[ROUTER.SKILL_PAGE],
      },
      {
        path: ROUTER.CERTIFICATE_PAGE,
        element: page[ROUTER.CERTIFICATE_PAGE],
      },
      {
        path: ROUTER.CONTACT_PAGE,
        element: page[ROUTER.CONTACT_PAGE],
      },
    ],
  },
]);

function ErrorPage() {
  const error: any = useRouteError();

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}
