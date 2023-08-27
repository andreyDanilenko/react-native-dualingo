import { Text, Pressable } from 'react-native';
import styles from './BaseWordBlock.styles';

interface IProps {
    text: string
    isSelected: boolean
    onPress: () => void
}

const BaseWordCard = ({ text, isSelected, onPress }: IProps) => {
    return (
        <Pressable style={[styles.container, isSelected ? styles.selected : {}]} onPress={onPress}>
            <Text style={isSelected ? styles.selectedText : styles.text}>{text}</Text>
        </Pressable>
    );
};

export default BaseWordCard; 