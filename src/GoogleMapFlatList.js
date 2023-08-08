import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Linking,
  Button,
  Alert,
  TextInput,
  FlatList,
  KeyboardAvoidingView,
} from "react-native";

const Item = ({ title, url }) => (
  <View style={styles.button}>
    <URLButton url={url} children={title} />
  </View>
);

const OnchangeItem = ({ title, url, onchangetext }) => (
  <View>
    <View style={styles.input}>
      <TextInput onChangeText={onchangetext} />
    </View>
    <View style={styles.button}>
      <URLButton url={url} children={title} />
    </View>
  </View>
);

export default function GoogleMapFlatlist({ navigation }) {
  const [searchPlace0, onChangeText0] = useState("Tokyo");
  const [searchPlace1, onChangeText1] = useState("Tokyo");
  const [searchPlace2, onChangeText2] = useState("Tokyo");
  const renderItem = ({ item }) => {
    if (item.onchangetext == null) {
      return <Item title={item.title} url={item.url} />;
    } else if (item.onchangetext == 0) {
      return (
        <OnchangeItem
          title={item.title}
          url={`${item.url}${encodeURI(searchPlace0)}`}
          onchangetext={(inputtext) => onChangeText0(inputtext)}
        />
      );
    } else if (item.onchangetext == 1) {
      return (
        <OnchangeItem
          title={item.title}
          url={`${item.url}${encodeURI(searchPlace1)}`}
          onchangetext={(inputtext) => onChangeText1(inputtext)}
        />
      );
    } else if (item.onchangetext == 2) {
      return (
        <OnchangeItem
          title={item.title}
          url={`${item.url}${encodeURI(searchPlace2)}`}
          onchangetext={(inputtext) => onChangeText2(inputtext)}
        />
      );
    }
  };
  return (
    <View style={styles.container}>
      <Text style={{ color: "blue" }}>
        開きたいアプリのボタンをタップしてください
      </Text>
      <KeyboardAvoidingView behavior="height" style={styles.keyboardContainer}>
        <View style={styles.inner}>
          <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={(item) => item.title}
            extraData={searchPlace1}
          />
        </View>
      </KeyboardAvoidingView>
    </View>
  );
}

const data = [
  {
    title: "GoogleMap(android)",
    url: "geo:",
  },
  {
    title: "GoogleMap(iPhone)",
    url: "comgooglemaps:",
  },
  {
    title: "GoogleMap(webURL)",
    url: "https://www.google.com/maps/",
  },
  {
    title: "GoogleMap(NewYork)",
    url: "https://www.google.com/maps/search/?api=1&query=New+York",
  },
  {
    title: "GoogleMap(geo:サンフランシスコ)",
    url: "geo:37.7749,-122.4194",
  },
  {
    title: "GoogleMap(web検索)",
    url: `https://www.google.com/maps/search/?api=1&query=`,
    onchangetext: 0,
  },
  {
    title: "GoogleMap(geo:検索)",
    url: `geo:0,0?q=`,
    onchangetext: 1,
  },
  {
    title: "GoogleMap(comgooglemaps:検索)",
    url: `comgooglemaps://0,0?q=`,
    onchangetext: 2,
  },
];

const URLButton = ({ url, children }) => {
  const handlePress = async () => {
    await Linking.openURL(url);
  };
  return <Button title={children} onPress={handlePress} />;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  button: {
    padding: 10,
  },
  input: {
    height: 40,
    width: "90%",
    margin: 20,
    borderWidth: 1,
    padding: 10,
    alignSelf: "center",
  },
  keyboardContainer: {
    flex: 1,
  },
  inner: {
    flex: 1,
    padding: 10,
    justifyContent: "flex-end",
  },
});
