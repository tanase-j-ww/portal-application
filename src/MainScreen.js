import { StyleSheet, Text, View, Linking, Button, Alert, TextInput, NativeEventEmitter } from 'react-native';

export default function MainScreen({navigation}) {
  return (
    <View style={styles.container}>
        <View style={styles.button}>
            <Button title='SubPage' onPress={() => navigation.navigate('Sub')}></Button>
        </View>
        <View style={styles.button}>
            <Button title='GoogleMapPage' onPress={() => navigation.navigate('GoogleMapList')}></Button>
        </View>
        <View style={styles.button}>
            <Button title='GoogleChromePage' onPress={() => navigation.navigate('GoogleChrome')}></Button>
        </View>
        <View style={styles.button}>
            <Button title='ExpoPage' onPress={() => navigation.navigate('Expo')}></Button>
        </View>
        <View style={styles.button}>
            <Button title='portalPage' onPress={() => navigation.navigate('portal')}></Button>
        </View>
        <View style={styles.button}>
            <Button title='LINE' onPress={() => navigation.navigate('LINE')}></Button>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    padding: 10,
  },

});