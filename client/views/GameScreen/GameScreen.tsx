import { useState } from 'react';
import LoadingScreen from '../LoadingScreen/LoadingScreen';
import DistributingQuestionBlock from '../../components/Base/organisms/DistributingQuestionBlock/DistributingQuestionBlock';

interface IProps {
    route: {
        params: {
            levelId: string  
        } 
    }
}

const GameScreen = ({route: {params}}:IProps) => {
    console.log('levelId', params.levelId);
    
    const [loaded, setLoaded] = useState(true)

    setTimeout(() => {
        setLoaded(false)
    }, 3000)

    return (!loaded ? <DistributingQuestionBlock levelId={params.levelId} /> : <LoadingScreen />);
};

export default GameScreen;