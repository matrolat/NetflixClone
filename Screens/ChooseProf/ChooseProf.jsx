import { Text, View, Button, Image, TouchableOpacity } from 'react-native'
import React, { Component } from 'react'
import logo from '../../Assets/logos_netflix.png'
import edit from '../../Assets/bx_bxs-pencil.png'
import prof1 from '../../Assets/prof1.png'
import prof2 from '../../Assets/prof2.png'
import addprof from '../../Assets/addprof.png'
import { TouchableHighlight } from 'react-native-gesture-handler'
export default class ChooseProf extends Component {
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-start', backgroundColor: '#000000', flexDirection: 'column' }}>
                <View className="header" style={{ display: 'flex', flexDirection: 'row', marginVertical: 15 }}>
                    <View className="blank" style={{ flex: 1 }}></View>
                    <Image
                        style={{
                            maxWidth: 150,
                            height: 37.2,
                            flex: 1
                        }}
                        source={logo}
                    />
                    <View className="edit" style={{ flex: 1, flexDirection: 'row-reverse', alignItems: 'center' }}>
                        <Image
                            style={{
                                width: 24,
                                height: 24,
                                marginRight: 20
                            }}
                            source={edit}
                        />
                    </View>
                </View>
                {/* <Text style={{color:'white'}}>Home Screen</Text> */}
                <View style={{ flex: 5, backgroundColor: 'black', width: '100%', justifyContent: 'center' }}>

                    <View className="content" style={{ flexDirection: 'row', zIndex: 1, paddingHorizontal: 80, marginVertical: 10, justifyContent: 'space-between' }}>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('Home')}>
                            <Image
                                style={{

                                    width: 100,
                                    height: 121,

                                }}
                                source={prof1}

                            />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('Home')}>
                        <Image
                            style={{
                                width: 100,
                                height: 121,
                            }}
                            source={prof2}
                            onPress={() => this.props.navigation.navigate('Home')}
                            />
                            </TouchableOpacity>
                    </View>

                    <View className="AddProfile" style={{ flexDirection: 'row', paddingHorizontal: 80, marginVertical: 10 }}>
                        <View style={{ flex: 1, alignItems: 'center', maxWidth: 100, maxHeight: 130 }}>
                            <Image
                                style={{
                                    width: 50,
                                    height: 50,
                                    marginBottom: 10
                                }}
                                source={addprof}
                            />
                            <Text style={{ color: 'white', zIndex: 1 }}>Add Profile</Text>
                        </View>

                    </View>
                    {/* <Button
                style={{flex:1}}
                    title="Go to Details"
                    onPress={() => this.props.navigation.navigate('Details')}
                /> */}
                </View>
            </View>
        )
    }
}