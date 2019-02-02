import React from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';

const styles = StyleSheet.create({
  mainFont: {
    color: 'red',
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    lineHeight: 130,
  },
  imageStyle: {
    height: 400,
  },
  containerStyle: {
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default class difFonts extends React.Component {
  render() {
    return (
      <View style={styles.containerStyle}>
        <Image
          source={require('./assets/rideyeetlogo.png')} style={styles.imageStyle} />
        <Text style={styles.mainFont}>WELCOME TO RIDEYEET</Text>
        <Button title='proceed' color='red'><text> Proceed</text></Button>
        <Button title='skip' color='black'><text>Skip</text></Button>
      </View >
    );
  }
}

