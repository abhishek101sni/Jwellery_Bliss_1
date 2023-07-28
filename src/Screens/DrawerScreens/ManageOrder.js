import { View, Text, ImageBackground, StyleSheet, Animated, SafeAreaView } from 'react-native'
import React from 'react'
import { Image } from 'react-native-svg'
import { height, moderateScale, moderateScaleVertical, textScale } from '../../utils/responsive'

const ManageOrder = () => {
    return (

        <SafeAreaView style={styles.background} >

            <View style={{ backgroundColor: "#D8D8D8", width: moderateScale(350), height: moderateScaleVertical(150), borderRadius: 20, alignSelf: "center", marginTop: moderateScaleVertical(20) }}>
                <Text style={{ color: "black", }}></Text>
                <View style={{ flexDirection: "row", marginHorizontal: -37, marginVertical: 10, justifyContent: "space-around", marginTop: moderateScaleVertical(10), }}>
                    <Text style={{ fontFamily: "Poppins-Medium", fontSize: textScale(16), color: "black" }}>23 April 2023</Text>
                    <Text style={{ fontFamily: "Poppins-Medium", fontSize: textScale(15), color: "black" }}>                       </Text>
                </View>
                <View style={{ flexDirection: "row", marginHorizontal: -15, justifyContent: "space-around", marginTop: moderateScaleVertical(5) }}>
                    <View style={{ flexDirection: "column" }}>
                        <Text style={{ fontFamily: "Poppins-Medium", fontSize: textScale(13), color: "black" }}>Order No :</Text>
                        <Text style={{ fontFamily: "Poppins-Medium", fontSize: textScale(12), color: "grey" }}>#321</Text>

                    </View>
                    <View style={{ flexDirection: "column" }}>
                        <Text style={{ fontFamily: "Poppins-Medium", fontSize: textScale(13), color: "black" }}>Qty.</Text>
                        <Text style={{ fontFamily: "Poppins-Medium", fontSize: textScale(12), color: "grey" }}>1 pcs</Text>
                    </View>
                    <View style={{ flexDirection: "column" }}>
                        <Text style={{ fontFamily: "Poppins-Medium", fontSize: textScale(13), color: "black" }}>Price</Text>
                        <Text style={{ fontFamily: "Poppins-Medium", fontSize: textScale(12), color: "grey", textAlign: "right" }}>Rs. 400</Text>
                    </View>
                </View>
            </View>
            <View style={{ backgroundColor: "#D8D8D8", width: moderateScale(350), height: moderateScaleVertical(150), borderRadius: 20, alignSelf: "center", marginTop: moderateScaleVertical(20) }}>
                <Text style={{ color: "black", }}></Text>
                <View style={{ flexDirection: "row", marginHorizontal: -37, marginVertical: 10, justifyContent: "space-around", marginTop: moderateScaleVertical(10), }}>
                    <Text style={{ fontFamily: "Poppins-Medium", fontSize: textScale(16), color: "black" }}>15 June 2023</Text>
                    <Text style={{ fontFamily: "Poppins-Medium", fontSize: textScale(15), color: "black" }}>                       </Text>
                </View>
                <View style={{ flexDirection: "row", marginHorizontal: -15, justifyContent: "space-around", marginTop: moderateScaleVertical(5) }}>
                    <View style={{ flexDirection: "column" }}>
                        <Text style={{ fontFamily: "Poppins-Medium", fontSize: textScale(13), color: "black" }}>Order No :</Text>
                        <Text style={{ fontFamily: "Poppins-Medium", fontSize: textScale(12), color: "grey" }}>#721</Text>

                    </View>
                    <View style={{ flexDirection: "column" }}>
                        <Text style={{ fontFamily: "Poppins-Medium", fontSize: textScale(13), color: "black" }}>Qty.</Text>
                        <Text style={{ fontFamily: "Poppins-Medium", fontSize: textScale(12), color: "grey" }}>3 pcs</Text>
                    </View>
                    <View style={{ flexDirection: "column" }}>
                        <Text style={{ fontFamily: "Poppins-Medium", fontSize: textScale(13), color: "black" }}>Price</Text>
                        <Text style={{ fontFamily: "Poppins-Medium", fontSize: textScale(12), color: "grey", textAlign: "right" }}>Rs. 900</Text>
                    </View>
                </View>
            </View>
            <View style={{ backgroundColor: "#D8D8D8", width: moderateScale(350), height: moderateScaleVertical(150), borderRadius: 20, alignSelf: "center", marginTop: moderateScaleVertical(20) }}>
                <Text style={{ color: "black", }}></Text>
                <View style={{ flexDirection: "row", marginHorizontal: -37, marginVertical: 10, justifyContent: "space-around", marginTop: moderateScaleVertical(10), }}>
                    <Text style={{ fontFamily: "Poppins-Medium", fontSize: textScale(16), color: "black" }}>2 Feb 2023</Text>
                    <Text style={{ fontFamily: "Poppins-Medium", fontSize: textScale(15), color: "black" }}>                       </Text>
                </View>
                <View style={{ flexDirection: "row", marginHorizontal: -15, justifyContent: "space-around", marginTop: moderateScaleVertical(5) }}>
                    <View style={{ flexDirection: "column" }}>
                        <Text style={{ fontFamily: "Poppins-Medium", fontSize: textScale(13), color: "black" }}>Order No :</Text>
                        <Text style={{ fontFamily: "Poppins-Medium", fontSize: textScale(12), color: "grey" }}>#481</Text>

                    </View>
                    <View style={{ flexDirection: "column" }}>
                        <Text style={{ fontFamily: "Poppins-Medium", fontSize: textScale(13), color: "black" }}>Qty.</Text>
                        <Text style={{ fontFamily: "Poppins-Medium", fontSize: textScale(12), color: "grey" }}>1 pcs</Text>
                    </View>
                    <View style={{ flexDirection: "column" }}>
                        <Text style={{ fontFamily: "Poppins-Medium", fontSize: textScale(13), color: "black" }}>Price</Text>
                        <Text style={{ fontFamily: "Poppins-Medium", fontSize: textScale(12), color: "grey", textAlign: "right" }}>Rs. 300</Text>
                    </View>
                </View>
            </View> 
        </SafeAreaView>

    )
}

export default ManageOrder

const styles = StyleSheet.create({
    background: {
        display: 'flex',
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        backgroundColor: "black"
    },
    image: {
        width: 450,
        height: 450,
    }
})