import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Image, ScrollView, TouchableOpacity, Text, Dimensions, FlatList } from 'react-native';
import { champions, origin, classes } from '../assets/index';
import Footer from '../components/Footer';
import Background from '../components/Background';
import Input from '../components/Input';
import Loader from '../components/Loader';

const { width, height } = Dimensions.get('screen');

const Champions = (props) => {

    const [allChampions, setAllChampions] = useState([]);
    const [inputValue, useInputValue] = useState('');
    const [loading, setLoading] = useState(true);

    const { navigate } = props.navigation;

    useEffect(() => {
        const data = allChampions ? Object.values(champions) : []
        setAllChampions(data);
        setLoading(false);
    }, [])

    useEffect(() => {
        let filteredChampions = null;
        if (inputValue.length > 0) {
            filteredChampions = allChampions.filter(el => {
                console.log(el.name);
                console.log(inputValue);
                return el.name.toLowerCase().includes(inputValue.toLowerCase());
            })
        } else {
            filteredChampions = allChampions ? Object.values(champions) : []
        }
        setAllChampions(filteredChampions);
    }, [inputValue])


    return (
        <View style={{ flex: 1, height: height, width: width }}>
            <Background />
            <ScrollView>
                <Input onChange={useInputValue} placeholder="Find champions" />
                {loading && <Loader />}
                <FlatList data={allChampions} renderItem={({ item }) => <TouchableOpacity
                    key={item.name}
                    onPress={() => navigate('ChampionInfo', {
                        name: item.name
                    })}>
                    <View style={styles.allChampionsWrapper}>
                        <Image source={item.image} style={styles.champion} />
                        <Text style={{ color: "white", fontSize: 20, fontWeight: "bold", marginHorizontal: 10 }}>{item.name}</Text>
                        <Image source={origin[item.origin].image} style={styles.synergy} />
                        {item.originSecond && <Image source={origin[item.originSecond].image} style={styles.synergy} ></Image>}
                        <Image source={classes[item.class].image} style={styles.synergy} />
                        {item.classSecond && <Image source={classes[item.classSecond].image} style={styles.synergy} ></Image>}
                    </View>
                </TouchableOpacity>} />
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
    },
    allChampionsWrapper: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        marginHorizontal: 15,
        marginBottom: 5
    },
    synergy: {
        width: 24,
        height: 24,
        marginLeft: 10
    }
});

export default Champions;