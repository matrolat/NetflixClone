import { Text, View } from 'react-native'
import React, { Component } from 'react'
import { VLCPlayer, VlCPlayerView } from 'react-native-vlc-media-player';
// import Orientation from 'react-native-orientation';

export default class Player extends Component {



  
  render() {

  

    return (
      <View>
        <Text>Player</Text>
        {/* <VlCPlayerView
          autoplay={false}
          url="https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
      
          ggUrl=""
          showGG={true}
          showTitle={true}
          title="Big Buck Bunny"
          showBack={true}
          onLeftPress={()=>{}}
       /> */}

        <VLCPlayer
       showTitle={true}
       title="Big Buck Bunny"
        source={{ uri: "https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"}}
    />

      </View>
    )
  }
}