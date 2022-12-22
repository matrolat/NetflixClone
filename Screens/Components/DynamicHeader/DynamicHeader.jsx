import * as React from 'react';
import { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Animated, Image, TouchableOpacity,ImageBackground } from 'react-native';
import Header from './Header';
import top10 from '../../../Assets/top10-icon.png'
import list from '../../../Assets/list-icon.png'
import play from '../../../Assets/play-icon.png'
import info from '../../../Assets/info-icon.png'
import homebg from '../../../Assets/HomeBg.png'
import LinearGradient from 'react-native-linear-gradient';

const Header_Max_Height = 472;
const Header_Min_Height = 80;

export default function DynamicHeader({ animHeaderValue }) {

    const animateHeaderBackgroundColor = animHeaderValue.interpolate({
        inputRange: [0, Header_Max_Height - Header_Min_Height],
        outputRange: ['blue', 'red'],
        extrapolate: 'clamp'
    })

    const animateHeaderHeight = animHeaderValue.interpolate({
        inputRange: [0, Header_Max_Height - Header_Min_Height],
        outputRange: [Header_Max_Height, Header_Min_Height],
        extrapolate: 'clamp'
    })
    const headerTitleOpacity = animHeaderValue.interpolate({
        inputRange: [0, Header_Max_Height - Header_Min_Height],
        outputRange: [1, 0],
        extrapolate: 'clamp'
    });
    console.log(animateHeaderHeight);
    const [count, setCount] = useState(0);
    const AnimatedLinearGradient = Animated.createAnimatedComponent(LinearGradient);
    useEffect(() => {
        // Update the document title using the browser API
        // setCount( animateHeaderHeight==undefined ? 0 : animateHeaderHeight )

    });
    return (
        <>
            <Header />
            <AnimatedLinearGradient  colors={["rgba(1,1,1,1)", "rgba(1,1,1,1)"]} style={{height:animateHeaderHeight,width:'100%'}}>
              
            <Animated.View
                style={[
                    styles.header,
                    {
                        height: animateHeaderHeight,
                        opacity: headerTitleOpacity,
                        zIndex: 0,
                        backgroundColor: "black"
                    }

                ]}
            >
              <ImageBackground source={homebg} style={{height:415,width:'100%',display:'flex',flexDirection:'column-reverse'}}>
              <LinearGradient  colors={["rgba(1,1,1, 0)", "rgba(1,1,1, 1)"]} style={{height:30,width:'100%'}}>
                </LinearGradient>
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

                    <TouchableOpacity style={{ height: 45, width: 110, backgroundColor: '#C4C4C4', borderRadius: 5.62, display: 'flex', justifyContent: 'center', alignItems: 'center',marginTop:-5 }}>
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
            </Animated.View>
            </AnimatedLinearGradient>
        </>
    );
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
