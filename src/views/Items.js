import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import Footer from '../components/Footer';
import Background from '../components/Background'
import { items } from '../assets/index';
import Health from '../assets/UI/health.png';
import Mana from '../assets/UI/mana.png';
import Damage from '../assets/UI/dps.png';
import AttackSpeed from '../assets/UI/attackspeed.png';
import MagicResist from '../assets/UI/magicresist.png';
import AbilityPower from '../assets/UI/ap.png';
import Armor from '../assets/UI/armor.png';

const Items = (props) => {

    const [recipes, setRecipes] = useState([]);
    const [selected, setSelected] = useState();
    const [baseItems, setBaseItems] = useState([
        "B.F Sword",
        "Recurve Bow",
        "Needlessly Large Rod",
        "Tear of the Goddess",
        "Chain Vest",
        "Negatron Cloak",
        "Giant's Belt",
        "Spatula"
    ])

    showRecipes = (item, index) => {
        const foundRecipes = Object.keys(items[item].recipes).map(el => {
            return items[el];
        })
        setSelected(index);
        setRecipes(foundRecipes);
    }

    useEffect(() => {
        showRecipes("B.F Sword", 0);
    }, [])

    isSelected = (ind) => {
        return selected === ind ? styles.topImageSelected : styles.topImage;
    }

    return (
        <View style={{ flex: 1 }}>
            <Background />
            <ScrollView>
                <View style={styles.topImageWrapper}>
                    {baseItems.map((el, index) => {
                        return <TouchableOpacity onPress={() => showRecipes(el, index)} style={styles.topImageTouchable} key={el}>
                            <Image source={items[el].image} style={isSelected(index)} />
                        </TouchableOpacity>
                    })}
                </View>
                <FlatList data={recipes} renderItem={({ item, index }) => <View style={styles.itemWrapper}>
                    <Image source={items[baseItems[index]].image} style={styles.baseItemImage} />
                    <Image source={item.image} style={styles.itemImage} />
                    <View style={{ marginHorizontal: 10 }}>
                        {item.ad &&
                            <View style={{ flexDirection: "row" }}>
                                <Image source={Damage} />
                                <Text style={styles.iconText}>{item.ad}</Text>
                            </View>
                        }
                        {item.ap &&
                            <View style={{ flexDirection: "row" }}>
                                <Image source={AbilityPower} />
                                <Text style={styles.iconText}>{item.ap}</Text>
                            </View>}
                        {item.mr &&
                            <View style={{ flexDirection: "row" }}>
                                <Image source={MagicResist} />
                                <Text style={styles.iconText}>{item.mr}</Text>
                            </View>}
                        {item.armor &&
                            <View style={{ flexDirection: "row" }}>
                                <Image source={Armor} />
                                <Text style={styles.iconText}>{item.armor}</Text>
                            </View>}
                        {item.health &&
                            <View style={{ flexDirection: "row" }}>
                                <Image source={Health} />
                                <Text style={styles.iconText}>{item.health}</Text>
                            </View>}
                        {item.as &&
                            <View style={{ flexDirection: "row" }}>
                                <Image source={AttackSpeed} />
                                <Text style={styles.iconText}>{item.as}</Text>
                            </View>}
                        {item.mana &&
                            <View style={{ flexDirection: "row" }}>
                                <Image source={Mana} />
                                <Text style={styles.iconText}>{item.mana}</Text>
                            </View>}
                    </View>
                    <View style={{ flexShrink: 1 }}>
                        <Text style={{ color: "#00FF00", fontSize: 18 }}>{item.name}</Text>
                        <Text style={{ color: "#F0E68C" }}>{item.passive}</Text>
                    </View>
                </View >} />
            </ScrollView>
            <Footer navigation={props.navigation} />
        </View >

    )
}

const styles = StyleSheet.create({
    itemWrapper: {
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: 10,
        marginHorizontal: 20,
    },
    itemImage: {
        height: 48,
        width: 48,
        marginHorizontal: 5
    },
    baseItemImage: {
        height: 28,
        width: 28,
        marginHorizontal: 5
    },
    topImage: {
        width: 28,
        height: 28,
    },
    topImageSelected: {
        width: 48,
        height: 48,
        borderWidth: 3,
        borderColor: "#00FF00"
    },
    topImageWrapper: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 20,
        marginBottom: 10,
    },
    topImageTouchable: {
        padding: 5
    },
    iconText: {
        color: "#CCC",
        marginLeft: 5
    },

})

export default Items
