import React, { useEffect, useState } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { StyleSheet } from "react-native";
import { Drawer } from 'react-native-drawer-layout';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Splash from '../Screens/Splash';
import GetStarted from '../Screens/GetStarted';
import LogInSignUp from '../Screens/LogInSignUp';
import LogIn from '../Screens/LogIn';
import SignUp from '../Screens/SignUp';
import FormDetails from '../Screens/FormDetails';
import OTP from '../Screens/OTP';
import Cart from '../Screens/Cart';
import SingleProduct from '../Screens/SingleProduct';
import Product from '../Screens/Product';
import Thankyou from '../Screens/Thankyou';
import Tabs from './Tabs';
import PrivacyPolicy from '../Screens/DrawerScreens/PrivacyPolicy';
import TnC from '../Screens/DrawerScreens/TnC';
import ServiceAvailable from '../Screens/DrawerScreens/ServiceAvailable';
import ViewProfile from '../Screens/ViewProfile';
import PriceList from '../Screens/PriceList';
import GoldScreen from '../Screens/GoldScreen';
import SilverScreen from '../Screens/SilverScreen';
import StatesDropDown from '../Screens/StatesDropDown';
import WelcomeScreen from '../Screens/DrawerScreens/WelcomeScreen';
import ManageOrder from '../Screens/DrawerScreens/ManageOrder';
import Chains from '../Screens/Categories/Chains';
import CastingJwellery from '../Screens/Categories/CastingJwellery';
import CastingCzJwellery from '../Screens/Categories/CastingCzJwellery';
import PlainJwellery from '../Screens/Categories/PlainJwellery';
import OurProduct from '../Screens/DrawerScreens/OurProduct';
import MachineChainsC from '../Screens/Categories/SubCategories/Chains/MachineChainsC';
import SilkyRopeC from '../Screens/Categories/SubCategories/Chains/SilkyRopeC';
import ChocoChainsC from '../Screens/Categories/SubCategories/Chains/ChocoChainsC';
import HandMadeC from '../Screens/Categories/SubCategories/Chains/HandMadeC';
import HollowFancyC from '../Screens/Categories/SubCategories/Chains/HollowFancyC';
import HollowNawabiC from '../Screens/Categories/SubCategories/Chains/HollowNawabiC';
import IndoChainsC from '../Screens/Categories/SubCategories/Chains/IndoChainsC';
import IndoChocoChainsC from '../Screens/Categories/SubCategories/Chains/IndoChocoChainsC';
import MadrasiChainsC from '../Screens/Categories/SubCategories/Chains/MadrasiChainsC';
import SolidNawabiC from '../Screens/Categories/SubCategories/Chains/SolidNawabiC';
import SumoChainsC from '../Screens/Categories/SubCategories/Chains/SumoChainsC';
import BangelsPJ from '../Screens/Categories/SubCategories/PlainJwellery/BangelsPJ';
import BraceletsPJ from '../Screens/Categories/SubCategories/PlainJwellery/BraceletsPJ';
import ChokerSetsPJ from '../Screens/Categories/SubCategories/PlainJwellery/ChokerSetsPJ';
import GoldPendentPJ from '../Screens/Categories/SubCategories/PlainJwellery/GoldPendentPJ';
import HandmadeGentsRingPJ from '../Screens/Categories/SubCategories/PlainJwellery/HandmadeGentsRingPJ';
import HandmadeLadiesRingPJ from '../Screens/Categories/SubCategories/PlainJwellery/HandmadeLadiesRingPJ';
import KadePJ from '../Screens/Categories/SubCategories/PlainJwellery/KadePJ';
import LongSetsPJ from '../Screens/Categories/SubCategories/PlainJwellery/LongSetsPJ';
import MangalSutraPJ from '../Screens/Categories/SubCategories/PlainJwellery/MangalSutraPJ';
import RajkotItemsPJ from '../Screens/Categories/SubCategories/PlainJwellery/RajkotItemsPJ';
import SetsPJ from '../Screens/Categories/SubCategories/PlainJwellery/SetsPJ';
import TopsCJ from '../Screens/Categories/SubCategories/CastingJwellery/TopsCJ';
import TopsPJ from '../Screens/Categories/SubCategories/PlainJwellery/TopsPJ';
import UvShapedBali from '../Screens/Categories/SubCategories/PlainJwellery/UvShapedBaliPJ';
import UvShapedBaliPJ from '../Screens/Categories/SubCategories/PlainJwellery/UvShapedBaliPJ';
import GentsRingCJ from '../Screens/Categories/SubCategories/CastingJwellery/GentsRingCJ';
import GoldPendentsCJ from '../Screens/Categories/SubCategories/CastingJwellery/GoldPendentsCJ';
import LadiesRingCJ from '../Screens/Categories/SubCategories/CastingJwellery/LadiesRingCJ';
import PendentsCJ from '../Screens/Categories/SubCategories/CastingJwellery/PendentsCJ';
import BaliCZ from '../Screens/Categories/SubCategories/CastingCzJwellery/BaliCZ';
import BraceLetsCZ from '../Screens/Categories/SubCategories/CastingCzJwellery/BraceLetsCZ';
import CharmsCZ from '../Screens/Categories/SubCategories/CastingCzJwellery/CharmsCZ';
import CockTailRingsCZ from '../Screens/Categories/SubCategories/CastingCzJwellery/CockTailRingsCZ';
import GentsSolitairRingsCZ from '../Screens/Categories/SubCategories/CastingCzJwellery/GentsSolitairRingsCZ';
import GoldPendentsCZ from '../Screens/Categories/SubCategories/CastingCzJwellery/GoldPendentsCZ';
import LadiesRingsCZ from '../Screens/Categories/SubCategories/CastingCzJwellery/LadiesRingsCZ';
import LadiesSolitaireRingsCZ from '../Screens/Categories/SubCategories/CastingCzJwellery/LadiesSolitaireRingsCZ';
import MangalSutraCZ from '../Screens/Categories/SubCategories/CastingCzJwellery/MangalSutraCZ';
import NeckLaceSetsCZ from '../Screens/Categories/SubCategories/CastingCzJwellery/NeckLaceSetsCZ';
import PendentSetsCZ from '../Screens/Categories/SubCategories/CastingCzJwellery/PendentSetsCZ';
import SolitairePendentSetsCZ from '../Screens/Categories/SubCategories/CastingCzJwellery/SolitairePendentSetsCZ';
import SolitaireRopeCZ from '../Screens/Categories/SubCategories/CastingCzJwellery/SolitaireRopeCZ';
import TopsCZ from '../Screens/Categories/SubCategories/CastingCzJwellery/TopsCZ';
import GentsRingsCZ from '../Screens/Categories/SubCategories/CastingCzJwellery/GentsRingsCZ';
import AboutUs from '../Screens/DrawerScreens/AboutUs';
import WastageChart from '../Screens/WastageChart';

const Stack = createNativeStackNavigator();

const Navigation = () => {
    const [showSplashScreen, setShowSplashScreen] = useState(true);


    useEffect(() => {
        AsyncStorage.getItem("userToken").then((value) => {
            if (value) {
                setShowSplashScreen(false);
            }
        });
    }, []);


    return (
        <Stack.Navigator options={{ headerShown: false }}>
            <>
                {showSplashScreen ? (
                    <>
                        <Stack.Screen
                            name="splash"
                            component={Splash}
                            options={{ headerShown: false, title: 'My home' }} />

                        <Stack.Screen
                            name="getstarted"
                            component={GetStarted}
                            options={{ headerShown: false, title: 'My home' }} />

                        <Stack.Screen
                            name="loginsignup"
                            component={LogInSignUp}
                            options={{ headerShown: false }} />

                        <Stack.Screen
                            name="login"
                            component={LogIn}

                            options={{
                                headerShown: false,
                                title: '',
                                headerStyle: { backgroundColor: 'white' },
                                headerTintColor: '#bc9954',
                                headerTitleStyle: { color: '#bc9954' }
                            }} />
                        <Stack.Screen
                            name="signup"
                            component={SignUp}
                            options={{
                                title: '',
                                headerShown: false,
                                headerStyle: { backgroundColor: 'black' },
                                headerTintColor: '#bc9954',
                                headerTitleStyle: { color: '#bc9954' }
                            }}
                        />
                    </>
                ) : null
                }

                {/* Main Flow */}

                {showSplashScreen == false ? (
                    <>
                        <Stack.Screen
                            name="formdetails"
                            component={FormDetails}
                            options={{ headerShown: false }} />

                        <Stack.Screen
                            name="tabs"
                            component={Tabs}
                            options={{ headerShown: false }} />

                        <Stack.Screen
                            name="otp"
                            component={OTP}
                            options={{
                                title: '',
                                headerStyle: { backgroundColor: 'black' },
                                headerTintColor: '#bc9954',
                                headerTitleStyle: { color: '#bc9954' }
                            }}
                        />

                        <Stack.Screen
                            name="cart"
                            component={Cart}
                            options={{
                                title: 'My Cart',
                                headerStyle: { backgroundColor: 'black' },
                                headerTintColor: '#bc9954',
                                headerTitleStyle: { color: '#bc9954' }
                            }} />

                        <Stack.Screen
                            name="singleproduct"
                            component={SingleProduct}
                            options={{
                                title: '',
                                headerStyle: { backgroundColor: 'black' },
                                headerTintColor: '#bc9954',
                                headerTitleStyle: { color: '#bc9954' }
                            }} />

                        <Stack.Screen
                            name="product"
                            component={Product}
                            options={{
                                title: '',
                                headerStyle: { backgroundColor: 'black' },
                                headerTintColor: '#bc9954',
                                headerTitleStyle: { color: '#bc9954' }
                            }} />

                        <Stack.Screen
                            name="about"
                            component={AboutUs}
                            options={{
                                title: 'About us',
                                headerStyle: { backgroundColor: 'black' },
                                headerTintColor: '#bc9954',
                                headerTitleStyle: { color: '#bc9954' }
                            }} />



                        <Stack.Screen
                            name="Manage"
                            component={ManageOrder}
                            options={{
                                title: 'Orders',
                                headerShown: true,
                                headerStyle: { backgroundColor: '#bc9954' },
                                headerTintColor: 'black',
                                headerTitleStyle: { color: 'black' }
                            }} />
                        <Stack.Screen
                            name="our"
                            component={OurProduct}
                            options={{
                                title: 'Our Products',
                                headerShown: true,
                                headerStyle: { backgroundColor: '#bc9954' },
                                headerTintColor: 'black',
                                headerTitleStyle: { color: 'black' }
                            }} />



                        <Stack.Screen
                            name="privacypolicy"
                            component={PrivacyPolicy}
                            options={{
                                title: 'Privacy Policy',
                                headerShown: true,
                                headerStyle: { backgroundColor: 'black' },
                                headerTintColor: '#bc9954',
                                headerTitleStyle: { color: '#bc9954' }
                            }} />

                        <Stack.Screen
                            name="tnc"
                            component={TnC}
                            options={{
                                title: 'Terms and Conditions',
                                headerShown: true,
                                headerStyle: { backgroundColor: 'black' },
                                headerTintColor: '#bc9954',
                                headerTitleStyle: { color: '#bc9954' }
                            }} />

                        <Stack.Screen
                            name="wastagechart"
                            component={WastageChart}
                            options={{
                                title: 'Wastage chart',
                                headerShown: true,
                                headerStyle: { backgroundColor: 'black' },
                                headerTintColor: '#bc9954',
                                headerTitleStyle: { color: '#bc9954' }
                            }} />

                        <Stack.Screen
                            name="welcomescreen"
                            component={WelcomeScreen}
                            options={{
                                title: '',
                                headerShown: true, headerStyle: { backgroundColor: 'black' },
                                headerTintColor: '#bc9954',
                                headerTitleStyle: { color: '#bc9954' }
                            }} />
                        <Stack.Screen
                            name="ServiceAvailable"
                            component={ServiceAvailable}
                            options={{
                                title: 'Service Available',
                                headerShown: true, headerStyle: { backgroundColor: 'black' },
                                headerTintColor: '#bc9954',
                                headerTitleStyle: { color: '#bc9954' }
                            }} />

                        <Stack.Screen
                            name="viewprofile"
                            component={ViewProfile}
                            options={{
                                title: 'Profile',
                                headerShown: true, headerStyle: { backgroundColor: 'black' },
                                headerTintColor: '#bc9954',
                                headerTitleStyle: { color: '#bc9954' }
                            }} />
                        <Stack.Screen
                            name="pricelist"
                            component={PriceList}
                            options={{
                                title: '',
                                headerShown: true, headerStyle: { backgroundColor: 'black' },
                                headerTintColor: '#bc9954',
                                headerTitleStyle: { color: '#bc9954' }
                            }} />
                        <Stack.Screen
                            name="goldscreen"
                            component={GoldScreen}
                            options={{
                                title: '',
                                headerShown: true, headerStyle: { backgroundColor: 'black' },
                                headerTintColor: '#bc9954',
                                headerTitleStyle: { color: '#bc9954' }
                            }} />
                        <Stack.Screen
                            name="silverscreen"
                            component={SilverScreen}
                            options={{
                                title: '',
                                headerShown: true, headerStyle: { backgroundColor: 'black' },
                                headerTintColor: '#bc9954',
                                headerTitleStyle: { color: '#bc9954' }
                            }} />
                        <Stack.Screen
                            name="StatesDropDown"
                            component={StatesDropDown}
                            options={{
                                title: '',
                                headerShown: true, headerStyle: { backgroundColor: 'black' },
                                headerTintColor: '#bc9954',
                                headerTitleStyle: { color: '#bc9954' }
                            }} />

                        <Stack.Screen
                            name="thankyou"
                            component={Thankyou}
                            options={{
                                title: '',
                                headerShown: true,
                                headerStyle: { backgroundColor: 'black' },
                                headerTintColor: '#bc9954',
                                headerTitleStyle: { color: '#bc9954' }
                            }} />

                        {/* Categories */}


                        <Stack.Screen
                            name="chains"
                            component={Chains}
                            options={{
                                title: 'Chains',
                                headerShown: true,
                                headerStyle: { backgroundColor: '#bc9954' },
                                headerTintColor: 'black',
                                headerTitleStyle: { color: 'black' }
                            }} />

                        <Stack.Screen
                            name="CastingJwellery"
                            component={CastingJwellery}
                            options={{
                                title: 'Casting Jwellery',
                                headerShown: true,
                                headerStyle: { backgroundColor: '#bc9954' },
                                headerTintColor: 'black',
                                headerTitleStyle: { color: 'black' }
                            }} />
                        <Stack.Screen
                            name="CastingCzJwellery"
                            component={CastingCzJwellery}
                            options={{
                                title: 'Casting Cz Jwellery',
                                headerShown: true,
                                headerStyle: { backgroundColor: '#bc9954' },
                                headerTintColor: 'black',
                                headerTitleStyle: { color: 'black' }
                            }} />
                        <Stack.Screen
                            name="PlainJwellery"
                            component={PlainJwellery}
                            options={{
                                title: 'Plain Jwellery',
                                headerShown: true,
                                headerStyle: { backgroundColor: '#bc9954' },
                                headerTintColor: 'black',
                                headerTitleStyle: { color: 'black' }
                            }} />

                        {/* SubCategories */}

                        {/* Chains */}
                        <Stack.Screen
                            name="ChocoChains"
                            component={ChocoChainsC}
                            options={{
                                title: 'Choco Chains',
                                headerShown: true,
                                headerStyle: { backgroundColor: '#bc9954' },
                                headerTintColor: 'black',
                                headerTitleStyle: { color: 'black' }
                            }} />

                        <Stack.Screen
                            name="HandMade"
                            component={HandMadeC}
                            options={{
                                title: 'Hand Made',
                                headerShown: true,
                                headerStyle: { backgroundColor: '#bc9954' },
                                headerTintColor: 'black',
                                headerTitleStyle: { color: 'black' }
                            }} />

                        <Stack.Screen
                            name="HollowFancy"
                            component={HollowFancyC}
                            options={{
                                title: 'Hollow Fancy',
                                headerShown: true,
                                headerStyle: { backgroundColor: '#bc9954' },
                                headerTintColor: 'black',
                                headerTitleStyle: { color: 'black' }
                            }} />

                        <Stack.Screen
                            name="HollowNawabi"
                            component={HollowNawabiC}
                            options={{
                                title: 'Hollow Nawabi',
                                headerShown: true,
                                headerStyle: { backgroundColor: '#bc9954' },
                                headerTintColor: 'black',
                                headerTitleStyle: { color: 'black' }
                            }} />

                        <Stack.Screen
                            name="IndoChains"
                            component={IndoChainsC}
                            options={{
                                title: 'Indo Chains',
                                headerShown: true,
                                headerStyle: { backgroundColor: '#bc9954' },
                                headerTintColor: 'black',
                                headerTitleStyle: { color: 'black' }
                            }} />

                        <Stack.Screen
                            name="IndoChocoChains"
                            component={IndoChocoChainsC}
                            options={{
                                title: 'Indo Choco Chains',
                                headerShown: true,
                                headerStyle: { backgroundColor: '#bc9954' },
                                headerTintColor: 'black',
                                headerTitleStyle: { color: 'black' }
                            }} />

                        <Stack.Screen
                            name="MachineChains"
                            component={MachineChainsC}
                            options={{
                                title: 'Machine Chains',
                                headerShown: true,
                                headerStyle: { backgroundColor: '#bc9954' },
                                headerTintColor: 'black',
                                headerTitleStyle: { color: 'black' }
                            }} />

                        <Stack.Screen
                            name="MadrasiChains"
                            component={MadrasiChainsC}
                            options={{
                                title: 'Madrasi Chains',
                                headerShown: true,
                                headerStyle: { backgroundColor: '#bc9954' },
                                headerTintColor: 'black',
                                headerTitleStyle: { color: 'black' }
                            }} />

                        <Stack.Screen
                            name="SilkyRope"
                            component={SilkyRopeC}
                            options={{
                                title: 'Silky Rope',
                                headerShown: true,
                                headerStyle: { backgroundColor: '#bc9954' },
                                headerTintColor: 'black',
                                headerTitleStyle: { color: 'black' }
                            }} />

                        <Stack.Screen
                            name="SolidNawabi"
                            component={SolidNawabiC}
                            options={{
                                title: 'Solid Nawabi',
                                headerShown: true,
                                headerStyle: { backgroundColor: '#bc9954' },
                                headerTintColor: 'black',
                                headerTitleStyle: { color: 'black' }
                            }} />

                        <Stack.Screen
                            name="SumoChains"
                            component={SumoChainsC}
                            options={{
                                title: 'Sumo Chains',
                                headerShown: true,
                                headerStyle: { backgroundColor: '#bc9954' },
                                headerTintColor: 'black',
                                headerTitleStyle: { color: 'black' }
                            }} />


                        {/* Plain Jwellery */}

                        <Stack.Screen
                            name="Bangels"
                            component={BangelsPJ}
                            options={{
                                title: 'Bangels',
                                headerShown: true,
                                headerStyle: { backgroundColor: '#bc9954' },
                                headerTintColor: 'black',
                                headerTitleStyle: { color: 'black' }
                            }} />

                        <Stack.Screen
                            name="Bracelets"
                            component={BraceletsPJ}
                            options={{
                                title: 'Bracelets',
                                headerShown: true,
                                headerStyle: { backgroundColor: '#bc9954' },
                                headerTintColor: 'black',
                                headerTitleStyle: { color: 'black' }
                            }} />

                        <Stack.Screen
                            name="ChokerSets"
                            component={ChokerSetsPJ}
                            options={{
                                title: 'Choker Sets',
                                headerShown: true,
                                headerStyle: { backgroundColor: '#bc9954' },
                                headerTintColor: 'black',
                                headerTitleStyle: { color: 'black' }
                            }} />

                        <Stack.Screen
                            name="GoldPendent"
                            component={GoldPendentPJ}
                            options={{
                                title: 'Gold Pendent',
                                headerShown: true,
                                headerStyle: { backgroundColor: '#bc9954' },
                                headerTintColor: 'black',
                                headerTitleStyle: { color: 'black' }
                            }} />

                        <Stack.Screen
                            name="HandmadeGentsRing"
                            component={HandmadeGentsRingPJ}
                            options={{
                                title: 'Handmade Gents Ring',
                                headerShown: true,
                                headerStyle: { backgroundColor: '#bc9954' },
                                headerTintColor: 'black',
                                headerTitleStyle: { color: 'black' }
                            }} />

                        <Stack.Screen
                            name="HandmadeLadiesRing"
                            component={HandmadeLadiesRingPJ}
                            options={{
                                title: 'Hand Made Ladies Ring',
                                headerShown: true,
                                headerStyle: { backgroundColor: '#bc9954' },
                                headerTintColor: 'black',
                                headerTitleStyle: { color: 'black' }
                            }} />

                        <Stack.Screen
                            name="Kade"
                            component={KadePJ}
                            options={{
                                title: 'Kade',
                                headerShown: true,
                                headerStyle: { backgroundColor: '#bc9954' },
                                headerTintColor: 'black',
                                headerTitleStyle: { color: 'black' }
                            }} />

                        <Stack.Screen
                            name="LongSets"
                            component={LongSetsPJ}
                            options={{
                                title: 'Long Sets',
                                headerShown: true,
                                headerStyle: { backgroundColor: '#bc9954' },
                                headerTintColor: 'black',
                                headerTitleStyle: { color: 'black' }
                            }} />

                        <Stack.Screen
                            name="MangalSutrapj"
                            component={MangalSutraPJ}
                            options={{
                                title: 'Mangal Sutra',
                                headerShown: true,
                                headerStyle: { backgroundColor: '#bc9954' },
                                headerTintColor: 'black',
                                headerTitleStyle: { color: 'black' }
                            }} />

                        <Stack.Screen
                            name="RajkotItems"
                            component={RajkotItemsPJ}
                            options={{
                                title: 'Rajkot Items',
                                headerShown: true,
                                headerStyle: { backgroundColor: '#bc9954' },
                                headerTintColor: 'black',
                                headerTitleStyle: { color: 'black' }
                            }} />

                        <Stack.Screen
                            name="SetsPJ"
                            component={SetsPJ}
                            options={{
                                title: 'Sets',
                                headerShown: true,
                                headerStyle: { backgroundColor: '#bc9954' },
                                headerTintColor: 'black',
                                headerTitleStyle: { color: 'black' }
                            }} />

                        <Stack.Screen
                            name="TopsPJ"
                            component={TopsPJ}
                            options={{
                                title: 'Tops',
                                headerShown: true,
                                headerStyle: { backgroundColor: '#bc9954' },
                                headerTintColor: 'black',
                                headerTitleStyle: { color: 'black' }
                            }} />
                        <Stack.Screen
                            name="UvShapedBaliPJ"
                            component={UvShapedBaliPJ}
                            options={{
                                title: 'UV Shaped Bali',
                                headerShown: true,
                                headerStyle: { backgroundColor: '#bc9954' },
                                headerTintColor: 'black',
                                headerTitleStyle: { color: 'black' }
                            }} />

                        {/* Casting jwellery */}

                        <Stack.Screen
                            name="GentsRing"
                            component={GentsRingCJ}
                            options={{
                                title: 'Gents Rings',
                                headerShown: true,
                                headerStyle: { backgroundColor: '#bc9954' },
                                headerTintColor: 'black',
                                headerTitleStyle: { color: 'black' }
                            }} />

                        <Stack.Screen
                            name="GoldPendents"
                            component={GoldPendentsCJ}
                            options={{
                                title: 'Gold Pendents',
                                headerShown: true,
                                headerStyle: { backgroundColor: '#bc9954' },
                                headerTintColor: 'black',
                                headerTitleStyle: { color: 'black' }
                            }} />

                        <Stack.Screen
                            name="LadiesRing"
                            component={LadiesRingCJ}
                            options={{
                                title: 'Ladies Rings',
                                headerShown: true,
                                headerStyle: { backgroundColor: '#bc9954' },
                                headerTintColor: 'black',
                                headerTitleStyle: { color: 'black' }
                            }} />

                        <Stack.Screen
                            name="Pendents"
                            component={PendentsCJ}
                            options={{
                                title: 'Pendents',
                                headerShown: true,
                                headerStyle: { backgroundColor: '#bc9954' },
                                headerTintColor: 'black',
                                headerTitleStyle: { color: 'black' }
                            }} />
                        <Stack.Screen
                            name="Tops"
                            component={TopsCJ}
                            options={{
                                title: 'TOPS',
                                headerShown: true,
                                headerStyle: { backgroundColor: '#bc9954' },
                                headerTintColor: 'black',
                                headerTitleStyle: { color: 'black' }
                            }} />

                        {/* Casting CZ jwellery */}

                        <Stack.Screen
                            name="Bali"
                            component={BaliCZ}
                            options={{
                                title: 'Bali',
                                headerShown: true,
                                headerStyle: { backgroundColor: '#bc9954' },
                                headerTintColor: 'black',
                                headerTitleStyle: { color: 'black' }
                            }} />

                        <Stack.Screen
                            name="BraceLets"
                            component={BraceLetsCZ}
                            options={{
                                title: 'Bracelets',
                                headerShown: true,
                                headerStyle: { backgroundColor: '#bc9954' },
                                headerTintColor: 'black',
                                headerTitleStyle: { color: 'black' }
                            }} />

                        <Stack.Screen
                            name="Charms"
                            component={CharmsCZ}
                            options={{
                                title: 'Charms',
                                headerShown: true,
                                headerStyle: { backgroundColor: '#bc9954' },
                                headerTintColor: 'black',
                                headerTitleStyle: { color: 'black' }
                            }} />

                        <Stack.Screen
                            name="CockTailRings"
                            component={CockTailRingsCZ}
                            options={{
                                title: 'Cocktail Rings',
                                headerShown: true,
                                headerStyle: { backgroundColor: '#bc9954' },
                                headerTintColor: 'black',
                                headerTitleStyle: { color: 'black' }
                            }} />

                        <Stack.Screen
                            name="GentsSolitairRings"
                            component={GentsSolitairRingsCZ}
                            options={{
                                title: 'Gents Solitair Rings',
                                headerShown: true,
                                headerStyle: { backgroundColor: '#bc9954' },
                                headerTintColor: 'black',
                                headerTitleStyle: { color: 'black' }
                            }} />

                        <Stack.Screen
                            name="GoldPendentscz"
                            component={GoldPendentsCZ}
                            options={{
                                title: 'Gold Pendents',
                                headerShown: true,
                                headerStyle: { backgroundColor: '#bc9954' },
                                headerTintColor: 'black',
                                headerTitleStyle: { color: 'black' }
                            }} />

                        <Stack.Screen
                            name="LadiesRings"
                            component={LadiesRingsCZ}
                            options={{
                                title: 'Ladies Rings',
                                headerShown: true,
                                headerStyle: { backgroundColor: '#bc9954' },
                                headerTintColor: 'black',
                                headerTitleStyle: { color: 'black' }
                            }} />

                        <Stack.Screen
                            name="LadiesSolitaireRings"
                            component={LadiesSolitaireRingsCZ}
                            options={{
                                title: 'Ladies Solitair Rings',
                                headerShown: true,
                                headerStyle: { backgroundColor: '#bc9954' },
                                headerTintColor: 'black',
                                headerTitleStyle: { color: 'black' }
                            }} />

                        <Stack.Screen
                            name="MangalSutraCZ"
                            component={MangalSutraCZ}
                            options={{
                                title: 'Mangal Sutra',
                                headerShown: true,
                                headerStyle: { backgroundColor: '#bc9954' },
                                headerTintColor: 'black',
                                headerTitleStyle: { color: 'black' }
                            }} />

                        <Stack.Screen
                            name="NeckLaceSets"
                            component={NeckLaceSetsCZ}
                            options={{
                                title: 'Necklace Sets',
                                headerShown: true,
                                headerStyle: { backgroundColor: '#bc9954' },
                                headerTintColor: 'black',
                                headerTitleStyle: { color: 'black' }
                            }} />

                        <Stack.Screen
                            name="PendentSetsCZ"
                            component={PendentSetsCZ}
                            options={{
                                title: 'Pendent Sets',
                                headerShown: true,
                                headerStyle: { backgroundColor: '#bc9954' },
                                headerTintColor: 'black',
                                headerTitleStyle: { color: 'black' }
                            }} />

                        <Stack.Screen
                            name="SolitairePendentSetsCZ"
                            component={SolitairePendentSetsCZ}
                            options={{
                                title: 'Solitair Pendent Sets',
                                headerShown: true,
                                headerStyle: { backgroundColor: '#bc9954' },
                                headerTintColor: 'black',
                                headerTitleStyle: { color: 'black' }
                            }} />

                        <Stack.Screen
                            name="SolitaireRopeCZ"
                            component={SolitaireRopeCZ}
                            options={{
                                title: 'Solitair Rope',
                                headerShown: true,
                                headerStyle: { backgroundColor: '#bc9954' },
                                headerTintColor: 'black',
                                headerTitleStyle: { color: 'black' }
                            }} />

                        <Stack.Screen
                            name="TopsCZ"
                            component={TopsCZ}
                            options={{
                                title: 'Tops',
                                headerShown: true,
                                headerStyle: { backgroundColor: '#bc9954' },
                                headerTintColor: 'black',
                                headerTitleStyle: { color: 'black' }
                            }} />

                        <Stack.Screen
                            name="GentsRingsCZ"
                            component={GentsRingsCZ}
                            options={{
                                title: 'Gents Rings',
                                headerShown: true,
                                headerStyle: { backgroundColor: '#bc9954' },
                                headerTintColor: 'black',
                                headerTitleStyle: { color: 'black' }
                            }} />
                    </>

                ) : null
                }
            </>
        </Stack.Navigator>
    )
}

export default Navigation;

const styles = StyleSheet.create({
    imageSize: {
        width: 25,
        height: 25,
        resizeMode: "cover",

    },
});