// In App.js in a new project

import React, {useEffect} from 'react';
import { View, Text,Button,Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { withNavigation } from 'react-navigation';
import SplashScreen from 'react-native-splash-screen'
import ChooseProf from './Screens/ChooseProf/ChooseProf';
import Home from './Screens/Home/Home';
import Collapse from './Screens/Components/Collapse'

//Bottom Navigation Tab Icons
import home_icon from './Assets/BottomNav/Home.png'
import search from './Assets/BottomNav/Search.png'
import coming from './Assets/BottomNav/Coming.png'
import download from './Assets/BottomNav/Download.png'
import more from './Assets/BottomNav/More.png'
//Selected Bottom Nav Icons
import home_icon_select from './Assets/NavSelected/Home.png'
import search_select from './Assets/NavSelected/Search.png'
import coming_select from './Assets/NavSelected/Coming.png'
import download_select from './Assets/NavSelected/Download.png'
import more_select from './Assets/NavSelected/More.png'
import Player from './Screens/Components/Player';
import MovieSlider from './Screens/Components/MovieSlider/MovieSlider';
import DynamicHeader from './Screens/Components/DynamicHeader/DynamicHeader';
import Search from './Screens/Search/Search';

function DetailsScreen({ navigation }) {  
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
      <Button
        title="Go to Home... again"
        onPress={() => navigation.navigate('Settings')}
      />
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();



function MyTabs({navigation}) {
  return (
    <Tab.Navigator
    screenOptions={{
      tabBarLabelStyle: { fontSize: 12 },
      tabBarItemStyle: { width: 100,height:70 },
      tabBarStyle: { backgroundColor: 'black' },
    }}
    >
      <Tab.Screen name="Home" 
      // component={Home}
        children={()=><Home navigation={navigation}/>}
       options={{
        headerShown: false,
        tabBarShowLabel:false,
        tabBarIcon: ({focused }) => (    
          <Image resizeMode='cover' source={focused ? home_icon_select: home_icon} />
       )
      }}/>
      <Tab.Screen name="Search" component={Search}
       options={{
        headerShown: false,
        tabBarShowLabel:false,
        tabBarIcon: ({focused }) => (    
          <Image resizeMode='cover' source={focused ? search_select: search} />
       )
      }}/>
      <Tab.Screen name="Coming" component={Home}
       options={{
        headerShown: false,
        tabBarShowLabel:false,
        tabBarIcon: ({focused }) => (    
          <Image resizeMode='cover' source={focused ? coming_select: coming} />
       )
      }}/>
      <Tab.Screen name="Download" component={Home}
       options={{
        headerShown: false,
        tabBarShowLabel:false,
        tabBarIcon: ({focused }) => (    
          <Image resizeMode='cover' source={focused ? download_select: download} />
       )
      }}/>
      <Tab.Screen name="More" component={Home}
       options={{
        headerShown: false,
        tabBarShowLabel:false,
        tabBarIcon: ({focused }) => (    
          <Image resizeMode='cover' source={focused ? more_select: more} />
       )
      }}/>
      
    </Tab.Navigator>
  );
}


function App() {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="ChooseProf" component={ChooseProf} options={{headerShown: false}}/>       
        <Stack.Screen name="Home" component={Home} options={{headerShown: false}} />
        <Stack.Screen name="Details" component={DetailsScreen} options={{headerShown: false}}/>       
        <Stack.Screen name="Settings" component={SettingsScreen} options={{headerShown: false}}/>       
        <Stack.Screen name="Player" component={Player} options={{headerShown: false}} />
        <Stack.Screen name="MyTabs" component={MyTabs} options={{headerShown: false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;