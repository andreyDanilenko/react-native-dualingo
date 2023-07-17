import {  StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const BaseModuleGame = ({ navigation }: any) => {

    const onLevel = (levelId: number): void => {
        navigation.navigate('Game', {
          levelId
        })
    }

    return (
       <View style={styles.baseModuleGame}>
        <View>
            <View>
              <Text>Раздел 1</Text>
              <Text>Узнаете основные фразы расскажете откуда вы.</Text>
            </View>
            <View>
            <TouchableOpacity
                key={8}
            >
              
                <Text style={styles.textButton}>info</Text>
            </TouchableOpacity>
            </View>
        </View>
        <View style={styles.gamesBlock}>
            <TouchableOpacity
                style={[styles.button, styles.buttonFirst]}
                key={1}
                onPress={() => onLevel(1)}
            >
                <Text style={styles.textButton}> </Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={[styles.button, styles.buttonSecond]}
                key={2}

                onPress={() => {
                    navigation.navigate('Game', {
                      levelId: 2,
                    });
                  }}
            >
                <Text style={styles.textButton}></Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={[styles.button, styles.buttonThird]}
                key={3}

                onPress={() => {
                    navigation.navigate('Game', {
                      levelId: 3,
                    });
                  }}
            >
                <Text style={styles.textButton}></Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={[styles.button, styles.buttonFourth]}
                key={4}

                onPress={() => {
                    navigation.navigate('Game', {
                      levelId: 4,
                    });
                  }}
            >
                <Text style={styles.textButton}></Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={[styles.button, styles.buttonFifth]}
                key={5}

                onPress={() => {
                    navigation.navigate('Game', {
                      levelId: 5,
                    });
                  }}
            >
                <Text style={styles.textButton}></Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={[styles.button, styles.buttonSixth]}
                key={6}

                onPress={() => {
                    navigation.navigate('Game', {
                      levelId: 6,
                    });
                  }}
            >
                <Text style={styles.textButton}></Text>
            </TouchableOpacity><TouchableOpacity
                style={[styles.button, styles.buttonSeventh]}
                key={7}

                onPress={() => {
                    navigation.navigate('Game', {
                      levelId: 7,
                    });
                  }}
            >
                <Text style={styles.textButton}></Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={[styles.button, styles.buttonEighth]}
                key={8}

                onPress={() => {
                    navigation.navigate('Game', {
                      levelId: 8,
                    });
                  }}
            >
                <Text style={styles.textButton}></Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={[styles.button, styles.buttonNinth]}
                key={9}

                onPress={() => {
                    navigation.navigate('Game', {
                      levelId: 9,
                    });
                  }}
            >
                <Text style={styles.textButton}></Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={[styles.button, styles.buttonTenth]}

                key={10}

                onPress={() => {
                    navigation.navigate('Game', {
                      levelId: 10,
                    });
                  }}
            >
                <Text style={styles.textButton}></Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={[styles.button, styles.buttonEleventh]}
                key={11}

                onPress={() => {
                    navigation.navigate('Game', {
                      levelId: 11,
                    });
                  }}
            >
                <Text style={styles.textButton}></Text>
            </TouchableOpacity>
        </View>
      </View>
    );
};

const styles = StyleSheet.create({
    baseModuleGame: {
      
    },
    gamesBlock: {
        position: 'relative',
        flex: 1,
        gap: 10
    },
    button: {   
      position: 'relative',
        backgroundColor: '#58cc02',
        marginLeft: 'auto',
        marginRight: 'auto',
        borderRadius: 50,
        borderBottomWidth: 5,
        borderBottomColor: '#008000',
        width: 75,
        height: 75
    },
    buttonPosition: {
      position: 'absolute',
      width: '100%',
      height: '100%',
      backgroundColor: 'red'
    },
    buttonFirst: {
      
    },
    buttonSecond: {
      left: 40,
    },
    buttonThird: {
      left: 70,
    },
    buttonFourth: {
      left: 40,
    },
    buttonFifth: {
      
    },
    buttonSixth: {
       right: 40
    },
    buttonSeventh: {
      right: 70,
    },
    buttonEighth: {
      right: 40,
    },
    buttonNinth: {
      
    },
    buttonTenth: {
      left: 40,
    },
    buttonEleventh: {

    },
    textButton: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',

    }
});
export default BaseModuleGame