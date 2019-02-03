import React from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';

const styles = StyleSheet.create({
    mainFont: {
        color: '#ff5c5c',
        fontSize: 25,
        // fontWeight: 'bold',
        textAlign: 'center',
        // lineHeight: 150,
    },
    imageStyle: {
        height: 400,

    },
    containerStyle: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonsContainer: {
        flex: 2,
        flexDirection: 'column',
        justifyContent: 'space-evenly'
    },
    otherContainer: {
        flex: 7
    },
    padder: {
        flex: 1
    }
})

export default class difFonts extends React.Component {
    render() {
        return (
            <View style={styles.containerStyle}>
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
