import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { dataQuestions } from '../../mocks/qestions';
import { useState } from 'react';
import CorrelationBlock from './CorrelationBlock';
import ICorrelationQuestion from '../../types/questionType';
import MatchBlock from './MatchBlock';
import SentenceBlock from './SentenceBlock';


interface IProps {
    levelId: string
}

const DistributingQuestionBlock = ({levelId}:IProps): JSX.Element => {
    console.log('123', levelId);
    
    const [countQuestionIndex, setCountQuestionIndex] = useState(0)
    //  console.log(Object.values(dataQuestions).length );
     
    const onGiveAnswerCorrelation = (answer: ICorrelationQuestion | null) => {
        const count = countQuestionIndex < Object.values(dataQuestions).length - 1 ? countQuestionIndex + 1 : 0
        setCountQuestionIndex(count)
    }

    const onGiveAnswerMatch = (answer: ICorrelationQuestion | null) => {
        const count = countQuestionIndex < Object.values(dataQuestions).length - 1 ? countQuestionIndex + 1 : 0
        setCountQuestionIndex(count)
    }

    const onGiveAnswerSentence = (answer: ICorrelationQuestion | null) => {
        const count = countQuestionIndex < Object.values(dataQuestions).length - 1 ? countQuestionIndex + 1 : 0
        setCountQuestionIndex(count)
    }

    const getProgress = () => {        
        return !countQuestionIndex ? 0 : (countQuestionIndex / (Object.values(dataQuestions).length - 1)) * 100;
    }

    const getComponent = () => {
        switch (dataQuestions[countQuestionIndex].type) {
            case 'correlation':
            return (<CorrelationBlock 
                options={dataQuestions[countQuestionIndex].options} 
                question={dataQuestions[countQuestionIndex].question} 
                onGiveAnswer={onGiveAnswerCorrelation}
            />)
            case 'match':
            return (<MatchBlock 
                options={dataQuestions[countQuestionIndex].options} 
                question={dataQuestions[countQuestionIndex].question} 
                onGiveAnswer={onGiveAnswerMatch}
            />)
            case 'sentence':
            return (<SentenceBlock 
                options={dataQuestions[countQuestionIndex].options} 
                question={dataQuestions[countQuestionIndex].question} 
                onGiveAnswer={onGiveAnswerSentence}
            />)
            default:
            return (<View></View>)  
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.nextButtonWrapper}>
                    <TouchableOpacity style={styles.nextButton}>
                        <Text>X</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.progressBar}> 
                   <View style={[styles.progressBarTotal, {width: getProgress() + '%'}]}/>
                </View>
            </View>
            { getComponent() } 
        </View> 
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 30,
        backgroundColor: '#fff'
    },

    header: {
        width: '100%',
        padding: 15,
        flexDirection: 'row',
    },
    nextButtonWrapper: {
        width: '5%',
    },
    nextButton: {
        // backgroundColor: 'green'
    },
    progressBar: {
        marginLeft: '5%',
        width: '90%',
        height: 16,
        borderRadius: 10,
        backgroundColor: '#e5e5e5',
    },
    progressBarTotal: {
        height: 16,
        borderRadius: 10,
        backgroundColor: '#58cc02',
    }
});

export default DistributingQuestionBlock;