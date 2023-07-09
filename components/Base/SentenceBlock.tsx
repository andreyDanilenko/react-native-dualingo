import { StyleSheet, Text, View } from 'react-native';

interface IProps {
    question: string
    options: string | object
    onGiveAnswer: any
  }

const SentenceBlock = ({question, options, onGiveAnswer}: IProps) => {
    return (
        <View>
           <Text>Sentence</Text>
        </View>
    );
};

const styles = StyleSheet.create({

});

export default SentenceBlock;