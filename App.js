// In App.js in a new project

import React, {useEffect} from 'react';
import { View, Text,Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SplashScreen from 'react-native-splash-screen'
import ChooseProf from './Screens/ChooseProf/ChooseProf';
import Home from './Screens/Home/Home';
import Collapse from './Screens/Components/Collapse'

function DetailsScreen({ navigation }) {  
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
      <Button
        title="Go to Home... again"
        onPress={() => navigation.navigate('Home')}
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



function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} options={{headerShown: false}} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
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
        <Stack.Screen name="MyTabs" component={MyTabs} options={{headerShown: false}} />
        <Stack.Screen name="Collapse" component={Collapse} options={{headerShown: false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;