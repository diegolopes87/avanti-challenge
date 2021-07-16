import { useState } from "react";
import { Button } from "react-bootstrap";
import "./styles.scss";

const Card = ({ product, addItem }) => {
  console.log(product);
  const [quantity, setQuantity] = useState(0);
  const add = () => setQuantity(quantity + 1);

  const subtract = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };
  const handleClick = () => {
    addItem(product.id, {
      name: product.name,
      sellingPrice: product.sellingPrice,
      quantity,
    });
  };
  return (
    <>
      <div className="card-wrapper">
        <div className="card-image">
          <img src={product.imageURL} />
        </div>
        <div className="product-title">
          <span>{product.name}</span>
        </div>
        <div className="prices">
          <span className="best-price">{`R$${product.bestPrice}`}</span>
          <span className="selling-price">{`R$${product.sellingPrice}`}</span>
        </div>
        <div className="box-footer">
          <div className="counter">
            <button onClick={add}>
              <span>+</span>
            </button>
            <div className="quantity">{quantity}</div>
            <button onClick={subtract}>-</button>
          </div>
          <div className="add-button">
            {product.available > 0 ? (
              <Button variant="success" onClick={handleClick}>
                Adicionar
              </Button>
            ) : (
              <Button variant="secondary">Indisponível</Button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
