import { StyleSheet, Image, TouchableOpacity, ImageBackground } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import Delivery from '../Screens/TabScreens/Delivery'
import Carts from '../Screens/TabScreens/Carts'
import Filter from '../Screens/TabScreens/Filter'
import Drawer from './Drawer'
// import { TouchableOpacity } from 'react-native-gesture-handler'
// import { Image } from 'react-native-paper/lib/typescript/src/components/Avatar/Avatar'


const Tabs = ({ navigation }) => {
    const Tab = createBottomTabNavigator();
    return (

            // <ImageBackground style={{}} source={require("../assets/textureHD.jpg")}>
        <Tab.Navigator>
            <Tab.Screen
                name='Home'
                component={Drawer}
                options={{
                    title: " ",
                    headerShown: false,
                    tabBarStyle: { height: 60, backgroundColor: '#eec06b' },
                    tabBarIcon: ({ focused }) => {
                        return (
                            <Image source={require("../assets/home.png")} style={styles.IconSize} />
                        )
                    }
                }} />
            {/* <Tab.Screen name='Filter' component={Filter}
                options={{
                    title: " ",
                    headerShown: false,
                    tabBarStyle: { height: 80, backgroundColor: '#eec06b' },
                    tabBarIcon: ({ focused }) => {
                        return (
                            <Image source={require("../assets/filter.png")} style={styles.IconSize} />
                        )
                    }
                }}
            /> */}
            <Tab.Screen name='Cart2' component={Carts}
                options={{
                    title: " ",
                    headerShown: false,
                    tabBarStyle: { height: 60, backgroundColor: '#eec06b' },
                    tabBarIcon: ({ focused }) => {
                        return (
                            <TouchableOpacity onPress={() => { navigation.navigate('cart') }}>
                                <Image source={require("../assets/cart.png")} style={styles.IconSize} />
                            </TouchableOpacity>
                        )
                    }
                }} />

            {/* <Tab.Screen name='Delivery' component={Delivery}
                options={{
                    title: " ",
                    headerShown: false,
                    tabBarStyle: { height: 60, backgroundColor: '#eec06b' },
                    tabBarIcon: ({ focused }) => {
                        return (
                            <Image source={require("../assets/delivery.png")} style={styles.IconSize} />
                        )
                    }
                }} /> */}
        </Tab.Navigator>
            //    </ImageBackground>
    )
}

export default Tabs

const styles = StyleSheet.create({
    IconSize: {
        width: 30,
        height: 30,
        resizeMode: "cover",
    },
})