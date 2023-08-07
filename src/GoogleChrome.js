
import { useCallback, useState } from 'react';
import { StyleSheet, Text, View, Linking, Button, Alert, TextInput } from 'react-native';


export default function GoogleChrome({navigation}) {
  return (
    <View style={styles.container}>
      <Text style={{color:  'blue'}}>開きたいアプリのボタンをタップしてください</Text>
      <View style={styles.button}>
        <OpenURLButton url={"googlechrome:"}>GoogleChrome</OpenURLButton>
      </View>
    </View>
  );
}

const OpenURLButton = ({url, children}) => {
  const handlePress = useCallback(async () => {
    const supported = await Linking.canOpenURL(url);
    console.log(supported);
    if (supported) {
      await Linking.openURL(url);
    } else {
      Alert.alert(`Don't know how to open this URL: ${url}`);
    }
  }, [url]);
  return <Button title={children} onPress={handlePress} />;
};

const URLButton = ({url, children}) => {
  const handlePress = useCallback(async () => {
    await Linking.openURL(url);
  }, [url]);
  return <Button title={children} onPress={handlePress} />;
};

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