import React from 'react';
import { StyleSheet, Text, View, Button, ScrollView } from 'react-native';
import Footer from '../components/Footer';

const Homepage = (props) => {

    const { navigate } = props.navigation;

    return (
        <View style={styles.container}>
            <ScrollView>
                <Button title="Yo xd" onPress={() => navigate('Champions')} />
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
});

export default Homepage;