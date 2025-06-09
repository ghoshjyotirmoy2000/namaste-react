import { StrictMode  , lazy , Suspense } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import About from "./Components/About";
import Body from "./Components/Body";
import Cart from "./Components/Cart";
import Contact from "./Components/Contact";
import RestuarantMenu from "./Components/RestuarentMenu";
import Error from "./Components/Error";

//chunking
//code spliting
//dynamic bundling
//lazy loading
//om demand loading

const Grocery = lazy(() => import("./Components/Grocery"))

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Body /> },
      { path: "/about", element: <About /> },
      { path: "/contact", element: <Contact /> },
      { path: "/restuarant/:id", element: <RestuarantMenu /> },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Screen is Loading...</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
      { path: "/cart", element: <Cart /> },
    ],
    errorElement: <Error />,
  },
]);


createRoot(document.getElementById("root")).render(
  <RouterProvider router={appRouter} />
);
