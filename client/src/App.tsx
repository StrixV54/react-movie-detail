import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import Layout from "./pages/Layout";
import { lazy, Suspense } from "react";
import Loading from "./pages/Loading.tsx";
import { getMoviesList } from "./api/api.tsx";
import ErrorPage from "./pages/ErrorPage.tsx";

const MyAppPage = lazy(() => import("./pages/MovieList.tsx"));
const GenrePage = lazy(() => import("./pages/Genres.tsx"));
const MoviePage = lazy(() => import("./pages/Movie.tsx"));

const getMovies = async () => {
  const result = await getMoviesList();
  return result;
};

const router = createBrowserRouter([
  {
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Navigate to="/my-app" />,
      },
      {
        path: "/my-app",
        loader: getMovies,
        element: <MyAppPage />,
      },
      {
        path: "/genres",
        loader: getMovies,
        element: <GenrePage />,
      },
      {
        path: "/movie/:id",
        element: <MoviePage />,
      },
    ],
  },
]);

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <RouterProvider router={router} />
    </Suspense>
  );
}

export default App;
