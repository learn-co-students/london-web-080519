const API_ENDPOINT = "https://anapioficeandfire.com/api";
const HOUSE_URL = `${API_ENDPOINT}/houses/362`;

export const getHouseData = () => fetch(HOUSE_URL).then(res => res.json());

export const getDataAtAllUrls = urls =>
  Promise.all(urls.map(url => fetch(url).then(res => res.json())));

export default {
  getHouseData,
  getDataAtAllUrls
};
