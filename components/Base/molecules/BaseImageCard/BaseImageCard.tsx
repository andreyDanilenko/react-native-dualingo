import { Text, Image, Pressable } from 'react-native';
import styles from './BaseImageCard.styles';

interface IProps {
    img: object
    text: string
    isSelected: boolean
    onPress: () => void
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

export default BaseImageCard; 