import React from 'react'
import { View, TextInput, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

const Input = (props) => {
    return (
        <View style={styles.container}  >
            <View style={styles.searchContainer} >
                <View>
                    <Icon
                        name="search1"
                        size={25}
                        color="#808080"
                        style={{
                            backgroundColor: "transparent",
                            borderWidth: 2,
                            borderRightWidth: 0,
                            borderColor: "#808080",
                            padding: 21 / 2,
                            borderBottomLeftRadius: 5,
                            borderTopLeftRadius: 5
                        }} />
                </View>
                <TextInput
                    style={styles.search}
                    placeholder={props.placeholder}
                    placeholderTextColor="#AAA"
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
        height: 50.25,
        backgroundColor: "transparent",
        borderTopWidth: 2,
        borderBottomWidth: 2,
        borderRightWidth: 2,
        borderColor: "#808080",
        fontSize: 23,
        color: "white",
        borderBottomRightRadius: 5,
        borderTopRightRadius: 5
    },
    searchContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        marginTop: 20,
        marginBottom: 10,
        borderColor: '#000',
    }
});

export default Input
