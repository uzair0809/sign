import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import FrontScreen from './components/FrontScreen';
import WelcomeScreen from './components/WelcomeScreen';
import Learn from './components/Learn';
import Contactus from './components/Contactus';
import Translate from './components/Translate';


const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Front" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Front" component={FrontScreen} />
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Learn" component={Learn} />
        <Stack.Screen name="Contactus" component={Contactus} />
        <Stack.Screen name="Translate" component={Translate} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
