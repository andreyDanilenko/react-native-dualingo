import { StyleSheet, Text, View } from 'react-native';
import BaseButton from './BaseButton';
import { useState } from 'react';
import ICorrelationQuestion from '../../types/correlationQuestionType';

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

    buttons: {
        paddingTop: 0,
        padding: 20,
    },
});

export default SentenceBlock;