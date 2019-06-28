import React from 'react'
import { Image, Dimensions } from 'react-native';
import bg from '../assets/bg.jpg';

const Background = () => {
    return (
        <Image source={bg}
            style={{
                position: "absolute",
                height: "100%",
                width: "100%",
                top: 0,
                left: 0,
            }} resizeMode="cover" />
    )
}

export default Background
