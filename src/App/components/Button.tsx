import React, {ReactElement, ReactNode} from 'react';
import {StyleSheet, TouchableHighlight, View} from 'react-native';
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
        props.onMyButtonPressedAction('toto');
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
  bgColor: PropTypes.string.isRequired,
};
Button.defaultProps = {
  bgColor: '#0af',
};
const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  textContent: {
    color: 'white',
    textTransform: 'uppercase',
    textAlign: 'center',
    fontSize: 20,
  },
  moreContainer: {
    // width: '80%',
    // marginLeft: '10%',
  },
});
export default Button;
