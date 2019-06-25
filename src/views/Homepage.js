import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const Homepage = (props) => {

    const { navigate } = props.navigation;

    return (
        <View style={styles.container}>
            <Button title="Yo xd" onPress={() => navigate('Champions')} />
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