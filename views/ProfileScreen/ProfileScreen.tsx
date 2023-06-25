import { useState } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

const ProfileScreen = () => {
  const [text, setText] = useState('');

  return ( 
      <View style={styles.container}>
        <Text style={styles.greeting}>
          Profile screen
        </Text>
        <Text style={styles.greeting}>
          { text }
        </Text>
        <TextInput    
          style={styles.input}  
          onChangeText={(e) => setText(e)}
          value={text}
        />
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
  input: {
    width: '80%',
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default ProfileScreen;