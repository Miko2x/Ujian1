import React from 'react';
import {View} from 'react-native';
import Header from './src/component/Header';
import Main1 from './src/screen/main1';
import MainNote from './src/component/MainNote';
import Navigator from './src/routes/Navigator';
import Splash from './src/screen/Splash';

export default class App extends React.Component {
  render() {
    return (
      <Navigator/>
    );
  }
}










// const App = () => (
//   <View style={{flex:1, justifyContent:'space-between'}}> 
//     <Header headerText={'React Native'}/>
//     <Main1/>
//   </View>
// )

// export default App;