import { ProductService } from "../../services/product_services"
import ProductList from "./productList/product_list"

const ProductsPage = () => {
    return (
        <div>
            This is product page
            <ProductList productService={ProductService}/>
        </div>
    )
}

export default ProductsPage