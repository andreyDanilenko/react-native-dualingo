
import {  StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const HomeScreen = ({ navigation }: any) => {
    
    return (
        <View style={styles.homeScreen}>
            <TouchableOpacity
                style={styles.button}
                onPress={() => {
                    /* 1. Navigate to the Details route with params */
                    navigation.navigate('Game', {
                      levelId: 86,
                    });
                  }}
            >
                <Text style={styles.textButton}> Start Game</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    homeScreen: {
        paddingTop: 100,
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center'
    },
    button: {

    },
    textButton: {

    }
});
export default HomeScreen