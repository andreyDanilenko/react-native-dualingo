
import {  StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import BaseModuleGame from '../../components/Base/BaseModuleGame';

const HomeScreen = ({ navigation }: any) => {
    
    return (
        <View style={styles.homeScreen}>
               <ScrollView>
                     <BaseModuleGame navigation={navigation} />
               </ScrollView> 
        </View>
    );
};

const styles = StyleSheet.create({
    homeScreen: {
        position: 'relative',
        paddingTop: 30,
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
        gap: 10
    },
    button: {   
        display: 'flex',
        
        backgroundColor: 'green',
        borderRadius: 50,
        width: 100,
        height: 100
    },
    textButton: {

    }
});
export default HomeScreen