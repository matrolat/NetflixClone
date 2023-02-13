import React, { useState, useRef } from 'react';
import { SafeAreaView, ScrollView, Text, Animated, StyleSheet } from 'react-native';
import Collapse from '../Components/Collapse'



export default function Home({ navigation }) {
  return (
   <Collapse navigation={navigation}/>
  );
}

const styles = StyleSheet.create({  
  container: {
    flex: 1,  
    // paddingTop: 10, 
    margin: 0     
  },
  scrollText: {            
    fontSize: 19,
    textAlign: 'center',
    padding: 20,
    color: '#000'
  }
});
