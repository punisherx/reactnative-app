/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {useEffect, useState} from 'react';
import {SafeAreaView, ScrollView, StatusBar, Text, View} from 'react-native';
import Button from './components/Button';
import Product from './components/Product';
import ProductList from './components/ProductList/ProductList';
import ProductSearch from './components/ProductSearch/ProductSearch';
const initialState: Array<Product> = [
  {
    id: 1,
    name: 'First product',
    prix: 10.0,
    img: 'https://picsum.photos/id/123/600/400',
  },
  {
    id: 2,
    name: 'Second product',
    prix: 3.5,
    img: 'https://picsum.photos/id/345/600/400',
  },
  {
    id: 3,
    name: 'Third product',
    prix: 25,
    img: 'https://picsum.photos/id/567/600/400',
  },
];

const App = () => {
  const [products, setProducts] = useState(initialState);
  const [filteredProduct, setFilteredProduct] = useState(initialState);
  const [search, setSearch] = useState('');
  useEffect(() => {
    console.log('Dans APP la search = ' + search);
    if (search.length === 0) {
      setFilteredProduct(products);
    } else {
      setFilteredProduct(
        products.filter(e => {
          return e.name.toLowerCase().includes(search.toLowerCase());
        }),
      );
    }
  }, [search, products]);
  return (
    <SafeAreaView>
      <StatusBar />
      <ProductSearch
        value={search}
        onChange={(text: string) => {
          setSearch(text);
        }}
      />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <ProductList products={filteredProduct} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
