import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { dataQuestions } from '../../mocks/level';
import { useState } from 'react';
import CorrelationBlock from './CorrelationBlock';
import ICorrelationQuestion from '../../types/questionType';
import MatchBlock from './MatchBlock';
import SentenceBlock from './SentenceBlock';
const   across = require('../../assets/decoration/across.png')  
const   health = require('../../assets/decoration/health.png')  




interface IProps {
    levelId: string
}

const DistributingQuestionBlock = ({levelId}:IProps): JSX.Element => {
    console.log('123', levelId);
    
    const [countQuestionIndex, setCountQuestionIndex] = useState(0)
    const [countHealth, setCountHealth] = useState(5)
    //  console.log(Object.values(dataQuestions).length );

    const onBack = () => {

    }
     
    const onGiveAnswerCorrelation = (answer: ICorrelationQuestion | null) => {
        setCountHealth(countHealth - 1)
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
                    <TouchableOpacity 
                        style={styles.nextButton}
                        onPress={()=> onBack()}
                        >
                      <Image
                        resizeMode="contain"
                        source={across} />
                    </TouchableOpacity>
                </View>
                <View style={styles.progressBar}> 
                   <View style={[styles.progressBarTotal, {width: getProgress() + '%'}]}/>
                </View>
                <View style={styles.healthContainer}>
                    <Image
                        style={styles.healthImage}
                        resizeMode="contain"
                        source={health} />
                    <Text style={styles.healthText}>{countHealth}</Text>    
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
        // marginTop: -1,
    },
    progressBar: {
        marginTop: 2,
        marginLeft: '7%',
        marginRight: '6%',
        width: '70%',
        height: 16,
        borderRadius: 10,
        backgroundColor: '#e5e5e5',
    },
    progressBarTotal: {
        height: 16,
        borderRadius: 10,
        backgroundColor: '#58cc02',
    },
    healthContainer: {
        flexDirection: 'row',
        gap: 4
    },
    healthImage: {
        marginTop: -5,
    },
    healthText: {
        fontSize: 16,
        color: '#fc4848',
        fontWeight: '600'
    }
});

export default DistributingQuestionBlock;