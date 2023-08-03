import { IProduct, IProductService } from "../interfaces/iproduct";
import {APP_CONFIG} from '../configs/server'

const fetchProducts = async (): Promise<IProduct[]> => {
  if (APP_CONFIG.CONGIS.MODE === 'test') {
    return Array.from({ length: 30 }, (_, i) => ({
      id: i,
      title: 'sample',
      image: '/images/sample_product.jpg',
      description: 'description',
    }));
  }

  const response = await fetch(APP_CONFIG.API_CONFIGS.API_LOAD_PRODUCTS as string);
  return response.json();
}

export const ProductService = {
  fetchProducts,
};