import React, { useState } from 'react';

export const ProductsContext = React.createContext({
  products: [],
  toggleFavorite: () => {},
});

const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([
    {
      id: 'p1',
      title: 'Red Scarf',
      description: 'A pretty red scarf.',
      isFavorite: false,
    },
    {
      id: 'p2',
      title: 'Blue T-Shirt',
      description: 'A pretty blue t-shirt.',
      isFavorite: false,
    },
    {
      id: 'p3',
      title: 'Green Trousers',
      description: 'A pair of lightly green trousers.',
      isFavorite: false,
    },
    {
      id: 'p4',
      title: 'Orange Hat',
      description: 'Street style! An orange hat.',
      isFavorite: false,
    },
  ]);

  const toggleFavorite = (productId) => {
    setProducts((currentProducts) => {
      const productIndex = currentProducts.findIndex((p) => p.id === productId);
      const newFavoriteStatus = !currentProducts[productIndex].isFavorite;
      const updatedProducts = [...currentProducts];
      updatedProducts[productIndex].isFavorite = newFavoriteStatus;

      return updatedProducts;
    });
  };

  // whenever products changes, the provider gets a new value
  // and every child that listens to that provider will get that new value
  return (
    <ProductsContext.Provider value={{ products, toggleFavorite }}>
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsProvider;
