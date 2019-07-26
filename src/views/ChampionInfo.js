import React from "react";
import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import Health from "../assets/UI/health.png";
import Cost from "../assets/UI/cost.png";
import Mana from "../assets/UI/mana.png";
import Damage from "../assets/UI/dps.png";
import AttackSpeed from "../assets/UI/attackspeed.png";
import AttackRange from "../assets/UI/attackrange.png";
import MagicResist from "../assets/UI/magicresist.png";
import Armor from "../assets/UI/armor.png";
import Footer from "../components/Footer";
import Synergy from "../components/Synergy";
import Background from "../components/Background";
import { items } from "../assets/index";

const ChampionInfo = props => {
  const name = props.navigation.getParam("name", "Oops, something went wrong");

  const champion = require("../assets/index").champions[name];
  const firstOrigin = require("../assets/index").origin[champion.origin];
  const secondOrigin = require("../assets/index").origin[champion.originSecond];
  const firstClass = require("../assets/index").classes[champion.class];
  const secondClass = require("../assets/index").classes[champion.classSecond];
  const tier = require("../assets/index").tiers[champion.tier];

  return (
    <View style={{ flex: 1 }}>
      <Background />
      <ScrollView>
        <View style={styles.container}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              marginVertical: 20
            }}
          >
            {tier && (
              <Image source={tier.image} style={{ width: 30, height: 30 }} />
            )}
            <Text
              style={{
                fontSize: 34,
                color: "white",
                fontWeight: "bold",
                textAlign: "center",
                marginLeft: 5
              }}
            >
              {champion.name}
            </Text>
          </View>
          <View style={styles.headerContainer}>
            <View style={{ marginRight: 5, alignItems: "center" }}>
              <Image
                source={champion.image}
                style={{ height: 100, width: 100 }}
              />
              <View
                style={{
                  flexDirection: "row",
                  marginTop: 5,
                  alignItems: "center"
                }}
              >
                <Image
                  source={items[champion.build[0]].image}
                  style={styles.item}
                />
                <Image
                  source={items[champion.build[1]].image}
                  style={styles.item}
                />
                <Image
                  source={items[champion.build[2]].image}
                  style={styles.item}
                />
              </View>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                flexShrink: 1
              }}
            >
              <View>
                <View style={styles.statsWrapper}>
                  <Image source={Cost} style={{ height: 24, width: 24 }} />
                  <Text
                    style={{ color: "#FFD700", fontSize: 20, marginLeft: 5 }}
                  >
                    {champion.stats.cost} coins
                  </Text>
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
                  <Text style={styles.statsText}>
                    {champion.stats.attackSpeed}
                  </Text>
                </View>
                <View style={styles.statsWrapper}>
                  <Image source={AttackRange} />
                  <Text style={styles.statsText}>
                    {champion.stats.attackRange}
                  </Text>
                </View>
                <View style={styles.statsWrapper}>
                  <Image source={MagicResist} />
                  <Text style={styles.statsText}>
                    {champion.stats.magicResist}
                  </Text>
                </View>
                <View style={styles.statsWrapper}>
                  <Image source={Armor} />
                  <Text style={styles.statsText}>{champion.stats.armor}</Text>
                </View>
              </View>
            </View>
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center"
            }}
          />
          <Synergy
            image={champion.ability.image}
            description={champion.ability.description}
            name={champion.ability.name}
            navigation={props.navigation}
          />
          <Synergy
            image={firstOrigin.image}
            ability={firstOrigin.ability && firstOrigin.ability}
            name={firstOrigin.name}
            description={firstOrigin.description}
            navigation={props.navigation}
          />
          {secondOrigin && (
            <Synergy
              image={secondOrigin.image}
              ability={secondOrigin.ability && secondOrigin.ability}
              name={secondOrigin.name}
              description={secondOrigin.description}
              navigation={props.navigation}
            />
          )}
          <Synergy
            image={firstClass.image}
            ability={firstClass.ability && firstClass.ability}
            name={firstClass.name}
            description={firstClass.description}
            navigation={props.navigation}
          />
          {secondClass && (
            <Synergy
              image={secondClass.image}
              ability={secondClass.ability && secondClass.ability}
              name={secondClass.name}
              description={secondClass.description}
              navigation={props.navigation}
            />
          )}
        </View>
      </ScrollView>
      <Footer navigation={props.navigation} />
    </View>
  );
};

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
    borderBottomColor: "#505050",
    borderBottomWidth: 1
  },
  text: {
    color: "#CCC",
    fontSize: 16,
    paddingVertical: 3
  },
  textHeader: {
    fontSize: 24,
    color: "white"
  },
  statsWrapper: {
    flexDirection: "row",
    alignItems: "center",
    padding: 4
  },
  statsText: {
    fontSize: 12,
    color: "#CCC",
    paddingLeft: 5
  },
  item: {
    height: 28,
    width: 28
  }
});

export default ChampionInfo;
