import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./styles/index.scss";
import MovieList from "./pages/MovieList.tsx";
import Genres from "./pages/Genres.tsx";
import Movie from "./pages/Movie.tsx";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
  // Navigate,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Navigate to="/my-app" />,
      },
      {
        path: "/my-app",
        element: <MovieList />,
      },
      {
        path: "/genres",
        element: <Genres />,
      },
      {
        path: "/movie/:id",
        element: <Movie />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
