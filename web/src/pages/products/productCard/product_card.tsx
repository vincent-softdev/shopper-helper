import { IProduct } from "../../../interfaces/iproduct";

interface Props {
  product: IProduct;
}

const ProductCard: React.FC<Props> = ({ product }) => (
  <div className="product-card">
    <img src={product.image} alt={product.title} />
    <h3>{product.title}</h3>
    <p>{product.description}</p>
  </div>
);

export default ProductCard;