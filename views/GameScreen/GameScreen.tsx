import { useState } from 'react';

import CorrelationBlock from '../../components/Base/CorrelationBlock';
import LoadingScreen from '../LoadingScreen/LoadingScreen';
import DistributingQuestionBlock from '../../components/Base/DistributingQuestionBlock';


const GameScreen = () => {
    const [loaded, setLoaded] = useState(true)

    setTimeout(() => {
        setLoaded(false)
    }, 3000)

    return (!loaded ? <DistributingQuestionBlock /> : <LoadingScreen />);
};

export default GameScreen;