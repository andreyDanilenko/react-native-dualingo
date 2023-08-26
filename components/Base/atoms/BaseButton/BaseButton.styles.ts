import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    button: {
        padding: 10,
        borderWidth: 2,
        backgroundColor: '#e5e5e5',
        borderColor: 'lightgrey',
        borderRadius: 10,
        borderBottomWidth: 4
    },
    buttonActive: {
        backgroundColor: '#58cc02',
        borderColor: '#58cc02',
    },
    textButton: {
        textAlign: 'center',
        fontWeight: '700',
        fontSize: 20,
        color: '#afafaf',
    },
    textButtonActive: {
        color: '#ffffff',
    }
});

export default styles;