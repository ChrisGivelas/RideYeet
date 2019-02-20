import React from "react"
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity, ActivityIndicator, ImageBackground } from "react-native";
import axios from 'axios';

import { createMaterialTopTabNavigator, createAppContainer } from 'react-navigation';


// My own helper functions for cleaning up the data returned by Megabus
import { durationCleaner, dateCleaner } from './helperFunctions/megabusCleaner';

// array of images being used for the results screen
const sourceImgs = [
    { name: "Kijiji", path: "../assets/kajLogo.png" },
    { name: "Megabus", path: "../assets/megaBus.jpg" },
    { name: "Via", path: "../assets/viaLogo.png" },
    { name: "Go", path: "../assets/goLogo.jpg" },
]

// Styles
const styles = StyleSheet.create({
    page: {
        display: "flex"
    },
    pageHeader: {
        display: "flex",
        margin: "auto",
        width: '100%'
    },
    listPane: {
        flex: 1,
        paddingLeft: 20,
        paddingRight: 20,
        justifyContent: "center",
        margin: "auto"
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
        textAlign: "right",
        // color: "#ff5c5c"
    },
    price: {
        fontWeight: "bold",
        textAlign: "right",
        fontSize: 14,
        color: "#000000"
    },
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
    descriptionView: {
        flex: 2,
        paddingLeft: 15,
        paddingRight: 15
    },
    priceView: {
        flex: 1,
        width: "10%"
    },
    header1: {
        color: "white",
        fontWeight: "500",
        fontSize: 16,
        position: 'absolute',
        top: 10,
        left: 10,
        right: 10,
        bottom: 10
    },
    header2: {
        color: "white",
        fontWeight: "500",
        fontSize: 45,
        position: 'absolute',
        top: 28,
        left: 5,
        right: 10,
        bottom: 25
    }
})

//ResultPane is a single card that contains information about a trip
class ResultPane extends React.Component {
    description = "This is a trip with the Megabus service. Click now to book at the Megabus website!"

    render() {
        return (
            <TouchableOpacity style={styles.pane} onPress={() => alert("More to come soon")}>
                <Image style={styles.icon} source={require("../assets/megaBus.jpg")} alt={"Megabus Logo"} />
                <View style={styles.descriptionView}>
                    <Text style={styles.time}>{`${dateCleaner(this.props.departureDateTime)} - ${dateCleaner(this.props.arrivalDateTime)}`}</Text>
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

// ResultsList is a component that represents the collection of multiple cards
class ResultsList extends React.Component {
    render() {
        return (
            <View style={styles.listPane} >
                {this.props.results.map(result => (
                    <ResultPane key={result.journeyId} {...result} onSelect={this.props.onSelect} selected={this.props.selected} />
                ))}
            </View>
        )
    }
}

// Results is the component that represents the Result Screen
class Results extends React.Component {
    static navigationOptions = {
        headerTitleStyle: {
            color: 'white',
            fontWeight: 'bold',
            alignSelf: 'center'
        }
    }

    constructor(props) {
        super(props);
        this.state = {
            results: null,
            selected: undefined,
        }
        this.something = this.props.navigation.getParam('destination', '');
    }

    onSelect = (current) => this.setState((prev) => ({ results: prev.results, selected: current }))

    componentDidMount() {
        let { navigation } = this.props;
        if (this.state.results == null) {
            axios({
                method: "post",
                url: "http://192.168.0.239:8080/trips",
                data: {
                    origin: navigation.getParam('origin', 'No origin available'),
                    destination: navigation.getParam('destination', 'No destination available'),
                    date: navigation.getParam('date', 'No date availale')
                }
            })
                .then(results => {
                    this.setState({ results: results.data })
                })
                .catch(err => alert(err))
        }
    }

    render() {
        let { navigation } = this.props;
        let banner = <Image style={styles.pageHeader} source={require('../assets/toBanner.jpg')} alt={'Megabus Logo'} />
        let resultSet = this.state.results ? <ResultsList results={this.state.results[0].result} /> : <ActivityIndicator size="large" color="#ff5c5c" />


        if (navigation.getParam('destination') == "Kingston") {
            banner = <Image style={styles.pageHeader} source={require('../assets/kingstonBannerNew.png')} alt={'Megabus Logo'} />
        }

        else if (navigation.getParam('destination') == "Whitby") {
            banner = <Image style={styles.pageHeader} source={require('../assets/whitbyBanner.jpg')} alt={'Megabus Logo'} />
        }
        else if (navigation.getParam('destination') == "Waterloo") {
            banner = <Image style={styles.pageHeader} source={require('../assets/waterlooBanner.jpg')} alt={'Megabus Logo'} />
        }
        else if (navigation.getParam('destination') == "Montreal") {
            banner = <Image style={styles.pageHeader} source={require('../assets/montrealBanner.jpg')} alt={'Megabus Logo'} />
        }
        return (
            <TouchableOpacity onPress={() => alert("More to come soon")}>
                <ScrollView style={styles.page}>
                    {banner}
                    <Text style={styles.header1}> Your Trip To... </Text>
                    <Text style={styles.header2}> {this.something} </Text>
                    {resultSet}
                </ScrollView>
            </TouchableOpacity>
        )
    }
}

const TabNavigator = createMaterialTopTabNavigator({
    Megabus: Results
});

export default createAppContainer(TabNavigator); 