import React, { Component } from 'react';
import {View,Text,TextInput,ScrollView, StyleSheet, TouchableOpacity, ImageBackground} from 'react-native';

import Note from './Note';

const background = require('../assets/chatBubble.jpg')

export default class MainNote extends Component{
    state = {
        noteArray: [],
        text: ''
    }
    

    addNote(){
        if(this.state.noteArray){
            var today = new Date();
            this.state.noteArray.push({
                'date': today.getDate() + '-' + (today.getMonth() + 1) + '-' + today.getFullYear(),
                'note': this.state.text
            })
            this.setState({noteArray: this.state.noteArray})
            this.setState({text:''})
        }
    }

    deleteNote(key){
        this.state.noteArray.splice(key,1)
        this.setState({noteArray: this.state.noteArray})
    }

    render(){

        let notes  = this.state.noteArray.map((val,key) =>{
            return <Note key={key} keyval={key} val={val}
            deleteMethod={() => this.deleteNote(key)}/>
        })

        return(
            <View style = {styles.container}>
            <ImageBackground 
                style = {styles.background}
                source = {background}>
                <View style = {styles.header}>
                    <Text style = {styles.headerText}>To Do List</Text>
                </View>
                <ScrollView style = {styles.scrollContainer}>{notes}</ScrollView>

                <View style = {styles.footer}>
                    <TextInput
                        onChangeText = {text => this.setState({text})}
                        value = {this.state.text}
                        placeholder = 'Write your plans here..'
                        placeholderTextColor = 'grey'
                        multiline = {true}
                        style = {styles.textInput}
                    />
                </View>
                <TouchableOpacity style = {styles.addButton} onPress={this.addNote.bind(this)}>
                    <Text style = {styles.addButtonText}>+</Text>
                </TouchableOpacity>
            </ImageBackground>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container:{
        flex: 1
    },
    header:{
        backgroundColor: '#273c75',
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomWidth: 2,
        borderBottomColor: '#ddd',
    },
    headerText:{
        fontSize: 21,
        fontWeight: 'bold',
        paddingTop: 15,
        paddingBottom: 20,
        color: 'white'
    },
    scrollContainer:{
        flex: 1,
        marginBottom: 100,
    },
    footer:{
        position:'absolute',
        right: 0,
        left: 0,
        bottom: 0,
        zIndex: 10
    },
    textInput:{
        alignSelf: 'stretch',
        color: 'white',
        backgroundColor: '#252525',
        padding: 21,
        borderTopWidth: 2,
        borderTopColor: '#ededed',
    },
    addButton:{
        position:'absolute',
        width: 50,
        height: 50,
        borderRadius: 50,
        backgroundColor: '#273c75',
        alignItems: 'center',
        justifyContent: 'center',
        right: 10,
        bottom: 90,
        zIndex: 11
    },
    addButtonText:{
        color:'white',
        fontSize:25
    },
    background:{
        flex:1
    }
})