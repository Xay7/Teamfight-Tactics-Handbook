import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, Dimensions } from 'react-native';
import bg from '../assets/bg.png';
import Health from '../assets/UI/health.png';
import Cost from '../assets/UI/cost.png';
import Mana from '../assets/UI/mana.png';
import Damage from '../assets/UI/dps.png';
import AttackSpeed from '../assets/UI/attackspeed.png';
import AttackRange from '../assets/UI/attackrange.png';
import MagicResist from '../assets/UI/magicresist.png';
import Armor from '../assets/UI/armor.png';
import Footer from '../components/Footer';
import Synergy from '../components/Synergy';

const { width, height } = Dimensions.get('screen');

const ChampionInfo = (props) => {

    const name = props.navigation.getParam('name', 'Oops, something went wrong');

    const champion = require('../assets/index').champions[name]
    const firstOrigin = require('../assets/index').origin[champion.origin]
    const secondOrigin = require('../assets/index').origin[champion.originSecond]
    const firstClass = require('../assets/index').classes[champion.class]
    const secondClass = require('../assets/index').classes[champion.classSecond]
    const tier = require('../assets/index').tiers[champion.tier]

    return (
        <View style={{ flex: 1 }}>
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
                        <Synergy
                            image={firstOrigin.image}
                            ability={firstOrigin.ability && firstOrigin.ability}
                            name={firstOrigin.name}
                            description={firstOrigin.description}
                        />
                        {secondOrigin &&
                            <Synergy
                                image={secondOrigin.image}
                                ability={secondOrigin.ability && secondOrigin.ability}
                                name={secondOrigin.name}
                                description={secondOrigin.description}
                            />
                        }
                        <Synergy
                            image={firstClass.image}
                            ability={firstClass.ability && firstClass.ability}
                            name={firstClass.name}
                            description={firstClass.description}
                        />
                        {secondClass &&
                            <Synergy
                                image={secondClass.image}
                                ability={secondClass.ability && secondClass.ability}
                                name={secondClass.name}
                                description={secondClass.description}
                            />
                        }
                    </View>
                </View>
            </ScrollView>
            <Footer navigation={props.navigation} />
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
