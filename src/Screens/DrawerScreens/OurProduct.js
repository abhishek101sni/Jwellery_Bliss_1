import React, { useState, useEffect } from 'react'
import { View, Text, Image, TouchableOpacity, ScrollView, FlatList, Modal, ImageBackground } from 'react-native'
import { StyleSheet } from 'react-native';
import { height, moderateScale, moderateScaleVertical, textScale } from '../../utils/responsive'
import SimpleModal from '../SimpleModal';

const OurProduct = ({ navigation }) => {
    // WhatsApp
    const [isModalVisible, setisModalVisible] = useState(false)
    const [chooseData, setChooseData] = useState();

    const changeModalVisible = (bool) => {
        setisModalVisible(bool)
    }


    const setData2 = (data) => {
        setChooseData(data)
    }
    // WhatsAppz

    const [data, setData] = useState([]);
    // const dispatch = useDispatch();

    const getAPIDATA = async () => {
        const url = "https://bliss-app-backend-production.up.railway.app/api/products/categories";
        let result = await fetch(url);
        result = await result.json();
        setData(result);
    }

    useEffect(() => {
        getAPIDATA();
    }, []);


    return (
        <>
            {/* <View style={{ backgroundColor: "black", flex: 1 }}>
                <ScrollView>
                    <FlatList contentContainerStyle={{ alignItems: "center" }}
                        data={data}
                        numColumns={2}
                        renderItem={({ item, index }) => <View key={index} style={styles.View1}>


                            <View style={styles.View2}>
                                <TouchableOpacity onPress={() => { navigation.navigate('chains') }}>
                                    <View style={styles.View3}>
                                        <Image style={styles.ImageView} source={require("../../assets/coming_soon.png")} />
                                        <ImageBackground imageStyle={{ borderBottomLeftRadius: 20, borderBottomRightRadius: 20 }} style={styles.View5} source={require("../../assets/CompressedTextureHd.jpg")}>
                                            <Text style={{ color: "black", fontWeight: "600", }}>{item?.category}</Text>
                                        </ImageBackground>

                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>
                        }
                    />
                </ScrollView>
            </View> */}

            <View style={{ backgroundColor: "#181818", flex: 1 }}>
                <ScrollView>
                    <View style={styles.alignment}>

                        <View style={styles.View2}>
                            <TouchableOpacity onPress={() => { navigation.navigate('chains') }}>
                                <View style={styles.View3}>
                                    <Image style={styles.ImageView} source={require("../../assets/coming_soon.png")} />
                                    <ImageBackground imageStyle={{ borderBottomLeftRadius: 20, borderBottomRightRadius: 20 }} style={styles.View5} source={require("../../assets/CompressedTexture3.jpg")}>
                                            <Text style={{ color: "black", fontWeight: "600", }}>CHAINS</Text>
                                        </ImageBackground>
                                </View>
                            </TouchableOpacity>
                        </View>


                        <View style={styles.View2}>
                            <TouchableOpacity onPress={() => { navigation.navigate('PlainJwellery') }}>
                                <View style={styles.View3}>
                                    <Image style={styles.ImageView} source={require("../../assets/coming_soon.png")} />
                                    <ImageBackground imageStyle={{ borderBottomLeftRadius: 20, borderBottomRightRadius: 20 }} style={styles.View5} source={require("../../assets/CompressedTexture3.jpg")}>
                                            <Text style={{ color: "black", fontWeight: "600", }}>PLAIN JWELLERY</Text>
                                        </ImageBackground>
                                </View>
                            </TouchableOpacity>
                        </View>

                    </View>

                    <View style={styles.alignment}>
                        <View style={styles.View2}>
                            <TouchableOpacity onPress={() => { navigation.navigate('CastingJwellery') }}>
                                <View style={styles.View3}>
                                    <Image style={styles.ImageView} source={require("../../assets/coming_soon.png")} />
                                    <ImageBackground imageStyle={{ borderBottomLeftRadius: 20, borderBottomRightRadius: 20 }} style={styles.View5} source={require("../../assets/CompressedTexture3.jpg")}>
                                            <Text style={{ color: "black", fontWeight: "600", }}>CASTING JWELLERY</Text>
                                        </ImageBackground>
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.View2}>
                            <View style={styles.View3}>
                                <TouchableOpacity onPress={() => { navigation.navigate('CastingCzJwellery') }}>
                                    <Image style={styles.ImageView} source={require("../../assets/czParent.jpg")} />
                                    <ImageBackground imageStyle={{ borderBottomLeftRadius: 20, borderBottomRightRadius: 20 }} style={styles.View5} source={require("../../assets/CompressedTexture3.jpg")}>
                                            <Text style={{ color: "black", fontWeight: "600", }}>CASTING JWELLERY</Text>
                                        </ImageBackground>
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
        // marginBottom: moderateScale(-20),
        backgroundColor: 'white',
        justifyContent: 'space-around',
        // marginRight: moderateScale(10),
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        width: moderateScale(153),
        height: moderateScaleVertical(180),
        marginTop: moderateScaleVertical(40),
        marginHorizontal: moderateScale(20)
    },
    View3: {
        // marginTop:moderateScaleVertical(0),
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
        alignItems: "center",
        height: moderateScaleVertical(40),
        width: moderateScale(153),
        textAlign: 'center',
        alignSelf: "center",
        fontWeight: "900",
        fontSize: textScale(10),
        justifyContent: "center",
    },
    // Whatsapp style

    HelpButtonAlignment: {
        justifyContent: "center",
        backgroundColor: "#25D366",
        width: moderateScale(110),
        height: moderateScaleVertical(45),
        borderRadius: 40,
        marginBottom: moderateScaleVertical(100)
        // position: "fixed",
    },
    icontextAlignment: {
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
        justifyContent: "space-around",
        paddingHorizontal: moderateScale(-30),
        marginHorizontal: moderateScale(25),
    },
    whatsappIcon: {
        width: moderateScale(20),
        height: moderateScaleVertical(20),
        // position:"fixed",
    },
    helpText: {
        color: 'white',
        fontSize: textScale(13),
        fontWeight: "bold",
    },

    backgroundColor: {
        backgroundColor: "black",
        flex: 1
    },
    alignment2: {
        marginTop: 100,
        alignSelf: "center",
    },
})