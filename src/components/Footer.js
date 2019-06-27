import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { champions, origin, classes } from '../assets/index';

const Footer = (props) => {
    return (
        <View style={styles.container}>
            < TouchableOpacity onPress={() => props.navigation.navigate('Home')}>
                <Text style={{ color: "white" }} >News</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => props.navigation.navigate('Champions')}>
                <Text style={{ color: "white" }} >Champions</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => props.navigation.navigate('Items')}>
                <Text style={{ color: "white" }}>Items</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => props.navigation.navigate('Synergies')}>
                <Text style={{ color: "white" }}>Synergies</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "black",
        height: 70,
        width: "100%",
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        borderTopWidth: 1,
        borderTopColor: "#EEE"
    }
})

export default Footer
