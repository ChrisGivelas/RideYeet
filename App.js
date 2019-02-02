import React from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';

const styles = StyleSheet.create({
  mainFont: {
    color: 'red',
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    lineHeight: 300,
  },
  imageStyle: {
    height: 300,
    width: 390,
  },
  containerStyle: {
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default class App extends React.Component {
  render() {
    return (
      <View
        style={styles.containerStyle}>
        <Image
          style={styles.imageStyle} source={require('./assets/cardrive.gif')} />
        <Text style={styles.mainFont}>You're Ready To Start Booking!</Text>
        <Button title='Okay, Got It' color='green'> type='clear'</Button>
      </View >
    );
  }
}

