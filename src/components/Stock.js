import React from "react";

function Stock({ stock, onStockClick }) {
  const { name, ticker, price } = stock;

  return (
    <div>
      <div className="card" onClick={() => onStockClick(stock)}>
        <div className="card-body">
          <h5 className="card-title">{name} ({ticker})</h5>
          <p className="card-text">${price}</p>
        </div>
      </div>
    </div>
  );
}

export default Stock;