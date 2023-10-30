import { createBrowserRouter, useRouteError } from "react-router-dom";
import App from "../App";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "home",
        element: <div>Hello world!</div>,
      },
      {
        path: "about",
        element: <div>Hello world!</div>,
      },
      {
        path: "project",
        element: <div>Hello world!</div>,
      },
      {
        path: "working",
        element: <div>Hello world!</div>,
      },
      {
        path: "education",
        element: <div>Hello world!</div>,
      },
      {
        path: "certificate",
        element: <div>Hello world!</div>,
      },
      {
        path: "contacts",
        element: <div>Hello world!</div>,
      },
    ],
  },
]);

function ErrorPage() {
  const error: any = useRouteError();
  console.error(error);

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
