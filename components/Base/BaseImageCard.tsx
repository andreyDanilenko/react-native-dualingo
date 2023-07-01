import { useState } from 'react';
import { Button, StyleSheet, Text, View, TextInput, Image, Pressable } from 'react-native';

interface IProps {
    img: object
    text: string
    isSelected: boolean
    onPress: any
}

const BaseImageCard = ({ img, text, isSelected, onPress }: IProps) => {
    return (
        <Pressable style={[styles.container, isSelected ? styles.selected : {}]} onPress={onPress}>
            <Image
                style={styles.image}
                resizeMode="contain"
                source={img} />
            <Text style={isSelected ? styles.selectedText : styles.text}>{text}</Text>
        </Pressable>
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

    selected: {
        backgroundColor: '#ddf4ff',
        borderColor: '#81d5fe'
    },

    image: {
        width: '100%',
        flex: 1,
    },
    text: {
        textAlign: 'center',
    },
    selectedText: {
        textAlign: 'center',
        color: '#1cb0f6'
    },

});

export default BaseImageCard; 