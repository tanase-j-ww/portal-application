
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Text, View, Linking, Button, Alert, TextInput } from 'react-native';
import MainScreen from './src/MainScreen'
import GoogleMapList from './src/GoogleMapList';
import GoogleChrome from './src/GoogleChrome';
import Expo from './src/expo';
import Portal from './src/portal';
import LINE from './src/LINE';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Main'>
        <Stack.Screen name="Main" component={MainScreen} />
        <Stack.Screen name="GoogleMapList" component={GoogleMapList} />
        <Stack.Screen name="GoogleChrome" component={GoogleChrome} />
        <Stack.Screen name="Expo" component={Expo} />
        <Stack.Screen name="portal" component={Portal} />
        <Stack.Screen name='LINE' component={LINE} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;