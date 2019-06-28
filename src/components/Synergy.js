import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { champions } from '../assets/index';

const ChampionAbility = (props) => {
    return (
        <View style={{ flex: 1 }}>
            <View style={styles.synergyContainer}>
                <Image source={props.image} style={styles.synergy} />
                <View style={styles.synergyDescriptionContainer}>
                    <Text style={styles.textHeader}>{props.name}</Text>
                    <Text style={styles.text}>{props.description}</Text>
                    {props.ability ? props.ability[1] ?
                        <View style={styles.synergyAbilityContainer}>
                            <Text style={{ color: "white", fontSize: 18, fontWeight: "bold" }}>{props.ability[1].amount}</Text>
                            <Text style={{ color: "#AAA", paddingLeft: 20, fontSize: 16 }}>{props.ability[1].effect}</Text>
                        </View>
                        : null : null}
                    {props.ability ? props.ability[2] ?
                        <View style={styles.synergyAbilityContainer}>
                            <Text style={{ color: "white", fontSize: 18, fontWeight: "bold" }}>{props.ability[2].amount}</Text>
                            <Text style={{ color: "#AAA", paddingLeft: 20, fontSize: 16 }}>{props.ability[2].effect}</Text>
                        </View>
                        : null : null}
                    {props.ability ? props.ability[3] ?
                        <View style={styles.synergyAbilityContainer}>
                            <Text style={{ color: "white", fontSize: 18, fontWeight: "bold" }}>{props.ability[3].amount}</Text>
                            <Text style={{ color: "#AAA", paddingLeft: 20, fontSize: 16 }}>{props.ability[3].effect}</Text>
                        </View>
                        : null : null}

                </View>
                <View>

                </View>
            </View>
            <View style={styles.championsContainer}>
                {Object.keys(champions).map(el => {
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
        paddingTop: 10,
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
        paddingVertical: 3
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
    }
})

export default ChampionAbility
