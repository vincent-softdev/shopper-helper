export interface IProduct {
    id: number;
    name: string;
    price: string;
    image: string;
  }
  
  export interface IProductService {
    fetchProducts(): Promise<IProduct[]>;
  }