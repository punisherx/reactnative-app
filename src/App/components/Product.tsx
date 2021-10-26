import React, {ReactElement, ReactNode} from 'react';
import {Image, StyleSheet, Text, TouchableHighlight, View} from 'react-native';
import PropTypes from 'prop-types';
interface Props {
  id: Number;
  name: String;
  prix: Number;
  img: String;
}
const Product: React.FC<Props> = props => {
  console.log(props);
  return (
    <TouchableHighlight
      activeOpacity={0.6}
      underlayColor="#DDDDDD"
      onPress={evt => {
        console.log(evt);
      }}>
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={{
            uri: props.img,
          }}
        />
        <Text style={styles.title}>{props.name}</Text>
        <Text style={styles.price}>{props.prix} &euro;</Text>
      </View>
    </TouchableHighlight>
  );
};
Product.propTypes = {
};
Product.defaultProps = {
  img: 'https://commons.wikimedia.org/wiki/Category:Image_placeholders#/media/File:Missing-image-232x150.png',
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#eee',
    padding: 10,
    margin: 5,
    borderRadius: 5,
    minWidth: 150,
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 100,
  },
  title: {
    fontSize: 20,
    fontWeight: '800',
  },
  price: {
    fontSize: 20,
    fontWeight: '400',
  },
});
export default Product;
