import { Text, View, Button, Image } from 'react-native'
import React, { Component } from 'react'
import logo from '../../Assets/logos_netflix.png'
export default class Home extends Component {
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-start', backgroundColor: '#000000',flexDirection:'column',color:'white' }}>

                <Text style={{color:'white'}}>Home</Text>
                
            </View>
        )
    }
}