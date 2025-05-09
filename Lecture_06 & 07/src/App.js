import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Cart from "./components/Cart";
import Error from "./components/Error";
import RestuarantMenu from "./components/RestuarantMenu";
import {createBrowserRouter , RouterProvider , Outlet} from "react-router-dom"

const root = ReactDOM.createRoot(document.getElementById("root"));

const App = () => {
  console.log("App rendered")
  return (
    <div className="app">
      <Header />
      <Outlet />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children : [
      {
        path : "/",
        element : <Body/>
      },
      {
        path: "/about",  
        element: <About />,
      },
      {
        path: "/contact",  
        element: <Contact />
      },
      {
        path: "/cart",  
        element: <Cart />
      },
      {
        path: "/restuarant/:id",
        element: <RestuarantMenu/>
      }
    ],
    errorElement : <Error />
  },
  
]);


root.render(<RouterProvider router ={appRouter} />);
