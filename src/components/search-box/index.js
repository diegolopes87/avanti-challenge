import { Form, Button } from "react-bootstrap";
import "./styles.scss";

const SearchBox = () => {
  return (
    <>
      <div className="search-box-wrapper">
        <Form.Control type="text" placeholder="O que procura?" />
        <button className="search-button">OK</button>
      </div>
    </>
  );
};

export default SearchBox;
