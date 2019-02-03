import React, { Component } from 'react';
import { View, Picker, StyleSheet } from 'react-native'

class LocationPicker extends Component {
    constructor(props) {
        super(props)

        this.state = {
            selectedLocation: this.props.selected
        }
    }

    updateUser = (location) => {
        this.setState({ selectedLocation: location })
        this.props.changeState(location);
    }

    render() {
        return (
            <View >
                <Picker selectedValue={this.state.selectedLocation} onValueChange={this.updateUser} >
                    <Picker.Item label="Please select a city..." value="?" style={styles.pickerStyle} />
                    <Picker.Item label="Toronto" value="Toronto" style={styles.pickerStyle} />
                    <Picker.Item label="Montreal" value="Montreal" style={styles.pickerStyle} />
                    <Picker.Item label="Kingston" value="Kingston" style={styles.pickerStyle} />
                    <Picker.Item label="Waterloo" value="Waterloo" style={styles.pickerStyle} />
                    <Picker.Item label="Whitby" value="Whitby" style={styles.pickerStyle} />
                </Picker>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    text: {
        fontSize: 30,
        alignSelf: 'center',
        color: '#ff5c5c'
    },
    pickerStyle: {
        width: "50%"
    }
});

export default LocationPicker;