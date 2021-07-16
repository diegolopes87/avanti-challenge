import AvantiLogo from "../../assets/avanti-logo.png";
import SearchBox from "../search-box";
import ShoppingCartButton from "../shopping-cart-button";
import "./styles.scss";

const Header = () => {
  return (
    <div className="header-wrapper">
      <img className="logo" src={AvantiLogo} />
      <SearchBox />
      <ShoppingCartButton />
    </div>
  );
};

export default Header;
