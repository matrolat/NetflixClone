import React, { Component } from 'react'
import { Text, View, StyleSheet, Animated, Image, TouchableOpacity,ImageBackground } from 'react-native';
import top10 from '../../../Assets/top10-icon.png'
import list from '../../../Assets/list-icon.png'
import play from '../../../Assets/play-icon.png'
import info from '../../../Assets/info-icon.png'
import homebg from '../../../Assets/HomeBg.png'
export default class CollapseHeader extends Component {
  render() {
    return (
        <View
                style={[
                    styles.header,
                    {
                        height: 415,
                        widht:"100%",
                        opacity: 10,
                        zIndex: 0,
                        backgroundColor: "black"
                    }

                ]}
            >
              <ImageBackground source={homebg} style={{height:415,width:'100%',display:'flex',flexDirection:'column-reverse'}}>
          
                </ImageBackground>

           

                <View className="top-10" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                    <Image
                        style={{
                            maxWidth: 15,
                            height: 15,

                        }}
                        source={top10}
                    />
                    <Text style={{ color: 'white', fontSize: 13.73, fontWeight: 'bold', }}>  #2 in India Today</Text>
                </View>
             
                <View className="play" style={[ styles.play,]}>
                    <TouchableOpacity style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                        <Image
                            style={{
                                height: 45,

                            }}
                            source={list}
                        />
                    </TouchableOpacity>

                    <TouchableOpacity
                   
                    style={{ height: 45, width: 110, backgroundColor: '#C4C4C4', borderRadius: 5.62, display: 'flex', justifyContent: 'center', alignItems: 'center',marginTop:-5 }}>
                        <Image
                            style={{
                                height: 30,
                                width: 72
                            }}
                            source={play}
                        />
                    </TouchableOpacity>

                    <TouchableOpacity style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                        <Image
                            style={{
                                height: 45,

                            }}
                            source={info}
                        />
                    </TouchableOpacity>

                </View>
                {/* <Animated.Text style={[styles.headerText]}>
                    A List of Books
                </Animated.Text> */}
            </View>
    )
  }
}

const styles = StyleSheet.create({
    header: {
        justifyContent: 'flex-end',
        alignItems: 'center',
        left: 0,
        right: 0,
    },
    headerText: {
        color: '#fff',
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'black',
    },
    play: {
        minHeight: 50,
        width:'80%',
        display: 'flex',
        flexDirection:'row',
        alignItems: 'center',
        justifyContent:'space-around',
        marginTop:10
    }
});
