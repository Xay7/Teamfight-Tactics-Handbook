import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Keyboard } from 'react-native';

const Footer = (props) => {

    const [keyboardShown, useKeyboardShown] = useState(false);

    useEffect(() => {
        keyboardDidShowListener = Keyboard.addListener(
            'keyboardDidShow',
            this._keyboardDidShow,
        );
        keyboardDidHideListener = Keyboard.addListener(
            'keyboardDidHide',
            this._keyboardDidHide,
        );

        return () => {
            this.keyboardDidShowListener.remove();
            this.keyboardDidHideListener.remove();
        }
    }, [])

    _keyboardDidShow = () => {
        useKeyboardShown(true);
    }

    _keyboardDidHide = () => {
        useKeyboardShown(false);
    }

    return (
        <View style={keyboardShown ? styles.hidden : styles.container}>
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
        </View >
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "rgba(0,0,0,0.7)",
        height: 70,
        width: "100%",
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        borderTopWidth: 1,
        borderTopColor: "#505050",
    },
    hidden: {
        display: "none"
    }
})

export default Footer
