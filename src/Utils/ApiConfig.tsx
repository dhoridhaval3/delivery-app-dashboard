import axios from 'axios';
const BASE_URL = 'https://randomuser.me/api/';

export const ApiRequest = async (config: any) => {
  const newConfig = {
    baseURL: BASE_URL,
    ...config,
  };
  const result = await axios(newConfig);
  // console.log('result', result);
  return result;
};
