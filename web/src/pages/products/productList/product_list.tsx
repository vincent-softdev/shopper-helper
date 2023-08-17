import { useState, useEffect } from 'react';
import { IProduct, IProductService } from '../../../interfaces/iproduct';
import ProductCard from '../../../common/components/productCard/product_card';
import './product_list.css'
import PageController from '../../../common/components/pageController/page_controller';
import { Button, Typography } from '@mui/material';
import {storeIcons} from '../../../data/icons'

interface Props {
  productService: IProductService;
}

const ProductList: React.FC<Props> = ({ productService }) => {
  const [allProducts, setAllProducts] = useState<IProduct[]>([]);
  const [displayProducts, setDisplayProducts] = useState<IProduct[]>([]);
  const [page, setPage] = useState(1);
  const pageSize = 12;
  const totalPages = Math.ceil(allProducts.length / pageSize);

  useEffect(() => {
    const loadProducts = async () => {
      const fetchedProducts = await productService.fetchProducts();
      setAllProducts(fetchedProducts);
      setDisplayProducts(fetchedProducts.slice(0, pageSize));
    };
    
    loadProducts();
  }, [productService]);

  const handlePageChange = (newPage: number) => {
    const startIndex = (newPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    setDisplayProducts(allProducts.slice(startIndex, endIndex));
    setPage(newPage);
  }

  const cardBodyDetail = (props: IProduct) : JSX.Element => {
    return (
      <div>
        <Typography className='card-body-detail-price' variant="body2" color="text.secondary">
            {props.price}
        </Typography>
        <div className='card-body-detail__store'>
          <div className='store__store-icon store__store-icon-red margin-right-10' title='Coles'>
            <img src={storeIcons.Coles} />
          </div>
          <div className='store__store-icon store__store-icon-green store__store-icon-white-background' title='Woolworths'>
            <img src={storeIcons.Woolies} />
          </div>
        </div>
        <Button title='Add to Card &#013;For price comparison and distance measure' variant="outlined" className='add-to-cart' onClick={()=>{}}>Add to Cart</Button>
      </div>
    );
  }

  return (
    <div className='product-list--container'>
      <div className="product-list">
        {displayProducts.map(product => (
          <div key={product.id} className='product-card--container'>
            <ProductCard type='product' product={product} detail={cardBodyDetail(product)} extraDetail={<></>}/>
          </div>
        ))}
      </div>
      <div className='product-list__page-controller'>
        <PageController 
          currentPage={page}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
};

export default ProductList;