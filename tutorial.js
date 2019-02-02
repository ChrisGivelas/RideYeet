import React from "react"
import { StyleSheet, Text, View, Button, Image } from "react-native"

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flex: 1,
        //flexDirection: "row",
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
        paddingBottom: 50,
    },
    pair2: {
        display: "flex",
        flexDirection: "row",
        width: "100%",
        justifyContent: "space-evenly",
        paddingBottom: 50,
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
        // fontFamily: "Verdana",
        fontWeight: "bold",
        fontSize: 24,
        color: "#FF5C5C",
        margin: "auto"
    },
    aboutbody: {
        // fontFamily: "Verdana",
        fontSize: 12,
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 20,
        paddingBottom: 20,
        color: "#2f4f4f",
        margin: "auto"
    },
    backbutton: {
        // fontFamily: "Verdana",
        fontSize: 12,
        color: "#2f4f4f",
        margin: "auto"
    }
})

export default class Tutorial extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.pair1}>
                    <Image style={styles.gologo} source={require("./assets/goLogo.jpg")} alt={'Go Train Logo'} />
                    <Image style={styles.megalogo} source={require("./assets/megaBus.jpg")} alt={'Go Train Logo'} />
                </View>
                <View style={styles.pair2}>
                    <Image style={styles.kajlogo} source={require("./assets/kajLogo.png")} alt={'Go Train Logo'} />
                    <Image style={styles.vialogo} source={require("./assets/viaLogo.png")} alt={'Go Train Logo'} />
                </View>
                <Text style={styles.aboutheader}>What We Do</Text>
                <Text style={styles.aboutbody}>
                    Lorem ipsum dolor sit amet, ei saperet eleifend percipitur sed. Pri idque ignota ad. Ut sea diam
                    aeque cetero, vis porro voluptua menandri no, liber bonorum nam ei. Pro causae constituam inciderint
                    te, denique nominavi suavitate cu mel.
                </Text>
                <Button title="back">
                    <Text>back</Text>
                </Button>
            </View>
        )
    }
}
