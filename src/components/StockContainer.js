import React from "react";
import Stock from "./Stock";

function StockContainer({ stocks, setPortfolio, sortBy, filterBy }) {
  const handleBuyStock = (stock) => {
    setPortfolio((prevPortfolio) => [...prevPortfolio, stock]);
  };

  // Sort stocks
  const sortedStocks = [...stocks].sort((a, b) => {
    if (sortBy === "Alphabetically") {
      return a.ticker.localeCompare(b.ticker);
    } else {
      return a.price - b.price;
    }
  });

  // Filter stocks
  const filteredStocks = filterBy === "All" 
    ? sortedStocks 
    : sortedStocks.filter(stock => stock.type === filterBy);

  return (
    <div>
      <h2>Stocks</h2>
      {filteredStocks.map((stock) => (
        <Stock key={stock.id} stock={stock} onStockClick={handleBuyStock} />
      ))}
    </div>
  );
}

export default StockContainer;