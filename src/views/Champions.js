import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Image, ScrollView, TouchableOpacity, TextInput, Text, Dimensions, Picker } from 'react-native';
import { champions, origin, classes } from '../assets/index';
import Icon from 'react-native-vector-icons/AntDesign';
import Footer from '../components/Footer';
import Background from '../components/Background';
import Input from '../components/Input';

const Champions = (props) => {

    const [allChampions, setAllChampions] = useState(champions)

    const { width, height } = Dimensions.get('screen');

    const [inputValue, useInputValue] = useState('');

    const { navigate } = props.navigation;

    let championsList = Object.keys(allChampions).map((key, i) => {
        if (inputValue.length > 0) {
            if (allChampions[key].name.toLowerCase().includes(inputValue.toLowerCase())) {
                return <TouchableOpacity
                    key={allChampions[key].name}
                    onPress={() => navigate('ChampionInfo', {
                        name: allChampions[key].name
                    })}>
                    <View style={styles.allChampionsWrapper}>
                        <Image source={allChampions[key].image} style={styles.champion} />
                        <Text style={{ color: "white", fontSize: 20, fontWeight: "bold", marginHorizontal: 10 }}>{allChampions[key].name}</Text>
                        <Image source={origin[allChampions[key].origin].image} style={styles.synergy} />
                        {allChampions[key].originSecond && <Image source={origin[allChampions[key].originSecond].image} style={styles.synergy} ></Image>}
                        <Image source={classes[allChampions[key].class].image} style={styles.synergy} />
                        {allChampions[key].classSecond && <Image source={classes[allChampions[key].classSecond].image} style={styles.synergy} ></Image>}
                    </View>
                </TouchableOpacity>
            } else return null;
        } else {
            return <TouchableOpacity
                key={allChampions[key].name}
                onPress={() => navigate('ChampionInfo', {
                    name: allChampions[key].name
                })}>
                <View style={styles.allChampionsWrapper}>
                    <Image source={allChampions[key].image} style={styles.champion} />
                    <Text style={{ color: "white", fontSize: 20, fontWeight: "bold", marginHorizontal: 10 }}>{allChampions[key].name}</Text>
                    <Image source={origin[allChampions[key].origin].image} style={styles.synergy} />
                    {allChampions[key].originSecond && <Image source={origin[allChampions[key].originSecond].image} style={styles.synergy} ></Image>}
                    <Image source={classes[allChampions[key].class].image} style={styles.synergy} />
                    {allChampions[key].classSecond && <Image source={classes[allChampions[key].classSecond].image} style={styles.synergy} ></Image>}
                </View>
            </TouchableOpacity>
        }
    })

    return (
        <View style={{ flex: 1, height: height, width: width }}>
            <Background />
            <ScrollView>
                <Input onChange={useInputValue} placeholder="Find champions" />
                {championsList}
            </ScrollView>
            <Footer navigation={props.navigation} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "transparent",
        flexDirection: 'column',
    },
    champion: {
        height: 64,
        width: 64,
        margin: 5
    },
    allChampionsWrapper: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        marginHorizontal: 25,
        marginBottom: 5
    },
    search: {
        flex: 0.7,
        height: 51,
        backgroundColor: "white",
        borderColor: "#EEE",
        paddingRight: 30,
        textAlign: "center",
        fontSize: 25,
        color: "black",
        borderBottomRightRadius: 5,
        borderTopRightRadius: 5
    },
    searchContainer: {
        flex: 1,
        justifyContent: "center",
        flexDirection: "row",
        marginVertical: 30,
        borderColor: '#000',
    },
    synergy: {
        width: 24,
        height: 24,
        marginLeft: 10
    }
});

export default Champions;