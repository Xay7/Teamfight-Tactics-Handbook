import React, { useState } from 'react';
import { StyleSheet, View, Image, ScrollView, TouchableOpacity, TextInput, Text, Dimensions } from 'react-native';
import { championCircle } from '../assets/index';
import bg from '../assets/bg.png';
import SearchIcon from '../assets/UI/baseline_search_black_18dp.png';
import Icon from 'react-native-vector-icons/AntDesign';

const Champions = (props) => {

    const { width, height } = Dimensions.get('screen');

    const [inputValue, useInputValue] = useState('');

    const { navigate } = props.navigation;

    let champions = championCircle.map((el, index) => {
        if (inputValue.length > 0) {
            if (el.name.toLowerCase().includes(inputValue.toLowerCase())) {
                return <TouchableOpacity
                    key={el.name}
                    onPress={() => navigate('ChampionsInfo', {
                        name: el.name
                    })}>
                    <View style={styles.championsWrapper}>
                        <Image source={el.image} style={styles.champion} />
                        <Text style={{ color: "white", fontSize: 24, fontWeight: "bold", marginHorizontal: 10 }}>{el.name}</Text>
                        <Image source={el.originImage} style={styles.synergy} />
                        {el.originImageSecond && <Image source={el.originImageSecond} style={styles.synergy} ></Image>}
                        {el.classImageSecond && <Image source={el.classImageSecond} style={styles.synergy} ></Image>}
                        <Image source={el.classImage} style={styles.synergy} />
                    </View>
                </TouchableOpacity>
            } else return null;
        } else {
            return <TouchableOpacity
                key={el.name}
                onPress={() => navigate('ChampionsInfo', {
                    name: el.name
                })}>
                <View style={styles.championsWrapper}>
                    <Image source={el.image} style={styles.champion} />
                    <Text style={{ color: "white", fontSize: 24, fontWeight: "bold", marginHorizontal: 10 }}>{el.name}</Text>
                    <Image source={el.originImage} style={styles.synergy} />
                    {el.originImageSecond && <Image source={el.originImageSecond} style={styles.synergy} ></Image>}
                    {el.classImageSecond && <Image source={el.classImageSecond} style={styles.synergy} ></Image>}
                    <Image source={el.classImage} style={styles.synergy} />
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
                    {champions}
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