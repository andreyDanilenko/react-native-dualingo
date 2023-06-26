import { useState } from 'react';
import { Button, StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import BaseImageCard from '../../components/Base/BaseImageCard';

const dataCard = [
    {
        name: 'House',
        img: require('../../assets/navigation/nav-home.png')
    },
    {
        name: 'Chest',
        img: require('../../assets/navigation/nav-chest.png')
    },
    {
        name: 'Dumbbell',
        img: require('../../assets/navigation/nav-dumbbell.png')
    },
    {
        name: 'Shield',
        img: require('../../assets/navigation/nav-shield.png')
    }
]



const HomeScreen = () => {
    return (
        <View style={styles.homeScreen}>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>Как переводится "дом"?</Text> 
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
        height: '100%',
        flex: 1,
    },
    titleContainer: {
        backgroundColor: '#58CC02',
    },

    title: {
        fontSize: 24,
        padding: 20,
        paddingTop: 40,
        color: '#fff',
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