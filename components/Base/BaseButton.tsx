import {  StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface IProps {
    title: string
    isSelected: boolean
    onPress: () => void
}

const BaseButton = ({ isSelected, title, onPress }: IProps) => {
    return (
        <TouchableOpacity onPress={onPress} style={[styles.button, isSelected ? styles.buttonActive : {}]}>
            <Text style={[styles.textButton, isSelected ? styles.textButtonActive : {}]} >{title}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        padding: 10,
        borderWidth: 2,
        backgroundColor: '#e5e5e5',
        borderColor: 'lightgrey',
        borderRadius: 10,
        borderBottomWidth: 4
    },
    buttonActive: {
        backgroundColor: '#58cc02',
        borderColor: '#58cc02',
    },
    textButton: {
        textAlign: 'center',
        fontWeight: '700',
        fontSize: 20,
        color: '#afafaf',
    },

    textButtonActive: {
        color: '#ffffff',
    }
});

export default BaseButton; 