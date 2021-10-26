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
import {IProduct} from '../../model/Products';
import ProductList from './components/ProductList/ProductList';
import ProductSearch from './components/ProductSearch/ProductSearch';
import {ADR_REST, RESSOURCES_NAME} from './config/config';
const initialState: Array<IProduct> = [];

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
          return e.name
            .toLocaleLowerCase()
            .includes(search.toLocaleLowerCase());
        }),
      );
    }
  }, [search, products]);

  useEffect(() => {
    fetch(`${ADR_REST}${RESSOURCES_NAME.products}`)
      .then(f => f.json())
      .then(res => setProducts(res));
  }, []);

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
