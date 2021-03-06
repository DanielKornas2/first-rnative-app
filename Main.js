import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { connect } from 'react-redux';
 
import PlaceInput from './src/components/PlaceInput/PlaceInput';
import PlaceList from './src/components/PlaceList/PlaceList';
import PlaceDetail from './src/components/PlaceDetail/PlaceDetail';
 
import { addPlace, deletePlace, selectPlace, deselectPlace } from './src/store/actions/index';
 
class Main extends Component {
  state = {
    places: [],
    selectedPlace: null,
  }

  submitPlace = (placeName) => {
    this.props.onAddPlace(placeName);
  }

  onItemDeleted = () => {
    this.props.onDeletePlace();
  }

  onItemSelected = key => {

    this.props.onSelectPlace(key);
  }

  onModalClosed = () => {
    this.props.onDeselectPlace();
  }

  render() {
    return (
      <View style={styles.container}>
        <PlaceDetail 
          selectedPlace={this.props.selectedPlace}
          onItemDeleted={this.onItemDeleted}
          onModalClosed={this.onModalClosed} />
        <PlaceInput submitPlace={this.submitPlace} />
        <PlaceList 
          places={this.props.places}
          onItemSelected={this.onItemSelected} 
        />
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


const mapStateToProps = state => {
  return {
    places: state.places.places,
    selectedPlace: state.places.selectedPlace
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onAddPlace: name => dispatch(addPlace(name)),
    onDeletePlace: () => dispatch(deletePlace()),
    onSelectPlace: key => dispatch(selectPlace(key)),
    onDeselectPlace: () => dispatch(deselectPlace())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);