import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput, FlatList, Dimensions, ImageBackground } from 'react-native'
import React, { useState, useRef } from 'react'
import { height, moderateScale, moderateScaleVertical, textScale } from '../utils/responsive'

import Carousel, { Pagination } from "react-native-snap-carousel"
export const SLIDER_WIDTH = Dimensions.get("window").width + 30;
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.9);

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
      <Image source={item.img} style={{ width: 300, height: 250, borderRadius: 20 }} />
      <Text style={{ marginVertical: 20, fontSize: 20, fontWeight: "400", color: "black", fontSize: 20, marginTop: 20 }}>{item.name}</Text>
    </View>
  )
}

const DropDown2 = ({ navigation }) => {

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
          <Text>{selectCoins}</Text>
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
          {/* <Pagination
              dotsLength={data.length}
              activeDotIndex={index}
              carouselRef={isCarousel}
              dotStyle={{
                width: 10,
                height: 10,
                borderRadius: 10,
                marginHorizontal: 0,
                backgroundColor: "#bc9954",
              }}
            /> */}
        </View>
      </View>
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
    height: 50,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "black",
    alignSelf: "center",
    marginTop: 50,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: 15,
    paddingRight: 15,
    backgroundColor: "white",
  },
  DropdownArrows: {
    width: 20,
    height: 20
  },
  dropDownArea: {
    width: "87%",
    height: 100,
    borderRadius: 5,
    marginTop: 2,
    backgroundColor: "#fff",
    elevation: 5,
    alignSelf: "center",
    borderWidth: 2,
    borderColor: "black",
  },
  GoldcoinsItem: {
    width: "85%",
    height: 50,
    // borderBottomWidth: 0.2,
    // borderBottomColor: "#8e8e8e",
    alignSelf: "center",
    justifyContent: "center",
    // backgroundColor:"black"
  },
  Goldtext: {
    fontSize: 20,
    color: "black",
    fontWeight: "600",
    // textAlign: "center",
  },

  SilvercoinsItem: {
    width: "85%",
    height: 50,
    // borderBottomWidth: 0.2,
    // borderBottomColor: "#8e8e8e",
    alignSelf: "center",
    justifyContent: "center"
  },
  Silvertext: {
    fontSize: 20,
    color: "black",
    fontWeight: "600",
    // textAlign: "center"
  },
  CarouselAlignment: {
    paddingTop: 20,
    alignItems: "center",
    marginTop: 150
  },
  heading: {
    fontSize: 40,
    fontWeight: "800",
    marginTop: 30,
    alignSelf: "center",
    color: "black"
  },
  dropDownSelector: {


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
    height: 2,
    backgroundColor: "black",
    alignSelf: 'center'
  },





  // Table css
})