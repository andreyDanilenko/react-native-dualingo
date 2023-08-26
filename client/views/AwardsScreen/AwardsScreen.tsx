import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

const AwardsScreen = ({ navigation }: any) => {
    return (
        <View style={styles.container}>
            <View style={styles.navList}>
                <TouchableOpacity
                    style={styles.navItem}
                    key={34}
                    onPress={() => navigation.navigate('Stats')}
                >
                    <Text style={{ textAlign: 'center' }}> Stats </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.navItem}
                    key={234}
                    onPress={() => navigation.navigate('Awards')}
                >
                    <Text style={{ textAlign: 'center' }}> Award</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.main}>
                <Text style={styles.greeting}>
                    Award
                </Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    greeting: {
        fontSize: 20,
        fontWeight: 'bold',
        margin: 16,
    },
    navList: {
        paddingTop: 30,
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },
    navItem: {
        padding: 10,
        flex: 1,
        backgroundColor: 'lightgrey',
        borderBottomWidth: 1
    },
    main: {
        flex: 1,
    },
});

export default AwardsScreen;