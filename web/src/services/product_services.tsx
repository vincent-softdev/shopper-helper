import { IProduct, IProductService } from "../interfaces/iproduct";
import { AxiosResponse } from 'axios';
import http from '../common/services/common';  // adjust the import path according to your project structure
import {APP_CONFIG} from '../configs/server'

const fetchProducts = async (): Promise<IProduct[]> => {
  if (APP_CONFIG.CONGIS.MODE === 'test') {
    return Array.from({ length: 30 }, (_, i) => ({
      id: i,
      name: 'sample',
      image: '/images/sample_product.jpg',
      price: '10 aud',
    }));
  }

  const response = await http.get(APP_CONFIG.API_CONFIGS.API_LOAD_PRODUCTS as string);
  console.log(response.data);
  return response.data;
}

export const ProductService = {
  fetchProducts,
};