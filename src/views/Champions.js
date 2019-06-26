import React, { useState } from 'react';
import { StyleSheet, View, Image, ScrollView, TouchableOpacity, TextInput, Text, Dimensions } from 'react-native';
import { champions, origin, classes } from '../assets/index';
import bg from '../assets/bg.png';
import Icon from 'react-native-vector-icons/AntDesign';


const Champions = (props) => {

    const { width, height } = Dimensions.get('screen');

    const [inputValue, useInputValue] = useState('');

    const { navigate } = props.navigation;

    let championsList = Object.keys(champions).map((key, i) => {
        if (inputValue.length > 0) {
            if (champions[key].name.toLowerCase().includes(inputValue.toLowerCase())) {
                return <TouchableOpacity
                    key={champions[key].name}
                    onPress={() => navigate('ChampionInfo', {
                        name: champions[key].name
                    })}>
                    <View style={styles.championsWrapper}>
                        <Image source={champions[key].image} style={styles.champion} />
                        <Text style={{ color: "white", fontSize: 24, fontWeight: "bold", marginHorizontal: 10 }}>{champions[key].name}</Text>
                        <Image source={origin[champions[key].origin].image} style={styles.synergy} />
                        {champions[key].originSecond && <Image source={origin[champions[key].originSecond].image} style={styles.synergy} ></Image>}
                        <Image source={classes[champions[key].class].image} style={styles.synergy} />
                        {champions[key].classSecond && <Image source={classes[champions[key].classSecond].image} style={styles.synergy} ></Image>}
                    </View>
                </TouchableOpacity>
            } else return null;
        } else {
            return <TouchableOpacity
                key={champions[key].name}
                onPress={() => navigate('ChampionInfo', {
                    name: champions[key].name
                })}>
                <View style={styles.championsWrapper}>
                    <Image source={champions[key].image} style={styles.champion} />
                    <Text style={{ color: "white", fontSize: 24, fontWeight: "bold", marginHorizontal: 10 }}>{champions[key].name}</Text>
                    <Image source={origin[champions[key].origin].image} style={styles.synergy} />
                    {champions[key].originSecond && <Image source={origin[champions[key].originSecond].image} style={styles.synergy} ></Image>}
                    <Image source={classes[champions[key].class].image} style={styles.synergy} />
                    {champions[key].classSecond && <Image source={classes[champions[key].classSecond].image} style={styles.synergy} ></Image>}
                </View>
            </TouchableOpacity>
        }
    })

    return (
        <View style={{ flex: 1, height: height, width: width }}>
            <Image source={bg}
                style={{
                    position: "absolute",
                    height: "100%",
                    width: "100%",
                    top: 0,
                    left: 0,
                }} resizeMode="cover" />
            <ScrollView>
                <View style={styles.container}  >
                    <View style={styles.searchContainer} >
                        <Icon name="search1" size={25} color="#000" style={{ backgroundColor: "#EEE", padding: 25 / 2 }} />
                        <TextInput
                            style={styles.search}
                            placeholder="Find champions"
                            onChangeText={(text) => useInputValue(text)} >
                        </TextInput>
                    </View>
                    {championsList}
                </View>
            </ScrollView>
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
        height: 70,
        width: 70,
        margin: 5
    },
    championsWrapper: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        paddingHorizontal: 10,
        marginBottom: 5
    },
    search: {
        width: "70%",
        height: 51,
        backgroundColor: "#EEE",
        borderColor: "#EEE",
        paddingRight: 30,
        textAlign: "center",
        fontSize: 25,
        color: "blue",
    },
    searchContainer: {
        flex: 1,
        justifyContent: "center",
        flexDirection: "row",
        marginVertical: 30,
        borderColor: '#000',
    },
    synergy: {
        width: 36,
        height: 36,
        marginLeft: 10
    }
});

export default Champions;