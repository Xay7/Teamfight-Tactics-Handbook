import React from 'react'
import { View, TextInput, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

const Input = (props) => {
    return (
        <View style={styles.container}  >
            <View style={styles.searchContainer} >
                <Icon
                    name="search1"
                    size={25}
                    color="#000"
                    style={{
                        backgroundColor: "#EEE",
                        padding: 25 / 2,
                        borderBottomLeftRadius: 5,
                        borderTopLeftRadius: 5
                    }} />
                <TextInput
                    style={styles.search}
                    placeholder={props.placeholder}
                    onChangeText={(text) => props.onChange(text)} >
                </TextInput>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "transparent",
        flexDirection: 'column',
    },
    search: {
        flex: 0.7,
        height: 51,
        backgroundColor: "white",
        borderColor: "#EEE",
        textAlign: "center",
        fontSize: 25,
        color: "black",
        borderBottomRightRadius: 5,
        borderTopRightRadius: 5
    },
    searchContainer: {
        flex: 1,
        justifyContent: "center",
        flexDirection: "row",
        marginTop: 20,
        borderColor: '#000',
    }
});

export default Input
