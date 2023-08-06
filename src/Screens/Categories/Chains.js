import React, { useState, useEffect } from 'react'
import { View, Text, Image, TouchableOpacity, ScrollView, FlatList } from 'react-native'
import { StyleSheet } from 'react-native';
import { height, moderateScale, moderateScaleVertical, textScale } from '../../utils/responsive'
import axios from 'axios';

const Chains = ({ navigation }) => {
  const [category, setcategory] = useState([]);
  const [products, setProducts] = useState([]);

  // const getCategory = async () => {
  //   const url = "http://localhost:5009/api/products?category=chains"
  //   let result = await fetch(url);
  //   result = await result.json();
  //   setcategory(result);
  // }
  useEffect(() => {
    fetchProducts();
  }, []);


  const fetchProducts = async () => {
    try {
      const response = await axios.get('https://bliss-app-backend-production.up.railway.app/api/products', {
        params: { category: 'chains' },
      });
      setProducts(response.data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  return (
    <>
      {/* <FlatList
        data={products}
        renderItem={({ item }) => <Text>{item.name}</Text>}
      keyExtractor={(item) => item.id.toString()}
      /> */}
      {/* <FlatList contentContainerStyle={{ alignItems: "center" }}
        data={category}
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
      /> */}
      <View style={{ backgroundColor: "black", flex: 1 }}>
        <ScrollView>
          <View style={styles.alignment}>
            <View style={styles.View2}>
              <TouchableOpacity onPress={() => { navigation.navigate('MachineChains') }}>
                <View style={styles.View3}>
                  <Image style={styles.ImageView} source={require("../../assets/coming_soon.png")} />
                  <Text style={styles.View5}>MACHINE CHAINS</Text>
                </View>
              </TouchableOpacity>
            </View>

            <View style={styles.View2}>
              <TouchableOpacity onPress={() => { navigation.navigate('SilkyRope') }}>
                <View style={styles.View3}>
                  <Image style={styles.ImageView} source={require("../../assets/coming_soon.png")} />
                  <Text style={styles.View5}>SILKY ROPE</Text>
                </View>
              </TouchableOpacity>
            </View>

          </View>
          <View style={styles.alignment}>
            <View style={styles.View2}>
              <TouchableOpacity onPress={() => { navigation.navigate('HandMade') }} >
                <View style={styles.View3}>
                  <Image style={styles.ImageView} source={require("../../assets/coming_soon.png")} />
                  <Text style={styles.View5}>HAND MADE</Text>
                </View>
              </TouchableOpacity>
            </View>

            <View style={styles.View2}>
              <TouchableOpacity onPress={() => { navigation.navigate('HollowFancy') }}>
                <View style={styles.View3}>
                  <Image style={styles.ImageView} source={require("../../assets/coming_soon.png")} />
                  <Text style={styles.View5}>HOLLOW FANCY</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.alignment}>
            <View style={styles.View2}>
              <TouchableOpacity onPress={() => { navigation.navigate('HollowNawabi') }}>
                <View style={styles.View3}>
                  <Image style={styles.ImageView} source={require("../../assets/coming_soon.png")} />
                  <Text style={styles.View5}>HOLLOW NAWABI</Text>
                </View>
              </TouchableOpacity>
            </View>
            <View style={styles.View2}>
              <TouchableOpacity onPress={() => { navigation.navigate('SumoChains') }}>
                <View style={styles.View3}>
                  <Image style={styles.ImageView} source={require("../../assets/coming_soon.png")} />
                  <Text style={styles.View5}>SUMO CHAINS</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.alignment}>
            <View style={styles.View2}>
              <TouchableOpacity onPress={() => { navigation.navigate('IndoChains') }}>
                <View style={styles.View3}>
                  <Image style={styles.ImageView} source={require("../../assets/coming_soon.png")} />
                  <Text style={styles.View5}>INDO CHAINS</Text>
                </View>
              </TouchableOpacity>
            </View>
            <View style={styles.View2}>
              <TouchableOpacity onPress={() => { navigation.navigate('ChocoChains') }}>
                <View style={styles.View3}>
                  <Image style={styles.ImageView} source={require("../../assets/coming_soon.png")} />
                  <Text style={styles.View5}>CHOCO CHAINS</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.alignment}>
            <View style={styles.View2}>
              <TouchableOpacity onPress={() => { navigation.navigate('IndoChocoChains') }}>
                <View style={styles.View3}>
                  <Image style={styles.ImageView} source={require("../../assets/coming_soon.png")} />
                  <Text style={styles.View5}>INDO CHOCO CHAINS</Text>
                </View>
              </TouchableOpacity>
            </View>
            <TouchableOpacity>
              <View style={styles.View2}>
                <TouchableOpacity onPress={() => { navigation.navigate('SolidNawabi') }}>
                  <View style={styles.View3}>
                    <Image style={styles.ImageView} source={require("../../assets/coming_soon.png")} />
                    <Text style={styles.View5}>SOLID NAWABI</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          </View>

          <View style={styles.alignment}>
            <View style={styles.View2}>
              <TouchableOpacity onPress={() => { navigation.navigate('MadrasiChains') }}>
                <View style={styles.View3}>
                  <Image style={styles.ImageView} source={require("../../assets/coming_soon.png")} />
                  <Text style={styles.View5}>MADRASI CHAINS</Text>
                </View>
              </TouchableOpacity>
            </View>
            <TouchableOpacity>
              <View style={styles.View2}>
                <View style={styles.View3}>
                  <Image style={styles.ImageView} source={require("../../assets/GWT-270.jpg")} />
                  <Text style={styles.View5}>SOLID NAWABI</Text>
                </View>
              </View>
            </TouchableOpacity>
          </View >

        </ScrollView >
      </View >
    </>
  )
}

export default Chains

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