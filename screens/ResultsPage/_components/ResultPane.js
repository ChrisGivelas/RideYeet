import React, { Component } from "react"
import { TouchableOpacity, Image, View, Text, StyleSheet } from "react-native"

const styles = StyleSheet.create({
    pane: {
        display: "flex",
        padding: 5,
        borderWidth: 1,
        marginTop: 10,
        marginBottom: 10,
        margin: "auto",
        justifyContent: "space-evenly",
        flexDirection: "row"
    },
    icon: {
        borderRadius: 4,
        flex: 1,
        display: "flex",
        height: 100,
        width: 100
    },
    price: {
        fontWeight: "bold",
        textAlign: "right",
        fontSize: 14,
        color: "#000000"
    },

    descriptionView: {
        flex: 2,
        paddingLeft: 15,
        paddingRight: 15
    },
    priceView: {
        flex: 1,
        width: "10%"
    },
    time: {
        fontSize: 16,
        color: "#ff5c5c"
    },
    description: {
        fontSize: 12,
        textAlign: "left",
        color: "#2f4f4f"
    },
    duration: {
        fontWeight: "bold",
        fontSize: 20,
        textAlign: "right"
        // color: "#ff5c5c"
    }
})

const dateCleaner = datetime => {
    return datetime.substring(datetime.length - 8, datetime.length - 3)
}

// Duration cleaner removes all other things that aren't the number of hours
const durationCleaner = duration => {
    return duration.substring(duration.length - 5)
}

//ResultPane is a single card that contains information about a trip
export default class ResultPane extends Component {
    description = "This is a trip with the Megabus service. Click now to book at the Megabus website!"

    render() {
        return (
            <TouchableOpacity style={styles.pane} onPress={() => alert("More to come soon")}>
                <Image style={styles.icon} source={require("../../../assets/megaBus.jpg")} alt={"Megabus Logo"} />
                <View style={styles.descriptionView}>
                    <Text style={styles.time}>{`${dateCleaner(this.props.departureDateTime)} - ${dateCleaner(
                        this.props.arrivalDateTime
                    )}`}</Text>
                    <Text style={styles.description}>{this.description}</Text>
                </View>
                <View style={styles.priceView}>
                    <Text style={styles.duration}>{durationCleaner(this.props.duration)}</Text>
                    <Text style={styles.price}>{this.props.price}</Text>
                </View>
            </TouchableOpacity>
        )
    }
}
