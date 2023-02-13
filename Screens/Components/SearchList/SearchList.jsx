import { Text, View, Image, TextInput } from 'react-native'
import React, { Component } from 'react'
import movie from '../../../Assets/SearchIcon/movie.png'
import play from '../../../Assets/SearchIcon/play.png'

export default class SearchList extends Component {
    render() {

        return (
            <View style={{ backgroundColor: "black", height: "100%" }}>
                <Text style={{ color: "white", fontSize: 26, marginLeft: 10, marginVertical: 21 }}>Top Searches</Text>

                <View style={{ backgroundColor: "#424242", height: 76, width: "100%", marginBottom: 3, display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                    <View style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                        <Image source={movie} style={{ height: 76, width: 146 }} />
                        <Text style={{ color: "white", fontSize: 15, marginLeft: 20 }}>Citation</Text>

                    </View>
                    <Image source={play} style={{ height: 28, width: 28, marginRight: 5 }} />

                </View>

                
                <View style={{ backgroundColor: "#424242", height: 76, width: "100%", marginBottom: 3, display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                    <View style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                        <Image source={movie} style={{ height: 76, width: 146 }} />
                        <Text style={{ color: "white", fontSize: 15, marginLeft: 20 }}>Citation</Text>

                    </View>
                    <Image source={play} style={{ height: 28, width: 28, marginRight: 5 }} />

                </View>



            </View>
        )
    }
}