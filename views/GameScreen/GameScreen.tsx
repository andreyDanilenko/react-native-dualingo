import { useState } from 'react';

import CorrelationBlock from '../../components/Base/CorrelationBlock';
import LoadingScreen from '../LoadingScreen/LoadingScreen';


const GameScreen = () => {
    const [loaded, setLoaded] = useState(true)

    setTimeout(() => {
        setLoaded(false)
    }, 3000)

    return (!loaded ? <CorrelationBlock /> : <LoadingScreen />);
};

export default GameScreen;