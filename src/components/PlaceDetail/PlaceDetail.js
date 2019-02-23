import React from 'react';
import { Modal, View, Image, Text, Button, StyleSheet } from 'react-native';

const PlaceDetail = (props) => {
    
    return (
        <Modal visible={props.selectedPlace !== null} onRequestClose={props.onModalClosed} animationType="slide">
          <View style={styles.modalContainer}>
            <Image source={props.selectedPlace ? props.selectedPlace.placeImg : null} />
            <Text>{props.selectedPlace ? props.selectedPlace.placeName : null}</Text>
            <View>
              <Button title="Delete" onPress={props.onItemDeleted} />
              <Button title="Close" onPress={props.onModalClosed}/>
            </View>
          </View>
        </Modal>
      );
}

const styles = StyleSheet.create({
  modalContainer: {
    margin: 20
  }
});

export default PlaceDetail;