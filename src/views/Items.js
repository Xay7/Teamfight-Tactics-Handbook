import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity, StyleSheet } from 'react-native';
import Footer from '../components/Footer';
import Background from '../components/Background'
import { items } from '../assets/index';

const Items = (props) => {

    const [recipes, setRecipes] = useState([]);

    showRecipes = (item) => {
        setRecipes(items[item].recipes);
    }

    useEffect(() => {
        showRecipes("B.F Sword")
    }, [])


    let recipeData = Object.keys(recipes).map(el => {
        return <View key={el} style={styles.itemWrapper}>
            <Image source={items[recipes[el]].image} style={styles.itemImage} />
            <Image source={items[el].image} style={styles.itemImage} />
        </View >
    })

    return (
        <View style={{ flex: 1 }}>
            <Background />
            <ScrollView>
                <View style={styles.topImageWrapper}>
                    <TouchableOpacity onPress={() => showRecipes("B.F Sword")} style={styles.topImageTouchable}>
                        <Image source={items["B.F Sword"].image} style={styles.topImage} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => showRecipes("Recurve Bow")} style={styles.topImageTouchable}>
                        <Image source={items["Recurve Bow"].image} style={styles.topImage} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => showRecipes("Needlessly Large Rod")} style={styles.topImageTouchable}>
                        <Image source={items["Needlessly Large Rod"].image} style={styles.topImage} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => showRecipes("Tear of the Goddess")} style={styles.topImageTouchable}>
                        <Image source={items["Tear of the Goddess"].image} style={styles.topImage} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => showRecipes("Chain Vest")} style={styles.topImageTouchable}>
                        <Image source={items["Chain Vest"].image} style={styles.topImage} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => showRecipes("Negatron Cloak")} style={styles.topImageTouchable}>
                        <Image source={items["Negatron Cloak"].image} style={styles.topImage} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => showRecipes("Giant's Belt")} style={styles.topImageTouchable}>
                        <Image source={items["Giant's Belt"].image} style={styles.topImage} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => showRecipes("Spatula")} style={styles.topImageTouchable}>
                        <Image source={items["Spatula"].image} style={styles.topImage} />
                    </TouchableOpacity>
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
    },
    itemImage: {
        height: 48,
        width: 48
    },
    topImage: {
        width: 36,
        height: 36,

    },
    topImageWrapper: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
        marginVertical: 30,
    },
    topImageTouchable: {
        padding: 5
    }
})

export default Items
