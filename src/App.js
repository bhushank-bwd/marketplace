import { Provider } from "react-redux";
import "./App.css";
import store from "./utils/store";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import Body from "./components/Body";
import Account from "./components/Account";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import Product from "./components/Product";
import List from "./components/List";
import Footer from "./components/Footer";

function App() {
  return (
    <Provider store={store}>
      <Header />
      <RouterProvider router={appRouter}>
        <Body />
      </RouterProvider>
      <Footer />
    </Provider>
  );
}
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
  },
  {
    path: "/account",
    element: <Account />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
  {
    path: "/checkout",
    element: <Checkout />,
  },
  {
    path: "/product",
    element: <Product />,
  },
  {
    path: "list",
    element: <List />,
  },
]);
export default App;
