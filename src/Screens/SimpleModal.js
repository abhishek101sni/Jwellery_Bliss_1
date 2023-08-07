import { View, Text, StyleSheet, TouchableOpacity, Dimensions, ImageBackground, Image } from 'react-native'
import React from 'react'

const WIDTH = Dimensions.get('window').width;
const HEIGHT_MODAL = 150;


const SimpleModal = (props) => {

    closeModal = (bool, data) => {
        props.changeModalVisible(bool);
        props.setData(data);
    }
    return (
        <TouchableOpacity disabled={true} style={styles.container}>
            <ImageBackground style={styles.modal} imageStyle={{ borderRadius: 20, flex: 1,borderWidth:2,borderColor:"#25D366", height: 150, width: 350 }} source={require("../assets/texture.png")}>
                <View style={{ flexDirection: "row", marginTop: 10, marginHorizontal: -60, justifyContent: "space-around", paddingHorizontal: 30 }}>
                    <TouchableOpacity style={{ alignItems: "center" }}>
                        <Image source={require("../assets/call.png")} style={styles.icon} />
                        <Text style={styles.icontext}>Call</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{ alignItems: "center" }}>
                        <Image source={require("../assets/modal_whatsapp.png")} style={styles.icon} />
                        <Text style={styles.icontext}>Whatsapp</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={styles.Touch} onPress={() => closeModal(false, "Cancel")}>
                    <Image source={require("../assets/cancel.png")} style={styles.Cancelicon} />
                    {/* <Text style={[styles.Canceltext, { color: "black" }]}>Cancel</Text> */}
                </TouchableOpacity>
            </ImageBackground>
        </TouchableOpacity>
    )
}

export default SimpleModal;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    modal: {
        height: HEIGHT_MODAL,
        paddingTop: 10,
        borderRadius: 10,
        width: WIDTH - 80,
    },
    Touch: {
        alignItems: "center",
        marginTop: 35,

    },
    icon: {
        width: 40,
        height: 40,
    },
    icontext: {
        fontSize: 15,
        color: "black"
    },
    Canceltext: {
        fontSize: 20,
    },
    Cancelicon:{
        width:20,
        height:20
    }
})