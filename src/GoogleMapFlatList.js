
import { useState } from 'react';
import { StyleSheet, Text, View, Linking, Button, Alert, TextInput, FlatList } from 'react-native';

const Item = ({title, url}) => (
      <View style={styles.button}>
        <URLButton url={url} children={title}/>
      </View>
);

const OnchangeItem = ({title, url, onchangetext,}) => (
      <View style={styles.button}>
        <View style={styles.input}>
          <TextInput onChangeText={onchangetext}/>
        </View>
        <URLButton url={url} children={title}/>
      </View>
)

export default function GoogleMapFlatlist({navigation}) {
  const [searchPlace1, onChangeText1] = useState('Tokyo');
  const renderItem = ({item}) => {
    if(item.onchangetext == null){
      return(
        <Item
          title={item.title}
          url={item.url}
        />
      );
    } else {
      return(
        <OnchangeItem
          title={item.title}
          url={`${item.url}${encodeURI(searchPlace1)}`}
          onchangetext={(inputtext) => onChangeText1(inputtext)}
        />
      )
    }
  }
  return (
    <View style={styles.container}>
      <Text style={{color:  'blue'}}>開きたいアプリのボタンをタップしてください</Text>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.title}
        extraData={searchPlace1}
      />    
    </View>
  );
}

const data = [
  {
    title: "GoogleMap(android)",
    url: "geo:"
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
    onchangetext: "",
  },
  {
    title: "GoogleMap(geo:検索)",
    url: `geo:0,0?q=`,
    onchangetext: "",
  },
  {
    title: "GoogleMap(comgooglemaps:検索)",
    url: `comgooglemaps://0,0?q=`,
    onchangetext: "",
  },
];


const URLButton = ({url, children}) => {
  const handlePress = async () => {
    await Linking.openURL(url);
  };
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