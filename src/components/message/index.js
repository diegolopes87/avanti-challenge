import { Button } from "react-bootstrap";
import "./styles.scss";

const Message = ({ msg = "" }) => {
  return (
    <>
      <div className="message-wrapper">
        <p>{msg}</p>
      </div>
    </>
  );
};

export default Message;
