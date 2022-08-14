import React from 'react';
import {
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  useColorScheme,
  View,
  Image,
  FlatList,
  Dimensions
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Fontisto from 'react-native-vector-icons/Fontisto';





import bottle from './assets/bottle.jpg';
import logo from './assets/logo.png';
import mango from './assets/mango.jpg';
import List from './src/component/List';


const App = () => {


  return (

    <View style={{ flex: 1, borderWidth: 3, borderColor: 'yellow' }}>

      <View style={{ flex: 1, borderColor: 'red', borderWidth: 3, justifyContent: 'center', alignItems: 'center' }}>
        <View style={{ width: 170, height: 150, backgroundColor: 'red',overflow: 'hidden' }}>
          <View style={{ backgroundColor: 'yellow', width: 100, height: '150%',marginLeft: -50, marginTop: -40, transform: [{ rotate: "20deg" }] }}>

          </View>
        </View>
      </View>

      <View style={{ flex: 1, borderColor: 'green', borderWidth: 3 }}>
        <List />
      </View>

    </View>
  )
}
export default App