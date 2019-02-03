import React from "react"
import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput, Picker } from "react-native"

const styles = StyleSheet.create({
    page: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        color: "#fffafa"
    },
    div: {
        flexDirection: "row",
        justifyContent: "space-around",
    },
    text: {
        fontSize: 12,
    },
    text2: {
        fontSize: 12,
        fontWeight: "bold",
    },
    button: {

    },
})

export default class PaymentPage {
    render() {
        return (
            <View style={styles.page}>
                <View style={styles.div}>
                    <Text style={styles.text}>Departure from:</Text>
                    <Text style={styles.text2}>TORONTO</Text>
                </View>
                <View style={styles.div}>
                    <Text style={styles.text}>Arrival at:</Text>
                    <Text style={styles.text2}>KINGSTON</Text>
                </View>
                <View style={styles.div}>
                    <Text style={styles.text}>Departure time:</Text>
                    <Text style={styles.text2}>6:37 am</Text>
                </View>
                <View style={styles.div}>
                    <Text style={styles.text}>Arrival Time</Text>
                    <Text style={styles.text2}>10:01 am</Text>
                </View>
                <View style={styles.div}>
                    <Text style={styles.text}>Price:</Text>
                    <Text style={styles.text2}>$21.72</Text>
                </View>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.text2}>Pay Now!</Text>
                </TouchableOpacity>
            </View >
        )
    }
}