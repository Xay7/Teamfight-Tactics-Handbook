import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, Dimensions } from 'react-native';
import bg from '../assets/bg.png';
const { width, height } = Dimensions.get('screen');
import Health from '../assets/UI/health.png';
import Cost from '../assets/UI/cost.png';
import Mana from '../assets/UI/mana.png';
import Damage from '../assets/UI/dps.png';
import AttackSpeed from '../assets/UI/attackspeed.png';
import AttackRange from '../assets/UI/attackrange.png';
import MagicResist from '../assets/UI/magicresist.png';
import Armor from '../assets/UI/armor.png';

const ChampionInfo = (props) => {
    const { navigation } = props;

    const name = navigation.getParam('name', 'Oops, something went wrong');

    const champion = require('../assets/index').champions["Gnar"]
    const firstOrigin = require('../assets/index').origin[champion.origin]
    const secondOrigin = require('../assets/index').origin[champion.originSecond]
    const firstClass = require('../assets/index').classes[champion.class]
    const secondClass = require('../assets/index').classes[champion.classSecond]
    const tier = require('../assets/index').tiers[champion.tier]

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
                    <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "center", marginVertical: 20 }}>
                        {tier && <Image source={tier.image} style={{ width: 30, height: 30 }} />}
                        <Text style={{ fontSize: 34, color: "white", fontWeight: "bold", textAlign: "center", marginLeft: 5 }}>{champion.name}</Text>
                    </View>
                    <View style={styles.headerContainer}>
                        <View style={{ marginRight: 5, alignItems: "center" }}>
                            <Image source={champion.image} style={{ height: 100, width: 100 }} />
                        </View>
                        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                            <View>
                                <View style={styles.statsWrapper}>
                                    <Image source={Cost} />
                                    <Text style={styles.statsText}>{champion.stats.cost}$</Text>
                                </View>
                                <View style={styles.statsWrapper}>
                                    <Image source={Health} />
                                    <Text style={styles.statsText}>{champion.stats.health}</Text>
                                </View>
                                <View style={styles.statsWrapper}>
                                    <Image source={Mana} />
                                    <Text style={styles.statsText}>{champion.stats.mana}</Text>
                                </View>
                                <View style={styles.statsWrapper}>
                                    <Image source={Damage} />
                                    <Text style={styles.statsText}>{champion.stats.damage}</Text>
                                </View>
                            </View>
                            <View style={{ marginLeft: 10 }}>
                                <View style={styles.statsWrapper}>
                                    <Image source={AttackSpeed} />
                                    <Text style={styles.statsText}>{champion.stats.attackSpeed}</Text>
                                </View>
                                <View style={styles.statsWrapper}>
                                    <Image source={AttackRange} />
                                    <Text style={styles.statsText}>{champion.stats.attackRange}</Text>
                                </View>
                                <View style={styles.statsWrapper}>
                                    <Image source={MagicResist} />
                                    <Text style={styles.statsText}>{champion.stats.magicResist}</Text>
                                </View>
                                <View style={styles.statsWrapper}>
                                    <Image source={Armor} />
                                    <Text style={styles.statsText}>{champion.stats.armor}</Text>
                                </View>
                            </View>
                        </View>
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
        height: "auto",
        paddingBottom: 10,
        justifyContent: "flex-start",
        alignItems: "flex-start",
        flexDirection: "row",
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
    statsWrapper: {
        flexDirection: "row",
        alignItems: "center",
        padding: 4
    },
    statsText: {
        fontSize: 14,
        color: "white",
        paddingLeft: 2
    }
})

export default ChampionInfo;
