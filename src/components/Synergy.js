import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { champions } from '../assets/index';

const ChampionAbility = (props) => {

    const [championList, setChampionsList] = useState([])

    useEffect(() => {
        setChampionsList(Object.keys(champions))
    }, [])

    return (
        <View style={{
            flex: 1, paddingTop: 10,
            marginHorizontal: 10
        }}>
            <View style={styles.synergyContainer}>
                <Image source={props.image} style={styles.synergy} />
                <View style={styles.synergyDescriptionContainer}>
                    <Text style={styles.textHeader}>{props.name}</Text>
                    <Text style={styles.text}>{props.description}</Text>
                    {props.ability ? props.ability[1] ?
                        <View style={styles.synergyAbilityContainer}>
                            <Text style={styles.amount}>{props.ability[1].amount}</Text>
                            <Text style={styles.effect}>{props.ability[1].effect}</Text>
                        </View>
                        : null : null}
                    {props.ability ? props.ability[2] ?
                        <View style={styles.synergyAbilityContainer}>
                            <Text style={styles.amount}>{props.ability[2].amount}</Text>
                            <Text style={styles.effect}>{props.ability[2].effect}</Text>
                        </View>
                        : null : null}
                    {props.ability ? props.ability[3] ?
                        <View style={styles.synergyAbilityContainer}>
                            <Text style={styles.amount}>{props.ability[3].amount}</Text>
                            <Text style={styles.effect}>{props.ability[3].effect}</Text>
                        </View>
                        : null : null}

                </View>
                <View>

                </View>
            </View>
            <View style={styles.championsContainer}>
                {championList.map(el => {
                    if (props.name === champions[el].origin) {
                        return <TouchableOpacity onPress={() => props.navigation.navigate('ChampionInfo', {
                            name: el
                        })} key={el} style={{ padding: 5 }}>
                            <Image source={champions[el].image} style={{ height: 48, width: 48 }} />
                        </TouchableOpacity>
                    }
                    if (props.name === champions[el].class) {
                        return <TouchableOpacity onPress={() => props.navigation.navigate('ChampionInfo', {
                            name: el
                        })} key={el} style={{ padding: 5 }}>
                            <Image source={champions[el].image} style={{ height: 48, width: 48 }} />
                        </TouchableOpacity>
                    }

                })}
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    synergy: {
        width: 64,
        height: 64,
    },
    synergyContainer: {
        flexDirection: "row",
        width: "100%",
    },
    synergyDescriptionContainer: {
        flex: 1,
        flexDirection: "column",
        paddingHorizontal: 10,
    },
    synergyAbilityContainer: {
        flexDirection: "row",
        marginVertical: 5,
    },
    text: {
        color: "#CCC",
        fontSize: 16,
        flexShrink: 1
    },
    textHeader: {
        fontSize: 24,
        color: "white",
    },
    championsContainer: {
        flexDirection: "row",
        flexWrap: "wrap",
        borderBottomColor: "#505050",
        borderBottomWidth: 1,
        alignItems: "center",
        justifyContent: "center",
        paddingVertical: 5
    },
    amount: {
        color: "white",
        fontSize: 18,
        fontWeight: "bold"
    },
    effect: {
        color: "#AAA",
        paddingLeft: 20,
        fontSize: 16
    }
})

export default ChampionAbility
