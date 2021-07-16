import "./styles.scss";

const Title = ({ text = "" }) => {
  return (
    <>
      <div className="wrapper-title">
        <span className="title">{text}</span>
      </div>
    </>
  );
};

export default Title;
