import { useState } from 'react';
import { Button, StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import BaseImageCard from '../../components/Base/BaseImageCard';

const dataCard = [
    {
        name: 'City',
        img: require('../../assets/words/city.png')
    },
    {
        name: 'Nine',
        img: require('../../assets/words/nine.png')
    },
    {
        name: 'Tea',
        img: require('../../assets/words/tea.png')
    },
    {
        name: 'Calendar',
        img: require('../../assets/words/calendar.png')
    }
]



const HomeScreen = () => {
    return (
        <View style={styles.homeScreen}>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>Как переводится "Календарь"?</Text> 
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
        fontSize: 20,
        textAlign: 'center',
        padding: 15,
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