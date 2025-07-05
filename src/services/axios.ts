import axios, { AxiosInstance } from 'axios';

// Create axios instance
export const apiClient: AxiosInstance = axios.create({
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor
apiClient.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

// Response interceptor
apiClient.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    console.error('API Error:', error.response?.data || error.message);
    return Promise.reject(error);
  },
);

// Generic API request function
export const sendAxiosRequest = async (parameters: {
  url: string;
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE';
  data?: any;
  params?: any;
  headers?: any;
}) => {
  const {
    url,
    method = 'GET',
    data,
    params,
    headers = {},
  } = parameters;

  try {
    const response = await apiClient({
      url,
      method,
      data,
      params,
      headers,
    });
    
    return response.data;
  } catch (error: any) {
    throw error;
  }
};