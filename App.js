import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default class App extends Component {

  state = {
    sampleName: ''
  }

  handleChange = (val) => {
    this.setState({
      sampleName: val
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput 
        style={{width:200, borderWidth: 1, borderColor: "gray", paddingLeft: 5}}
        placeholder="Placeholder wow"
        value={this.state.sampleName} 
        onChangeText={this.handleChange} 
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
    padding: 50,
  },
});
