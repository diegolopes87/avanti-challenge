import Header from "./components/header";
import Menu from "./components/menu";
import BannerSlider from "./components/banner-slider";
import Title from "./components/title";
import GridProducts from "./components/grid-products";
import Message from "./components/message";
import Footer from "./components/footer";

import DailyDeal from "./components/daily-deal";
import { addStorage } from "./utils/store";
import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";

import products from "./products.json";

const dailyDeals = products[0].items.slice(0, 2);
const regularProducts = products[0].items.slice(2, 5);

const msg =
  "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus, expedita! Neque, saepe. Doloribus quam, dolores, nemo, quae alias deserunt cumque pariatur dolore adipisci ullam repudiandae voluptatibus sed fugit sapiente architecto! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus, expedita! Neque, saepe. Doloribus quam, dolores, nemo, quae alias deserunt cumque pariatur dolore adipisci ullam repudiandae voluptatibus sed fugit sapiente architecto!";

function App() {
  const addItem = (id, item) => {
    addStorage(id, item);
  };

  return (
    <>
      <div className="app-container">
        <Header />
        <Menu />
        <BannerSlider />
        <Title text="Promoção do dia" />
        <DailyDeal addItem={addItem} products={dailyDeals} />
        <BannerSlider />
        <Title text="Os mais vendidos" />
        <GridProducts addItem={addItem} products={regularProducts} />
        <Message msg={msg} />
      </div>
      <Footer />
    </>
  );
}

export default App;
