import React from 'react';
import { StyleSheet, View, Image, ImageBackground } from 'react-native';
import { DataTable, Text } from 'react-native-paper';
import { height, moderateScale, moderateScaleVertical, textScale } from '../utils/responsive'

const GoldScreen = () => {
    return (
        <ImageBackground style={{ flex: 1 }} source={require("../assets/background-image2.png")}>
            {/* <View>
                <Text style={{ textAlign: "center", marginTop: 80,fontSize: 40, }}>Gold Coins</Text>
                <Image source={require("../../assets/notification.png")} style={{ width: 30, height: 30 }} />
            </View> */}
            <View style={styles.flex}>
                <DataTable style={styles.container}>
                    {/* <DataTable.Header > */}
                    {/* <DataTable.Title style={styles.GoldCoinsText}>Gold Coins</DataTable.Title> */}
                    {/* </DataTable.Header> */}
                    <DataTable.Header style={styles.tableHeader}>
                        <DataTable.Title textStyle={{ fontSize: 15, color: "black" }}>Weight</DataTable.Title>
                        <DataTable.Title textStyle={{ fontSize: 15, color: "black" }}>Gold Price</DataTable.Title>
                        <DataTable.Title textStyle={{ fontSize: 15, color: "black" }}>    Making</DataTable.Title>
                        <DataTable.Title textStyle={{ fontSize: 15, color: "black" }}>   GST</DataTable.Title>
                        <DataTable.Title textStyle={{ fontSize: 15, color: "black" }}>   Net Amt.</DataTable.Title>
                    </DataTable.Header>
                    <DataTable.Row>
                        <DataTable.Cell>1 Gram</DataTable.Cell>
                        <DataTable.Cell>    5,944</DataTable.Cell>
                        <DataTable.Cell>      2%</DataTable.Cell>
                        <DataTable.Cell>      3%</DataTable.Cell>
                        <DataTable.Cell>    6240.88</DataTable.Cell>
                    </DataTable.Row>

                    <DataTable.Row>
                        <DataTable.Cell>2 Gram</DataTable.Cell>
                        <DataTable.Cell></DataTable.Cell>
                        <DataTable.Cell></DataTable.Cell>
                        <DataTable.Cell></DataTable.Cell>
                        <DataTable.Cell></DataTable.Cell>
                    </DataTable.Row>
                    <DataTable.Row>
                        <DataTable.Cell>5 Gram</DataTable.Cell>
                        <DataTable.Cell></DataTable.Cell>
                        <DataTable.Cell></DataTable.Cell>
                        <DataTable.Cell></DataTable.Cell>
                        <DataTable.Cell></DataTable.Cell>
                    </DataTable.Row>
                    <DataTable.Row>
                        <DataTable.Cell>10 Gram</DataTable.Cell>
                        <DataTable.Cell></DataTable.Cell>
                        <DataTable.Cell></DataTable.Cell>
                        <DataTable.Cell></DataTable.Cell>
                        <DataTable.Cell></DataTable.Cell>
                    </DataTable.Row>
                    <DataTable.Row>
                        <DataTable.Cell>20 Gram</DataTable.Cell>
                        <DataTable.Cell></DataTable.Cell>
                        <DataTable.Cell></DataTable.Cell>
                        <DataTable.Cell></DataTable.Cell>
                        <DataTable.Cell></DataTable.Cell>
                    </DataTable.Row>
                    <DataTable.Row>
                        <DataTable.Cell>50 Gram</DataTable.Cell>
                        <DataTable.Cell></DataTable.Cell>
                        <DataTable.Cell></DataTable.Cell>
                        <DataTable.Cell></DataTable.Cell>
                        <DataTable.Cell></DataTable.Cell>
                    </DataTable.Row>
                    <DataTable.Row>
                        <DataTable.Cell>100 Gram</DataTable.Cell>
                        <DataTable.Cell></DataTable.Cell>
                        <DataTable.Cell></DataTable.Cell>
                        <DataTable.Cell></DataTable.Cell>
                        <DataTable.Cell></DataTable.Cell>
                    </DataTable.Row>
                </DataTable>
            </View>
        </ImageBackground>
    )
}

export default GoldScreen;

const styles = StyleSheet.create({
    container: {
        padding: 15,
        fontSize: textScale(30),
    },
    tableHeader: {
        borderColor: 'black',
    },
    GoldCoinsText: {
        justifyContent: "center",
        fontSize: textScale(45),
        color: "black",
        fontWeight: "600",
    },
    flex: {
        marginTop: moderateScaleVertical(30),
        backgroundColor: "#eec06b",
        borderRadius: 20,
        width: "98%",
        alignContent: "center",
        marginLeft: moderateScale(4.5),

    }
});