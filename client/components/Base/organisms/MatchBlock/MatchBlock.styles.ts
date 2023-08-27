import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    homeScreen: {
        backgroundColor: '#ffffff',
        height: '100%',
        flex: 1,
    },

    titleContainer: {
        // backgroundColor: '#58CC02',
    },

    title: {
        fontSize: 22,
        textAlign: 'center',
        fontWeight: 600,
        padding: 15,
        paddingTop: 5,
    },

    lists: {
        padding: 20,
        width: '100%',
        flex: 1,
        gap: 20,
        flexDirection: 'row',

        
    },

    list: {
        flex: 1,
        gap: 20,
        justifyContent: 'center',
    },

    buttons: {
        paddingTop: 0,
        padding: 20,
    },
});

export default styles;