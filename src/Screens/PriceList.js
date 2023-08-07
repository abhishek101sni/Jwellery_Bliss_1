import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput, FlatList, Dimensions, Modal, ImageBackground } from 'react-native'
import React, { useState, useRef } from 'react'
import { height, moderateScale, moderateScaleVertical, textScale } from '../utils/responsive'

import Carousel, { Pagination } from "react-native-snap-carousel"
export const SLIDER_WIDTH = Dimensions.get("window").width + 30;
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.9);
import SimpleModal from './SimpleModal';

const data = [
  {
    id: 1,
    name: "GOLD",
    img: require("../assets/gold-bars.png"),
  },

  {
    id: 2,
    name: "SILVER",
    img: require("../assets/silver-Bars.png"),
  },
]

const SnapCarousel = ({ item }) => {


  return (
    <View
      style={{
        padding: 20,
        borderRadius: 20,
        alignItems: 'center',
        backgroundColor: "lightble",
      }}>
      <Image source={item.img} style={{ width: moderateScale(300), height: moderateScaleVertical(250), borderRadius: 20 }} />
      <Text style={{ marginVertical: moderateScaleVertical(20), fontSize: textScale(20), fontWeight: "400", color: "black", fontSize: textScale(15), fontWeight: "400", marginTop: moderateScaleVertical(20) }}>{item.name}</Text>
    </View>
  )
}

const DropDown2 = ({ navigation }) => {
  // WhatsApp
  const [isModalVisible, setisModalVisible] = useState(false)
  const [chooseData, setChooseData] = useState();

  const changeModalVisible = (bool) => {
    setisModalVisible(bool)
  }


  const setData = (data) => {
    setChooseData(data)
  }
  // WhatsApp

  const [index, setIndex] = useState(0);
  const isCarousel = useRef(null)


  const [selectCoins, setSelectedCoins] = useState("Select Coins")
  const [isClicked, setIsClicked] = useState(false)
  return (
    <ImageBackground style={{ flex: 1 }} source={require("../assets/background-image2.png")}>


      {/* <View style={{ flex: 1 }}> */}
      <View style={{ top: height - 938, }}>
        <Image source={require("../assets/GOLDEN-STRIP.png")} style={styles.goldenStrip} />
      </View>

      <View style={{ flex: 0.7 }}>
        <TouchableOpacity style={styles.dropDownStyle} onPress={() => { setIsClicked(!isClicked) }}>
          <Text style={{ fontSize: textScale(15), fontWeight: "500", color: "black" }}>{selectCoins}</Text>
          {isClicked ? (
            <Image source={require("../assets/drop-up.png")} style={styles.DropdownArrows} />
          ) : (<Image source={require("../assets/drop-down.png")} style={styles.DropdownArrows} />)}
        </TouchableOpacity>
        {/* </View> */}

        {isClicked ? (
          <View style={styles.dropDownArea}>
            <TouchableOpacity style={styles.GoldcoinsItem} onPress={() => navigation.navigate('goldscreen')}>
              <Text style={styles.Goldtext}>Gold</Text>
            </TouchableOpacity>

            <View style={styles.line}></View>

            <TouchableOpacity style={styles.SilvercoinsItem} onPress={() => navigation.navigate('silverscreen')}>
              <Text style={styles.Silvertext}>Silver</Text>
            </TouchableOpacity>
          </View>) : null}

        <View style={styles.CarouselAlignment}>
          <Carousel
            ref={isCarousel}
            data={data}
            renderItem={SnapCarousel}
            sliderWidth={SLIDER_WIDTH}
            itemWidth={ITEM_WIDTH}
            onSnapToItem={index => setIndex(index)}

          />
          <Pagination
            dotsLength={data.length}
            activeDotIndex={index}
            carouselRef={isCarousel}
            dotStyle={{
              width: moderateScale(8),
              height: moderateScaleVertical(8),
              borderRadius: 10,
              marginHorizontal: moderateScale(0),
              backgroundColor: "#bc9954",
            }}
            inactiveDotStyle={{
              backgroundColor: "black"
            }}
            containerStyle={{ paddingVertical: -10 }}
          />
        </View>
      </View>

      {/* Whatsapp */}
      <View style={{ bottom: -90, position: "absolute", right: 20 }}>
        <TouchableOpacity onPress={() => changeModalVisible(true)} style={styles.HelpButtonAlignment} >
          <View style={styles.icontextAlignment}>
            <Image source={require("../assets/whatsapp-white.png")} style={styles.whatsappIcon} />
            <Text style={styles.helpText}>Help</Text>
          </View>
        </TouchableOpacity>

        <Modal
          transparent={true}
          animationType='fade'
          visible={isModalVisible}
          nRequestClose={() => changeModalVisible(false)}
        >
          <SimpleModal changeModalVisible={changeModalVisible}
            setData={setData}
          />
        </Modal>
      </View>
      {/* Whatsapp */}

    </ImageBackground>
  )
}

export default DropDown2

const styles = StyleSheet.create({
  goldenStrip: {
    borderWidth: 3,
    width: moderateScale(1100),
    alignSelf: "center"
  },
  dropDownStyle: {
    width: "90%",
    height: moderateScaleVertical(50),
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "black",
    alignSelf: "center",
    marginTop: moderateScaleVertical(50),
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: moderateScale(15),
    paddingRight: moderateScale(15),
    backgroundColor: "white",
  },
  DropdownArrows: {
    width: moderateScale(20),
    height: moderateScale(20),
  },
  dropDownArea: {
    width: "85%",
    height: moderateScaleVertical(100),
    borderRadius: 5,
    marginTop: moderateScaleVertical(2),
    backgroundColor: "#fff",
    elevation: 5,
    alignSelf: "center",
    borderWidth: 2,
    borderColor: "black",
  },
  GoldcoinsItem: {
    width: "85%",
    height: moderateScaleVertical(50),
    alignSelf: "center",
    justifyContent: "center",
  },
  SilvercoinsItem: {
    width: "85%",
    height: moderateScaleVertical(50),
    alignSelf: "center",
    justifyContent: "center"
  },
  Goldtext: {
    fontSize: textScale(15),
    color: "black",
    fontWeight: "500",
  },
  Silvertext: {
    fontSize: textScale(15),
    color: "black",
    fontWeight: "500",
  },
  CarouselAlignment: {
    paddingTop: moderateScaleVertical(20),
    alignItems: "center",
    marginTop: moderateScaleVertical(110),
  },
  heading: {
    fontSize: textScale(40),
    fontWeight: "800",
    marginTop: moderateScaleVertical(30),
    alignSelf: "center",
    color: "black"
  },
  search: {
    width: "90%",
    height: 50,
    borderRadius: 10,
    borderWidth: 0.5,
    borderColor: "black",
    alignSelf: "center",
    marginTop: 20,
    paddingLeft: 15,
  },
  coinsItem: {
    width: "85%",
    height: 50,
    borderBottomWidth: 0.2,
    borderBottomColor: "#8e8e8e",
    alignSelf: "center",
    justifyContent: "center"
  },
  line: {
    width: "100%",
    height: moderateScaleVertical(2),
    backgroundColor: "black",
    alignSelf: 'center'
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
  }
})