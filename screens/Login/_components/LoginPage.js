import React, { Component } from "react"
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from "react-native"

const styles = StyleSheet.create({
    page: {

    },
    inputField: {

    },
    button: {
        
    }
})

export default class LoginPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: "sampletext",
            password: "sampletext"
        }
    }

    _onPressButton = () => {
        this.props.navigation.navigate("Booking")
    }

    updateEmail = text => {
        this.setState({ email: text })
    }

    updatePassword = text => {
        this.setState({ password: text })
    }

    render() {
        return (
            <View style={styles.page}>
                <TextInput style={styles.inputField} onChangeText={this.updateEmail(text)} value={this.state.email} />
                <TextInput
                    style={styles.inputField}
                    secureTextEntry={true}
                    onChangeText={this.updatePassword(text)}
                    value={this.state.password}
                />
                <TouchableOpacity onPress={this._onPressButton}>
                    <Image style={styles.button} />
                </TouchableOpacity>
            </View>
        )
    }
}
