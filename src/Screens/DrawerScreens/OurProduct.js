import React, { useState, useEffect } from 'react'
import { View, Text, Image, TouchableOpacity, ScrollView, FlatList } from 'react-native'
import { StyleSheet } from 'react-native';
import { height, moderateScale, moderateScaleVertical, textScale } from '../../utils/responsive'


const OurProduct = ({ navigation }) => {

    return (
        <>
            <View style={{ backgroundColor: "black", flex: 1 }}>
                <ScrollView>
                    <View style={styles.alignment}>
                        <View style={styles.View2}>
                            <TouchableOpacity onPress={() => { navigation.navigate('chains') }}>
                                <View style={styles.View3}>
                                    <Image style={styles.ImageView} source={require("../../assets/coming_soon.png")} />
                                    <Text style={styles.View5}>CHAINS</Text>
                                </View>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.View2}>
                            <TouchableOpacity onPress={() => { navigation.navigate('PlainJwellery') }}>
                                <View style={styles.View3}>
                                    <Image style={styles.ImageView} source={require("../../assets/coming_soon.png")} />
                                    <Text style={styles.View5}>PLAIN JWELLERY</Text>
                                </View>
                            </TouchableOpacity>
                        </View>

                    </View>
                    <View style={styles.alignment}>
                        <View style={styles.View2}>
                            <TouchableOpacity onPress={() => { navigation.navigate('CastingJwellery') }}>
                                <View style={styles.View3}>
                                    <Image style={styles.ImageView} source={require("../../assets/coming_soon.png")} />
                                    <Text style={styles.View5}>CASTING JWELLERY</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.View2}>
                            <View style={styles.View3}>
                                <TouchableOpacity onPress={() => { navigation.navigate('CastingCzJwellery') }}>
                                    <Image style={styles.ImageView} source={require("../../assets/czParent.jpg")} />
                                    <Text style={styles.View5}>CASTING CZ JWELLERY</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </View>
        </>
    )
}

export default OurProduct

const styles = StyleSheet.create({
    alignment: {
        flexDirection: "row",
        alignItems: "center",
        marginLeft: moderateScale(12),
        justifyContent: "space-around",
        marginTop: moderateScaleVertical(25)
    },

    View2: {
        backgroundColor: 'white',
        justifyContent: 'space-evenly',
        marginRight: moderateScale(10),
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        width: moderateScale(150),
        height: moderateScaleVertical(180)
    },
    View3: {
        backgroundColor: 'white',
        borderRadius: 35
    },
    ImageView: {
        height: moderateScaleVertical(140),
        width: moderateScale(120),
        alignSelf: 'center',
        borderRadius: 35,
    },
    View5: {
        height: moderateScaleVertical(40),
        width: moderateScale(150),
        color: 'black',
        paddingTop: 13,
        backgroundColor: '#ECC440',
        textAlign: 'center',
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        fontWeight: "900",
        fontSize: textScale(10),
        justifyContent: "center",
    }
})