import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const Footer = () => {
    return (
        <View style={styles.container}>
            <Text style={{ color: "white" }}>Home</Text>
            <Text style={{ color: "white" }}>Champions</Text>
            <Text style={{ color: "white" }}>Items</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "black",
        height: 60,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center'
    }
})

export default Footer
