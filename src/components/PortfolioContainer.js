import React from "react";
import Stock from "./Stock";

function PortfolioContainer({ portfolio, setPortfolio }) {
  const handleSellStock = (stock) => {
    setPortfolio((prevPortfolio) => prevPortfolio.filter((s) => s.id !== stock.id));
  };

  return (
    <div>
      <h2>My Portfolio</h2>
      {portfolio.map((stock) => (
        <Stock key={stock.id} stock={stock} onStockClick={handleSellStock} />
      ))}
    </div>
  );
}

export default PortfolioContainer;