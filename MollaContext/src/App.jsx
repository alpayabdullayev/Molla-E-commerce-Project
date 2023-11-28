import "./App.css";
import Home from "./pages/Home";
import "./assets/scss/main.scss";
import MainProvider from "./context/MainContext";
import BasketProvider from "./context/BasketContext";
import WishlistProvider from "./context/WishlistContext";
import DarkModeProvider from "./context/DarkModeContext";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./layout";
import ProductDetail from "./pages/Detail";
import BasketSideBar from "./components/BasketSideBar";
import WishlistSideBar from "./components/WishlistSideBar";

function App() {
  return (
    <>
        <BasketSideBar/>
    <WishlistSideBar/>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home/>}/>
        <Route path="/product/:productId" element={<ProductDetail/>} />
      </Route>
    </Routes>
    </BrowserRouter>
  
    </>
  );
}

export default App;
