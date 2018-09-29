import React, { Component } from 'react';
import {View,Text,StyleSheet,Image,TouchableOpacity} from 'react-native';

const iconApp = require('../assets/iconapp.png')

class Blink extends Component {
    constructor(props) {
      super(props)
      this.state = {isShowingText: true}
  
    
      setInterval(() => {
        this.setState(previousState => {
          return { isShowingText: !previousState.isShowingText }
        })
      }, 900)
    }
  
    render() {
      let display = this.state.isShowingText ? this.props.text : ' '
      return (
        <Text style = {styles.pressTitle}>{display}</Text>
      )
    }
  }


export default class Splash extends Component{
    
    gotoMain(){
        this.props.navigation.navigate('mainB')
    }

    render(){
        return(
            <TouchableOpacity style = {styles.wrapper} onPress={() => this.gotoMain()}>
                <View style = {styles.titleWrapper}>
                <Image style = {styles.icon}
                        source = {iconApp}
                />
                <Text style = {styles.title}>To Do List App</Text>
                </View>
                <View>
                    <Blink text ="Tap anywhere "/>
                </View>
                <View>
                    <Text style = {styles.subtitle}>Powered by React Native</Text>
                </View>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    wrapper:{
        flex: 1,
        backgroundColor: '#273c75',
        justifyContent: 'center',
        alignItems: 'center',
    },
    title:{
        fontSize: 35,
        color: 'white',
        fontWeight: 'bold',
    },
    subtitle:{
        fontWeight:'200',
        color: 'white',
        paddingBottom: 21,  
        fontWeight: 'bold'
    },
    titleWrapper:{
        flex: 1,
        justifyContent: 'center',
    },
    pressTitle:{
        fontWeight:'200',
        color: 'white',
        paddingBottom: 45,
        fontStyle: 'italic',
    },
    icon:{
        width:50,
        height:50,
        alignSelf: 'center',
    }
})