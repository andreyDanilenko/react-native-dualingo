import { useState } from 'react';
import { Button, StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import BaseImageCard from '../../components/Base/BaseImageCard';
import { dataQuestions } from '../../mocks/qestions';


const HomeScreen = () => {
    const [countQuestion, setCountQuestion] = useState(1)
    return (
        <View style={styles.homeScreen}>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>{dataQuestions[countQuestion].question}</Text> 
            </View>
            <View style={styles.imageList}>
                {
                    dataQuestions[countQuestion].options.map((data) => {
                        console.log(data);
                        
                        return <BaseImageCard img={data.image} text={data.text} key={data.id} />
                    })
                }
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
});

export default HomeScreen;