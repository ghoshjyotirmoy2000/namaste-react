import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter , RouterProvider} from "react-router-dom"
import App from './App'
import About from './Components/About'
import Body from './Components/Body'
import Cart from './Components/Cart'
import Contact from './Components/Contact'
import Error from './Components/Error'

const appRouter = createBrowserRouter([
  {
    path : "/",
    element: <App/>,
    children : [
      {path : "/" , element : <Body/>},
      {path : "/about" , element : <About/>},
      {path : "/contact" , element : <Contact/>},
      {path : "/cart" , element : <Cart/>},
    ],
    errorElement : <Error/>
  }
])

createRoot(document.getElementById('root')).render(
    <RouterProvider router={appRouter} />
)
