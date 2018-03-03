import React, { Component } from 'react'
import { View,Text,Button,StyleSheet,Image,TouchableOpacity } from 'react-native';

export default class OTPScreen extends Component{
    constructor(props){
        super(props);
      }

    //   static navigationOptions={
    //       title:'Verify OTP',
    //   };
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.LogoImage}> 
                    <Image source={require('../Images/Viridi-Logo-Reversed.png')} style={styles.Logo}></Image>
                </View>
                <Text style={styles.Instruction}>Please Provide number to Login / Signup</Text>
                <View style={styles.inputBoxes}>
                <View style={styles.box}></View>
                <View style={styles.box}></View>
                <View style={styles.box}></View>
                <View style={styles.box}></View>
                </View>

                <TouchableOpacity style={styles.verifyButton}  onPress={()=>this.props.navigation.navigate('KYCScreen')}> 
                    <Text style={styles.verifyText}>Verify</Text>
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
    Instruction:{
        fontSize: 16,
        color:'white',
        marginTop: 40,
    },
    Logo:{
        width:200,
        height:70
      },
      inputBoxes:{
        flexDirection: 'row',
        justifyContent:'center',
        alignItems:'center',
        marginTop: 30,
      },
    box:{
        width:40,
        height:40,
        backgroundColor: 'white',
        marginLeft: 5,
    },
    verifyButton:{
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'green',
        width:150,
        height:30,
        marginTop:50
      },
    verifyText:{
        fontSize:20,
        color:'white'
      },
})
