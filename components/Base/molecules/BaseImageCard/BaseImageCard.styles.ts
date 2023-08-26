
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        width: '48%',
        height: '49%',
        padding: 20,
        borderWidth: 2,
        backgroundColor: '#ffffff',
        borderColor: 'lightgrey',
        borderRadius: 10,
        borderBottomWidth: 4
    },

    selected: {
        backgroundColor: '#ddf4ff',
        borderColor: '#81d5fe'
    },

    image: {
        width: '100%',
        flex: 1,
    },

    text: {
        textAlign: 'center',
    },
    
    selectedText: {
        textAlign: 'center',
        color: '#1cb0f6'
    },

});

export default styles;