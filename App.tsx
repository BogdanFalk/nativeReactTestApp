/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import * as React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
  StatusBar,
  ImageBackground,
  Button
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import { NavigationContainer, useNavigation, NavigationProp, ParamListBase } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

declare const global: {HermesInternal: null | {}};

const image = { uri: "https://reactjs.org/logo-og.png" };

const App = () => {
  return (
    <>
      <NavigationContainer>
        {/* <Stack.Navigator>
          <Stack.Screen 
            name="Home"
            component={HomeScreen}
            options={{
              headerShown: false
            }}/>
          <Stack.Screen 
            name="ProfileScreen"
            component={ProfileScreen}
            options={({ navigation, route }) => ({
              headerShown: false
            })}
           />
        </Stack.Navigator> */}
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Profile" component={Profile} />
      </Drawer.Navigator>
      </NavigationContainer>
      
    </>
  );
};

export interface NavigationProps {
  navigation: NavigationProp<ParamListBase>
}

function HomeScreen({navigation}: NavigationProps) {
 
  return (
    <View>
      <Button
        title="Go to Huan's profile"
        onPress={() =>
          // navigation.navigate('Profile')
          alert('This is a button!')
        }
      />
    </View>
  );
};
function Profile({}){
  const name:string = "Huan";
  return (
    <View>
      <Text>This is {name}'s profile</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
  randomImage:{
    width:500,
    height:100,
    resizeMode:"repeat"

  },
  container: {
    flex: 1,
    flexDirection: "column"
  },
  image: {
    flex: 1,
    resizeMode: "stretch",
    justifyContent: "center"
  },
});

export default App;
