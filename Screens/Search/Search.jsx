import { Text, View,Image,TextInput } from 'react-native'
import React, { Component } from 'react'
import search from "../../Assets/SearchIcon/search.png"
import mic from "../../Assets/SearchIcon/mic.png"
import SearchList from '../Components/SearchList/SearchList'

export default class Search extends Component {
    render() {
      const onChangeText = ()=>{
          
      }
    return (
      <View style={{backgroundColor:"white",height:"100%"}}>
        <View style={{minHeight:52,width:"100%",backgroundColor:"#424242",display:"flex",justifyContent:"space-between",alignItems:"center",flexDirection:"row",paddingHorizontal:19}}>
            <View style={{alignItems:"center",flexDirection:"row",display:"flex",justifyContent:"space-evenly"}}>

        <Image source={search} style={{height:20,width:20,marginRight:5}}/>
        <TextInput
        style={{color:"#C4C4C4",fontSize:15,}}
        onChangeText={onChangeText}
        placeholderTextColor={"#C4C4C4"}
        placeholder={"Search for a show, movie, genre, etc"}
      />
            </View>
        <Image source={mic} style={{height:20,width:20}}/>
        </View>
        <SearchList/>
      </View>
    )
  }
}