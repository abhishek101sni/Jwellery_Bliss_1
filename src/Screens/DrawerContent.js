// import React, { useContext } from 'react'
// import { View, StyleSheet, Image, TouchableOpacity, ImageBackground } from 'react-native'
// import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer'
// import { AuthContext } from '../Screens/AuthContext';
// import { height, moderateScale, moderateScaleVertical, textScale } from '../utils/responsive'
// import { Drawer, Text } from "react-native-paper"
// import Icon from "react-native-vector-icons/MaterialCommunityIcons"

// const DrawerContent = (props) => {
//     const { logout, userInfo } = useContext(AuthContext);
//     return (




//         <View style={{ flex: 1, backgroundColor: "#eec06b" }}>
//             <View style={{ flex: 1, backgroundColor: "#eec06b" }}>
//                 <DrawerContentScrollView {...props}>


//                     <Drawer.Section style={styles.bottomDrawerSection}>
//                         <ImageBackground style={{ flex: 1, marginTop: moderateScaleVertical(-10), marginBottom: moderateScaleVertical(-10), height: 70 }} source={require("../assets/CompressedTextureHd.jpg")}>
//                             <DrawerItem
//                                 label="View Profile"
//                                 labelStyle={{ color: 'black', textDecorationLine: 'underline', fontSize: textScale(12), textAlign: "center", marginLeft: moderateScale(27) }}
//                                 onPress={() => {
//                                     props.navigation.navigate("viewprofile");
//                                 }}
//                                 style={styles.ViewProfile}
//                             />
//                         </ImageBackground>

//                         <View style={styles.line}></View>
//                         <ImageBackground style={{ flex: 1, marginTop: moderateScaleVertical(-10), marginBottom: moderateScaleVertical(-10), height: 70 }} source={require("../assets/CompressedTextureHd.jpg")}>
//                             <DrawerItem

//                                 icon={({ color, size }) => (
//                                     <Icon name="calendar-today" color={color} size={size} />
//                                 )}
//                                 labelStyle={{ color: 'black', fontSize: textScale(14), textAlign: "center", marginLeft: moderateScale(-60), marginTop: 7 }}
//                                 label="Our Product"

//                                 onPress={() => {
//                                     props.navigation.navigate("our");
//                                 }}
//                             />
//                         </ImageBackground>

//                         <View style={styles.line}></View>
//                         <ImageBackground style={{ flex: 1, marginTop: moderateScaleVertical(-10), marginBottom: moderateScaleVertical(-10), height: 70 }} source={require("../assets/CompressedTextureHd.jpg")}>
//                             <DrawerItem
//                                 icon={({ color, size }) => (
//                                     <Icon name="book" color={color} size={size} />
//                                 )}
//                                 labelStyle={{ color: 'black', fontSize: textScale(14), textAlign: "center", marginLeft: moderateScale(-46) }}
//                                 label="Manage Order"
//                                 onPress={() => {
//                                     props.navigation.navigate("Manage");
//                                 }}
//                             />
//                         </ImageBackground>

//                         <View style={styles.line}></View>
//                         <ImageBackground style={{ flex: 1, marginTop: moderateScaleVertical(-10), marginBottom: moderateScaleVertical(-10), height: 70 }} source={require("../assets/CompressedTextureHd.jpg")}>
//                             <DrawerItem
//                                 icon={({ color, size }) => (
//                                     <Icon name="storefront-outline" color={color} size={size} />
//                                 )}
//                                 labelStyle={{ color: 'black', fontSize: textScale(14), textAlign: "center", marginLeft: moderateScale(-46) }}
//                                 label="Wastage Chart"
//                                 onPress={() => {
//                                     props.navigation.navigate("pricelist");
//                                 }}
//                             />
//                         </ImageBackground>

//                         <View style={styles.line}></View>
//                         <ImageBackground style={{ flex: 1, marginTop: moderateScaleVertical(-10), marginBottom: moderateScaleVertical(-10), height: 70 }} source={require("../assets/CompressedTextureHd.jpg")}>
//                             <DrawerItem
//                                 icon={({ color, size }) => (
//                                     <Icon name="book" color={color} size={size} />
//                                 )}
//                                 labelStyle={{ color: 'black', fontSize: textScale(14), textAlign: "center", marginLeft: moderateScale(-27) }}
//                                 label="Service Available"
//                                 onPress={() => {
//                                     props.navigation.navigate("ServiceAvailable");
//                                 }}
//                             />
//                         </ImageBackground>

//                         <View style={styles.line}></View>
//                         <ImageBackground style={{ flex: 1, marginTop: moderateScaleVertical(-10), marginBottom: moderateScaleVertical(-10), height: 70 }} source={require("../assets/CompressedTextureHd.jpg")}>
//                             <DrawerItem
//                                 icon={({ color, size }) => (
//                                     <Icon name="book" color={color} size={size} />
//                                 )}
//                                 label="About Us"
//                                 labelStyle={{ color: 'black', fontSize: textScale(14), textAlign: "center", marginLeft: moderateScale(-82) }}
//                                 onPress={() => {
//                                     props.navigation.navigate("about");
//                                 }}
//                             />
//                         </ImageBackground>
//                         <View style={styles.line}></View>

//                         <ImageBackground style={{ flex: 1, marginTop: moderateScaleVertical(-10), marginBottom: moderateScaleVertical(-10), height: 70 }} source={require("../assets/CompressedTextureHd.jpg")}>
//                             <DrawerItem
//                                 icon={({ color, size }) => (
//                                     <Icon name="storefront-outline" color={color} size={size} />
//                                 )}
//                                 labelStyle={{ color: 'black', fontSize: textScale(14), textAlign: "center", marginLeft: moderateScale(-50) }}
//                                 label="Privacy Policy"
//                                 onPress={() => {
//                                     props.navigation.navigate("privacypolicy");
//                                 }}
//                             />
//                         </ImageBackground>

//                         <View style={styles.line}></View>
//                         <ImageBackground style={{ flex: 1, marginTop: moderateScaleVertical(-10), marginBottom: moderateScaleVertical(-10), height: 70 }} source={require("../assets/CompressedTextureHd.jpg")}>
//                             <DrawerItem
//                                 icon={({ color, size }) => (
//                                     <Icon name="codepen" color={color} size={size} />
//                                 )}
//                                 label="Terms & Conditions"
//                                 labelStyle={{ color: 'black', fontSize: textScale(14), textAlign: "center", marginLeft: moderateScale(-10) }}
//                                 onPress={() => {
//                                     props.navigation.navigate("tnc");
//                                 }}
//                             />
//                         </ImageBackground>

//                         <View style={styles.line}></View>



//                     </Drawer.Section>
//                     <ImageBackground style={{ marginTop: moderateScaleVertical(-30), marginBottom: moderateScaleVertical(-10) }} source={require("../assets/CompressedTextureHd.jpg")}>
//                         <View style={styles.SocialMediaIconsAlignment}>
//                             <Image source={require("../assets/facebook.png")} style={styles.SocialMediaIconsSize} />
//                             <Image source={require("../assets/instagram2.png")} style={styles.SocialMediaIconsSize} />
//                             <Image source={require("../assets/whatsapp2.png")} style={styles.SocialMediaIconsSize} />
//                             {/* <Image source={require("../assets/twitter.png")} style={styles.SocialMediaIconsSize} /> */}
//                         </View>

//                         <View style={styles.LogoutStyle}>
//                             <TouchableOpacity onPress={logout}>
//                                 <Text style={styles.logoutText}>Logout</Text>
//                             </TouchableOpacity>
//                         </View>
//                     </ImageBackground>

//                 </DrawerContentScrollView>
//             </View>
//         </View>

//     )
// }

// export default DrawerContent;


// const styles = StyleSheet.create({
//     drawerContent: {
//         flex: 0,
//     },
//     userInfoSection: {
//         paddingLeft: moderateScale(20),
//     },
//     ProfileSection: {
//         alignItems: "center",
//         marginTop: moderateScaleVertical(10),
//         marginRight: moderateScale(27),
//     },
//     displayPicture: {
//         width: moderateScale(150),
//         height: moderateScaleVertical(150),
//         borderRadius: 80
//     },
//     ProfileNameAlignment: {
//         alignItems: "center",
//     },
//     ProfileNameText: {
//         marginTop: moderateScaleVertical(1),
//         fontWeight: "500",
//         textAlign: "center",
//         fontSize: textScale(20),
//         fontFamily: "Poppins-Medium"
//     },
//     bottomDrawerSection: {
//         marginTop: moderateScaleVertical(10),
//         marginBottom: 15,
//     },
//     ViewProfile: {
//         // fontSize: textScale(12),
//         // textAlign: "center",
//         marginTop: moderateScaleVertical(0),
//         // backgroundColor: '#000000'
//     },
//     line: {
//         marginTop: moderateScaleVertical(10),
//         width: "100%",
//         height: moderateScaleVertical(1.5),
//         backgroundColor: "#d6ac60",
//         alignSelf: 'center',
//         marginBottom: moderateScaleVertical(10),
//     },
//     SocialMediaIconsAlignment: {
//         flexDirection: "row",
//         marginVertical: moderateScaleVertical(40),
//         marginHorizontal: moderateScale(25),
//         alignSelf: "center"
//     },
//     SocialMediaIconsSize: {
//         width: moderateScale(40),
//         height: moderateScaleVertical(40),
//         resizeMode: "cover",
//         borderRadius: 40,
//         marginLeft: moderateScale(10),
//         backgroundColor: "white",
//         tintColor: '#eec06b'
//     },
//     LogoutStyle: {
//         alignSelf: "center",
//         marginBottom: moderateScaleVertical(20)
//     },
//     logoutText: {
//         fontWeight: "bold",
//         fontSize: textScale(20),
//         color: "black",
//         padding: 5,
//         borderRadius: 10
//     },
// })


import React, { useContext } from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity, ImageBackground, ScrollView } from 'react-native'
import { AuthContext } from '../Screens/AuthContext';
import { height, moderateScale, moderateScaleVertical, textScale } from '../utils/responsive'

const DrawerContent = (props) => {
    const { logout, userInfo } = useContext(AuthContext);
    return (
        <ImageBackground style={styles.BackgroundImage} source={require("../assets/CompressedTexture3.jpg")}>
            {/* <View style={{ flex: 1, backgroundColor: "#eec06b", width: moderateScale(229), }}> */}
            <ScrollView>
                <View style={styles.ViewProfileAlignment} >
                    <Image style={styles.ViewProfileDp} source={require("../assets/dp2.jpg")} />
                    <TouchableOpacity style={styles.ViewProfileDpTouch} onPress={() => { props.navigation.navigate("viewprofile") }}>
                        {/* <Image source={require("../assets/ViewProfileIcon.png")} style={styles.ViewProfileTextIcon} /> */}
                        <Text style={styles.ViewProfileText}>View Profile</Text>
                    </TouchableOpacity>
                </View>

                <View>
                    <View style={styles.line}></View>

                    <TouchableOpacity style={styles.DrawerContentTouch} onPress={() => { props.navigation.navigate("our") }}>
                        <Image source={require("../assets/drawerIcons/product.png")} style={styles.OurProductIcon} />
                        <Text style={styles.DrawerContentTitle}>Our Product</Text>
                    </TouchableOpacity>

                    <View style={styles.line}></View>

                    <TouchableOpacity style={styles.DrawerContentTouch} onPress={() => { props.navigation.navigate("Manage") }}>
                        <Image source={require("../assets/drawerIcons/manageOrder.png")} style={styles.ManageOrderIcon} />
                        <Text style={styles.DrawerContentTitle}>Manage Order</Text>
                    </TouchableOpacity>
                    <View style={styles.line}></View>

                    <TouchableOpacity style={styles.DrawerContentTouch} onPress={() => { props.navigation.navigate("pricelist") }} >
                        <Image source={require("../assets/drawerIcons/wastage.png")} style={styles.WastageChartIcon} />
                        <Text style={styles.DrawerContentTitle}>Wastage Chart</Text>
                    </TouchableOpacity>
                    <View style={styles.line}></View>

                    <TouchableOpacity style={styles.DrawerContentTouch} onPress={() => { props.navigation.navigate("ServiceAvailable") }} >
                        <Image source={require("../assets/drawerIcons/serviceAvailable.png")} style={styles.ServAvailIcon} />
                        <Text style={styles.DrawerContentTitle}>Service Available</Text>
                    </TouchableOpacity>
                    <View style={styles.line}></View>

                    <TouchableOpacity style={styles.DrawerContentTouch} onPress={() => { props.navigation.navigate("about") }} >
                        <Image source={require("../assets/drawerIcons/aboutUs.png")} style={styles.AboutUsIcon} />
                        <Text style={styles.DrawerContentTitle}>About Us</Text>
                    </TouchableOpacity>
                    <View style={styles.line}></View>

                    <TouchableOpacity style={styles.DrawerContentTouch} onPress={() => { props.navigation.navigate("privacypolicy") }} >
                        <Image source={require("../assets/drawerIcons/privacy.png")} style={styles.PrivacyPolicyIcon} />
                        <Text style={styles.DrawerContentTitle}>Privacy Policy</Text>
                    </TouchableOpacity>
                    <View style={styles.line}></View>

                    <TouchableOpacity style={styles.DrawerContentTouch} onPress={() => { props.navigation.navigate("tnc") }} >
                        <Image source={require("../assets/drawerIcons/tnc.png")} style={styles.TermsAndCondIcon} />
                        <Text style={styles.DrawerContentTitle}>Terms & Conditions</Text>
                    </TouchableOpacity>
                </View>



                <View style={styles.line}></View>
                <View style={{ marginTop: moderateScaleVertical(50), flexDirection: "row", justifyContent: "space-around", marginHorizontal: moderateScale(50) }}>
                    <TouchableOpacity>
                        <Image source={require("../assets/SocialMediaIcons/facebook.png")} style={{ width: moderateScale(30), marginTop: moderateScaleVertical(3), height: moderateScaleVertical(30) }} />
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <Image source={require("../assets/SocialMediaIcons/instagram.png")} style={{ width: moderateScale(30), marginTop: moderateScaleVertical(3), height: moderateScaleVertical(30), tintColor: "black", }} />
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <Image source={require("../assets/SocialMediaIcons/whatsapp.png")} style={{ width: moderateScale(35), height: moderateScaleVertical(35), marginBottom: moderateScaleVertical(50) }} />
                    </TouchableOpacity>
                </View>



                <View style={{ marginTop: moderateScaleVertical(20), marginBottom: moderateScaleVertical(15) }}>
                    <TouchableOpacity style={{ flexDirection: "row", justifyContent: "space-around", marginHorizontal: moderateScale(75) }} onPress={logout}>
                        <Image source={require("../assets/logoutIcon.png")} style={{ width: moderateScale(20), height: moderateScaleVertical(20), }} />
                        <Text style={{ fontSize: textScale(15), fontWeight: "600", color: "#181818" }}>Logout</Text>
                    </TouchableOpacity>
                </View>

            </ScrollView>
            {/* </View> */}
        </ImageBackground>
    )
}

export default DrawerContent;


const styles = StyleSheet.create({
    line: {
        marginTop: moderateScaleVertical(10),
        width: "100%",
        height: moderateScaleVertical(1.5),
        backgroundColor: "#d6ac60",
        alignSelf: 'center',
        marginBottom: moderateScaleVertical(10),
    },
    BackgroundImage: {
        flex: 1,
        width: moderateScale(229),
        height: moderateScaleVertical(900)
    },
    ViewProfileAlignment: {
        flexDirection: "column",
        alignItems: "center",
        marginTop: moderateScaleVertical(25)
    },
    ViewProfileDp: {
        width: moderateScale(170),
        height: moderateScaleVertical(170),
        borderRadius: 90
    },
    ViewProfileDpTouch: {
        marginTop: moderateScaleVertical(20),
        flexDirection: "row"
    },
    // ViewProfileTextIcon: {
    //     width: moderateScale(13),
    //     height: moderateScaleVertical(13),
    //     tintColor: "#F0F0F0"

    // },
    ViewProfileText: {
        fontSize: 14,
        fontWeight: "500",
        // color: "#F0F0F0",
        color: "#181818",
        textDecorationLine: 'underline'
    },

    DrawerContentTouch: {
        marginVertical: 7,
        flexDirection: "row",
        marginLeft: moderateScale(8),
        // marginHorizontal: moderateScale(20),
        // justifyContent: "space-around"
    },
    OurProductIcon: {
        width: moderateScale(30),
        height: moderateScaleVertical(30),
        // tintColor: "#F0F0F0",
        tintColor: "#181818",
        marginLeft: moderateScale(12)
    },
    ManageOrderIcon: {
        width: moderateScale(30),
        height: moderateScaleVertical(30),
        // tintColor: "#F0F0F0",
        tintColor: "#181818",
        marginLeft: moderateScale(12)
    },
    WastageChartIcon: {
        width: moderateScale(30),
        height: moderateScaleVertical(30),
        // tintColor: "#F0F0F0",
        tintColor: "#181818",
        marginLeft: moderateScale(17)
    },
    ServAvailIcon: {
        width: moderateScale(30),
        height: moderateScaleVertical(30),
        // tintColor: "#F0F0F0",
        tintColor: "#181818",
        marginLeft: moderateScale(12)
    },
    AboutUsIcon: {
        width: moderateScale(30),
        height: moderateScaleVertical(30),
        // tintColor: "#F0F0F0",
        tintColor: "#181818",
        marginLeft: moderateScale(15)
    },
    PrivacyPolicyIcon: {
        width: moderateScale(30),
        height: moderateScaleVertical(30),
        // tintColor: "#F0F0F0",
        tintColor: "#181818",
        marginLeft: moderateScale(15)
    },
    TermsAndCondIcon: {
        width: moderateScale(30),
        height: moderateScaleVertical(30),
        // tintColor: "#F0F0F0",
        tintColor: "#181818",
        marginLeft: moderateScale(15)
    },
    DrawerContentIcon: {
        width: moderateScale(30),
        height: moderateScaleVertical(30),
        tintColor: "#F0F0F0"
    },
    DrawerContentTitle: {
        textAlign: "center",
        justifyContent: "center",
        marginTop: moderateScaleVertical(7),
        // color: "#F0F0F0",
        color: "#181818",
        fontSize: textScale(15),
        marginLeft: moderateScale(20),
        fontWeight: "500"
    }


    // drawerContent: {
    //     flex: 0,
    // },
    // userInfoSection: {
    //     paddingLeft: moderateScale(20),
    // },
    // ProfileSection: {
    //     alignItems: "center",
    //     marginTop: moderateScaleVertical(10),
    //     marginRight: moderateScale(27),
    // },
    // displayPicture: {
    //     width: moderateScale(150),
    //     height: moderateScaleVertical(150),
    //     borderRadius: 80
    // },
    // ProfileNameAlignment: {
    //     alignItems: "center",
    // },
    // ProfileNameText: {
    //     marginTop: moderateScaleVertical(1),
    //     fontWeight: "500",
    //     textAlign: "center",
    //     fontSize: textScale(20),
    //     fontFamily: "Poppins-Medium"
    // },
    // bottomDrawerSection: {
    //     marginTop: moderateScaleVertical(10),
    //     marginBottom: 15,
    // },
    // ViewProfile: {
    //     // fontSize: textScale(12),
    //     // textAlign: "center",
    //     marginTop: moderateScaleVertical(0),
    //     // backgroundColor: '#000000'
    // },

    // SocialMediaIconsAlignment: {
    //     flexDirection: "row",
    //     marginVertical: moderateScaleVertical(40),
    //     marginHorizontal: moderateScale(25),
    //     alignSelf: "center"
    // },
    // SocialMediaIconsSize: {
    //     width: moderateScale(40),
    //     height: moderateScaleVertical(40),
    //     resizeMode: "cover",
    //     borderRadius: 40,
    //     marginLeft: moderateScale(10),
    //     backgroundColor: "white",
    //     tintColor: '#eec06b'
    // },
    // LogoutStyle: {
    //     alignSelf: "center",
    //     marginBottom: moderateScaleVertical(20)
    // },
    // logoutText: {
    //     fontWeight: "bold",
    //     fontSize: textScale(20),
    //     color: "black",
    //     padding: 5,
    //     borderRadius: 10
    // },
})
