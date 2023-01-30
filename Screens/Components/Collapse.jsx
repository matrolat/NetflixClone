import React, { useRef } from "react";
import { View, Animated, Image, ScrollView, Text } from "react-native";
import CollapseHeader from "./DynamicHeader/CollapseHeader";
import DynamicHeader from "./DynamicHeader/DynamicHeader";
import MovieSlider from "./MovieSlider/MovieSlider"
const H_MAX_HEIGHT = 447+44;
const H_MIN_HEIGHT =87;
const H_SCROLL_DISTANCE = H_MAX_HEIGHT - H_MIN_HEIGHT;

const CollapsibleHeader = () => {
  const scrollOffsetY = useRef(new Animated.Value(0)).current;
  const headerScrollHeight = scrollOffsetY.interpolate({
    inputRange: [0, H_SCROLL_DISTANCE],
    outputRange: [H_MAX_HEIGHT, H_MIN_HEIGHT],
    extrapolate: "clamp"
  });

  return (
    <View style={{ flex: 1,backgroundColor:"black" }}>
      <ScrollView 
      style={{backgroundColor:"black"}}
        onScroll={Animated.event([
            { nativeEvent: { contentOffset: { y: scrollOffsetY } } }
          ])}
        scrollEventThrottle={16}
      >
        <View style={{ paddingTop: H_MAX_HEIGHT,backgroundColor:"black" }}>
          {/** Page contant goes here **/}

          <MovieSlider
          title="Continue Watching "
          />
          <MovieSlider
          title="Trending Now "
          />

          <MovieSlider
          title="Top 10 In INDIA "
          />
          <MovieSlider
          title="My List "
          />
          <MovieSlider
          title="Netflix Originals "
          />

        
        </View>
      </ScrollView>

      {
        /** 
         * We put the header at the bottom of
         * our JSX or it will not take priority
         * on Android (for some reason, simply
         * setting zIndex does not work)
         **/
      }
      <Animated.View
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          top: 0,
          height: headerScrollHeight,
          width: "100%",
          overflow: "hidden",
          zIndex: 999,
          // STYLE
        //   borderBottomColor: "black",
        //   borderBottomWidth: 2,
       
          backgroundColor: "black"
        }}
        >
               <DynamicHeader animHeaderValue={scrollOffsetY} />
            {/* <CollapseHeader/> */}
        {/* <Image
          source={{ uri: "https://via.placeholder.com/300" }}
          style={{ flex: 1 }}
          resizeMode={"contain"}
        /> */}
      </Animated.View>
    </View>
  )
}

export default CollapsibleHeader;