import {  StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const BaseModuleGame = ({ navigation }: any) => {
    console.log(navigation);
    
    return (
        <View style={styles.homeScreen}>
            <TouchableOpacity
                style={styles.button}
                key={1}
                onPress={() => {
                    navigation.navigate('Game', {
                      levelId: 1,
                    });
                  }}
            >
                <Text style={styles.textButton}> first</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.button}
                key={2}

                onPress={() => {
                    navigation.navigate('Game', {
                      levelId: 2,
                    });
                  }}
            >
                <Text style={styles.textButton}> second</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.button}
                key={3}

                onPress={() => {
                    navigation.navigate('Game', {
                      levelId: 3,
                    });
                  }}
            >
                <Text style={styles.textButton}> third</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.button}
                key={4}

                onPress={() => {
                    navigation.navigate('Game', {
                      levelId: 4,
                    });
                  }}
            >
                <Text style={styles.textButton}> fourth</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.button}
                key={5}

                onPress={() => {
                    navigation.navigate('Game', {
                      levelId: 5,
                    });
                  }}
            >
                <Text style={styles.textButton}> fifth</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.button}
                key={6}

                onPress={() => {
                    navigation.navigate('Game', {
                      levelId: 6,
                    });
                  }}
            >
                <Text style={styles.textButton}> sixth</Text>
            </TouchableOpacity><TouchableOpacity
                style={styles.button}
                key={7}

                onPress={() => {
                    navigation.navigate('Game', {
                      levelId: 7,
                    });
                  }}
            >
                <Text style={styles.textButton}> seventh</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.button}
                key={8}

                onPress={() => {
                    navigation.navigate('Game', {
                      levelId: 8,
                    });
                  }}
            >
                <Text style={styles.textButton}> eight</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.button}
                key={9}

                onPress={() => {
                    navigation.navigate('Game', {
                      levelId: 9,
                    });
                  }}
            >
                <Text style={styles.textButton}> eight</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.button}

                key={10}

                onPress={() => {
                    navigation.navigate('Game', {
                      levelId: 10,
                    });
                  }}
            >
                <Text style={styles.textButton}> eight</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.button}
                key={11}

                onPress={() => {
                    navigation.navigate('Game', {
                      levelId: 11,
                    });
                  }}
            >
                <Text style={styles.textButton}> eight</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    homeScreen: {
        position: 'relative',
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
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',

    }
});
export default BaseModuleGame