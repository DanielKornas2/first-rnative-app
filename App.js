import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

import PlaceInput from './src/components/PlaceInput/PlaceInput';
import PlaceList from './src/components/PlaceList/PlaceList';

export default class App extends Component {

  state = {
    places: []
  }

  submitPlace = (userPlaceName) => {
    this.setState(prevstate => ({
      places: prevstate.places.concat(userPlaceName)
    }))
  }

  onItemDeleted = index => {
    this.setState(prevstate => ({
      places: prevstate.places.filter((place,i) => {
        return i !== index;
      })
    }))
  }

  render() {
    return (
      <View style={styles.container}>
        <PlaceInput submitPlace={this.submitPlace} />
        <PlaceList places={this.state.places} onItemDeleted={this.onItemDeleted} />
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
