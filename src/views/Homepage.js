import React, { useState, useEffect } from 'react';
import { StyleSheet, ActivityIndicator, View, Text, ScrollView, Image, TouchableOpacity, Linking, Dimensions } from 'react-native';
import Footer from '../components/Footer';
import Background from '../components/Background';
import * as rssParser from 'react-native-rss-parser';
import HTMLParser from 'fast-html-parser';
import entitiesDecoder from 'html-entities-decoder';

const { width, height } = Dimensions.get('screen');

const Homepage = (props) => {

    const [news, setNews] = useState([]);
    const [loading, setLoading] = useState(false);

    const { navigate } = props.navigation;


    useEffect(() => {
        fetchRSS()
    }, [])

    fetchRSS = async () => {
        setLoading(true);
        const result = await fetch('https://euw.leagueoflegends.com/en/rss.xml')
            .then(res => res.text())
            .then((res) => rssParser.parse(res))
            .then((rss) => {
                const filtered = rss.items.filter((el) => {
                    if (el.description.includes("Teamfight Tactics") || el.title.includes("Teamfight Tactics")) {
                        const parseHTML = HTMLParser.parse(el.description);
                        el.description = entitiesDecoder(parseHTML.childNodes[0].childNodes[0].rawText);
                        el.image = "https://euw.leagueoflegends.com" + parseHTML.childNodes[1].childNodes[0].childNodes[1].rawAttrs.split(' ')[1].substring(4).slice(1, -1).slice(0, -14)
                        return true;
                    } return false;

                })
                setNews(filtered);
            });
        setLoading(false)
    }

    let displayNews = null;

    if (loading) {
        displayNews = <ActivityIndicator size={72} color="#eeeeee" />
    } else {
        displayNews = news.map(el => {
            return <View style={{ flex: 1, }} key={el.published}>
                <View style={styles.newsContainer}>
                    <TouchableOpacity style={{ width: "100%", height: 200, alignItems: "center" }} onPress={() => Linking.openURL(el.links[0].url)}>
                        <Image source={{ uri: el.image }} style={{ width: "100%", height: "100%" }} resizeMode="contain" />
                    </TouchableOpacity>
                    <Text style={styles.newsTitle}>{el.title}</Text>
                    <Text style={styles.newsDescription}>{el.description}</Text>
                </View>
            </View>
        })
    }

    return (
        <View style={styles.container}>
            <Background />
            <ScrollView>
                <Text style={styles.pageHeader}>Recent News</Text>
                {displayNews}
            </ScrollView>
            <Footer navigation={props.navigation} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    pageHeader: {
        color: "white",
        fontSize: 36,
        textAlign: "center",
        paddingTop: 10,
        color: "white",
        fontWeight: "bold"
    },
    newsTitle: {
        color: "white",
        fontSize: 24,
        fontWeight: "bold",
        marginHorizontal: 25,
        marginVertical: 10
    },
    newsDescription: {
        color: "white",
        paddingHorizontal: 25,
        paddingTop: 5,
        paddingBottom: 20,
        alignSelf: "flex-start"
    },
    newsContainer: {
        flex: 1,
        alignItems: "center",
        marginTop: 20,
        flexShrink: 1,
        borderBottomWidth: 1,
        borderBottomColor: "#505050"
    }
});

export default Homepage;