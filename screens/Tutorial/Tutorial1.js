import React, { Component } from "react"
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native"

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flex: 1,
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fffafa"
    },
    pair1: {
        display: "flex",
        flexDirection: "row",
        width: "100%",
        justifyContent: "space-evenly",
        paddingBottom: 50
    },
    pair2: {
        display: "flex",
        flexDirection: "row",
        width: "100%",
        justifyContent: "space-evenly",
        paddingBottom: 50
    },
    gologo: {
        width: 100,
        height: 100,
        borderRadius: 25,
        margin: "auto"
    },
    megalogo: {
        width: 100,
        height: 100,
        borderRadius: 25,
        margin: "auto"
    },
    kajlogo: {
        width: 100,
        height: 100,
        borderRadius: 25,
        margin: "auto"
    },
    vialogo: {
        width: 100,
        height: 100,
        borderRadius: 25,
        margin: "auto"
    },
    aboutheader: {
        fontWeight: "bold",
        fontSize: 24,
        color: "#FF5C5C",
        margin: "auto"
    },
    aboutbody: {
        fontSize: 12,
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 20,
        paddingBottom: 20,
        color: "#2f4f4f",
        margin: "auto"
    },
    backbutton: {
        fontSize: 12,
        color: "#2f4f4f",
        margin: "auto"
    }
})

export default class Tutorial1 extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.pair1}>
                    <Image style={styles.gologo} source={require("../../assets/goLogo.jpg")} alt={"Go Train Logo"} />
                    <Image style={styles.megalogo} source={require("../../assets/megaBus.jpg")} alt={"Go Train Logo"} />
                </View>
                <View style={styles.pair2}>
                    <Image style={styles.kajlogo} source={require("../../assets/kajLogo.png")} alt={"Go Train Logo"} />
                    <Image style={styles.vialogo} source={require("../../assets/viaLogo.png")} alt={"Go Train Logo"} />
                </View>
                <Text style={styles.aboutheader}>What We Do</Text>
                <Text style={styles.aboutbody}>
                    Let us know where you're travelling to and we will handle the rest. We will give you all available
                    travel plans from our partners so that you can pick a trip that best suits your needs. Whether
                    you're looking for value, safety, convenience, or comfort, there is something for you here at
                    Meridio!
                </Text>
                <TouchableOpacity
                    onPress={() => this.props.navigation.navigate("Tutorial2")}
                    style={{ backgroundColor: "green", padding: 15, borderRadius: 4 }}
                >
                    <Text style={{ color: "white", fontWeight: "500", textAlign: "center" }}>Next</Text>
                </TouchableOpacity>
            </View>
        )
    }
}
