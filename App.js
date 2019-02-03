import React from "react"
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native"
import { createStackNavigator, createAppContainer } from "react-navigation";
import Tutorial from "./tutorial";
import BookingScreen from './screens/BookingScreen';

const styles = StyleSheet.create({
  containerStyle: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  mainFont: {
    color: '#ff5c5c',
    fontSize: 25,
    textAlign: 'center',
  },

  imageStyle: {
    height: 200,
    width: "100%",
    margin: 50
  },

  textContainer: {
    height: "20%",
    width: "100%",


  },
  buttonContainer: {
    height: "20%",

  },
  buttonStyle: {
    padding: 15,
    backgroundColor: 'green',
    borderRadius: 4
  }

})

export class DifFonts extends React.Component {
  render() {
    return (
      <View style={styles.containerStyle}>

        <Image
          style={styles.imageStyle} source={require('./assets/cardrive.gif')} />

        <View style={styles.textContainer}>
          <Text style={styles.mainFont}>You're Ready To Start Booking!</Text>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={this.onPressBook} style={styles.buttonStyle} >
            <Text style={{ color: 'white', fontWeight: "500" }}> BOOK NOW </Text>
          </TouchableOpacity>
        </View>
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
  Booking: {
    screen: BookingScreen
  }
}, {
    initialRouteName: 'Home',
  });

export default createAppContainer(AppNavigator);
