import { useState } from 'react';
import { Button, StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

const LoadingScreen = () => {
    return (
        <View style={styles.loadedContainer}>
            <Text style={styles.loadedText}>
                Loading
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    loadedContainer: {
        backgroundColor: '#58CC02',
        height: '100%',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    loadedText: {
        textAlign: 'center',
        fontSize: 30,
        fontWeight: '700',
        letterSpacing: 4,
        color: '#ffffff'
        
    },
});

export default LoadingScreen; 