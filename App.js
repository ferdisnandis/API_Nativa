import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Contato from './Pages/Contatos'
import TextToSpeech from './Pages/TextToSpeech';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Contato" component={Contato} />
        <Tab.Screen name="textSpeech" component={TextToSpeech} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;