import React from 'react'
import { Image } from 'react-native';
import bg from '../assets/bg.png';

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
