import { View, Text, TextInput, Image, ImageBackground } from 'react-native'
import React from 'react';
import { StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

const Header = () => {
    const shadow = styles.shadow
    return (
        <ImageBackground style={styles.imgHeader} source={require('../../assets/1.jpeg')} >
            <View style={styles.header}>
                <View style={[styles.leftNav, shadow]}>
                    <EvilIcons name="search" size={28} color="black" />
                    <TextInput
                        style={styles.inputNav}
                        placeholder='Search'
                    />
                    <Feather name="camera" size={24} color="black" />
                </View>

                <View style={[styles.iconHeader, shadow]}>
                    <AntDesign name="shoppingcart" size={24} color="white" />
                    <AntDesign name="message1" size={22} color="white" />
                </View>
            </View>
        </ImageBackground>


    )
}
const styles = StyleSheet.create({
    imgHeader: {
        flex: 1 / 4,
        justifyContent: 'flex-start',
    },
    header: {
        flex: 1 / 1.4,
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 5,
        // backgroundColor: 'black'
    },

    leftNav: {
        flexDirection: 'row',
        alignItems: 'center',
        // justifyContent: 'space-between',
        width: '80%',
        backgroundColor: 'white'
    },
    inputNav: {
        paddingHorizontal: 10,
        paddingVertical: 10,
        width: '80%'
    },
    iconHeader: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        width: '20%',
    },
    shadow: {
        //ios    
        shadowOpacity: 0.9,
        shadowRadius: 3,
        shadowOffset: {
            height: 0,
            width: 0
        },
        //android
        elevation: 1
    },
    mess: {},
});


export default Header