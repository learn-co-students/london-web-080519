const API_ENDPOINT = "http://localhost:3000";
const STOCKS_URL = `${API_ENDPOINT}/stocks`;

const getStocks = () => fetch(STOCKS_URL).then(res => res.json());

const API = {
  getStocks: getStocks
};

export default API;
