import { StyleSheet, View } from 'react-native';
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

    return (getComponent());
};

const styles = StyleSheet.create({

});

export default DistributingQuestionBlock;