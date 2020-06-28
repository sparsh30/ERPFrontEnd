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



  

  export default class Login extends Component{

    render(){
        return(
           <View>
             <Text>This the teacher login page</Text>
             <Button title="Move to teachers page" onPress={()=>{this.props.navigation.navigate('Teacher')}}/>
           </View>
        
        )

    }
  }
