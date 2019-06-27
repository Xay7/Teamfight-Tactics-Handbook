import React from 'react';
import { View, Text, ScrollView, Image } from 'react-native';
import Footer from '../components/Footer';
import Background from '../components/Background'
import { items } from '../assets/index';

const Items = (props) => {
    return (
        <View style={{ flex: 1 }}>
            <Background />
            <ScrollView>
                <Image source={items["B.F Sword"].image} />
            </ScrollView>
            <Footer navigation={props.navigation} />
        </View >

    )
}

export default Items
