import React from 'react';
import { StyleSheet, View } from 'react-native';

import ListItem from '../ListItem/ListItem';

const PlaceList = (props) => {

  const placesOutput = props.places.map((place, id) => <ListItem key={id} placeName={place} />)
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