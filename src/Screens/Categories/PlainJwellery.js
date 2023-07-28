import React, { useState, useEffect } from 'react'
import { View, Text, Image, TouchableOpacity, ScrollView, FlatList } from 'react-native'
import { StyleSheet } from 'react-native';
import { height, moderateScale, moderateScaleVertical, textScale } from '../../utils/responsive'


const PlainJwellery = ({ navigation }) => {

  return (
    <View style={{ backgroundColor: "black", flex: 1 }}>
      <ScrollView>
        <View style={styles.alignment}>
          <View style={styles.View2}>
            <TouchableOpacity onPress={() => { navigation.navigate('SetsPJ') }}>
              <View style={styles.View3}>
                <Image style={styles.ImageView} source={require("../../assets/coming_soon.png")} />
                <Text style={styles.View5}>SETS</Text>
              </View>
            </TouchableOpacity>
          </View>

          <View style={styles.View2}>
            <TouchableOpacity onPress={() => { navigation.navigate('MangalSutrapj') }}>
              <View style={styles.View3}>
                <Image style={styles.ImageView} source={require("../../assets/coming_soon.png")} />
                <Text style={styles.View5}>MANGAL SUTRA</Text>
              </View>
            </TouchableOpacity>
          </View>

        </View>
        <View style={styles.alignment}>
          <View style={styles.View2}>
            <TouchableOpacity onPress={() => { navigation.navigate('TopsPJ') }}>
              <View style={styles.View3}>
                <Image style={styles.ImageView} source={require("../../assets/coming_soon.png")} />
                <Text style={styles.View5}>TOPS</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.View2}>
            <TouchableOpacity onPress={() => { navigation.navigate('HandmadeLadiesRing') }}>
              <View style={styles.View3}>
                <Image style={styles.ImageView} source={require("../../assets/coming_soon.png")} />
                <Text style={styles.View5}>HANDMADE LADIES RING</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.alignment}>
          <View style={styles.View2}>
            <TouchableOpacity onPress={() => { navigation.navigate('HandmadeGentsRing') }}>
              <View style={styles.View3}>
                <Image style={styles.ImageView} source={require("../../assets/coming_soon.png")} />
                <Text style={styles.View5}>HANDMADE GENTS RING</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.View2}>
            <TouchableOpacity onPress={() => { navigation.navigate('Bracelets') }}>
              <View style={styles.View3}>
                <Image style={styles.ImageView} source={require("../../assets/coming_soon.png")} />
                <Text style={styles.View5}>BRACELETS</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.alignment}>
          <View style={styles.View2}>
            <TouchableOpacity onPress={() => { navigation.navigate('UvShapedBaliPJ') }}>
              <View style={styles.View3}>
                <Image style={styles.ImageView} source={require("../../assets/coming_soon.png")} />
                <Text style={styles.View5}>UV SHAPED BALI</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.View2}>
            <TouchableOpacity onPress={() => { navigation.navigate('RajkotItems') }}>
              <View style={styles.View3}>
                <Image style={styles.ImageView} source={require("../../assets/coming_soon.png")} />
                <Text style={styles.View5}>RAJKOT ITEMS</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.alignment}>
          <View style={styles.View2}>
            <TouchableOpacity onPress={() => { navigation.navigate('LongSets') }} >
              <View style={styles.View3}>
                <Image style={styles.ImageView} source={require("../../assets/coming_soon.png")} />
                <Text style={styles.View5}>LONG SETS</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.View2}>
            <TouchableOpacity onPress={() => { navigation.navigate('ChokerSets') }} >
              <View style={styles.View3}>
                <Image style={styles.ImageView} source={require("../../assets/coming_soon.png")} />
                <Text style={styles.View5}>CHOKER SETS</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.alignment}>
          <View style={styles.View2}>
            <TouchableOpacity onPress={() => { navigation.navigate('Bangels') }}>
              <View style={styles.View3}>
                <Image style={styles.ImageView} source={require("../../assets/coming_soon.png")} />
                <Text style={styles.View5}>BANGELS</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.View2}>
            <TouchableOpacity onPress={() => { navigation.navigate('Kade') }}>
              <View style={styles.View3}>
                <Image style={styles.ImageView} source={require("../../assets/coming_soon.png")} />
                <Text style={styles.View5}>KADE</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.alignment}>
          <View style={styles.View2}>
            <TouchableOpacity onPress={() => { navigation.navigate('GoldPendent') }}>
              <View style={styles.View3}>
                <Image style={styles.ImageView} source={require("../../assets/coming_soon.png")} />
                <Text style={styles.View5}>GOLD PENDENTS</Text>
              </View>
            </TouchableOpacity>
          </View>
          {/* <TouchableOpacity>
              <View style={styles.View2}>
                <View style={styles.View3}>
                  <Image style={styles.ImageView} source={require("../../assets/GWT-270.jpg")} />
                  <Text style={styles.View5}>KADE</Text>
                </View>
              </View>
            </TouchableOpacity> */}
        </View>
      </ScrollView>
    </View>
  )
}

export default PlainJwellery

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