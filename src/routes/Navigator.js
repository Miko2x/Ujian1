import Splash from '../screen/Splash';
import MainNote from '../component/MainNote';
import {createStackNavigator} from 'react-navigation';

export default Navigator = createStackNavigator({
    mainA:{
        screen: Splash,
        navigationOptions:{
            header: null
        }
    },
    mainB:{
        screen: MainNote,
        navigationOptions:{
            header:null
        }
    }
})