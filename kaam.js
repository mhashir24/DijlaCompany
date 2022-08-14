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
import broccoli from './assets/broccoli.jpg';

const data = [
  {
    id: "0",
    title: "Deshi Mango",
    price: "$110",
    weight: "1kg",
    rating: "3",
    isDiscount: false,
    image: mango
  },
  {
    id: "1",
    title: "broccoli",
    price: "$110",
    weight: "1kg",
    rating: "3",
    isDiscount: true,
    cutPrice: "$200",
    image: broccoli
  },
  {
    id: "2",
    title: "Deshi Mango",
    price: "$110",
    weight: "1kg",
    rating: "3",
    isDiscount: false,
    image: mango
  },
  {
    id: "3",
    title: "Deshi Mango",
    price: "$110",
    weight: "1kg",
    rating: "3",
    cutPrice: "$200",
    isDiscount: false,
    image: mango
  },
  {
    id: "4",
    title: "Deshi Mango",
    price: "$110",
    weight: "1kg",
    rating: "3",
    isDiscount: false,
    image: mango
  },

]

const App = () => {


  return (

    <View style={{ flex: 1, borderWidth: 1, backgroundColor: 'black' }}>

      {/* <View>
        <LinearGradient
          colors={['#1A450D', '#4E9B0D']}
          start={{ x: 0, y: 1 }}
          end={{ x: 1, y: 1 }}>
          <View style={{ flexDirection: 'row', padding: 10, alignItems: 'center' }}>

            <AntDesign
              style={{ paddingHorizontal: 15 }}
              name={'arrowleft'}
              size={30}
              color={'white'}
            />

            <Text style={{ color: 'white', fontSize: 16 }}>
              {'Dijla Company'}
            </Text>

            <Entypo
              style={{ paddingLeft: 120 }}
              name={'shopping-cart'}
              size={30}
              color={'white'}
            />
            <View style={{ backgroundColor: '#DED541', borderRadius: 100, paddingHorizontal: 6, paddingVertical: 2 }}>
              <Text style={{ color: 'white' }}>
                {'3'}
              </Text>
            </View>

          </View>
        </LinearGradient>
      </View> */}



      {/* <View style={{ flex:0.5  }}>

        <ImageBackground
          source={bottle}
          style={{
            zIndex: 1, opacity: 20,
            width: '100%', // applied to Image
            height: '100%'
          }}
          imageStyle={{
            resizeMode: 'cover' // works only here!
          }}
        >

          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <View style={{
              backgroundColor: 'white', width: '60%', margin: 13, borderRadius: 30, flexDirection: 'row',
              alignItems: 'center'
            }}>
              <AntDesign
                style={{ paddingHorizontal: 10 }}
                name={'search1'}
                size={30}
                color={'#D2D2D2'}
              />

              <TextInput
                placeholder='Search Product'
              />
            </View>



            <LinearGradient
              colors={['#1A450D', '#4E9B0D']}
              start={{ x: 0, y: 1 }}
              style={{ borderRadius: 30, padding: 10, width: '30%' }}
              end={{ x: 1, y: 1 }}>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Text style={{ color: 'white', paddingHorizontal: 10, paddingRight: 15 }}>
                  {'Filter'}
                </Text>

                <FontAwesome
                  name={'filter'}
                  size={30}
                  color={'#D2D2D2'}
                />

              </View>

            </LinearGradient>

          </View>



          <View style={{ alignSelf: 'flex-end', marginRight: 20 }}>

            <View style={{ borderRadius: 20, backgroundColor: 'white', padding: 4, alignItems: 'center', marginBottom: 10 }}>

              <MaterialIcons
                name={'email'}
                size={22}
                color={'black'}
              />
            </View>

            <View style={{ borderRadius: 20, backgroundColor: 'white', padding: 4, alignItems: 'center' }}>
              <MaterialIcons
                name={'reply'}
                size={22}
                color={'black'}
              />
            </View>
          </View>


          <View style={{
            backgroundColor: 'white', position: 'absolute', zIndex: 1, top: 175,
            borderRadius: 50, borderWidth: 1, borderColor: '#dcdcdc', padding: 14, left: 10
          }}>
            <Image
              source={logo} />
          </View>

          <View style={{
            backgroundColor: '#325825', opacity: 0.95, position: 'absolute', zIndex: 1, top: 200,
            borderRadius: 50, padding: 10, left: 120, alignItems: 'center', flexDirection: 'row'
          }}>
            <AntDesign
              name={'heart'}
              size={22}
              color={'red'}
              style={{ marginRight: 5 }}
            />

            <Text style={{ color: 'white' }}>
              {'1K Likes'}
            </Text>

            <FontAwesome5
              name={'grip-lines-vertical'}
              size={20}
              color={'white'}
              style={{ marginHorizontal: 15 }}
            />

            <Fontisto
              name={'eye'}
              size={20}
              color={'white'}
              style={{ marginRight: 7 }}
            />

            <Text style={{ color: 'white' }}>
              {'8K Views'}
            </Text>

          </View>



        </ImageBackground>
      </View> */}



      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        numColumns={2}
        contentContainerStyle={{ justifyContent: 'space-between' }}
        ItemSeparatorComponent={() => <View style={{ marginBottom: 10 }} />}
        scrollEnabled
        renderItem={({ item }) => {
          return (
            <View style={{ backgroundColor: 'white', paddingHorizontal: 8, borderRadius: 5 }}>

              <AntDesign
                name={'hearto'}
                size={20}
                color={'green'}
                style={{ alignSelf: 'flex-end', padding: 5, position: 'absolute', zIndex: 1 }}
              />

              <Image
                style={{ marginTop: 15 }}
                source={mango}
              />
              {
                item.cutPrice ?
                  <View style={{ flexDirection: 'row' }}>
                    <Text style={{ textDecorationLine: 'line-through', marginRight: 5 }}>
                      {item.cutPrice}
                    </Text>

                    <Text>
                      {item.price}
                    </Text>
                  </View>
                  
                  :


                  <Text>
                    {item.price}
                  </Text>
              }

              <Text style={{ fontSize: 16, color: 'black' }}>
                {'Deshi Mango'}
              </Text>

              <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text>
                  {'1kg'}
                </Text>

                <Text>
                  {'3 Points'}
                </Text>
              </View>

              <View style={{ marginTop: 5, justifyContent: 'center', alignItems: 'center', marginTop: 10 }}>
                <LinearGradient
                  colors={['#1A450D', '#4E9B0D']}
                  style={{ paddingHorizontal: 10, padding: 5, borderBottomRightRadius: 5, borderBottomLeftRadius: 5 }}
                  start={{ x: 1, y: 0 }}
                  end={{ x: 0, y: 1 }}>

                  <Text style={{ color: 'white', paddingVertical: 3, paddingHorizontal: 22 }}>
                    {'Add To Basket'}
                  </Text>
                </LinearGradient>
              </View>
            </View>
          )
        }}
      />


    </View>

  );
};



export default App;


// <View style={{ backgroundColor: 'white', marginTop: 50, marginHorizontal: 5, paddingHorizontal: 5 }}>

// <AntDesign
//   name={'hearto'}
//   size={20}
//   color={'green'}
//   style={{ alignSelf: 'flex-end', padding: 5, position: 'absolute', zIndex: 1 }}
// />

// <Image
//   style={{ marginTop: 15 }}
//   source={broccoli}
// />
// <View style={{ flexDirection: 'row' }}>
//   <Text style={{ textDecorationLine: 'underline line-through', marginRight: 5 }}>
//     {'$200'}
//   </Text>

//   <Text>
//     {'$180'}
//   </Text>
// </View>

// <Text style={{ fontSize: 16, color: 'black' }}>
//   {'Broccoli'}
// </Text>

// <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
//   <Text>
//     {'5 in pack'}
//   </Text>

//   <Text>
//     {'5 Points'}
//   </Text>
// </View>

// <View style={{ marginTop: 5, justifyContent: 'center', alignItems: 'center', marginTop: 10 }}>
//   <LinearGradient
//     colors={['#1A450D', '#4E9B0D']}
//     style={{ paddingHorizontal: 10, padding: 5, borderBottomRightRadius: 5, borderBottomLeftRadius: 5 }}
//     start={{ x: 1, y: 0 }}
//     end={{ x: 0, y: 1 }}>

//     <View style={{ flexDirection: 'row', alignItems:'center'}}>
//       <AntDesign
//         name={'plus'}
//         size={20}
//         color={'#1A450D'}
//         style={{backgroundColor:'white', borderRadius:50}}
//       />

//       <Text style={{ color: 'white', paddingVertical: 3, paddingHorizontal:5 }}>
//         {'Add To Basket'}
//       </Text>

//       <AntDesign
//         name={'minus'}
//         size={20}
//         color={'white'}
//         style={{}}
//       />
//     </View>

//   </LinearGradient>
// </View>
// </View>
// </View>