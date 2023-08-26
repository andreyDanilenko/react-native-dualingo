import { Text, TouchableOpacity } from 'react-native';
import styles from './BaseButton.styles';

interface IProps {
    title: string
    disabled: boolean
    onPress: () => void
}

const BaseButton = ({ disabled, title, onPress }: IProps) => {    
    return (
        <TouchableOpacity onPress={onPress} style={[styles.button, !disabled ? styles.buttonActive : {}]} disabled={disabled}>
            <Text style={[styles.textButton, !disabled ? styles.textButtonActive : {}]} >{title}</Text>
        </TouchableOpacity>
    );
};

export default BaseButton; 