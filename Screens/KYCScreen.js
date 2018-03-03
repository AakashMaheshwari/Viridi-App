import React, { Component } from 'react'
import { View,Text,Button,StyleSheet,Image,TouchableOpacity } from 'react-native';

export default class KYCScreen extends Component{
    constructor(props){
        super(props);
    }

    // static navigationOptions={
    //     title='Your KYC',
    // };
    render(){
        return(
            <View style={styles.container}>
                <TouchableOpacity style={styles.proceedButton}  onPress={()=>this.props.navigation.navigate('HomeScreen')}> 
                    <Text style={styles.proceedText}>Proceed</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles=StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    proceedButton:{
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'green',
        width:150,
        height:30,
        marginTop:50
    },
      proceedText:{
        fontSize:20,
        color:'white'
    },
    Logo:{
        width:200,
        height:70
    },

})
