import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Image, ImageBackground } from "react-native";
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from "../redux/action";
import { height, moderateScale, moderateScaleVertical, textScale } from '../utils/responsive'

const SingleProduct = ({ navigation }) => {
    const dispatch = useDispatch();
    const { activeItem } = useSelector((state) => state.reducer);

    const handlePress = (activeItem) => {
        dispatch(addToCart(activeItem));
        navigation.navigate('cart');
    };
    console.log("active", activeItem)

    return (
        <ImageBackground style={{ flex: 1 }} source={require("../assets/background-image2.png")}>
            <ScrollView>
                <View style={{ top: height - 938, }}>
                    <Image source={require("../assets/GOLDEN-STRIP.png")} style={styles.goldenStrip} />
                </View>

                <View style={styles.singleProductImageAlignmnet}>
                    <Image style={styles.singleProductImageStyle} source={{ uri: activeItem.images[0] }} />
                </View>

                <View >
                    <ImageBackground style={styles.MainBackGroundImage} imageStyle={{ borderRadius: 20 }} source={require("../assets/texture.png")} >

                        <Text style={styles.ProductNamesStyle}>Name : {activeItem.name}</Text>
                        <View style={styles.line}></View>
                        <Text style={styles.ProductWeightStyle}>Weight : {activeItem.weight} g</Text>
                    </ImageBackground>
                </View>

                {/* <View style={styles.View2}>
                    <Text style={styles.View3}>Size-</Text>
                    <TouchableOpacity>
                        <Text style={styles.View4}>2.5</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={styles.View3}>3.0</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={styles.View3} >3.5</Text>
                    </TouchableOpacity>
                    <TouchableOpacity >
                        <Text style={styles.View3}>4.0</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={styles.View3}>4.5</Text>
                    </TouchableOpacity>
                </View> */}
                {/* <View style={styles.View5}>
                    <Text style={styles.View60}>Ratings</Text>
                    <TouchableOpacity style={{ flexDirection: 'row' }}>
                        <Text style={styles.View6}>⭐</Text>
                        <Text style={styles.View6}>⭐</Text>
                        <Text style={styles.View6}>⭐</Text>
                        <Text style={styles.View6}>⭐</Text>
                        <Text style={styles.View6}>⭐</Text>
                    </TouchableOpacity>
                    <Text style={styles.View60}>4.5</Text>
                </View> */}
                {/* <TouchableOpacity onPress={() => handlePress(activeItem)}>
                    <View style={styles.loginbutton}>
                        <Text style={styles.logintext}>ADD TO CART</Text>
                    </View>
                </TouchableOpacity> */}
                {/* -------------------------------------------------- */}
                
                <View>
                    <TouchableOpacity onPress={() => handlePress(activeItem)} style={styles.AddToCartButtonAlignment}>
                        <ImageBackground source={require("../assets/texture.png")} style={styles.AddToCartImageBackgroundStyle} imageStyle={{ borderRadius: 80 }}>
                            <Text style={styles.AddToCartButtonText}>ADD TO CART</Text>
                        </ImageBackground>
                    </TouchableOpacity>
                </View>

                <ImageBackground source={require("../assets/texture.png")} imageStyle={{ borderRadius: 20 }} style={styles.ProductLogoBackground}>
                    <View style={{ flexDirection: "column" }}>
                        <View style={styles.ProductCodeAlignment}>
                            <View style={{ flexDirection: "row" }}>
                                <Text style={styles.ProductCodeTextStyle}>Product Code : </Text>
                                <Text style={styles.ProductCodeTextStyle}>{activeItem._id}</Text>
                            </View>
                        </View>
                        <View style={styles.ProductPageLogoAlignment}>
                            <View style={{ alignItems: "center" }}>
                                <Image source={require("../assets/certifiedJwellery.png")} style={styles.ProductPageLogoSize} />
                                <Text style={{ color: "black" }}>Certified Jewellery</Text>
                            </View>
                            <View style={{ alignItems: "center" }}>
                                <Image source={require("../assets/returnPolicy.png")} style={styles.ProductPageLogoSize} />
                                <Text style={{ color: "black" }}>Return Policy</Text>
                            </View>
                            <View style={{ alignItems: "center" }}>
                                <Image source={require("../assets/insuredShipping.png")} style={styles.ProductPageLogoSize} />
                                <Text style={{ color: "black" }}>Insured Shipping</Text>
                            </View>

                        </View>
                    </View>
                </ImageBackground>
                <View style={{ top: height - 7, }}>
                    <Image source={require("../assets/GOLDEN-STRIP.png")} style={{
                        borderWidth: 3,
                        width: 431,
                    }} />
                </View>
            </ScrollView>
        </ImageBackground>
    )
}

export default SingleProduct;

const styles = StyleSheet.create({
    singleProductImageAlignmnet: {
        marginTop: moderateScaleVertical(5),
        marginBottom: moderateScaleVertical(20)
    },
    singleProductImageStyle: {
        height: moderateScaleVertical(300),
        width: moderateScale(350),
        justifyContent: 'center',
        alignSelf: 'center',
        borderRadius: 15,
        marginBottom: moderateScaleVertical(2)
    },
    ProductLogoBackground: {
        marginTop: moderateScaleVertical(20),
        width: moderateScale(330),
        height: moderateScaleVertical(150),
        alignSelf: "center"
    },
    ProductCodeAlignment: {
        marginTop: moderateScaleVertical(10),
        marginLeft: moderateScale(20)
    },
    ProductCodeTextStyle: {
        color: "black",
        fontSize: textScale(13),
    },
    MainBackGroundImage: {
        marginTop: moderateScaleVertical(0),
        width: moderateScale(330),
        height: moderateScaleVertical(120),
        alignSelf: "center"
    },
    ProductNamesStyle: {
        color: 'black',
        fontWeight: "bold",
        textAlign: "center",
        fontSize: textScale(17),
        paddingBottom: moderateScaleVertical(20),
        marginTop: moderateScaleVertical(20)
    },
    ProductWeightStyle: {
        color: 'black',
        fontWeight: "bold",
        textAlign: "center",
        fontSize: textScale(17),
        paddingTop: moderateScaleVertical(20),
    },
    ProductPageLogoAlignment: {
        marginTop: moderateScaleVertical(40),
        flexDirection: "row",
        // marginHorizontal:20,
        paddingHorizontal: 20,
        justifyContent: "space-around",
        marginHorizontal: moderateScale(-10),
    },
    ProductPageLogoSize: {
        height: moderateScaleVertical(55),
        width: moderateScale(55),
    },
    AddToCartButtonAlignment: {
        alignItems: "center",
        fontFamily: "Poppins-Medium",
        marginBottom: moderateScaleVertical(10),
    },
    AddToCartImageBackgroundStyle: {
        alignItems: "center",
        padding: moderateScale(9),
        width: moderateScale(200),
        height: moderateScaleVertical(60),
        justifyContent: 'center',
        marginTop: moderateScaleVertical(40),
        fontFamily: "Poppins-Medium"
    },
    AddToCartButtonText: {
        fontSize: textScale(17),
        color: "black",
        marginLeft: moderateScale(0),
        borderRadius: 40,
        paddingTop: moderateScaleVertical(5),
        fontFamily: "Poppins-Medium"
    },
    WhatsAppButtonAlignment: {
        alignItems: "center",
        fontFamily: "Poppins-Medium",
        marginBottom: moderateScaleVertical(10),
    },
    WhatsAppButtonImageBackgroundStyle: {
        backgroundColor: "#4AC959;",
        borderRadius:10,
        width:120,
        height:50
    },
    WhatsAppButtonText: {
        fontSize: textScale(17),
        color: "black",
        marginLeft: moderateScale(0),
        borderRadius: 40,
        paddingTop: moderateScaleVertical(5),
        fontFamily: "Poppins-Medium"
    },
    Dropdowncontainer: {
        flex: 0.1,
        // backgroundColor: '#eec06b',
        padding: 16,
        justifyContent: "center",
        alignContent: "center"
    },

    dropdown: {
        height: 50,
        borderColor: '#eec06b',
        borderWidth: 2,
        borderRadius: 15,
        paddingHorizontal: 15,
        // marginTop: 10,
    },
    icon: {
        marginRight: 5,
    },
    label: {
        position: 'absolute',
        // backgroundColor: 'red',
        left: 22,
        top: 8,
        zIndex: 999,
        paddingHorizontal: 8,
        fontSize: 14,
    },
    placeholderStyle: {
        fontSize: 16,
        color: "#eec06b",
        fontSize: 20,
    },
    selectedTextStyle: {
        fontSize: 20,
        color: "#eec06b",
    },
    iconStyle: {
        width: 40,
        height: 40,
        color: "#eec06b"

    },
    inputSearchStyle: {
        height: 40,
        fontSize: 16,
    },
    loginbutton: {
        backgroundColor: "#eec06b",
        padding: 15,
        marginTop: moderateScaleVertical(100),
        borderRadius: 80,
        width: moderateScale(190),
        height: moderateScaleVertical(60),
        justifyContent: 'center',
        alignSelf: "center"
    },
    logintext: {
        fontSize: 15,
        color: "black",
        textAlign: "center",
        fontWeight: "bold",
    },


    View1: {
        height: moderateScaleVertical(300),
        // width: 200,
        marginTop: moderateScaleVertical(30),
        // justifyContent: 'center',
        // padding:0,
    },

    View22: {
        marginBottom: moderateScaleVertical(20),
    },
    alignmentMento: {
        alignSelf: "center",
        backgroundColor: '#eec06b',
        width: moderateScale(340),
        height: moderateScaleVertical(150),
        marginTop: moderateScaleVertical(-20),
        marginBottom: moderateScaleVertical(20),
        borderRadius: 10,
        justifyContent: "center"
    },
    line: {
        width: "100%",
        height: moderateScaleVertical(1.5),
        backgroundColor: "black",
        alignSelf: 'center',
        marginTop: moderateScaleVertical(1),
    },

    View3: {
        color: 'black',
        fontWeight: "bold",
        textAlign: "center",
        fontSize: textScale(17),
        paddingBottom: moderateScaleVertical(20),
        marginTop: moderateScaleVertical(20)
    },

    View33: {

    },
    View4: {
        color: 'black',
        // backgroundColor: 'black',
        padding: 1,
        fontWeight: "bold",
    },
    View5: {
        marginTop: moderateScaleVertical(20),
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: 'black',
        padding: 20,
        marginRight: moderateScale(20),
        marginLeft: moderateScale(20),
        borderRadius: 10,
    },
    View6: {
        color: 'black'
    },
    View60: {
        color: "#eec06b"
    },
    View7: {
        borderTopWidth: 1,
        borderTopColor: '#808080',
        marginTop: moderateScaleVertical(20),
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 20,
        marginRight: moderateScale(20),
        marginLeft: moderateScale(20),
    },
});