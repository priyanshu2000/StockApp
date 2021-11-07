import axios from 'axios';
import { Alert } from 'react-native';
import Config from 'react-native-config';

const handleSuccessResponse = response => {
  return response;
};

const handleErrorResponse = error => {
  Alert.alert(error);
  return Promise.reject(error);
};

const registerResponseIntercept = () => {
  axios.interceptors.response.use(handleSuccessResponse, error =>
    handleErrorResponse(error),
  );
};

export const configureAxios = () => {
  axios.defaults.baseURL = `${Config.BASE_URL}`;
  registerResponseIntercept();
};
