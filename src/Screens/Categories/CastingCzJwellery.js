import React, { useState, useEffect } from 'react'
import { View, Text, Image, TouchableOpacity, ScrollView, FlatList } from 'react-native'
import { StyleSheet } from 'react-native';
import { height, moderateScale, moderateScaleVertical, textScale } from '../../utils/responsive'

const CastingCzJwellery = ({ navigation }) => {

  return (

    <View style={{ backgroundColor: "black", flex: 1 }}>
      <ScrollView>
        <View style={styles.alignment}>
          <View style={styles.View2}>
            <TouchableOpacity onPress={() => { navigation.navigate('NeckLaceSets') }} >
              <View style={styles.View3}>
                <Image style={styles.ImageView} source={require("../../assets/coming_soon.png")} />
                <Text style={styles.View5}>NECKLACE SETS</Text>
              </View>
            </TouchableOpacity>
          </View>

          <View style={styles.View2}>
            <TouchableOpacity onPress={() => { navigation.navigate('MangalSutraCZ') }}>
              <View style={styles.View3}>
                <Image style={styles.ImageView} source={require("../../assets/coming_soon.png")} />
                <Text style={styles.View5}>MANGAL SUTRA</Text>
              </View>
            </TouchableOpacity>
          </View>

        </View>

        <View style={styles.alignment}>
          <View style={styles.View2}>
            <TouchableOpacity onPress={() => { navigation.navigate('LadiesRings') }}>
              <View style={styles.View3}>
                <Image style={styles.ImageView} source={require("../../assets/CZ_RING_1.jpg")} />
                <Text style={styles.View5}>LADIES RING</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.View2}>
            <TouchableOpacity onPress={() => { navigation.navigate('CockTailRings') }}>
              <View style={styles.View3}>
                <Image style={styles.ImageView} source={require("../../assets/CZ_RING_2.jpg")} />
                <Text style={styles.View5}>COCKTAIL RINGS</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.alignment}>
          <View style={styles.View2}>
            <TouchableOpacity onPress={() => { navigation.navigate('LadiesSolitaireRings') }}>
              <View style={styles.View3}>
                <Image style={styles.ImageView} source={require("../../assets/CZ_RING_3.jpg")} />
                <Text style={styles.View5}>LADIES SOLITAIRE RING</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.View2}>
            <TouchableOpacity onPress={() => { navigation.navigate('GentsRingsCZ') }}>
              <View style={styles.View3}>
                <Image style={styles.ImageView} source={require("../../assets/CZ_RING_4.jpg")} />
                <Text style={styles.View5}>GENTS RING</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.alignment}>
          <View style={styles.View2}>
            <TouchableOpacity onPress={() => { navigation.navigate('GentsSolitairRings') }}>
              <View style={styles.View3}>
                <Image style={styles.ImageView} source={require("../../assets/CZ_RING_5.jpg")} />
                <Text style={styles.View5}>GENTS SOLITAIRE RING</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.View2}>
            <TouchableOpacity onPress={() => { navigation.navigate('TopsCZ') }}>
              <View style={styles.View3}>
                <Image style={styles.ImageView} source={require("../../assets/cz_tops.jpg")} />
                <Text style={styles.View5}>TOPS</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.alignment}>
          <View style={styles.View2}>
            <TouchableOpacity onPress={() => { navigation.navigate('SolitaireRopeCZ') }}>
              <View style={styles.View3}>
                <Image style={styles.ImageView} source={require("../../assets/coming_soon.png")} />
                <Text style={styles.View5}>SOLITAIRE ROPE</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.View2}>
            <TouchableOpacity onPress={() => { navigation.navigate('Bali') }}>
              <View style={styles.View3}>
                <Image style={styles.ImageView} source={require("../../assets/coming_soon.png")} />
                <Text style={styles.View5}>BALI</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.alignment}>
          <View style={styles.View2}>
            <TouchableOpacity onPress={() => { navigation.navigate('Pendents') }} >
              <View style={styles.View3}>
                <Image style={styles.ImageView} source={require("../../assets/pendentCZ.jpg")} />
                <Text style={styles.View5}>PENDENT SETS</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.View2}>
            <TouchableOpacity onPress={() => { navigation.navigate('SolitairePendentSetsCZ') }}>
              <View style={styles.View3}>
                <Image style={styles.ImageView} source={require("../../assets/coming_soon.png")} />
                <Text style={styles.View5}>SOLITAIRE PENDENT SETS</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.alignment}>
          <View style={styles.View2}>
            <TouchableOpacity onPress={() => { navigation.navigate('Charms') }}>
              <View style={styles.View3}>
                <Image style={styles.ImageView} source={require("../../assets/charms.jpg")} />
                <Text style={styles.View5}>CHARMS</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.View2}>
            <TouchableOpacity onPress={() => { navigation.navigate('GoldPendentscz') }}>
              <View style={styles.View3}>
                <Image style={styles.ImageView} source={require("../../assets/coming_soon.png")} />
                <Text style={styles.View5}>GOLD PENDENTS</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.alignment}>
          <View style={styles.View2}>
            <TouchableOpacity onPress={() => { navigation.navigate('BraceLets') }} >
              <View style={styles.View3}>
                <Image style={styles.ImageView} source={require("../../assets/coming_soon.png")} />
                <Text style={styles.View5}>BRACELETS</Text>
              </View>
            </TouchableOpacity>
          </View>
          {/* <TouchableOpacity>
              <View style={styles.View2}>
                <View style={styles.View3}>
                  <Image style={styles.ImageView} source={require("../../assets/GWT-270.jpg")} />
                  <Text style={styles.View5}>GOLD PENDENTS</Text>
                </View>
              </View>
            </TouchableOpacity> */}
        </View>
      </ScrollView>
    </View>
  )
}

export default CastingCzJwellery

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
    // backgroundColor: 'white',
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