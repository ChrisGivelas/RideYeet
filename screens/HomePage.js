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
        textAlign: "center"
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
        display: "flex",
        alignItems: "center"
    },
    buttonStyle: {
        padding: 15,
        margin: 15,
        backgroundColor: "green",
        borderRadius: 4,
        width: "40%"
    }
})

export default class HomePage extends React.Component {
    render() {
        return (
            <View>
                <View style={styles.containerStyle}>
                    <Image style={styles.imageStyle} source={require("../assets/rideyeetlogo.png")} />
                    <Text style={styles.mainFont}>Welcome To RIDEYEET!</Text>
                </View>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity
                        onPress={() => this.props.navigation.navigate("Tutorial1")}
                        style={{ ...styles.buttonStyle, backgroundColor: "green" }}
                    >
                        <Text style={{ color: "white", fontWeight: "500", textAlign: "center" }}>Tutorial</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => this.props.navigation.navigate("Booking")}
                        style={{ ...styles.buttonStyle, backgroundColor: "#ff5c5c" }}
                    >
                        <Text style={{ color: "white", fontWeight: "500", textAlign: "center" }}>Skip Tutorial</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}
