import React, { useContext } from 'react';
// import { useDispatch } from 'react-redux';

import Card from '../UI/Card';
import { useStore } from '../../hooks-store/store';
import './ProductItem.css';
// import { toggleFav } from '../../store/actions/products';
// import { ProductsContext } from '../../context/products-context';

const ProductItem = React.memo((props) => {
  const [state, dispatch] = useStore(false);
  // const { toggleFavorite } = useContext(ProductsContext);

  const toggleFavHandler = () => {
    // dispatch(toggleFav(props.id));
    // toggleFavorite(props.id);
    dispatch('TOGGLE_FAVORITE', props.id);
  };

  console.log('PRODUCT ITEM RENDER');
  return (
    <Card style={{ marginBottom: '1rem' }}>
      <div className="product-item">
        <h2 className={props.isFav ? 'is-fav' : ''}>{props.title}</h2>
        <p>{props.description}</p>
        <button
          className={!props.isFav ? 'button-outline' : ''}
          onClick={toggleFavHandler}
        >
          {props.isFav ? 'Un-Favorite' : 'Favorite'}
        </button>
      </div>
    </Card>
  );
});

export default ProductItem;
