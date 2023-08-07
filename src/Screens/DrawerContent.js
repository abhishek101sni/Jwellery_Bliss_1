import React, { useContext } from 'react'
import { View, StyleSheet, Image, TouchableOpacity, ImageBackground } from 'react-native'
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer'
import { AuthContext } from '../Screens/AuthContext';
import { height, moderateScale, moderateScaleVertical, textScale } from '../utils/responsive'
import { Drawer, Text } from "react-native-paper"
import Icon from "react-native-vector-icons/MaterialCommunityIcons"

const DrawerContent = (props) => {
    const { logout, userInfo } = useContext(AuthContext);
    return (
        <View style={{ flex: 1, backgroundColor: "#eec06b" }}>
            <DrawerContentScrollView {...props}>
                <ImageBackground style={{ flex: 1, marginTop: moderateScaleVertical(-4) }} source={require("../assets/CompressedTextureHd.jpg")}>
                    <View style={styles.drawerContent}>
                        <View style={styles.userInfoSection}>
                            <View style={styles.ProfileSection}>
                                <View >
                                    <Image
                                        source={require("../assets/dp2.jpg")} style={styles.displayPicture} />
                                </View>

                                <View style={styles.ProfileNameAlignment}>
                                    <Text style={styles.ProfileNameText}>{userInfo?.name}</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </ImageBackground>

                <Drawer.Section style={styles.bottomDrawerSection}>
                    <ImageBackground style={{ flex: 1, marginTop: moderateScaleVertical(-10), marginBottom: moderateScaleVertical(-10), height: 70 }} source={require("../assets/CompressedTextureHd.jpg")}>
                        <DrawerItem
                            label="View Profile"
                            labelStyle={{ color: 'black', textDecorationLine: 'underline', fontSize: textScale(12), textAlign: "center", marginLeft: moderateScale(27) }}
                            onPress={() => {
                                props.navigation.navigate("viewprofile");
                            }}
                            style={styles.ViewProfile}
                        />
                    </ImageBackground>

                    <View style={styles.line}></View>
                    <ImageBackground style={{ flex: 1, marginTop: moderateScaleVertical(-10), marginBottom: moderateScaleVertical(-10), height: 70 }} source={require("../assets/CompressedTextureHd.jpg")}>
                        <DrawerItem
                            icon={({ color, size }) => (
                                <Icon name="calendar-today" color={color} size={size} />
                            )}
                            labelStyle={{ color: 'black', fontSize: textScale(14), textAlign: "center", marginLeft: moderateScale(-60) }}
                            label="Our Product"
                            onPress={() => {
                                props.navigation.navigate("our");
                            }}
                            style={styles.OurProduct}
                        />
                    </ImageBackground>

                    <View style={styles.line}></View>
                    <ImageBackground style={{ flex: 1, marginTop: moderateScaleVertical(-10), marginBottom: moderateScaleVertical(-10), height: 70 }} source={require("../assets/CompressedTextureHd.jpg")}>
                        <DrawerItem
                            icon={({ color, size }) => (
                                <Icon name="book" color={color} size={size} />
                            )}
                            labelStyle={{ color: 'black', fontSize: textScale(14), textAlign: "center", marginLeft: moderateScale(-46) }}
                            label="Manage Order"
                            onPress={() => {
                                props.navigation.navigate("Manage");
                            }}
                        />
                    </ImageBackground>

                    <View style={styles.line}></View>
                    <ImageBackground style={{ flex: 1, marginTop: moderateScaleVertical(-10), marginBottom: moderateScaleVertical(-10), height: 70 }} source={require("../assets/CompressedTextureHd.jpg")}>
                        <DrawerItem
                            icon={({ color, size }) => (
                                <Icon name="storefront-outline" color={color} size={size} />
                            )}
                            labelStyle={{ color: 'black', fontSize: textScale(14), textAlign: "center", marginLeft: moderateScale(-46) }}
                            label="Wastage Chart"
                            onPress={() => {
                                props.navigation.navigate("pricelist");
                            }}
                        />
                    </ImageBackground>

                    <View style={styles.line}></View>
                    <ImageBackground style={{ flex: 1, marginTop: moderateScaleVertical(-10), marginBottom: moderateScaleVertical(-10), height: 70 }} source={require("../assets/CompressedTextureHd.jpg")}>
                        <DrawerItem
                            icon={({ color, size }) => (
                                <Icon name="book" color={color} size={size} />
                            )}
                            labelStyle={{ color: 'black', fontSize: textScale(14), textAlign: "center", marginLeft: moderateScale(-27) }}
                            label="Service Available"
                            onPress={() => {
                                props.navigation.navigate("ServiceAvailable");
                            }}
                        />
                    </ImageBackground>

                    <View style={styles.line}></View>
                    <ImageBackground style={{ flex: 1, marginTop: moderateScaleVertical(-10), marginBottom: moderateScaleVertical(-10), height: 70 }} source={require("../assets/CompressedTextureHd.jpg")}>
                        <DrawerItem
                            icon={({ color, size }) => (
                                <Icon name="book" color={color} size={size} />
                            )}
                            label="About Us"
                            labelStyle={{ color: 'black', fontSize: textScale(14), textAlign: "center", marginLeft: moderateScale(-82) }}
                            onPress={() => {
                                props.navigation.navigate("about");
                            }}
                        />
                    </ImageBackground>
                    <View style={styles.line}></View>

                    <ImageBackground style={{ flex: 1, marginTop: moderateScaleVertical(-10), marginBottom: moderateScaleVertical(-10), height: 70 }} source={require("../assets/CompressedTextureHd.jpg")}>
                        <DrawerItem
                            icon={({ color, size }) => (
                                <Icon name="storefront-outline" color={color} size={size} />
                            )}
                            labelStyle={{ color: 'black', fontSize: textScale(14), textAlign: "center", marginLeft: moderateScale(-50) }}
                            label="Privacy Policy"
                            onPress={() => {
                                props.navigation.navigate("privacypolicy");
                            }}
                        />
                    </ImageBackground>

                    <View style={styles.line}></View>
                    <ImageBackground style={{ flex: 1, marginTop: moderateScaleVertical(-10), marginBottom: moderateScaleVertical(-10), height: 70 }} source={require("../assets/CompressedTextureHd.jpg")}>
                        <DrawerItem
                            icon={({ color, size }) => (
                                <Icon name="codepen" color={color} size={size} />
                            )}
                            label="Terms & Conditions"
                            labelStyle={{ color: 'black', fontSize: textScale(14), textAlign: "center", marginLeft: moderateScale(-10) }}
                            onPress={() => {
                                props.navigation.navigate("tnc");
                            }}
                        />
                    </ImageBackground>

                    <View style={styles.line}></View>



                </Drawer.Section>
                <ImageBackground style={{ marginTop: moderateScaleVertical(-30), marginBottom: moderateScaleVertical(-10) }} source={require("../assets/CompressedTextureHd.jpg")}>
                    <View style={styles.SocialMediaIconsAlignment}>
                        <Image source={require("../assets/facebook.png")} style={styles.SocialMediaIconsSize} />
                        <Image source={require("../assets/instagram2.png")} style={styles.SocialMediaIconsSize} />
                        <Image source={require("../assets/whatsapp2.png")} style={styles.SocialMediaIconsSize} />
                        {/* <Image source={require("../assets/twitter.png")} style={styles.SocialMediaIconsSize} /> */}
                    </View>

                    <View style={styles.LogoutStyle}>
                        <TouchableOpacity onPress={logout}>
                            <Text style={styles.logoutText}>Logout</Text>
                        </TouchableOpacity>
                    </View>
                </ImageBackground>

            </DrawerContentScrollView>
        </View>

    )
}

export default DrawerContent;


const styles = StyleSheet.create({
    drawerContent: {
        flex: 0,
    },
    userInfoSection: {
        paddingLeft: moderateScale(20),
    },
    ProfileSection: {
        alignItems: "center",
        marginTop: moderateScaleVertical(10),
        marginRight: moderateScale(27),
    },
    displayPicture: {
        width: moderateScale(150),
        height: moderateScaleVertical(150),
        borderRadius: 80
    },
    ProfileNameAlignment: {
        alignItems: "center",
    },
    ProfileNameText: {
        marginTop: moderateScaleVertical(1),
        fontWeight: "500",
        textAlign: "center",
        fontSize: textScale(20),
        fontFamily: "Poppins-Medium"
    },
    bottomDrawerSection: {
        marginTop: moderateScaleVertical(10),
        marginBottom: 15,
    },
    ViewProfile: {
        // fontSize: textScale(12),
        // textAlign: "center",
        marginTop: moderateScaleVertical(0),
        // backgroundColor: '#000000'
    },
    line: {
        marginTop: moderateScaleVertical(10),
        width: "100%",
        height: moderateScaleVertical(1.5),
        backgroundColor: "#d6ac60",
        alignSelf: 'center',
        marginBottom: moderateScaleVertical(10),
    },
    SocialMediaIconsAlignment: {
        flexDirection: "row",
        marginVertical: moderateScaleVertical(40),
        marginHorizontal: moderateScale(25),
        alignSelf: "center"
    },
    SocialMediaIconsSize: {
        width: moderateScale(40),
        height: moderateScaleVertical(40),
        resizeMode: "cover",
        borderRadius: 40,
        marginLeft: moderateScale(10),
        backgroundColor: "white",
        tintColor: '#eec06b'
    },
    LogoutStyle: {
        alignSelf: "center",
        marginBottom: moderateScaleVertical(20)
    },
    logoutText: {
        fontWeight: "bold",
        fontSize: textScale(20),
        color: "black",
        padding: 5,
        borderRadius: 10
    },
})
