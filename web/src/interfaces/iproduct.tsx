export interface IProduct {
    id: number;
    title: string;
    image: string;
    description: string;
  }
  
  export interface IProductService {
    fetchProducts(): Promise<IProduct[]>;
  }