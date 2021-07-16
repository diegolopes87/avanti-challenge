import { FaShoppingCart } from "react-icons/fa";
import { IconContext } from "react-icons/lib";

import { Button } from "react-bootstrap";

import "./styles.scss";

const ShoppingCartButton = () => {
  const count = localStorage.length;
  return (
    <>
      <div className="shopping-cart-wrapper">
        <button className="btn-shopping-cart">
          <div>
            <IconContext.Provider value={{ color: "#DF2F1A", size: "20px" }}>
              <FaShoppingCart />
            </IconContext.Provider>
          </div>
        </button>
        <div className="cart-counter">
          <span>{count}</span>
        </div>
      </div>
    </>
  );
};

export default ShoppingCartButton;
