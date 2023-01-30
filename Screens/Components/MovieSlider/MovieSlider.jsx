import { Text, View,Image } from 'react-native'
import React, { Component } from 'react'
import { ScrollView } from 'react-native-gesture-handler';
import img1 from '../../../Assets/ms5.png'
import img2 from '../../../Assets/ms4.png'
import img3 from '../../../Assets/ms3.png'
import img4 from '../../../Assets/ms1.png'
import img5 from '../../../Assets/ms2.png'
import img6 from '../../../Assets/ms6.png'
import img7 from '../../../Assets/ms7.png'
export default class MovieSlider extends Component {
  render() {
    const array = [img1,img2,img3,img4];
    const shuffleArray = array => {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      };
    }
    shuffleArray(array);
    return (
      <View style={{paddingHorizontal:10,backgroundColor:"black",width:"100%"}}>
        <Text style={{marginTop:22,fontSize:21,color:'white'}}>{this.props.title}</Text>
        {/* <Text>MovieSlider</Text> */}
        <ScrollView style={{display:'flex',flexDirection:"row",marginTop:20}} showsHorizontalScrollIndicator={false} horizontal={true}>

        {array.map((url) => {
          console.log(url);
          
          return (
          <View style={{backgroundColor:"blue",width:102,height:161,marginHorizontal:5}}>
            <Image
         source={url}
          style={{ flex: 1 }}
          resizeMode={"contain"}
        />
          </View>
        );
      })}
      </ScrollView>

      </View>
    )
  }
}