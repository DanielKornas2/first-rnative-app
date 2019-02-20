import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default class App extends Component {

  state = {
    sampleName: ''
  }

  handleChange = (val) => {
    this.setState({
      sampleName: val
    })
  }

  submitPlace = () => {

  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.inputCointainer}>
          <TextInput 
          style={styles.placeInput}
          placeholder="Add your place"
          value={this.state.sampleName} 
          onChangeText={this.handleChange} 
          />
          <Button 
          style={styles.placeButton}
          title="Add"
          onPress={this.submitPlace} 
          />
        </View>
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
  },
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
