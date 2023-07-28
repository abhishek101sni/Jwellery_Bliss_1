import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Image, ImageBackground } from "react-native";
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from "../redux/action";
// import { SliderBox } from "react-native-image-slider-box";
import { height, moderateScale, moderateScaleVertical, textScale } from '../utils/responsive'

const images = [
    require('../assets/logo.png'),
    require('../assets/logo.png'),
    require('../assets/logo.png'),
]

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
            {/* <ScrollView> */}
            <View style={{ top: height - 938, }}>
                    <Image source={require("../assets/GOLDEN-STRIP.png")} style={styles.goldenStrip} />
                </View>

                <View style={styles.View1}>
                    <Image style={{ height: 250, width: 350, justifyContent: 'center', alignSelf: 'center', borderRadius: 15, marginBottom: 2 }} source={{ uri: activeItem.images[0] }} />
                </View>

                <View >
                    <ImageBackground style={styles.MainBackGroundImage} imageStyle={{ borderRadius: 20 }} source={require("../assets/texture.png")} >

                    <Text style={styles.View3}>Name  {activeItem.name}</Text>
                    <View style={styles.line}></View>
                    <Text style={styles.View33}>Weight-{activeItem.weight} g</Text>

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


                <View>
                    <TouchableOpacity onPress={() => handlePress(activeItem)} style={styles.logInButtonAlignment}>
                        <ImageBackground source={require("../assets/texture.png")} style={styles.ImageBackgroundStyle} imageStyle={{ borderRadius: 80 }}>
                            <Text style={styles.logInButtonText}>ADD TO CART</Text>
                        </ImageBackground>
                    </TouchableOpacity>
                </View>
                {/* <View style={styles.View7}>
                    <Text style={styles.View6}>Product specification</Text>
                    <Text style={styles.View6}>↓</Text>
                </View> */}
            {/* </ScrollView> */}
            <View style={{ top: height - 7, }}>
                <Image source={require("../assets/GOLDEN-STRIP.png")} style={{
                    borderWidth: 3,
                    width: 431,
                    // borderColor: 'gold',
                    // marginBottom:200
                }} />
            </View>
        </ImageBackground>
    )
}

export default SingleProduct;

const styles = StyleSheet.create({
    MainBackGroundImage: {
        marginTop: moderateScaleVertical(0),
        width: moderateScale(330),
        height: moderateScaleVertical(120),
        alignSelf: "center"
    },
    loginbutton: {
        backgroundColor: "#eec06b",
        padding: 15,
        marginTop: 100,
        borderRadius: 80,
        width: 190,
        height: 60,
        justifyContent: 'center',
        // alignItems: 'center',
        alignSelf: "center"
        // marginLeft: 75,
    },
    logintext: {
        fontSize: 15,
        color: "black",
        textAlign: "center",
        fontWeight: "bold",
    },
    View1: {
        height: 300,
        // width: 200,
        marginTop: 30,
        // justifyContent: 'center',
        // padding:0,
    },

    View22: {
        // width: 340,
        // marginTop: 30,

        // flexDirection: 'row',
        // justifyContent: 'space-evenly',
        // backgroundColor: '#eec06b',
        // padding: 20,
        // marginRight: 20,
        // marginLeft: 20,
        marginBottom: 20,
        // borderRadius: 10,

    },
    alignmentMento: {
        alignSelf: "center",
        // alignItems: 'center',
        backgroundColor: '#eec06b',
        width: 340,
        height: 150,
        marginTop: -20,
        marginBottom: 20,
        borderRadius: 10,
        justifyContent: "center"
    },
    line: {
        width: "100%",
        height: 1.5,
        backgroundColor: "black",
        alignSelf: 'center',
        // marginBottom: 15,
        marginTop:1
    },
    View3: {
        color: 'black',
        fontWeight: "bold",
        textAlign: "center",
        fontSize: 17,
        paddingBottom: 20,
        marginTop:20
    },
    View33: {
        color: 'black',
        fontWeight: "bold",
        textAlign: "center",
        fontSize: 17,
        paddingTop: 20
    },
    View4: {
        color: 'black',
        // backgroundColor: 'black',
        padding: 1,
        fontWeight: "bold",
    },
    View5: {
        marginTop: 20,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: 'black',
        padding: 20,
        marginRight: 20,
        marginLeft: 20,
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
        marginTop: 20,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 20,
        marginRight: 20,
        marginLeft: 20
    },
    logInButtonAlignment: {
        alignItems: "center",
        fontFamily: "Poppins-Medium",
        marginBottom: moderateScaleVertical(10),
    },
    logInButtonText: {
        fontSize: textScale(17),
        color: "black",
        marginLeft: moderateScale(0),
        borderRadius: 40,
        paddingTop: moderateScaleVertical(5),
        fontFamily: "Poppins-Medium"

    },
    ImageBackgroundStyle: {
        alignItems: "center",
        padding: moderateScale(9),
        width: moderateScale(200),
        height: moderateScaleVertical(60),
        justifyContent: 'center',
        marginTop: moderateScaleVertical(40),
        fontFamily: "Poppins-Medium"
    },
});