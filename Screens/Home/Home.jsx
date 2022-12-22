import React, { useState, useRef } from 'react';
import { SafeAreaView, ScrollView, Text, Animated, StyleSheet } from 'react-native';


// You can import from local files
import DynamicHeader from '../Components/DynamicHeader/DynamicHeader';


export default function Home() {
  let scrollOffsetY = useRef(new Animated.Value(0)).current;  

  return (
    <SafeAreaView style={styles.container}>
      <DynamicHeader animHeaderValue={scrollOffsetY} />
      <ScrollView 
        scrollEventThrottle={16}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollOffsetY}}}],
          {useNativeDriver: false}
        )}
      >         
                   <Text>1</Text>
                   <Text>text</Text>
                   <Text>text</Text>
                   <Text>text</Text>
                   <Text>text</Text>
                   <Text>text</Text>
                   <Text>text</Text>
                   <Text>text</Text>
                   <Text>text</Text>
                   <Text>text</Text>
                   <Text>text</Text>
                   <Text>text</Text>
                   <Text>text</Text>
                   <Text>text</Text>
                   <Text>text</Text>
                   <Text>text</Text>
                   <Text>text</Text>
                   <Text>text</Text>
                   <Text>text</Text>
                   <Text>text</Text>
                   <Text>text</Text>
                   <Text>text</Text>
                   <Text>text</Text>
                   <Text>text</Text>
                   <Text>text</Text>
                   <Text>text</Text>
                   <Text>text</Text>
                   <Text>text</Text>
                   <Text>text</Text>
                   <Text>text</Text>
                   <Text>text</Text>
                   <Text>text</Text>
                   <Text>text</Text>
                   <Text>text</Text>
                   <Text>text</Text>
                   <Text>text</Text>
                   <Text>text</Text>
                   <Text>text</Text>
                   <Text>text</Text>
                   <Text>text</Text>
                   <Text>text</Text>
                   <Text>text</Text>
                   <Text>text</Text>
                   <Text>text</Text>
                   <Text>2</Text>
                   <Text>text</Text>
                   <Text>text</Text>
                   <Text>text</Text>
                   <Text>text</Text>
                   <Text>text</Text>
                   <Text>text</Text>
                   <Text>text</Text>
                   <Text>text</Text>
                   <Text>text</Text>
                   <Text>text</Text>
                   <Text>text</Text>
                   <Text>text</Text>
                   <Text>text</Text>
                   <Text>text</Text>
                   <Text>text</Text>
                   <Text>3</Text>
                   <Text>text</Text>
                   <Text>text</Text>
                   <Text>text</Text>
                   <Text>text</Text>
                   <Text>text</Text>
                   <Text>text</Text>
                   <Text>text</Text>
                   <Text>text</Text>
      </ScrollView>
                   
    </SafeAreaView>
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
