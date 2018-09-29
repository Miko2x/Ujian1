import React, { Component } from 'react';
import {StyleSheet,Text,View,TouchableOpacity} from 'react-native';

export default class Note extends Component{
    render(){
        return(
            <View style = {styles.note} key={this.props.keyval}>
                <Text style = {styles.noteText}>{this.props.val.date}</Text>
                <Text style = {styles.noteText}>{this.props.val.note}</Text>
                <TouchableOpacity style = {styles.noteDelete} onPress={this.props.deleteMethod}>
                    <Text style = {styles.noteDeleteText}>Delete</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    note:{
        position: 'relative',
        padding: 20,
        paddingRight: 100,
        borderBottomWidth: 2,
        borderBottomColor: '#ededed',
        backgroundColor: 'white',
    },
    noteText:{
        paddingLeft:20,
        borderLeftWidth: 10,
        borderLeftColor: '#273c75',
    },
    noteDelete:{
        position: 'absolute',
        backgroundColor: '#fbc531',
        justifyContent: 'center',
        alignItems: 'center',
        padding:10,
        top: 10,
        right:10,
        bottom:10
    },
    noteDeleteText:{
        color: 'grey'
    }
})