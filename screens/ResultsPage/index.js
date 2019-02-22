import React, { Component } from "react"
import { StyleSheet, Text, Image, ScrollView, TouchableOpacity, ActivityIndicator } from "react-native"
import axios from "axios"
import { createMaterialTopTabNavigator, createAppContainer } from "react-navigation"
import ResultsList from "./_components/ResultsList"
import TabPicker from "./_components/TabPicker"

// Styles
const styles = StyleSheet.create({
    page: {
        display: "flex"
    },
    pageHeader: {
        display: "flex",
        margin: "auto",
        width: "100%"
    },

    header1: {
        color: "white",
        fontWeight: "500",
        fontSize: 16,
        position: "absolute",
        top: 20,
        left: 10,
        right: 10,
        bottom: 10
    },
    header2: {
        color: "white",
        fontWeight: "500",
        fontSize: 45,
        position: "absolute",
        top: 28,
        left: 5,
        right: 10,
        bottom: 25
    }
})

// Results is the component that represents the Result Screen
export default class Results extends Component {
    static navigationOptions = {
        headerTitleStyle: {
            color: "white",
            fontWeight: "bold",
            alignSelf: "center"
        }
    }

    constructor(props) {
        super(props)
        this.state = {
            results: null,
            selected: undefined
        }
        this.something = this.props.navigation.getParam("destination", "")
    }

    onSelect = current => this.setState(prev => ({ results: prev.results, selected: current }))

    componentDidMount() {
        let { navigation } = this.props
        if (this.state.results == null) {
            //TEMPORARY URL FOR DEVELOPMENT
            axios({
                method: "post",
                url: "http://192.168.1.109:8080/trips",
                data: {
                    origin: navigation.getParam("origin", "No origin available"),
                    destination: navigation.getParam("destination", "No destination available"),
                    date: navigation.getParam("date", "No date availale")
                }
            })
                .then(results => {
                    this.setState({ results: results.data })
                })
                .catch(err => alert(err))
        }
    }

    render() {
        let { navigation } = this.props
        let banner = (
            <Image style={styles.pageHeader} source={require("../../assets/toBanner.jpg")} alt={"Megabus Logo"} />
        )
        let resultSet = this.state.results ? (
            <ResultsList results={this.state.results[0].result} />
        ) : (
            <ActivityIndicator size="large" color="#ff5c5c" />
        )

        if (navigation.getParam("destination") == "Kingston") {
            banner = (
                <Image
                    style={styles.pageHeader}
                    source={require("../../assets/kingstonBannerNew.png")}
                    alt={"Megabus Logo"}
                />
            )
        } else if (navigation.getParam("destination") == "Whitby") {
            banner = (
                <Image
                    style={styles.pageHeader}
                    source={require("../../assets/whitbyBanner.jpg")}
                    alt={"Megabus Logo"}
                />
            )
        } else if (navigation.getParam("destination") == "Waterloo") {
            banner = (
                <Image
                    style={styles.pageHeader}
                    source={require("../../assets/waterlooBanner.jpg")}
                    alt={"Megabus Logo"}
                />
            )
        } else if (navigation.getParam("destination") == "Montreal") {
            banner = (
                <Image
                    style={styles.pageHeader}
                    source={require("../../assets/montrealBanner.jpg")}
                    alt={"Megabus Logo"}
                />
            )
        }
        return (
            <TouchableOpacity onPress={() => alert("More to come soon")}>
                <ScrollView style={styles.page}>
                    <TabPicker />
                    {banner}
                    <Text style={styles.header1}> Your Trip To... </Text>
                    <Text style={styles.header2}> {this.something} </Text>
                    {resultSet}
                </ScrollView>
            </TouchableOpacity>
        )
    }
}

// const TabNavigator = createMaterialTopTabNavigator({
//     Megabus: Results,
//     ViaRail: Results
// })

// export default createAppContainer(TabNavigator)
