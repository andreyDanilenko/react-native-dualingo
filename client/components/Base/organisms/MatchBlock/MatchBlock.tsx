import { Text, View } from 'react-native';
import IMatchQuestion from '../../../../types/questionType';
import { useState } from 'react';
import BaseButton from '../../atoms/BaseButton/BaseButton';
import styles from './MatchBlock.styles';
import BaseWordCard from '../../molecules/BaseWordBlock/BaseWordBlock';

interface IProps {
  question: string
  options: {
    currentLanguage: IMatchQuestion[],
    anotherLanguage: IMatchQuestion[]
  },
  onGiveAnswer: any
}

const MatchBlock = ({question, options, onGiveAnswer}: IProps) => {
    const [selected, setSelected] = useState<IMatchQuestion | null>(null)
        
    const onSelectedOption = () => {
        setSelected(null)
        onGiveAnswer(selected)
    }

    return (
        <View style={styles.homeScreen}>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>{question}</Text>
            </View>
            <View style={styles.lists} >
                <View style={styles.list} >
                    {
                        options.currentLanguage.map((data) => {
                            return <BaseWordCard
                                text={data.text} 
                                key={data.text}
                                isSelected={selected?.id === data.id}
                                onPress={() => setSelected(data)} />
                        })
                    }
                </View>
                <View style={styles.list} >
                    {
                        options.anotherLanguage.map((data) => {
                            return <BaseWordCard
                                text={data.text} 
                                key={data.text}
                                isSelected={selected?.id === data.id}
                                onPress={() => setSelected(data)} />
                        })
                    }
                </View>
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

export default MatchBlock;