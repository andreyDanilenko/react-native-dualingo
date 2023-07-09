import { StyleSheet, Text, View } from 'react-native';

interface IProps {
  question: string
  options: string | object
  onGiveAnswer: any
}

const MatchBlock = ({question, options, onGiveAnswer}: IProps) => {
    return (
        <View>
            <Text>
                Match
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({

});

export default MatchBlock;