import { useState } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

const PlanScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.greeting}>
                PlanScreen screen
            </Text>
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
});

export default PlanScreen;