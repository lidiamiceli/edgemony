import React from "react";
import NavBar from "./components/navbar/NavBar";
import Button from "./components/button/Button";
import Counter from "./components/counter/Counter";
import IconCart from "./components/icons/IconCart";
import ProductLightBox from "./components/product-lightbox/ProductLightBox";
import TitleDescription from "./components/TitleDescription";
import "./App.css";

function App() {
  return (
    <>
<NavBar />
      <div className="app-container">
        <div className="product-container">
          <ProductLightBox />
        </div>
        <div className="details-container">
          <TitleDescription />
          <div className="details-container"></div>
          <Counter />
          <Button>
            <IconCart fill="#000" />
          </Button>
        </div>
      </div>
    </>
  );
}

export default App;