import React from 'react';
import { StyleSheet, View, Image , ImageBackground} from 'react-native';
import { DataTable, Text } from 'react-native-paper';

const GoldScreen = () => {
    return (
        <ImageBackground style={{ flex: 1 }} source={require("../assets/background-image2.png")}>
            <View>
                <Text style={{ textAlign: "center", marginTop: 80,fontSize: 40, }}>Gold Coins</Text>
                {/* <Image source={require("../../assets/notification.png")} style={{ width: 30, height: 30 }} /> */}
            </View>
            <View style={styles.flex}>
                <DataTable style={styles.container}>
                    {/* <DataTable.Header > */}
                    {/* <DataTable.Title style={styles.GoldCoinsText}>Gold Coins</DataTable.Title> */}
                    {/* </DataTable.Header> */}
                    <DataTable.Header style={styles.tableHeader}>
                        <DataTable.Title>Weight</DataTable.Title>
                        <DataTable.Title>Gold Price</DataTable.Title>
                        <DataTable.Title>Making</DataTable.Title>
                        <DataTable.Title>GST</DataTable.Title>
                        <DataTable.Title>Net Amt.</DataTable.Title>
                    </DataTable.Header>
                    <DataTable.Row>
                        <DataTable.Cell>1 Gram</DataTable.Cell>
                        <DataTable.Cell>5,944</DataTable.Cell>
                        <DataTable.Cell>2%</DataTable.Cell>
                        <DataTable.Cell>3%</DataTable.Cell>
                        <DataTable.Cell>6240.88</DataTable.Cell>
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
        fontSize: 30,
    },
    tableHeader: {
        borderColor: 'black',
        // fontSize:20
    },
    GoldCoinsText: {
        justifyContent: "center",
        fontSize: 45,
        color: "black",
        fontWeight: "600",
    },
    flex: {
        // flex: 0.6,
        marginTop: 30,
        backgroundColor: "#eec06b",
        borderRadius: 20,
        width: "98%",
        alignContent: "center",
        marginLeft: 4.5,

    }
});