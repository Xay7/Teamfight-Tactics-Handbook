import React, { useState } from 'react';
import { View, Text, ScrollView, } from 'react-native';
import Background from '../components/Background';
import { origin, classes } from '../assets/index';
import Footer from '../components/Footer';
import Synergy from '../components/Synergy';
import Input from '../components/Input';

const Synergies = (props) => {

    const [inputValue, useInputValue] = useState('');

    const origins = Object.keys(origin).map((el, index) => {
        if (inputValue.length > 0) {
            if (el.toLowerCase().includes(inputValue.toLowerCase())) {
                return <View style={{ flex: 1, flexDirection: "column", flexWrap: "wrap", alignItems: "center", marginHorizontal: 20 }} key={index}>
                    <Synergy
                        image={origin[el].image}
                        ability={origin[el].ability && origin[el].ability}
                        name={origin[el].name}
                        description={origin[el].description}
                        navigation={props.navigation}
                    />
                </View>
            } else return null;
        } else
            return <View style={{ flex: 1, flexDirection: "column", flexWrap: "wrap", alignItems: "center", marginHorizontal: 20 }} key={index}>
                <Synergy
                    image={origin[el].image}
                    ability={origin[el].ability && origin[el].ability}
                    name={origin[el].name}
                    description={origin[el].description}
                    navigation={props.navigation}
                />
            </View>
    })

    const classs = Object.keys(classes).map((el, index) => {
        if (inputValue.length > 0) {
            if (el.toLowerCase().includes(inputValue.toLowerCase())) {
                return <View style={{ flex: 1, flexDirection: "column", flexWrap: "wrap", alignItems: "center", marginHorizontal: 20 }} key={index}>
                    <Synergy
                        image={classes[el].image}
                        ability={classes[el].ability && classes[el].ability}
                        name={classes[el].name}
                        description={classes[el].description}
                        navigation={props.navigation}
                    />
                </View>
            } else return null;
        } else
            return <View style={{ flex: 1, flexDirection: "column", flexWrap: "wrap", alignItems: "center", marginHorizontal: 20 }} key={index}>
                <Synergy
                    image={classes[el].image}
                    ability={classes[el].ability && classes[el].ability}
                    name={classes[el].name}
                    description={classes[el].description}
                    navigation={props.navigation}
                />
            </View>
    })

    return (
        <View style={{ flex: 1 }}>
            <Background />
            <ScrollView>
                <Input placeholder="Find synergies" onChange={useInputValue} />
                {origins}
                {classs}
            </ScrollView>
            <Footer navigation={props.navigation} />
        </View>
    )
}

export default Synergies
