import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';

const ListItem = (props) => (
  <TouchableOpacity onPress={props.onItemPressed}>
   <View style={styles.listItem}>
      <Image resizeMode="contain" source={props.placeImg} style={styles.placeImg}/>
      <Text>{props.placeName}</Text>
   </View>
  </TouchableOpacity>
)

const styles = StyleSheet.create({
  listItem: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    marginBottom: 5,
    padding: 10,
    backgroundColor: "#ccc"
  },
  placeImg: {
    width: 40,
    height: 40,
    marginRight: 6,
  }
});
 
export default ListItem;