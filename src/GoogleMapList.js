
import { useCallback, useState } from 'react';
import { StyleSheet, Text, View, Linking, Button, Alert, TextInput } from 'react-native';


export default function GoogleMapList({navigation}) {
  const [serchPlace1, onChangeText1] = useState('Tokyo');
  const [serchPlace2, onChangeText2] = useState('Tokyo');
  return (
    <View style={styles.container}>
      <Text style={{color:  'blue'}}>開きたいアプリのボタンをタップしてください</Text>
      <View style={styles.button}>
        <OpenURLButton url={"geo:"}>GoogleMap(android)</OpenURLButton>
      </View>
      <View style={styles.button}>
        <URLButton url={"geo:"}>GoogleMap(android)</URLButton>
      </View>
      <View style={styles.button}>
        <OpenURLButton url={"comgooglemaps:"}>GoogleMap(iPhone)</OpenURLButton>
      </View>
      <View style={styles.button}>
        <URLButton url={"comgooglemaps:"}>GoogleMap(iPhone)</URLButton>
      </View>
      <View style={styles.button}>
        <OpenURLButton url={"https://www.google.com/maps/"}>GoogleMap(webURL)</OpenURLButton>
      </View>
      <View style={styles.button}>
        <URLButton url={"https://www.google.com/maps/search/?api=1&query=New+York"}>GoogleMap(webURL:NewYork)</URLButton>
      </View>
      <View style={styles.button}>
        <View style={styles.input}>
          <TextInput onChangeText={onChangeText1}/>
        </View>
        <URLButton url={`https://www.google.com/maps/search/?api=1&query=${encodeURI(serchPlace1)}`}>{serchPlace1}</URLButton>
      </View>
      <View style={styles.button}>
        <View style={styles.input}>
          <TextInput onChangeText={onChangeText2}/>
        </View>
        <URLButton url={`geo:0,0?q=${encodeURI(serchPlace2)}`}>{serchPlace2}</URLButton>
      </View>
      <View style={styles.button}>
        <OpenURLButton url={"geo:37.7749,-122.4194"}>GoogleMap(geo:サンフランシスコ)</OpenURLButton>
      </View>
    </View>
  );
}

const OpenURLButton = ({url, children}) => {
  const handlePress = useCallback(async () => {
    // URLを処理できるか確認
    const supported = await Linking.canOpenURL(url);
    console.log(supported);
    if (supported) {
      await Linking.openURL(url);
    } else {
      // 処理できない場合はアラートを表示
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
  input:  {
    height: 40,
    width:  120,
    margin: 20,
    borderWidth: 1,
    padding: 10,
  }
});