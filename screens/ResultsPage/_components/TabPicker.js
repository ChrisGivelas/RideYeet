import React, { Component } from "react"
import { View, Text, StyleSheet } from "react-native"

class TabPicker extends Component {
    render() {
        return (
            <View style={styles.tabContainer}>
                <Text style={styles.text}>Megabus</Text>
                <Text style={styles.text}>Via Rail</Text>
                <Text style={styles.text}>Kijiji</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    tabContainer: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-evenly",
        width: "100%",
        backgroundColor: "#ff5c5c"
    },
    text: {
        alignSelf: "center",
        color: "white"
    }
})

export default TabPicker
