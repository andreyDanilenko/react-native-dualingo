import { useState } from 'react';
import { Text, View } from 'react-native';
import ICorrelationQuestion from '../../../../types/questionType';
import BaseImageCard from '../../molecules/BaseImageCard/BaseImageCard';
import BaseButton from '../../atoms/BaseButton/BaseButton';
import styles from './CorrelationBlock.styles';

interface IProps {
    question: string
    options: ICorrelationQuestion[] | []
    onGiveAnswer: (selected: ICorrelationQuestion | null) => void
}

const CorrelationBlock = ({question, options, onGiveAnswer}: IProps) => {
    const [selected, setSelected] = useState<ICorrelationQuestion | null>(null)
        
    const onSelectedOption = () => {

        setSelected(null)
        onGiveAnswer(selected)
    }

    const onWrong = () => {

    }

    const onCorrect = () => {

    }
 
    return (
        <View style={styles.homeScreen}>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>{question}</Text>
            </View>
            <View style={styles.imageList} >
                {
                    options.map((data) => {
                        return <BaseImageCard
                            img={data.image}
                            text={data.text} 
                            key={data.text}
                            isSelected={selected?.id === data.id}
                            onPress={() => setSelected(data)} />
                    })
                }
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

export default CorrelationBlock;