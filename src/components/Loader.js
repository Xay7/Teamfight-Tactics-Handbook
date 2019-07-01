import React from 'react'
import { ActivityIndicator, StyleSheet } from 'react-native'

const Loader = () => {

    return (
        <ActivityIndicator size={72} color="#eeeeee" style={styles.loader} />
    )
}

const styles = StyleSheet.create({
    loader: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
})
export default Loader
