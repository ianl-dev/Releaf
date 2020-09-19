import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

// Home
import HomeScreen from '../HomeScreen';

// Scan (Object detection)
import ScanScreen from '../screens/scan/ScanScreen';

// Make art
import MakeArtScreen from '../screens/art/MakeArtScreen';
import Browser from '../screens/art/Browser';

// Plant
import ViewPlantScreen from '../screens/plant/ViewPlantScreen';

// Social
import ForumScreen from '../screens/social/ForumScreen';

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

    {/* Scan */}
    <Stack.Screen name="Scan" component={ScanScreen} />

    {/* Make Art Screens */}
    <Stack.Screen name="MakeArt" component={MakeArtScreen} />
    <Stack.Screen name="Browser" component={Browser} />

    {/* Plant */}
    <Stack.Screen name="ViewPlant" component={ViewPlantScreen} />

    {/* Social media */}
    <Stack.Screen name="Forum" component={ForumScreen} />
  </Stack.Navigator>
);

export default MainNavigator;
