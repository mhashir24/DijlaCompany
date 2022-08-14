import React from 'react';
import {
    Text,
    View,
    Image,
    FlatList,
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import mango from '../../../assets/mango.jpg';
import broccoli from '../../../assets/broccoli.jpg';

import AntDesign from 'react-native-vector-icons/AntDesign';

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


const List = () => {
    return (
        <FlatList
            data={data}
            keyExtractor={(item) => item.id}
            numColumns={2}
            contentContainerStyle={{ justifyContent: 'space-between' }}
            ItemSeparatorComponent={() => <View style={{ marginBottom: 10 }} />}
            scrollEnabled
            renderItem={({ item }) => {
                return (
                    <View style={{ backgroundColor: 'white', paddingHorizontal: 8, borderRadius: 5, position: 'relative' }}>

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
    )
}

export default List