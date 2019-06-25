import React from 'react';
import { StyleSheet, Text, View, Button, Image, ScrollView } from 'react-native';

const ChampionInfo = (props) => {

    const { navigation } = props;
    const name = navigation.getParam('name', 'Oops, something went wrong');

    return (
        <Text>{name}</Text>
    )
}

export default ChampionInfo;
