import React, { Component } from 'react'
import { View,Text,Button,StyleSheet } from 'react-native';
import {TabNavigator, DrawerNavigator,StackNavigator} from 'react-navigation'

// import HomeTabScreen from './Screens/HomeTabScreen'
// import ProfileScreen from './Screens/ProfileScreen'

class HomeScreen extends React.Component{
    render(){
        return(
            <View>
                {/* <Button title="Dashboard" onPress={()=>this.props.navigation.navigate('Home')}></Button>
                <Button title="Payment" onPress={()=>this.props.navigation.navigate('Payment')}></Button> */}
                <Text>HomeScreen!!</Text>
            </View>
        )
    }
}
class PaymentScreen extends React.Component{
    render(){
        return(
            <View>
                <Text>Payment!!</Text>
            </View>
        )
    }
}
class TransactionScreen extends React.Component{
    render(){
        return(
            <View>
                <Text>Transaction!!</Text>
            </View>
        )
    }
}
 class ProfileScreen extends React.Component{
    render(){
        return(
            <View>
                <Text>ProfileScreen!!</Text>
            </View>
        )
    }
}
class ScanScreen extends React.Component{
    render(){
        return(
            <View>
                <Text>Scan and Pay!!</Text>
            </View>
        )
    }
}
class MobileNumberScreen extends React.Component{
    render(){
        return(
            <View>
                <Text>Mabile Number Payment!!</Text>
            </View>
        )
    }
}

const PaymentOptions=TabNavigator({
    Scan:{screen:ScanScreen},
    MobileNumber:{screen: MobileNumberScreen}
},
{
    animationEnabled:true,
})

const HomeStack=TabNavigator({
Home:{screen:HomeScreen},
Payment:{screen:PaymentOptions},
Transaction:{screen:TransactionScreen}

},
{
    animationEnabled:true,
    tabBarPosition:'top'
},
)
const navigateTab=TabNavigator({
    HomeScreen:{screen:HomeStack},
    ProfileScreen:{screen:ProfileScreen},  
},
{
    animationEnabled:true
});

export default navigateTab;


// const styles=StyleSheet.create({
//     container:{
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//     },

// })
