import React, { Component } from 'react';
import { Text, View } from 'react-native';
import axios from 'axios';

class TestScreen extends Component {

    componentDidMount() {
        axios({
            method: "post",
            url: "http://192.168.0.239:8080/trips",
            data: {
                origin: "Kingston",
                destination: "Toronto",
                date: "2019-02-19"
            }
        })
            .then(results => console.warn(results.data))
            .catch(err => console.warn("something wrong occurred"))


    }

    render() {
        return (
            <View>
                <Text> Hello YOOOO</Text>
            </View>
        )
    }
}

export default TestScreen;
