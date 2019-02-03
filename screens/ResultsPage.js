import React from "react"
import { StyleSheet, Text, View, Button, Image, ScrollView, ActivityIndicator } from "react-native";
import axios from 'axios';

const styles = StyleSheet.create({
    page: {
        display: "flex"
    },
    pageHeader: {
        display: "flex",
        width: "100%",
        margin: "auto"
    },
    listPane: {
        flex: 1,
        paddingLeft: 20,
        paddingRight: 20,
        justifyContent: "center",
        margin: "auto",
    },
    time: {
        fontSize: 16,
        color: "#ff5c5c",
    },
    description: {
        fontSize: 12,
        textAlign: "left",
        color: "#2f4f4f",
    },
    duration: {
        fontWeight: "bold",
        fontSize: 24,
        textAlign: "right",
        color: "#ff5c5c",
    },
    price: {
        fontWeight: "bold",
        textAlign: "right",
        fontSize: 14,
        color: "#000000",
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

class ResultPane extends React.Component {
    render() {
        return (
            <View style={styles.pane} onPress={() => this.onSelect(this.props.id)}>
                <Image style={styles.icon} source={require("../assets/megaBus.jpg")} alt={'Megabus Logo'} />
                <View style={styles.descriptionView}>
                    <Text style={styles.time}>{`${this.props.startTime} - ${this.props.arriveTime}`}</Text>
                    <Text style={styles.description}>{this.props.description}</Text>
                </View>
                <View style={styles.priceView}>
                    <Text style={styles.duration}>{this.props.duration}</Text>
                    <Text style={styles.price}>{this.props.price}</Text>
                </View>
            </View >
        )
    }
}

class ResultsList extends React.Component {
    render() {
        return (
            <View style={styles.listPane}>
                {this.props.results.map(result => <ResultPane {...result} onSelect={this.props.onSelect} selected={this.props.selected} />)}
            </View>
        )
    }
}

export default class Results extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            results: null,
            selected: undefined
        }
    }
    componentDidMount() {
        axios({
            method: 'post',
            url: 'http://10.217.215.190:8009/testRoute',
            data: {
                origin: this.props.navigation.getParam('origin', ''),
                destination: this.props.navigation.getParam('destination', ''),
                date: this.props.navigation.getParam('date', '')
            }
        });


    }

    onSelect = (current) => this.setState((prev) => ({ results: prev.results, selected: current }))

    render() {
        let resultSet = this.state.results == null ? <ActivityIndicator size="large" color="#ff5c5c" style={{ marginTop: 20 }} /> : <ResultsList onSelect={this.onSelect} results={this.state.results} selected={this.state.selected} ></ResultsList>
        return (
            <ScrollView style={styles.page}>
                <Image style={styles.pageHeader} source={require("../assets/toBanner.jpg")} alt={'Megabus Logo'} />
                <Text style={styles.header1}> Your Trip To... </Text>
                <Text style={styles.header2}> {this.props.navigation.getParam('destination', '')} </Text>
                {resultSet}
            </ScrollView>
        )
    }
}









// let mockData = [{ "id": 1, "startTime": "8:22 PM", "arriveTime": "3:17 PM", "description": "Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.", "duration": 2, "price": "$29.02" },
// { "id": 2, "startTime": "9:07 PM", "arriveTime": "1:40 PM", "description": "Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.", "duration": 24, "price": "$94.11" },
// { "id": 3, "startTime": "3:32 AM", "arriveTime": "8:08 PM", "description": "Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.", "duration": 24, "price": "$58.08" },
// { "id": 4, "startTime": "1:13 AM", "arriveTime": "5:49 AM", "description": "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.", "duration": 4, "price": "$44.63" },
// { "id": 5, "startTime": "8:12 PM", "arriveTime": "6:20 PM", "description": "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.", "duration": 13, "price": "$3.40" },
// { "id": 6, "startTime": "6:19 AM", "arriveTime": "3:31 PM", "description": "Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.", "duration": 18, "price": "$33.06" },
// { "id": 7, "startTime": "10:59 AM", "arriveTime": "2:57 PM", "description": "Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.", "duration": 5, "price": "$87.00" },
// { "id": 8, "startTime": "12:04 PM", "arriveTime": "1:02 PM", "description": "In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.", "duration": 9, "price": "$90.30" },
// { "id": 9, "startTime": "7:32 AM", "arriveTime": "2:35 AM", "description": "Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.", "duration": 8, "price": "$22.19" },
// { "id": 10, "startTime": "2:11 AM", "arriveTime": "9:11 AM", "description": "In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.", "duration": 3, "price": "$64.35" },
// { "id": 11, "startTime": "2:09 AM", "arriveTime": "8:49 AM", "description": "Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.", "duration": 7, "price": "$44.07" },
// { "id": 12, "startTime": "11:14 AM", "arriveTime": "5:38 PM", "description": "Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.", "duration": 20, "price": "$52.53" },
// { "id": 13, "startTime": "2:59 AM", "arriveTime": "5:47 PM", "description": "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.", "duration": 5, "price": "$69.23" },
// { "id": 14, "startTime": "7:07 PM", "arriveTime": "6:31 AM", "description": "Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.", "duration": 11, "price": "$94.56" },
// { "id": 15, "startTime": "3:58 PM", "arriveTime": "5:04 PM", "description": "Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.", "duration": 15, "price": "$95.21" }]