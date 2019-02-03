import React from "react"
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native"

const styles = StyleSheet.create({
    containerStyle: {
        alignItems: "center",
        justifyContent: "center"
    },
    mainFont: {
        color: "#ff5c5c",
        fontSize: 25,
        textAlign: "center",
        marginBottom: 15
    },

    imageStyle: {
        height: 200,
        width: "100%",
        margin: 50
    },

    textContainer: {
        height: "20%",
        width: "100%"
    },
    buttonContainer: {
        height: "20%"
    },
    buttonStyle: {
        padding: 15,
        backgroundColor: "green",
        borderRadius: 4
    }
})

export default class App extends React.Component {
    render() {
        return (
            <View style={styles.containerStyle}>
                <Image style={styles.imageStyle} source={require("../assets/cardrive.gif")} />
                <Text style={styles.mainFont}>You're Ready To Start Booking!</Text>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity
                        onPress={() => this.props.navigation.navigate("Booking")}
                        style={styles.buttonStyle}
                    >
                        <Text style={{ color: "white", fontWeight: "500" }}>Start Booking!</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}
