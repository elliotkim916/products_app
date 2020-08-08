import React, { useContext } from 'react';
// import { useSelector } from 'react-redux';

import ProductItem from '../components/Products/ProductItem';
import { useStore } from '../hooks-store/store';
// import { ProductsContext } from '../context/products-context';
import './Products.css';

const Products = (props) => {
  const [state, dispatch] = useStore();
  // const productList = useSelector(state => state.shop.products);
  // const { products } = useContext(ProductsContext);

  console.log('PRODUCTS RENDER!');
  return (
    <ul className="products-list">
      {state.products.map((prod) => (
        <ProductItem
          key={prod.id}
          id={prod.id}
          title={prod.title}
          description={prod.description}
          isFav={prod.isFavorite}
        />
      ))}
    </ul>
  );
};

export default Products;