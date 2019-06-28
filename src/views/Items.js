import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity, StyleSheet } from 'react-native';
import Footer from '../components/Footer';
import Background from '../components/Background'
import { items } from '../assets/index';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Health from '../assets/UI/health.png';
import Cost from '../assets/UI/cost.png';
import Mana from '../assets/UI/mana.png';
import Damage from '../assets/UI/dps.png';
import AttackSpeed from '../assets/UI/attackspeed.png';
import AttackRange from '../assets/UI/attackrange.png';
import MagicResist from '../assets/UI/magicresist.png';
import AbilityPower from '../assets/UI/ap.png';
import Armor from '../assets/UI/armor.png';

const Items = (props) => {

    const [recipes, setRecipes] = useState([]);
    const [selected, setSelected] = useState('');
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
        setSelected(index);
        setRecipes(items[item].recipes);
    }

    useEffect(() => {
        showRecipes("B.F Sword", 0)
    }, [])


    let recipeData = Object.keys(recipes).map((el, index) => {
        return <View key={el} style={styles.itemWrapper}>
            <Image source={items[recipes[el]].image} style={styles.baseItemImage} />
            <Image source={items[el].image} style={styles.itemImage} />
            <View style={{ marginHorizontal: 10 }}>
                {items[el].ad &&
                    <View style={{ flexDirection: "row" }}>
                        <Image source={Damage} />
                        <Text style={styles.iconText}>{items[el].ad}</Text>
                    </View>
                }
                {items[el].ap &&
                    <View style={{ flexDirection: "row" }}>
                        <Image source={AbilityPower} />
                        <Text style={styles.iconText}>{items[el].ap}</Text>
                    </View>}
                {items[el].mr &&
                    <View style={{ flexDirection: "row" }}>
                        <Image source={MagicResist} />
                        <Text style={styles.iconText}>{items[el].mr}</Text>
                    </View>}
                {items[el].armor &&
                    <View style={{ flexDirection: "row" }}>
                        <Image source={Armor} />
                        <Text style={styles.iconText}>{items[el].armor}</Text>
                    </View>}
                {items[el].health &&
                    <View style={{ flexDirection: "row" }}>
                        <Image source={Health} />
                        <Text style={styles.iconText}>{items[el].health}</Text>
                    </View>}
                {items[el].as &&
                    <View style={{ flexDirection: "row" }}>
                        <Image source={AttackSpeed} />
                        <Text style={styles.iconText}>{items[el].as}</Text>
                    </View>}
                {items[el].mana &&
                    <View style={{ flexDirection: "row" }}>
                        <Image source={Mana} />
                        <Text style={styles.iconText}>{items[el].mana}</Text>
                    </View>}
            </View>
            <View style={{ flexShrink: 1 }}>
                <Text style={{ color: "#00FF00", fontSize: 18 }}>{items[el].name}</Text>
                <Text style={{ color: "#F0E68C" }}>{items[el].passive}</Text>
            </View>
        </View >
    })

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
                {recipeData}
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
