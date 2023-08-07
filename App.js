import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import MainScreen from './src/MainScreen'
import GoogleMapList from './src/GoogleMapList';
import GoogleChrome from './src/GoogleChrome';
import Expo from './src/expo';
import Portal from './src/portal';
import LINE from './src/LINE';
import SubScreen from './src/SubScreen';
import GoogleMapFlatlist from './src/GoogleMapFlatList';

const Drawer = createDrawerNavigator();

function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName='Main'>
        <Drawer.Screen name="Main" component={MainScreen} options={{title:"ホーム"}}/>
        <Drawer.Screen name="Sub" component={SubScreen} options={{title:"サブページ"}}/>
        <Drawer.Screen name="GoogleMapList" component={GoogleMapList} options={{title:"Mapで色々"}}/>
        <Drawer.Screen name="GoogleMapFlatlist" component={GoogleMapFlatlist} options={{title:"Mapで色々2"}}/>
        <Drawer.Screen name="GoogleChrome" component={GoogleChrome} />
        <Drawer.Screen name="Expo" component={Expo} />
        <Drawer.Screen name="portal" component={Portal} />
        <Drawer.Screen name='LINE' component={LINE} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;