import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Product from '../Product';
import style from './ProductList.style';
interface Props {
  products: Array<any>;
}

const ProductList = (props: Props) => {
  return (
    <View style={stil.listContainer}>
      {props.products.map((e, i) => (
        <Product
          id={e.id}
          name={e.name}
          prix={e.prix}
          img={e.img}
          key={'key-' + i}
        />
      ))}
    </View>
  );
};

const stil = StyleSheet.create({
  listContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});

export default ProductList;
