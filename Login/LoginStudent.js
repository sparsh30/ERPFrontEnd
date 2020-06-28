import React,{Component} from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    Button,
    Alert
  } from 'react-native';
  



  export default class LoginStudent extends Component{
  
    render(){
        return(
           <View>
             <Text>Welcome to student login</Text>
             <Button title="Move to student page" onPress={()=>{this.props.navigation.navigate('Student')}}/>
           </View>
        
        )

    }
  }