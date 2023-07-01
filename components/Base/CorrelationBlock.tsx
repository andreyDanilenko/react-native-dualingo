import { useState } from 'react';
import { Button, StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import BaseImageCard from './BaseImageCard';
import { dataQuestions } from '../../mocks/qestions';


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
                            text={data.text} key={data.id}
                            isSelected={selected === data.id}
                            onPress={() => setSelected(data.id)} />
                    })
                }
            </View>
            <View style={styles.buttons} >
                <TouchableOpacity onPress={() => console.log()} style={styles.button}>
                    <Text style={styles.textButton} >ПРОВЕРИТЬ</Text>
                </TouchableOpacity>
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
        padding: 20,
    },
    button: {

    },

    textButton: {
        textAlign: 'center'
    }
});

export default CorrelationBlock;