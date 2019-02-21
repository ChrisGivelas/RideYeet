import React, { Component } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import LocationPicker from './LocationPicker.js';
import DatePicker from 'react-native-datepicker';


class BookingScreen extends Component {

    constructor(props) {
        super(props)
        this.state = {
            origin: '?',
            desination: '?',
            date: (new Date).getFullYear() + "-" + ("0" + ((new Date).getMonth() + 1)).slice(-2) + "-" + (new Date).getDate()
        };
    }

    // travelOptions = { ...this.state }

    changeOrig = (location) => {
        this.setState((prev) => ({ ...prev, origin: location }));
    };

    changeDest = (location) => {
        this.setState((prev) => ({ ...prev, destination: location }));
    }

    // Write code to navigate to search results here here
    onPressBook = () => this.props.navigation.navigate("Results", { ...this.state, vendor: 'Megabus' });

    render() {
        return (
            <View styles={styles.container}>
                <View style={styles.imageContainer}>
                    <View styles={styles.imageSubcontainer} >
                        <Image source={require('../assets/flying-city.png')} style={styles.imageStyle} />
                        <Text style={{ color: '#ff5c5c', fontWeight: '500' }}>{this.state.origin !== '?' ? this.state.origin : ""} </Text>
                    </View>
                    <View styles={styles.imageSubcontainer}>
                        <Image source={require('../assets/arrow.png')} style={styles.arrowStyle} />
                    </View>
                    <View style={styles.imageSubcontainer}>
                        <Image source={require('../assets/smart-city-2.png')} style={styles.imageStyle} />
                        <Text style={{ color: '#ff5c5c', fontWeight: '500' }}>{this.state.destination !== '?' ? this.state.destination : ""} </Text>
                    </View>
                </View>
                <View style={styles.pickerContainer}>
                    <View style={styles.centration}>
                        <Text style={{ color: '#ff5c5c', fontWeight: '400' }}>Origin </Text>
                        <LocationPicker changeState={this.changeOrig} selected={this.state.origin} />
                        <Text style={{ color: '#ff5c5c', fontWeight: '400' }}>Destination </Text>
                        <LocationPicker changeState={this.changeDest} selected={this.state.desination} />
                        <View style={{ alignItems: 'center' }}>
                            <DatePicker
                                style={{ width: 200, padding: 20 }}
                                date={this.state.date}
                                mode="date"
                                placeholder={(new Date).getFullYear() + "-" + ("0" + ((new Date).getMonth() + 1)).slice(-2) + "-" + (new Date).getDate()}
                                format="YYYY-MM-DD"
                                minDate="2019-02-04"
                                maxDate="2022-02-04"
                                confirmBtnText="Confirm"
                                cancelBtnText="Cancel"
                                customStyles={{
                                    dateIcon: {
                                        position: 'absolute',
                                        left: 0,
                                        top: 4,
                                        marginLeft: 0
                                    },
                                    dateInput: {
                                        marginLeft: 36
                                    }
                                    // ... You can check the source to find the other keys.
                                }}
                                onDateChange={(date) => { this.setState({ date: date }) }}
                            />
                        </View>
                    </View>
                </View>
                <View style={styles.buttonContainer} >
                    <TouchableOpacity onPress={this.onPressBook} style={styles.buttonStyle} >
                        <Text style={styles.buttonText}> BOOK NOW </Text>
                    </TouchableOpacity>
                </View>
            </View >

        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        // alignItems: 'center',
        // justifyContent: 'center',
    },
    imageContainer: {
        width: "100%",
        height: "40%",
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center'
    },
    pickerContainer: {
        alignItems: 'center',
        width: "100%",
        height: "40%",

    },
    buttonContainer: {
        width: "100%",
        flexDirection: 'row',
        justifyContent: 'center',
        height: "15%",
        alignItems: 'center'

    },
    textStyle: {
        fontWeight: "500",
        fontSize: 25
    },
    imageStyle: {
        height: 100,
        width: 100
    },
    arrowStyle: {
        height: 50,
        width: 50
    },
    buttonText: {
        color: 'white',
        fontWeight: '500'
    },
    buttonStyle: {
        padding: 15,
        backgroundColor: '#ff5c5c',
        borderRadius: 4
    },
    centration: {
        width: "80%",
    }
})


export default BookingScreen;
