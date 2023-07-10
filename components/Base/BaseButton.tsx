import { StyleSheet, Text, TouchableOpacity } from 'react-native';

interface IProps {
    title: string
    disabled: boolean
    onPress: () => void
}

const BaseButton = ({ disabled, title, onPress }: IProps) => {
    // console.log(disabled);
    
    return (
        <TouchableOpacity onPress={onPress} style={[styles.button, !disabled ? styles.buttonActive : {}]} disabled={disabled}>
            <Text style={[styles.textButton, !disabled ? styles.textButtonActive : {}]} >{title}</Text>
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