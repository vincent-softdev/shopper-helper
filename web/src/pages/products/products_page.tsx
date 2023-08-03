import { ProductService } from "../../services/product_services"
import ProductList from "./productList/product_list"
import './products_page.css'

const ProductsPage = () => {
    return (
        <div className="product-page__container">
            <div className="product-page__header">
                <p>This is product page</p>
            </div>
            <div className="product-page__product-list">
                <ProductList productService={ProductService}/>
            </div>
        </div>
    )
}

export default ProductsPage