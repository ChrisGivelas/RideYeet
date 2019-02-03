import React from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';

const ViaRail = (props) => {
    return (
        <View style={styles.parentContainer}>
            <View style={styles.header}>
                <Text style={{ fontWeight: '500', fontSize: 15 }}> Via Rail</Text>
            </View>
            <View style={styles.grayPortion}>
                <Text style={styles.grayPortionText}>Toronto </Text>
                <Text style={styles.grayPortionText}> -> </Text>
                <Text style={styles.grayPortionText}> Kingston</Text>
            </View>
            <View style={styles.whitePortion}>
                <Text style={{ textAlign: 'center', fontWeight: '500', fontSize: 30, color: 'gray' }}> $75 </Text>
                <View style={{ width: '80%' }}>
                    <Text style={styles.fontYo}>Name</Text>
                    <TextInput multiline={true} style={{ borderColor: '#fdba12', width: '100%', borderWidth: 1 }} />
                </View>
                <View style={{ width: '80%' }}>
                    <Text style={styles.fontYo}>Credit Card Number</Text>
                    <TextInput multiline={true} style={{ borderColor: '#fdba12', width: '100%', borderWidth: 1 }} />
                </View>
                <View style={{ width: '80%' }}>
                    <Text style={styles.fontYo}>CVV</Text>
                    <TextInput multiline={true} style={{ borderColor: '#fdba12', width: '100%', borderWidth: 1 }} />
                </View>
                <Button title="Pay Now" color={"#fdba12"} />
            </View>
        </View>
    )
};

const styles = {
    parentContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    header: {
        height: '5%',
        width: '100%',
        padding: 10,
        backgroundColor: '#fdba12',
        alignItems: 'center',
        justifyContent: 'center'
    },
    grayPortion: {
        height: '10%',
        width: '100%',
        backgroundColor: 'grey',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center'
    },
    grayPortionText: {
        color: 'white',
        fontSize: 20,
        fontWeight: '500'
    },
    whitePortion: {
        height: '85%',
        width: '100%',
        flexDirection: "column",
        justifyContent: 'space-evenly',
        alignItems: 'center'
    },
    fontYo: {
        fontWeight: '500',
        fontSize: 16,
        color: 'gray'
    }

}

export default ViaRail;