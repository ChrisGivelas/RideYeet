import React from 'react';
import { View, StyleSheet } from 'react-native';

import ResultPane from './ResultPane';

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
};

const styles = StyleSheet.create({
    listPane: {
        flex: 1,
        paddingLeft: 20,
        paddingRight: 20,
        justifyContent: "center",
        margin: "auto"
    },
})




export default ResultsList;