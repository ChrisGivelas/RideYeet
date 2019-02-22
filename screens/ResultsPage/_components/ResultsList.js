import React, { Component } from "react"
import { View, StyleSheet } from "react-native"
import ResultPane from "./ResultPane"

const styles = StyleSheet.create({
    listPane: {
        flex: 1,
        paddingLeft: 20,
        paddingRight: 20,
        justifyContent: "center",
        margin: "auto"
    }
})

// ResultsList is a component that represents the collection of multiple cards
export default class ResultsList extends Component {
    render() {
        return (
            <View style={styles.listPane}>
                {this.props.results.map(result => (
                    <ResultPane
                        key={result.journeyId}
                        {...result}
                        onSelect={this.props.onSelect}
                        selected={this.props.selected}
                    />
                ))}
            </View>
        )
    }
}
