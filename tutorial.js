import React from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';

export default class Tutorial extends React.Component {

    render() {
        return (
            <View style={styles.container}>
                <Image
                    style={{}}
                    source={"RideYeet/assets/alternateLOGO"}
                />
                <Image
                    style={{}}
                    source={"RideYeet/assets/alternateLOGO"}
                />
                <Image
                    style={{}}
                    source={"RideYeet/assets/alternateLOGO"}
                />
                <Image
                    style={{}}
                    source={"RideYeet/assets/alternateLOGO"}
                />
                <Text>WELCOME TO RIDEYEET!</Text>
                <Button title="proceed"><Text>Proceed!</Text></Button>
                <Button title="skip"><Text>Skip!</Text></Button>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    welcomebanner: {

    }
});
