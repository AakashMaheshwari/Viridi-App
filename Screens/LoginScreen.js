import React, { Component } from 'react'
import { View,Text,Button,StyleSheet,TextInput,Image,TouchableOpacity } from 'react-native';

export default class LoginScreen extends Component{
  constructor(props){
    super(props);
  }
    render(){
        return(
          <View style={styles.container}>
            <View style={styles.LogoImage}>
              <Image source={require('../Images/Viridi-Logo-Reversed.png')} style={styles.Logo}></Image>
            </View>
            <Text style={styles.Instruction}>Please Provide number to Login/Signup</Text>
            <View style={styles.inputViews}>
              <TextInput style={styles.fullName} placeholder="Full Name" placeholderTextColor='white'></TextInput>
              <TextInput style={styles.phoneNumber} placeholder="Phone Number" placeholderTextColor='white'></TextInput>
              <TextInput style={styles.Password} placeholder="Password" placeholderTextColor='white'></TextInput>
            </View>
          <TouchableOpacity style={styles.loginButton}  onPress={()=>this.props.navigation.navigate('OTPScreen')}> 
            <Text style={styles.loginText}>Login/ Signup</Text>
          </TouchableOpacity>
          </View>
        );
    }
}

const styles=StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor:'rgb(61,65,86)'
    },
    Logo:{
      width:200,
      height:70
    },
    inputViews:{
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
    },
    fullName:{
      marginTop:40,
      width:300,
      borderBottomWidth:1,
      borderBottomColor: 'white',
      
    },
    phoneNumber:{
      marginTop:40,
      width:300
    },
    Password:{
      marginTop:40,
      width:300,
    },
    loginButton:{
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'green',
      width:150,
      height:30,
      marginTop:50
    },
    loginText:{
      fontSize:20,
      color:'white'
    },
    Instruction:{
      fontSize: 17,
      color:'white'
    },
})
