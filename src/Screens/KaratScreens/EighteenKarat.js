// import React, { useState, useEffect } from 'react'
// import { View, Text, Image, TouchableOpacity, ScrollView, FlatList, Modal } from 'react-native'
// import { StyleSheet } from 'react-native';
// import { height, moderateScale, moderateScaleVertical, textScale } from '../../utils/responsive'
// import SimpleModal from '../SimpleModal';

// const EighteenKarat = ({ navigation }) => {

//   const [data, setData] = useState([]);


//   // WhatsApp
//   const [isModalVisible, setisModalVisible] = useState(false)
//   const [chooseData, setChooseData] = useState();

//   const changeModalVisible = (bool) => {
//     setisModalVisible(bool)
//   }


//   const setData2 = (data) => {
//     setChooseData(data)
//   }
//   // WhatsApp

//   // const dispatch = useDispatch();

//   const getAPIDATA = async () => {
//     // const url = "https://bliss-app-backend-production.up.railway.app/api/products/categories";
//     const url = "https://bliss-app-backend-production.up.railway.app/api/products/?search=18";
//     let result = await fetch(url);
//     result = await result.json();
//     setData(result);
//   }

//   useEffect(() => {
//     getAPIDATA();
//   }, []);

//   return (
//     <View style={{ backgroundColor: "black", flex: 1 }}>
//       <ScrollView>
//         <FlatList contentContainerStyle={{ alignItems: "center" }}
//           data={data}
//           numColumns={2}
//           renderItem={({ item, index }) => <View key={index} style={styles.View1}>


//             <View style={styles.View2}>
//               <TouchableOpacity onLongPress={() => { navigation.navigate('chains') }}>
//                 <View style={styles.View3}>
//                   <Image style={styles.ImageView} source={require("../../assets/coming_soon.png")} />
//                   <Text style={styles.View5}>{item?.category}</Text>
//                 </View>
//               </TouchableOpacity>
//             </View>


//           </View>}
//         />
//       </ScrollView>
//       {/* Whatsapp */}
//       <View style={{ bottom: -90, position: "absolute", right: 20 }}>
//         <TouchableOpacity onPress={() => changeModalVisible(true)} style={styles.HelpButtonAlignment} >
//           <View style={styles.icontextAlignment}>
//             <Image source={require("../../assets/whatsapp-white.png")} style={styles.whatsappIcon} />
//             <Text style={styles.helpText}>Help</Text>
//           </View>
//         </TouchableOpacity>

//         <Modal
//           transparent={true}
//           animationType='fade'
//           visible={isModalVisible}
//           nRequestClose={() => changeModalVisible(false)}
//         >
//           <SimpleModal changeModalVisible={changeModalVisible}
//             setData={setData2}
//           />
//         </Modal>
//       </View>
//       {/* Whatsapp */}
//     </View>
//   )
// }

// export default EighteenKarat;

// const styles = StyleSheet.create({
//   alignment: {
//     flexDirection: "row",
//     alignItems: "center",
//     marginLeft: moderateScale(12),
//     justifyContent: "space-around",
//     marginTop: moderateScaleVertical(25)
//   },

//   View2: {
//     // marginBottom: moderateScale(-20),
//     backgroundColor: 'white',
//     justifyContent: 'space-around',
//     // marginRight: moderateScale(10),
//     borderTopLeftRadius: 20,
//     borderTopRightRadius: 20,
//     borderBottomLeftRadius: 20,
//     borderBottomRightRadius: 20,
//     width: moderateScale(150),
//     height: moderateScaleVertical(180),
//     marginTop: moderateScaleVertical(40),
//     marginHorizontal: moderateScale(20)
//   },
//   View3: {
//     // marginTop:moderateScaleVertical(0),
//     backgroundColor: 'white',
//     borderRadius: 35
//   },
//   ImageView: {
//     height: moderateScaleVertical(140),
//     width: moderateScale(120),
//     alignSelf: 'center',
//     borderRadius: 35,
//   },
//   View5: {
//     height: moderateScaleVertical(40),
//     width: moderateScale(150),
//     color: 'black',
//     paddingTop: 13,
//     backgroundColor: '#ECC440',
//     textAlign: 'center',
//     borderBottomLeftRadius: 20,
//     borderBottomRightRadius: 20,
//     fontWeight: "900",
//     fontSize: textScale(10),
//     justifyContent: "center",
//   },
//   // Whatsapp style

//   HelpButtonAlignment: {
//     justifyContent: "center",
//     backgroundColor: "#25D366",
//     width: moderateScale(110),
//     height: moderateScaleVertical(45),
//     borderRadius: 40,
//     marginBottom: moderateScaleVertical(100)
//     // position: "fixed",
//   },
//   icontextAlignment: {
//     alignItems: "center",
//     justifyContent: "center",
//     flexDirection: "row",
//     justifyContent: "space-around",
//     paddingHorizontal: moderateScale(-30),
//     marginHorizontal: moderateScale(25),
//   },
//   whatsappIcon: {
//     width: moderateScale(20),
//     height: moderateScaleVertical(20),
//     // position:"fixed",
//   },
//   helpText: {
//     color: 'white',
//     fontSize: textScale(13),
//     fontWeight: "bold",
//   }
// })

import React, { useState, useEffect } from 'react'
import { View, Text, Image, TouchableOpacity, ScrollView, FlatList, ImageBackground } from 'react-native'
import { useDispatch } from 'react-redux'
import { setActiveItem } from '../../redux/action';
import { StyleSheet } from 'react-native';
import { height, moderateScale, moderateScaleVertical, textScale } from '../../utils/responsive'


const Product = ({ navigation }) => {
    const [data, setData] = useState([]);
    const dispatch = useDispatch();

    const getAPIDATA = async () => {
        const url = "https://bliss-app-backend-production.up.railway.app/api/products/?search=18";
        let result = await fetch(url);
        result = await result.json();
        setData(result);
    }

    useEffect(() => {
        getAPIDATA();
    }, []);

    const handlePress = (item) => {
        dispatch(setActiveItem(item));
        navigation.navigate('singleproduct');
    };

    return (
        <ImageBackground style={{ flex: 1 }} source={require("../../assets/background-image2.png")}>
            <View style={{ top: height - 938, }}>
                <Image source={require("../../assets/GOLDEN-STRIP.png")} style={{ borderWidth: 3, width: 1090, alignSelf: "center" }} />
            </View>

            <FlatList contentContainerStyle={{ alignItems: "center" }}
                data={data}
                numColumns={2}
                renderItem={({ item, index }) => <View key={index} style={styles.View1}>

                    <View style={styles.View2}>
                        <TouchableOpacity onPress={() => handlePress(item)}>
                            <View style={styles.View3}>
                                <Image style={styles.ImageView} source={{ uri: item.images[0] }} />
                                <Text style={styles.View5}>{item?.name}</Text>
                            </View>
                        </TouchableOpacity>
                    </View>

                </View>}
            />
        </ImageBackground>

    )
}

export default Product

const styles = StyleSheet.create({
    View1: {
        margin: moderateScale(10),
        flexDirection: 'row',
        justifyContent: 'center',
        marginHorizontal: moderateScale(20)
    },

    View2: {
        backgroundColor: 'white',
        justifyContent: 'space-evenly',
        marginRight: moderateScale(10),
        marginTop: moderateScaleVertical(15),
        marginBottom: moderateScaleVertical(15),
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        width: moderateScale(150),
        height: moderateScaleVertical(180),
    },

    View3: {
        backgroundColor: 'white',
        borderRadius: 35
    },

    ImageView: {
        height: moderateScaleVertical(155),
        width: moderateScale(150),
        alignSelf: 'center',
        borderRadius: 0,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
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