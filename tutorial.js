import React from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';

export class Tutorial extends React.Component {

    render() {
        return (
            <View style={styles.container}>
                <Image
                    style={styles.gologo}
                    source={"./assets/goLogo.jpg"}
                />
                <Image
                    style={styles.megalogo}
                    source={"./assets/megaBus.jpg"}
                />
                <Image
                    style={styles.kajlogo}
                    source={"./assets/kajLogo.png"}
                />
                <Image
                    style={styles.vialogo}
                    source={"./assets/viaLogo.jpg"}
                />
                <Text style={style.aboutheader}>What we do</Text>
                <Text style={style.aboutbody}>Lorem ipsum dolor sit amet, ei saperet eleifend percipitur sed. Pri idque ignota ad. Ut sea diam aeque cetero, vis porro voluptua menandri no, liber bonorum nam ei. Pro causae constituam inciderint te, denique nominavi suavitate cu mel.</Text>
                <Button title="back"><Text>back</Text></Button>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        display: flex,
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'Seashell',
    },
    gologo: {
        width: 100,
        height: 100,
        borderRadius: 25,
        margin: 'auto',

    },
    megalogo: {
        width: 100,
        height: 100,
        borderRadius: "25px",
        margin: 'auto',
    },
    kajlogo: {
        width: 100,
        height: 100,
        borderRadius: "25px",
        margin: 'auto',
    },
    vialogo: {
        width: 100,
        height: 100,
        borderRadius: "25px",
        margin: 'auto',
    },
    aboutheader: {
        font: "verdana",
        fontWeight: 'bold',
        fontSize: '24em',
        textColor: 'FF5C5C',
        margin: 'auto',
    },
    aboutbody: {
        font: 'verdana',
        fontSize: '12em',
        textColor: 'DarkSlateGrey',
        margin: 'auto',
    },
    backbutton: {
        font: 'verdana',
        fontSize: '12em',
        color: 'DarkSlateGrey',
        margin: 'auto',
    }
});
