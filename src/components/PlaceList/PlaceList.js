import React from 'react';
import { StyleSheet, View } from 'react-native';

import ListItem from '../ListItem/ListItem';

const PlaceList = (props) => {

  const placesOutput = props.places.map((place, id) => 
  <ListItem 
    key={id} 
    placeName={place} 
    onItemPressed={() => props.onItemDeleted(id)}
  />)
  return (
    <View style={styles.listContainer}>{placesOutput}</View>
  )
}

const styles = StyleSheet.create({
  listContainer: {
    width: "100%",
  }
});
 
export default PlaceList;