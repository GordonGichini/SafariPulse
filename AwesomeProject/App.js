import React from "react";
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';


import Travel from './navigation/Travel';  

const Stack = createNativeStackNavigator();

class App extends React.Component {
  render() {
    return ( 
      <NavigationContainer>
        <Stack.Navigator> 
          <Stack.Screen
           name="Home"
           component={HomeScreen}
           options={{title: 'Welcome'}}
           />
            <Travel /> 
          <Stack.Screen name="Profile" component={ProfileScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
} 

export default createAppContainer(App);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})