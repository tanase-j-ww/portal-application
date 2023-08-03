import { StatusBar } from 'expo-status-bar';
import { useCallback, useState } from 'react';
import { StyleSheet, Text, View, Linking, Button, Alert, TextInput } from 'react-native';


export default function App() {
  const [serchPlace1, onChangeText1] = useState('Tokyo');
  const [serchPlace2, onChangeText2] = useState('Tokyo');
  return (
    <View style={styles.container}>
      <Text style={{color:  'blue'}}>開きたいアプリのボタンをタップしてください</Text>
      <View style={styles.button}>
        <OpenURLButton url={"geo:"}>GoogleMap(android)</OpenURLButton>
      </View>
      <View style={styles.button}>
        <OpenURLButton url={"comgooglemaps://"}>GoogleMap(iPhone)</OpenURLButton>
      </View>
      <View style={styles.button}>
        <OpenURLButton url={"https://www.google.com/maps/"}>GoogleMap(iPhone)</OpenURLButton>
      </View>
      <View style={styles.button}>
        <OpenURLButton url={"https://www.google.com/maps/search/?api=1&query=New+York"}>GoogleMap(NewYork)</OpenURLButton>
      </View>
      <View style={styles.button}>
        <View style={styles.input}>
          <TextInput onChangeText={onChangeText1}/>
        </View>
        <OpenURLButton url={`https://www.google.com/maps/search/?api=1&query=${encodeURI(serchPlace1)}`}>{serchPlace1}</OpenURLButton>
      </View>
      <View style={styles.button}>
        <View style={styles.input}>
          <TextInput onChangeText={onChangeText2}/>
        </View>
        <OpenURLButton url={`geo:0,0?q=${encodeURI(serchPlace2)}`}>{serchPlace2}</OpenURLButton>
      </View>
      <View style={styles.button}>
        <OpenURLButton url={"geo:37.7749,-122.4194"}>GoogleMap(サンフランシスコを表示)</OpenURLButton>
      </View>
      <View style={styles.button}>
        <SendIntentButton action="com.google.android.apps.maps.ACTION_VIEW">
          googelmap
        </SendIntentButton>
      </View>
      <View style={styles.button}>
        <OpenURLButton url={"https://www.youtube.com/"}>Youtube(ブラウザから表示)</OpenURLButton>
      </View>
    {/* youtubeのurlスキーマが判明次第追加
      <View style={styles.button}>
        <OpenURLButton url={"youtube:"}>Youtube</OpenURLButton>
      </View>
    */}
      <View style={styles.button}>
        <OpenURLButton url={"googlechrome:"}>GoogleChrome</OpenURLButton>
      </View>
    </View>
  );
}

const OpenURLButton = ({url, children}) => {
  const handlePress = useCallback(async () => {
    // URLを処理できるか確認
    const supported = await Linking.canOpenURL(url);

    if (supported) {
      await Linking.openURL(url);
    } else {
      // 処理できない場合はアラートを表示
      Alert.alert(`Don't know how to open this URL: ${url}`);
    }
  }, [url]);

  return <Button title={children} onPress={handlePress} />;
};

const SendIntentButton = ({action, extras, children}) => {
  const handlePress = useCallback(async () => {
    try {
      await Linking.sendIntent(action, extras);
    } catch (e) {
      Alert.alert(e.message);
    }
  }, [action, extras]);

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