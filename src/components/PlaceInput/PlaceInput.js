import React, { Component } from 'react';
import { StyleSheet, View, TextInput, Button } from 'react-native';

class PlaceInput extends Component {

  state = {
    placeName: ''
  }
    
  handleChange = (val) => {
    this.setState({
      placeName: val
    })
  }

  onPressButton = () => {
    const { placeName } = this.state;
      if (placeName.trim() === ""){
        return
      }

      this.props.submitPlace(this.state.placeName);
      this.setState({
        placeName: '',
      })
  }
  
  render() {
    return (  
      <View style={styles.inputCointainer}>
        <TextInput 
        style={styles.placeInput}
        placeholder="Add your place"
        value={this.state.placeName} 
        onChangeText={this.handleChange} 
        />
        <Button 
        style={styles.placeButton}
        title="Add"
        onPress={this.onPressButton} 
        />
      </View>
    );
  }
}
  
const styles = StyleSheet.create({
  inputCointainer: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  placeInput: {
    width: "70%",
    borderBottomWidth: 2, 
    borderColor: "#29849e"
  },
  placeButton: {
    width: "30%",
  }
});

export default PlaceInput