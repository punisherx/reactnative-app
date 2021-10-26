import React, {ReactElement, ReactNode} from 'react';
import {Alert, StyleSheet, TouchableHighlight, View} from 'react-native';
import PropTypes from 'prop-types';
interface Props {
  children: ReactElement | Array<ReactElement | ReactNode> | String;
  bgColor?: string;
  onMyButtonPressedAction: Function;
}
const Button: React.FC<Props> = props => {
  console.log(props);
  return (
    <TouchableHighlight
      activeOpacity={0.6}
      underlayColor="#DDDDDD"
      onPress={evt => {
        props.onMyButtonPressedAction('gugu');
        console.log(evt);
      }}>
      <View
        style={{
          ...styles.container,
          ...styles.moreContainer,
          backgroundColor: props.bgColor,
        }}>
        {props.children}
      </View>
    </TouchableHighlight>
  );
};
Button.propTypes = {
  children: PropTypes.any.isRequired,
  bgColor: PropTypes.string.isRequired,
};
Button.defaultProps = {
  bgColor: 'plum',
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
