import axios, { AxiosRequestConfig, AxiosInstance, AxiosError } from 'axios';

const baseURL = process.env.REACT_APP_BASE_URL;

const instance: AxiosInstance = axios.create({ baseURL });

const onError = (error: Error | AxiosError) => {
  // handle error globally
  console.log(error);
};

async function client(endpoint: string, options?: AxiosRequestConfig) {
  const {
    data,
    params,
    headers: customHeader,
    ...customConfig
  } = options ?? {};
  const config = {
    url: endpoint,
    method: data ? 'POST' : 'GET',
    headers: {
      'Content-Type': data ? 'application/json' : undefined,
      timeout: 10000,
      ...customHeader,
    },
    data,
    params,
    ...customConfig,
  };
  return instance(config).catch(onError);
}
export default client;
