import React from 'react';
import { FlatList, StyleSheet } from 'react-native';

import ListItem from '../ListItem/ListItem';

const PlaceList = (props) => {

  return (
    <FlatList 
    data={props.places} 
    style={styles.listContainer}
    renderItem={(info)=>(
      <ListItem  
      placeName={info.item.value} 
      onItemPressed={() => props.onItemDeleted(info.item.key)}
      />
    )}
    />
  )
}

const styles = StyleSheet.create({
  listContainer: {
    width: "100%",
  }
});
 
export default PlaceList;