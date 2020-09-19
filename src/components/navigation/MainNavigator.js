import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

// Home
import HomeScreen from '../HomeScreen';

// Scan (Object detection)
import DetectRecyclings from '../screens/scan/DetectRecyclings';

// Make art
import ShowInstructibles from '../screens/art/ShowInstructibles';

// Plant
import VirtualPlant from '../screens/plant/VirtualPlant';

// Social
import Forum from '../screens/social/Forum';

// Use a Stack navigator
const Stack = createStackNavigator();

/**
 * Main navigator
 *
 * Determines the navigation structure of the whole app
 *
 * Screens re listed in alphabetical order by section.
 */

const MainNavigator = () => (
  <Stack.Navigator initialRouteName="Home" headerMode="none">
    {/* Home */}
    <Stack.Screen name="Home" component={HomeScreen} />

    {/* Scan Screens */}
    <Stack.Screen name="DetectRecycling" component={DetectRecyclings} />

    {/* Make Art Screens */}
    <Stack.Screen name="ShowInstructibles" component={ShowInstructibles} />

    {/* Plant */}
    <Stack.Screen name="VirtualPlant" component={VirtualPlant} />

    {/* Social media */}
    <Stack.Screen name="Forum" component={Forum} />
  </Stack.Navigator>
);

export default MainNavigator;
