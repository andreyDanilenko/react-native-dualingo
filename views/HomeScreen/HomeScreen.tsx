import { useState } from 'react';
import { Button, StyleSheet, Text, View, TextInput } from 'react-native';
import BaseImageCard from '../../components/Base/BaseImageCard';

const dataCard = [
    {
        name: 'Bell',
        img: require('../../assets/navigation/nav-bell.png')
    },
    {
        name: 'Chest',
        img: require('../../assets/navigation/nav-chest.png')
    },
    {
        name: 'Home',
        img: require('../../assets/navigation/nav-home.png')
    },
    {
        name: 'Shield',
        img: require('../../assets/navigation/nav-shield.png')
    }
]



const HomeScreen = () => {
    return (

        <View style={styles.homeScreen}>
            <View style={styles.navList}>
                <Text>nav</Text> 
            </View>
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
        padding: 20,
        height: '100%',
        flex: 1,
    },
    navList: {
        padding: 20,
    },
    imageList: {
        width: '100%',
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        alignContent: 'space-between'
    },
});

export default HomeScreen;