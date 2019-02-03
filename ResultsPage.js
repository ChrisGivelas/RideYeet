import React from "react"
import { StyleSheet, Text, View, Button, Image } from "react-native"

const styles = StyleSheet.create({

});

class ResultPane extends React.Component {
    render() {

        const styles = StyleSheet.create({
            selected: {
                color: 'red',
                fontSize: 25,
                fontWeight: 'bold',
                textAlign: 'center',
                lineHeight: 100,
            },
            notSelected: {
                height: 400,
            },
        })

        return (
            <View style={this.props.selected ? styles.selected : styles.notSelected} onPress={() => this.onSelect(this.props.id)}>
                <Text>{`${this.props.departTime} - ${this.props.arriveTime}`}</Text>
                <Text>{this.props.description}</Text>
                <Text>{this.props.duration}</Text>
                <Text>{this.props.price}</Text>
                <Image source={require("./assets/megaBus.jpg")} alt={'Megabus Logo'} />
            </View>
        )
    }

}

class ResultsList extends React.Component {
    render() {
        return (
            <View>
                {this.props.results.map(result => <ResultPane {...result} onSelect={this.props.onSelect} selected={this.props.selected} />)}
            </View>
        )
    }
}

export default class Results extends React.Component {
    constructor(props) {
        super(props);

        this.setState({
            results: props.results,
            selected: undefined
        })
    }

    onSelect = (current) => this.setState((prev) => ({ results: prev.results, selected: current }))

    render() {
        return (
            <View>
                <ResultsList onSelect={this.onSelect} results={this.state.results} selected={this.state.selected}></ResultsList>
            </View>
        )
    }
}