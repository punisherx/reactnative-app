import {stringLiteral, tSTypeLiteral} from '@babel/types';
import React, {useState} from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import Button from '../Button';
import style from './ProductSearch.style';
interface Props {
  value: string;
  onChange: Function;
}

const ProductSearch = (props: Props) => {
  const [state, setState] = useState('');
  return (
    <View style={stil.container}>
      <TextInput
        placeholder="Recherche"
        style={stil.searchInput}
        value={props.value}
        onChangeText={textValue => {
          console.log(textValue);
          props.onChange(textValue);
        }}
      />
    </View>
  );
};

const stil = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  searchInput: {
    flexGrow: 1,
    borderWidth: 1,
  },
  searchButton: {
    width: 45,
  },
});
export default ProductSearch;
