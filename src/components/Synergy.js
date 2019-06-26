import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const ChampionAbility = (props) => {
    return (
        <View style={styles.synergyContainer}>
            <Image source={props.image} style={styles.synergy} />
            <View style={styles.synergyDescriptionContainer}>
                <Text style={styles.textHeader}>{props.name}</Text>
                <Text style={styles.text}>{props.description}</Text>
                {props.ability ? props.ability.first ?
                    <View style={styles.synergyAbilityContainer}>
                        <Text style={{ color: "white", fontSize: 18, fontWeight: "bold" }}>{props.ability.first.amount}</Text>
                        <Text style={{ color: "#AAA", paddingLeft: 20, fontSize: 16 }}>{props.ability.first.effect}</Text>
                    </View>
                    : null : null}
                {props.ability ? props.ability.second ?
                    <View style={styles.synergyAbilityContainer}>
                        <Text style={{ color: "white", fontSize: 18, fontWeight: "bold" }}>{props.ability.second.amount}</Text>
                        <Text style={{ color: "#AAA", paddingLeft: 20, fontSize: 16 }}>{props.ability.second.effect}</Text>
                    </View>
                    : null : null}
                {props.ability ? props.ability.third ?
                    <View style={styles.synergyAbilityContainer}>
                        <Text style={{ color: "white", fontSize: 18, fontWeight: "bold" }}>{props.ability.third.amount}</Text>
                        <Text style={{ color: "#AAA", paddingLeft: 20, fontSize: 16 }}>{props.ability.third.effect}</Text>
                    </View>
                    : null : null}
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
        paddingVertical: 15,
        marginHorizontal: 20,
        borderBottomColor: '#505050',
        borderBottomWidth: 1,
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
        color: "#DDD",
        fontSize: 16,
        paddingVertical: 3
    },
    textHeader: {
        fontSize: 24,
        color: "white",
    },
})

export default ChampionAbility
