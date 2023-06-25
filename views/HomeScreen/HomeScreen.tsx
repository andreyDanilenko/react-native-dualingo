import { useState } from 'react';
import { Button, StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import BaseImageCard from '../../components/Base/BaseImageCard';

const dataCard = [
    {
        name: 'Calendar',
        img: require('../../assets/navigation/nav-chest.png')
    },
    {
        name: 'Chest',
        img: require('../../assets/navigation/nav-chest.png')
    },
    {
        name: 'Home',
        img: require('../../assets/words/city.svg')
    },
    {
        name: 'Shield',
        img: require('../../assets/navigation/nav-shield.png')
    }
]



const HomeScreen = () => {
    return (
        <View style={styles.homeScreen}>
            <View style={styles.imageList}>
                {
                    dataCard.map((data) => {
                        return <BaseImageCard img={data.img} name={data.name} key={data.name} />
                    })
                }
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    homeScreen: {
        backgroundColor: '#ffffff',

        height: '100%',
        flex: 1,
    },
    navList: {
        paddingTop: 30,
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },
    navItem: {
        padding: 10,
        flex: 1,
        backgroundColor: 'lightgrey',
        borderBottomWidth: 1
    },
    imageList: {
        padding: 20,
        width: '100%',
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        alignContent: 'space-between'
    },
});

export default HomeScreen;