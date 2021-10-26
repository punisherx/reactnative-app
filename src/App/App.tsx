/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {useState} from 'react';
import {
  Alert,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  View,
} from 'react-native';
import Button from './components/Button';

const App = () => {
  const [counter, setCounter] = useState(0);
  return (
    <SafeAreaView>
      <StatusBar />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View>
          <Text>Counter value : {counter}</Text>
        </View>
        <View>
          <Text>DEMAT Breizh</Text>
          <Button
            bgColor="tomato"
            onMyButtonPressedAction={() => {
              setCounter(counter + 1);
              console.log(counter);
            }}>
            <View>
              <Text>Add 1</Text>
            </View>
          </Button>
          <Button
            onMyButtonPressedAction={() => {
              setCounter(counter - 1);
              console.log(counter);
            }}>
            <View>
              <Text>Substract 1</Text>
            </View>
          </Button>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
