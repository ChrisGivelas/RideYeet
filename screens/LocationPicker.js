import React, { Component } from 'react';
import { View, Picker, StyleSheet } from 'react-native'

class LocationPicker extends Component {
    state = {
        selectedLocation: ''
    }

    updateUser = (location) => {
        this.props.changeState(location);
        this.setState({ selectedLocation: location })
    }

    render() {
        return (
            <View >
                <Picker selectedValue={this.state.selectedLocation} onValueChange={this.updateUser} >
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