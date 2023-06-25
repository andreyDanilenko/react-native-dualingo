import TabNavigation from './components/Layout/TabNavigation';
// https://timeweb.com/ru/community/articles/delaem-mobilnoe-prilozhenie-na-react-native-chast-3
// native stack for return start page
// native button tabs for switch pages 

export type Props = {
  name: string;
  baseEnthusiasmLevel?: number;
};

const App: React.FC<Props> = () => {

  return (
    <TabNavigation />
  )
};

export default App;