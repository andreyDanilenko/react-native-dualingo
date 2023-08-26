import { StyleSheet } from "react-native";

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

export default styles;