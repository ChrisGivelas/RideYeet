import React from "react"
import { StyleSheet, Text, View, Image, Button } from "react-native"
import { createStackNavigator, createAppContainer } from "react-navigation";
import Tutorial from "./tutorial"

const styles = StyleSheet.create({
  mainFont: {
    color: '#ff5c5c',
    fontSize: 25,
    // fontWeight: 'bold',
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

export class DifFonts extends React.Component {
  render() {
    return (
      <View
        style={styles.containerStyle}>
        <Image
          style={styles.imageStyle} source={require('./assets/cardrive.gif')} />
        <Text style={styles.mainFont}>You're Ready To Start Booking!</Text>
        <Button
          title='Okay, Got It'
          onPress={() => this.props.navigation.navigate('Welcome')}
          color='green'>
          type='clear'
        </Button>
      </View >
    );
  }
}

const AppNavigator = createStackNavigator({
  Home: {
    screen: DifFonts,
  },
  Welcome: {
    screen: Tutorial,
  },
}, {
    initialRouteName: 'Home',
  });

export default createAppContainer(AppNavigator);
