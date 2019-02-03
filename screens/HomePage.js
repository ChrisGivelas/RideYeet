import React from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';

const styles = StyleSheet.create({
    mainFont: {
        color: '#ff5c5c',
        fontSize: 25,
        textAlign: 'center',
    },
    imageStyle: {
        height: 200,

    },
    // containerStyle: {
    //     alignItems: 'center',
    //     justifyContent: 'center'
    // },
    buttonsContainer: {
        width: "100%",
        height: "30%"
    },
    otherContainer: {
        width: "100%",
        height: "50%"
    },
})

export default class difFonts extends React.Component {
    render() {
        return (
            <View >
                <View style={styles.otherContainer}>
                    <Image
                        source={require('./assets/rideyeetlogo.png')} style={styles.imageStyle} />
                    <Text style={styles.mainFont}>Welcome To RIDEYEET!</Text>
                </View>
                <View style={styles.buttonsContainer}>
                    <Button title='Proceed' color='green'></Button>
                    <Button title='Skip' color='red'></Button>
                </View>


            </View >
        );
    }
}
