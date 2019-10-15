import React, { Component } from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "../components/SearchBar";
import API from "../adapters/API";

class MainContainer extends Component {
  state = {
    stocks: [],
    portfolio: [],
    options: {
      filter: "All",
      sort: "Default"
    }
  };

  componentDidMount() {
    API.getStocks().then(stocks => this.setState({ stocks }));
  }

  filterStocks = (stocks, filterType) =>
    filterType === "All" ? stocks : stocks.filter(s => s.type === filterType);

  sortStocks = (stocks, sortType) =>
    sortType === "Default"
      ? stocks
      : [...stocks].sort((a, b) => {
          if (sortType === "Alphabetically")
            return a.name.localeCompare(b.name);
          if (sortType === "Price") return b.price - a.price;
        });

  changeFilterOption = filterOption => {
    this.setState({
      options: {
        ...this.state.options,
        filter: filterOption
      }
    });
  };
  changeSortOption = sortOption => {
    this.setState({
      options: {
        ...this.state.options,
        sort: sortOption
      }
    });
  };

  buyStock = stock => {
    this.setState({
      portfolio: [...this.state.portfolio, stock.id]
    });
  };
  removeStock = stockIndex => {
    this.setState({
      portfolio: this.state.portfolio.filter((sid, i) => i !== stockIndex)
    });
  };

  getPortfolioStocks = () =>
    this.state.portfolio.map(sId =>
      this.state.stocks.find(stock => stock.id === sId)
    );

  getUniqueStockTypes = () => {
    // const uniqueStockTypes = [];

    // this.state.stocks.forEach(stock => {
    //   if (!uniqueStockTypes.includes(stock.type)) {
    //     uniqueStockTypes.push(stock.type);
    //   }
    // });

    // return uniqueStockTypes;

    // return this.state.stocks.reduce((uniqueStockTypes, stock, i) => {
    //   if (!uniqueStockTypes.includes(stock.type)) {
    //     uniqueStockTypes.push(stock.type);
    //   }
    //   return uniqueStockTypes;
    // }, []);
    return [...new Set(this.state.stocks.map(s => s.type))];
  };

  render() {
    const filteredStocks = this.filterStocks(
      this.state.stocks,
      this.state.options.filter
    );

    const sortedStocks = this.sortStocks(
      filteredStocks,
      this.state.options.sort
    );

    const portfolio = this.getPortfolioStocks();

    return (
      <div>
        <SearchBar
          sortTypes={["Default", "Alphabetically", "Price"]}
          filterTypes={["All", ...this.getUniqueStockTypes()]}
          currentSortType={this.state.options.sort}
          changeSortType={this.changeSortOption}
          changeFilterType={this.changeFilterOption}
        />

        <div className="row">
          <div className="col-8">
            <StockContainer
              purchaseStock={this.buyStock}
              stocks={sortedStocks}
            />
          </div>
          <div className="col-4">
            <PortfolioContainer
              portfolio={portfolio}
              removeStock={this.removeStock}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default MainContainer;
