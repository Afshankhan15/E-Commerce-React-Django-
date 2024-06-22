import { createHashRouter, RouterProvider } from "react-router-dom";
// import Home from "./Pages/Home";
// import Login from "./Pages/Login";
import Protected from "./Components/Protected";
import Rough from "./Pages/Rough";
import SignIn from "./Pages/SignIn";
import Product from "./Pages/Product";
import Confirmation from "./Components/Confirmation";
import GetProduct from "./Pages/GetProduct";
import Register from "./Pages/Register";
import Contact from "./Pages/Contact";
const router = createHashRouter([
  {
    path: "/",
    element: <Rough />,
  },
  {
    path: "/sign",
    element: <SignIn />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/product",
    // element: <Product />,
    element: (
      <Protected>
        <Product />
      </Protected>
    ),
  },
  {
    path: "/getProduct",
    // element: <GetProduct />,
    element: (
      <Protected>
        <GetProduct />
      </Protected>
    ),
  },
  {
    path: "/confirm",
    element: <Confirmation />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

