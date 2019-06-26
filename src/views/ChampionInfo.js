import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, Dimensions } from 'react-native';
import bg from '../assets/bg.png';
const { width, height } = Dimensions.get('screen');
const ChampionInfo = (props) => {
    const { navigation } = props;

    const name = navigation.getParam('name', 'Oops, something went wrong');

    const champion = require('../assets/index').champions["Aatrox"]
    const firstOrigin = require('../assets/index').origin[champion.origin]
    const secondOrigin = require('../assets/index').origin[champion.originSecond]
    const firstClass = require('../assets/index').classes[champion.class]
    const secondClass = require('../assets/index').classes[champion.classSecond]

    return (
        <View>
            <Image source={bg}
                style={{
                    position: "absolute",
                    height: height,
                    width: width,
                    top: 0,
                    left: 0,
                }} resizeMode="cover" />
            <ScrollView>
                <View style={styles.container}>
                    <View style={styles.headerContainer}>
                        <Image source={champion.image} style={{ height: 100, width: 100 }} />
                        <Text style={{ fontSize: 34, color: "white" }}>{champion.name}</Text>
                    </View>
                    <View style={styles.synergiesContainer}>
                        <View style={styles.synergyContainer}>
                            <Image source={champion.ability.image} style={styles.synergy} />
                            <View style={styles.synergyDescriptionContainer}>
                                <Text style={styles.textHeader}>{champion.ability.name}</Text>
                                <Text style={styles.text}>{champion.ability.description}</Text>
                            </View>
                        </View>
                        <View style={styles.synergyContainer}>
                            <Image source={firstOrigin.image} style={styles.synergy} />
                            <View style={styles.synergyDescriptionContainer}>
                                <Text style={styles.textHeader}>{firstOrigin.name}</Text>
                                <Text style={styles.text}>{firstOrigin.description}</Text>
                                {firstOrigin.ability ? firstOrigin.ability.first ?
                                    <View style={styles.synergyAbilityContainer}>
                                        <Text style={{ color: "white", fontSize: 18, fontWeight: "bold" }}>{firstOrigin.ability.first.amount}</Text>
                                        <Text style={{ color: "#AAA", paddingLeft: 20, fontSize: 16 }}>{firstOrigin.ability.first.effect}</Text>
                                    </View>
                                    : null : null}
                                {firstOrigin.ability ? firstOrigin.ability.second ?
                                    <View style={styles.synergyAbilityContainer}>
                                        <Text style={{ color: "white", fontSize: 18, fontWeight: "bold" }}>{firstOrigin.ability.second.amount}</Text>
                                        <Text style={{ color: "#AAA", paddingLeft: 20, fontSize: 16 }}>{firstOrigin.ability.second.effect}</Text>
                                    </View>
                                    : null : null}
                                {firstOrigin.ability ? firstOrigin.ability.third ?
                                    <View style={styles.synergyAbilityContainer}>
                                        <Text style={{ color: "white", fontSize: 18, fontWeight: "bold" }}>{firstOrigin.ability.third.amount}</Text>
                                        <Text style={{ color: "#AAA", paddingLeft: 20, fontSize: 16 }}>{firstOrigin.ability.third.effect}</Text>
                                    </View>
                                    : null : null}
                            </View>
                        </View>
                        {secondOrigin &&
                            <View style={styles.synergyContainer}>
                                <Image source={secondOrigin.image} style={styles.synergy} />
                                <View style={styles.synergyDescriptionContainer}>
                                    <Text style={styles.textHeader}>{secondOrigin.name}</Text>
                                    <Text style={styles.text}>{secondOrigin.description}</Text>
                                    {secondOrigin.ability ? secondOrigin.ability.first ?
                                        <View style={styles.synergyAbilityContainer}>
                                            <Text style={{ color: "white", fontSize: 18, fontWeight: "bold" }}>{secondOrigin.ability.first.amount}</Text>
                                            <Text style={{ color: "#AAA", paddingLeft: 20, fontSize: 16 }}>{secondOrigin.ability.first.effect}</Text>
                                        </View>
                                        : null : null}
                                    {secondOrigin.ability ? secondOrigin.ability.second ?
                                        <View style={styles.synergyAbilityContainer}>
                                            <Text style={{ color: "white", fontSize: 18, fontWeight: "bold" }}>{secondOrigin.ability.second.amount}</Text>
                                            <Text style={{ color: "#AAA", paddingLeft: 20, fontSize: 16 }}>{secondOrigin.ability.second.effect}</Text>
                                        </View>
                                        : null : null}
                                    {secondOrigin.ability ? secondOrigin.ability.third ?
                                        <View style={styles.synergyAbilityContainer}>
                                            <Text style={{ color: "white", fontSize: 18, fontWeight: "bold" }}>{secondOrigin.ability.third.amount}</Text>
                                            <Text style={{ color: "#AAA", paddingLeft: 20, fontSize: 16 }}>{secondOrigin.ability.third.effect}</Text>
                                        </View>
                                        : null : null}
                                </View>
                            </View>}
                        <View style={styles.synergyContainer}>
                            <Image source={firstClass.image} style={styles.synergy} />
                            <View style={styles.synergyDescriptionContainer}>
                                <Text style={styles.textHeader}>{firstClass.name}</Text>
                                <Text style={styles.text}>{firstClass.description}</Text>
                                {firstClass.ability ? firstClass.ability.first ?
                                    <View style={styles.synergyAbilityContainer}>
                                        <Text style={{ color: "white", fontSize: 18, fontWeight: "bold" }}>{firstClass.ability.first.amount}</Text>
                                        <Text style={{ color: "#AAA", paddingLeft: 20, fontSize: 16 }}>{firstClass.ability.first.effect}</Text>
                                    </View>
                                    : null : null}
                                {firstClass.ability ? firstClass.ability.second ?
                                    <View style={styles.synergyAbilityContainer}>
                                        <Text style={{ color: "white", fontSize: 18, fontWeight: "bold" }}>{firstClass.ability.second.amount}</Text>
                                        <Text style={{ color: "#AAA", paddingLeft: 20, fontSize: 16 }}>{firstClass.ability.second.effect}</Text>
                                    </View>
                                    : null : null}
                                {firstClass.ability ? firstClass.ability.third ?
                                    <View style={styles.synergyAbilityContainer}>
                                        <Text style={{ color: "white", fontSize: 18, fontWeight: "bold" }}>{firstClass.ability.third.amount}</Text>
                                        <Text style={{ color: "#AAA", paddingLeft: 20, fontSize: 16 }}>{firstClass.ability.third.effect}</Text>
                                    </View>
                                    : null : null}
                            </View>
                        </View>
                        {secondClass && <View style={styles.synergyContainer}>
                            <Image source={secondClass.image} style={styles.synergy} />
                            <View style={styles.synergyDescriptionContainer}>
                                <Text style={styles.textHeader}>{secondClass.name}</Text>
                                <Text style={styles.text}>{secondClass.description}</Text>
                                {secondClass.ability ? secondClass.ability.first ?
                                    <View style={styles.synergyAbilityContainer}>
                                        <Text style={{ color: "white", fontSize: 18, fontWeight: "bold" }}>{secondClass.ability.first.amount}</Text>
                                        <Text style={{ color: "#AAA", paddingLeft: 20, fontSize: 16 }}>{secondClass.ability.first.effect}</Text>
                                    </View>
                                    : null : null}
                                {secondClass.ability ? secondClass.ability.second ?
                                    <View style={styles.synergyAbilityContainer}>
                                        <Text style={{ color: "white", fontSize: 18, fontWeight: "bold" }}>{secondClass.ability.second.amount}</Text>
                                        <Text style={{ color: "#AAA", paddingLeft: 20, fontSize: 16 }}>{secondClass.ability.second.effect}</Text>
                                    </View>
                                    : null : null}
                                {secondClass.ability ? secondClass.ability.third ?
                                    <View style={styles.synergyAbilityContainer}>
                                        <Text style={{ color: "white", fontSize: 18, fontWeight: "bold" }}>{secondClass.ability.third.amount}</Text>
                                        <Text style={{ color: "#AAA", paddingLeft: 20, fontSize: 16 }}>{secondClass.ability.third.effect}</Text>
                                    </View>
                                    : null : null}
                            </View>
                        </View>}
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    headerContainer: {
        height: 160,
        justifyContent: "flex-start",
        alignItems: "center",
        marginTop: 20,
        marginHorizontal: 20,
        borderBottomColor: '#505050',
        borderBottomWidth: 1,
    },
    synergy: {
        width: 64,
        height: 64,
    },
    synergiesContainer: {
        flex: 1,
    },
    synergyContainer: {
        flexDirection: "row",
        padding: 20,
        marginHorizontal: 20,
        borderBottomColor: '#505050',
        borderBottomWidth: 1,
    },
    synergyDescriptionContainer: {
        flex: 1,
        flexDirection: "column",
        paddingHorizontal: 20,
    },
    synergyAbilityContainer: {
        flexDirection: "row",
        marginVertical: 5,
    },
    text: {
        color: "#DDD",
        fontSize: 16,
        paddingVertical: 5
    },
    textHeader: {
        fontSize: 24,
        color: "white",
    }
})

export default ChampionInfo;
