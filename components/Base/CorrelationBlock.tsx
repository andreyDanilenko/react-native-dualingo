import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { dataQuestions } from '../../mocks/qestions';
import BaseImageCard from './BaseImageCard';
import BaseButton from './BaseButton';

const CorrelationBlock = () => {
    const [countQuestion, setCountQuestion] = useState(0)
    const [selected, setSelected] = useState('')

    const onGiveAnswer = () => {
        
    }

    return (
        <View style={styles.homeScreen}>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>{dataQuestions[countQuestion].question}</Text>
            </View>
            <View style={styles.imageList} >
                {
                    dataQuestions[countQuestion].options.map((data) => {
                        return <BaseImageCard
                            img={data.image}
                            text={data.text} 
                            key={data.text}
                            isSelected={selected === data.id}
                            onPress={() => setSelected(data.id)} />
                    })
                }
            </View>
            <View style={styles.buttons} >
                <BaseButton
                    title={'ПРОВЕРИТЬ'}
                    isSelected={!!selected}
                    onPress={onGiveAnswer}
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

export default CorrelationBlock;