import { ApiRequest } from './ApiConfig';

export const loginUser = async (data) => {
  const config = {
    url: '',
    method: 'POST',
    data: data,
  };
  const result = await ApiRequest(config);
  console.log('resssssssssssssss', result);
  return result;
};
