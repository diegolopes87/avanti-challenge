import Card from "../card";
import "./styles.scss";

const DailyDeal = ({ addItem, products }) => {
  console.log(addItem);
  const renderProducts = () => {
    return products.map((product) => (
      <Card product={product} addItem={addItem} />
    ));
  };

  return (
    <>
      <div className="daily-deal-wrapper">
        <div className="daily-deal">
          <div className="daily-deal-banner">
            <img src={`https://picsum.photos/id/1027/350/300`} />
          </div>
          {renderProducts()}
        </div>
      </div>
    </>
  );
};

export default DailyDeal;
