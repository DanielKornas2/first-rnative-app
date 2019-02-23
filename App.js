import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

import PlaceInput from './src/components/PlaceInput/PlaceInput';
import PlaceList from './src/components/PlaceList/PlaceList';
import PlaceDetail from './src/components/PlaceDetail/PlaceDetail'
import sampleImage from './assets/sampleimage.jpg';

export default class App extends Component {

  state = {
    places: [],
    selectedPlace: null,
  }

  submitPlace = (userPlaceName) => {
    this.setState(prevstate => ({
      places: prevstate.places.concat({
        key: `${Math.random()}`, 
        name: userPlaceName,
        image: sampleImage
      })
    }))
  }

  onItemDeleted = () => {
    this.setState(prevstate => ({
      places: prevstate.places.filter((place) => {
        return place.key !== prevstate.selectedPlace.key;
      }),
      selectedPlace: null,
    }))
  }

  onItemSelected = index => {

    this.setState(prevstate => ({
      selectedPlace: prevstate.places.find((place) => {
        return place.index === index;
      })
    }))
  }

  onModalClosed = () => {
    this.setState({
      selectedPlace: null,
    })
  }

  render() {
    return (
      <View style={styles.container}>
      <PlaceDetail selectedPlace={this.state.selectedPlace} onModalClosed={this.onModalClosed} onItemDeleted={this.onItemDeleted} />
      <PlaceInput submitPlace={this.submitPlace} />
      <PlaceList places={this.state.places} onItemSelected={this.onItemSelected} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 40,
  }
});
