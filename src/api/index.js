import axios from 'axios';
import Config from 'react-native-config';

export const fetchSymbolListItems = async param => {
  const url = `/query?function=SYMBOL_SEARCH&keywords=${param}&apikey=${Config.API_KEY}`;
  return await axios.get(url);
};
