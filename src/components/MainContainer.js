import React from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer({ stocks, portfolio, setPortfolio, sortBy, setSortBy, filterBy, setFilterBy }) {
  return (
    <div>
      <SearchBar sortBy={sortBy} setSortBy={setSortBy} filterBy={filterBy} setFilterBy={setFilterBy} />
      <div className="row">
        <div className="col-8">
          <StockContainer stocks={stocks} setPortfolio={setPortfolio} />
        </div>
        <div className="col-4">
          <PortfolioContainer portfolio={portfolio} setPortfolio={setPortfolio} />
        </div>
      </div>
    </div>
  );
}

export default MainContainer;