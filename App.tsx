import MainTabNavigation from './components/Layout/HomeTabNavigation';
import { Button, StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import MainStackNavigation from './components/Layout/MainStackNavigation';
// https://timeweb.com/ru/community/articles/delaem-mobilnoe-prilozhenie-na-react-native-chast-3
// native stack for return start page
// native button tabs for switch pages 

export type Props = {
  name: string;
  baseEnthusiasmLevel?: number;
};

const App: React.FC<Props> = () => {

  return (<MainStackNavigation />)
};

export default App;