import { StyleSheet, Text, View } from 'react-native';
import BaseButton from '../../atoms/BaseButton/BaseButton';
import { useState } from 'react';
import ICorrelationQuestion from '../../../../types/questionType';
import styles from './SentenceBlock.styles';

interface IProps {
    question: string
    options: string | object
    onGiveAnswer: any
  }

const SentenceBlock = ({question, options, onGiveAnswer}: IProps) => {
    const [selected, setSelected] = useState<ICorrelationQuestion | null>(null)
        
    const onSelectedOption = () => {
        // if (selected?.correct) {
        //    Alert.alert('Correct')
        // } else {
        //    Alert.alert('Wrong')
        // }
        // setCountQuestionIndex(count)
        // onPress(selected)

        setSelected(null)
        onGiveAnswer(selected)
    }

    return (
        <View style={styles.homeScreen}>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>{question}</Text>
            </View>
            <View style={styles.imageList} >
                 <Text>Sentence</Text> 
            </View>
            <View style={styles.buttons} >
                <BaseButton
                    title={'ПРОВЕРИТЬ'}
                    disabled={!selected}
                    onPress={onSelectedOption}
                />
            </View>
        </View>
    );
};

export default SentenceBlock;