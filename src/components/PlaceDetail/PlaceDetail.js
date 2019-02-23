import React from 'react';
import { Modal, View, Image, Text, Button, StyleSheet } from 'react-native';

const PlaceDetail = (props) => {
    
    return (
        <Modal visible={props.selectedPlace !== null} onRequestClose={props.onModalClosed} animationType="slide">
          <View style={styles.modalContainer}>
            <Image source={props.selectedPlace ? props.selectedPlace.image : null} style={styles.placeImage} />
            <Text style={styles.placeName}>{props.selectedPlace ? props.selectedPlace.name : null}</Text>
            <View>
              <Button title="Delete" color="red" onPress={props.onItemDeleted} />
              <Button title="Close" onPress={props.onModalClosed}/>
            </View>
          </View>
        </Modal>
      );
}

const styles = StyleSheet.create({
  modalContainer: {
    margin: 20
  },
  placeImage: {
    width: "100%",
    height: 200
  },
  placeName: {
    marginTop: 10,
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 25
  }
});

export default PlaceDetail;