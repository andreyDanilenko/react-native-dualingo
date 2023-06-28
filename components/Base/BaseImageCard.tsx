import { useState } from 'react';
import { Button, StyleSheet, Text, View, TextInput, Image } from 'react-native';

interface IProps {
  img: object 
  text: string
}

const BaseImageCard = ({img, text}: IProps ) => {
    console.log(img, text);
    
    return (
        <View style={styles.container}>
            <Image
                style={styles.image}
                resizeMode="contain"
                source={img} />
            <Text style={styles.text}>{text}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '48%',
        height: '49%',
        padding: 20,
        borderWidth: 2,
        backgroundColor: '#ffffff',
        borderColor: 'lightgrey',
        borderRadius: 10,
        borderBottomWidth: 4

    },
    greeting: {
        fontSize: 20,
        fontWeight: 'bold',
        margin: 16,
    },
    image: {
        width: '100%',
        flex: 1,
    },
    text: { 
        textAlign: 'center',
    },

});

export default BaseImageCard; 