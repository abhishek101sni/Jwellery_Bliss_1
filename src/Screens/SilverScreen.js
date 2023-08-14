import React from 'react';
import { StyleSheet, View, ImageBackground } from 'react-native';
import { DataTable, Text } from 'react-native-paper';
import { moderateScale, moderateScaleVertical, textScale } from '../utils/responsive';

const GoldScreen = () => {
    return (
        <ImageBackground style={{ flex: 1 }} source={require("../assets/background-image2.png")}>
            {/* <View>
                <Text style={{ textAlign: "center", marginTop: 80, fontSize: 40, }}>Silver Coins</Text>
            </View> */}
            <View style={styles.flex}>
                <DataTable style={styles.container}>
                    {/* <DataTable.Header >
                        <DataTable.Title style={styles.GoldCoinsText}>Silver Coins</DataTable.Title>
                    </DataTable.Header> */}
                    <DataTable.Header style={styles.tableHeader}>
                        <DataTable.Title textStyle={{ fontSize: 15, color: "black" }}>Weight</DataTable.Title>
                        <DataTable.Title textStyle={{ fontSize: 15, color: "black" }}>Gold Price</DataTable.Title>
                        <DataTable.Title textStyle={{ fontSize: 15, color: "black" }}>   Making</DataTable.Title>
                        <DataTable.Title textStyle={{ fontSize: 15, color: "black" }}>   GST</DataTable.Title>
                        <DataTable.Title textStyle={{ fontSize: 15, color: "black" }}>   Net Amt.</DataTable.Title>
                    </DataTable.Header>
                    <DataTable.Row>
                        <DataTable.Cell>1 Gram</DataTable.Cell>
                        <DataTable.Cell>     75.1</DataTable.Cell>
                        <DataTable.Cell>     2%</DataTable.Cell>
                        <DataTable.Cell>     3%</DataTable.Cell>
                        <DataTable.Cell>     78.852</DataTable.Cell>
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
        fontSize: 20
    },
    GoldCoinsText: {
        justifyContent: "center",
        fontSize: textScale(45),
        color: "black",
        fontWeight: "600",
    },
    flex: {
        marginTop: moderateScaleVertical(30),
        backgroundColor: "#c0c0c0",
        borderRadius: 20,
        width: "98%",
        alignContent: "center",
        marginLeft: moderateScale(4.5),
    }
});