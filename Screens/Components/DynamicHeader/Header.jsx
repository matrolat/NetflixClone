import { Text, View,Image } from 'react-native'
import React, { Component } from 'react'
import icon from '../../../Assets/logos_netflix-icon.png'
export default class Header extends Component {
    render() {
        return (
            <View style={{
                position: 'absolute', top: 10, backgroundColor: 'transparent', zIndex: 1, margin: 0, width: '95%',
                height: 57,
                left: 3,
                top: 20,flex:1,flexDirection:'row',alignItems:'center',justifyContent:'space-between'
            }}>

                <Image
                    style={{
                        maxWidth: 53,
                        height: 57,
                        flex: 1
                    }}
                    source={icon}
                />
                <View className="header-content" style={{flex:1,flexDirection:'row',justifyContent:'space-around'}}>
                    <Text style={{color:'white',fontSize:17.2}}>TV Shows</Text>
                    <Text style={{color:'white',fontSize:17.2}}>Movies</Text>
                    <Text style={{color:'white',fontSize:17.2}}>My List</Text>
                </View>
            </View>
        )
    }
}