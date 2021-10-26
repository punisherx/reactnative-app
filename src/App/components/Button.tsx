import React, {ReactElement, ReactNode} from 'react';
import {StyleSheet, View} from 'react-native';
import PropTypes from 'prop-types';
interface Props {
  children: ReactElement | Array<ReactElement | ReactNode> | String;
  bgColor?: string;
}
const Button: React.FC<Props> = props => {
  console.log(props);
  return (
    <View
      style={{
        ...styles.container,
        ...styles.moreContainer,
        backgroundColor: props.bgColor,
      }}>
      {props.children}
    </View>
  );
};
Button.propTypes = {
  children: PropTypes.any.isRequired,
  bgColor: PropTypes.string.isRequired,
};
Button.defaultProps = {
  bgColor: 'skyBlue',
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f0a',
    padding: 10,
    marginTop: 5,
    borderRadius: 5,
  },
  textContent: {
    color: 'white',
    textTransform: 'uppercase',
    textAlign: 'center',
    fontSize: 20,
  },
  moreContainer: {
    width: '80%',
    marginLeft: '10%',
  },
});
export default Button;
