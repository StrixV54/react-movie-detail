import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import Layout from "./pages/Layout.tsx";
import { lazy, Suspense } from "react";
import Loading from "./pages/Loading.tsx";
import ErrorPage from "./pages/ErrorPage.tsx";

const MyAppPage = lazy(() => import("./pages/MovieList.tsx"));
const GenrePage = lazy(() => import("./pages/Genres.tsx"));

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
        element: <MyAppPage />,
      },
      {
        path: "/genres",
        element: <GenrePage />,
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
