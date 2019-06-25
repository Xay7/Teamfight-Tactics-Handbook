import React from 'react';
import { StyleSheet, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import { championCircle } from '../assets/index';

const Champions = (props) => {

    const { navigate } = props.navigation;

    const rows = championCircle.map((el, index) => {
        if (index % 5 === 0 || index === 0) {
            return <View key={index} style={styles.championsWrapper}>
                {championCircle.slice(index, index + 5).map(el => {
                    return <TouchableOpacity key={el.name} onPress={() => navigate('ChampionsInfo', {
                        name: el.name
                    })}>
                        <Image source={el.image} style={styles.champion} />
                    </TouchableOpacity>

                })}
            </View>
        } return null
    })


    return (
        <ScrollView>
            <View style={styles.container}>
                {rows}
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        flexDirection: 'column',
        paddingVertical: 20
    },
    champion: {
        height: 70,
        width: 70,
    },
    championsWrapper: {
        backgroundColor: "white",
        height: 80,
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center"
    }
});

export default Champions;