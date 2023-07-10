import { useState } from 'react';
import LoadingScreen from '../LoadingScreen/LoadingScreen';
import DistributingQuestionBlock from '../../components/Base/DistributingQuestionBlock';

interface IProps {
    route: {
        params: {
            levelId: string  
        } 
    }
}

const GameScreen = (props:IProps) => {
    console.log('levelId', props.route.params);
    
    const [loaded, setLoaded] = useState(true)

    setTimeout(() => {
        setLoaded(false)
    }, 3000)

    return (!loaded ? <DistributingQuestionBlock levelId={props.route.params.levelId} /> : <LoadingScreen />);
};

export default GameScreen;