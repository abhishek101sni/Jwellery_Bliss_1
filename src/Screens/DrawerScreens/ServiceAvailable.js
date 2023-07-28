import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import { DataTable } from 'react-native-paper';
const ServiceAvailable = () => {
    return (
        <View style={{ backgroundColor: "white", flex: 1 }}>
            <ScrollView>
                {/* <View style={styles.OurServiceAlignment}>
                    <Text style={styles.OurServiceText}>OUR SERVICE AVAILABLE</Text>
                </View>
                <View style={styles.OurServiceline}></View> */}
                {/* ----------------Andhra Pradesh----------------- */}
                <View style={styles.container}>
                    <DataTable>
                        <DataTable.Header style={{ backgroundColor: "#bc9954", borderTopRightRadius: 20, borderTopLeftRadius: 20, width: 370, alignItems: "center" }} >
                            <DataTable.Title textStyle={{ fontSize: 20, color: "white", fontWeight: "bold" }} style={{ justifyContent: "center", color: "black" }} >ANDHRA PRADESH</DataTable.Title>
                        </DataTable.Header>

                        <DataTable.Row style={{ backgroundColor: "#f6f6f6" }}>
                            <DataTable.Cell textStyle={{ fontSize: 15 }} >Bhimavaram</DataTable.Cell>
                            <DataTable.Cell textStyle={{ fontSize: 15 }} style={{ marginRight: -180 }}>Bidar</DataTable.Cell>
                        </DataTable.Row>

                        <DataTable.Row style={{ backgroundColor: "#fff", justifyContent: "space-between", }} >
                            <DataTable.Cell textStyle={{ fontSize: 15 }}>Gulburga</DataTable.Cell>
                            <DataTable.Cell textStyle={{ fontSize: 15 }} style={{ marginRight: -180 }}>Guntur</DataTable.Cell>
                        </DataTable.Row>
                        <DataTable.Row style={{ backgroundColor: "#f6f6f6" }}>
                            <DataTable.Cell textStyle={{ fontSize: 15 }} >Hyderabad</DataTable.Cell>
                            <DataTable.Cell textStyle={{ fontSize: 15 }} style={{ marginRight: -180 }}>Kadapa</DataTable.Cell>
                        </DataTable.Row>

                        <DataTable.Row style={{ backgroundColor: "#fff", justifyContent: "space-between", }} >
                            <DataTable.Cell textStyle={{ fontSize: 15 }}>Kakinada</DataTable.Cell>
                            <DataTable.Cell textStyle={{ fontSize: 15 }} style={{ marginRight: -180 }}>Karim Nagar</DataTable.Cell>
                        </DataTable.Row>
                        <DataTable.Row style={{ backgroundColor: "#f6f6f6" }}>
                            <DataTable.Cell textStyle={{ fontSize: 15 }} >Khammam</DataTable.Cell>
                            <DataTable.Cell textStyle={{ fontSize: 15 }} style={{ marginRight: -180 }}>Kurnool</DataTable.Cell>
                        </DataTable.Row>

                        <DataTable.Row style={{ backgroundColor: "#fff", justifyContent: "space-between", }} >
                            <DataTable.Cell textStyle={{ fontSize: 15 }}>Manchiryal</DataTable.Cell>
                            <DataTable.Cell textStyle={{ fontSize: 15 }} style={{ marginRight: -180 }}>Nadhyal</DataTable.Cell>
                        </DataTable.Row>
                        <DataTable.Row style={{ backgroundColor: "#f6f6f6" }}>
                            <DataTable.Cell textStyle={{ fontSize: 15 }} >Nellure</DataTable.Cell>
                            <DataTable.Cell textStyle={{ fontSize: 15 }} style={{ marginRight: -180 }}>Nizamabad</DataTable.Cell>
                        </DataTable.Row>

                        <DataTable.Row style={{ backgroundColor: "#fff", justifyContent: "space-between", }} >
                            <DataTable.Cell textStyle={{ fontSize: 15 }}>Ongole</DataTable.Cell>
                            <DataTable.Cell textStyle={{ fontSize: 15 }} style={{ marginRight: -180 }}>Palasa</DataTable.Cell>
                        </DataTable.Row>
                        <DataTable.Row style={{ backgroundColor: "#f6f6f6" }}>
                            <DataTable.Cell textStyle={{ fontSize: 15 }} >Proddatur</DataTable.Cell>
                            <DataTable.Cell textStyle={{ fontSize: 15 }} style={{ marginRight: -180 }}>Rajmundry</DataTable.Cell>
                        </DataTable.Row>

                        <DataTable.Row style={{ backgroundColor: "#fff", justifyContent: "space-between", }} >
                            <DataTable.Cell textStyle={{ fontSize: 15 }}>Siddipet</DataTable.Cell>
                            <DataTable.Cell textStyle={{ fontSize: 15 }} style={{ marginRight: -180 }}>Srikakulam</DataTable.Cell>
                        </DataTable.Row>
                        <DataTable.Row style={{ backgroundColor: "#f6f6f6" }}>
                            <DataTable.Cell textStyle={{ fontSize: 15 }} >Tirupati</DataTable.Cell>
                            <DataTable.Cell textStyle={{ fontSize: 15 }} style={{ marginRight: -180 }}>Vijaywada</DataTable.Cell>
                        </DataTable.Row>

                        <DataTable.Row style={{ backgroundColor: "#fff", justifyContent: "space-between", borderBottomRightRadius: 20, borderBottomLeftRadius: 20, }} >
                            <DataTable.Cell textStyle={{ fontSize: 15 }}>Vishakhapatnam</DataTable.Cell>
                            <DataTable.Cell textStyle={{ fontSize: 15 }} style={{ marginRight: -180 }}>Warangal</DataTable.Cell>
                        </DataTable.Row>
                    </DataTable>
                    {/* ----------------Assam----------------- */}
                    <DataTable>
                        <DataTable.Header style={{ marginTop: 20, backgroundColor: "#bc9954", borderTopRightRadius: 20, borderTopLeftRadius: 20, width: 370, alignItems: "center" }} >
                            <DataTable.Title textStyle={{ fontSize: 20, color: "white", fontWeight: "bold" }} style={{ justifyContent: "center", color: "black" }} >ASSAM</DataTable.Title>
                        </DataTable.Header>
                        <DataTable.Row style={{ backgroundColor: "#f6f6f6", justifyContent: "space-between", borderBottomRightRadius: 20, borderBottomLeftRadius: 20, }} >
                            <DataTable.Cell textStyle={{ fontSize: 15 }}>Guwahati</DataTable.Cell>
                        </DataTable.Row>
                    </DataTable>
                    {/* ----------------BIHAR----------------- */}
                    <DataTable>
                        <DataTable.Header style={{ marginTop: 20, backgroundColor: "#bc9954", borderTopRightRadius: 20, borderTopLeftRadius: 20, width: 370, alignItems: "center" }} >
                            <DataTable.Title textStyle={{ fontSize: 20, color: "white" , fontWeight: "bold" }} style={{ justifyContent: "center", color: "black" }} >BIHAR</DataTable.Title>
                        </DataTable.Header>

                        <DataTable.Row style={{ backgroundColor: "#f6f6f6" }}>
                            <DataTable.Cell textStyle={{ fontSize: 15 }} >Aara</DataTable.Cell>
                            <DataTable.Cell textStyle={{ fontSize: 15 }} style={{ marginRight: -180 }}>Aurangabad</DataTable.Cell>
                        </DataTable.Row>

                        <DataTable.Row style={{ backgroundColor: "#fff", justifyContent: "space-between", }} >
                            <DataTable.Cell textStyle={{ fontSize: 15 }}>Buxer</DataTable.Cell>
                            <DataTable.Cell textStyle={{ fontSize: 15 }} style={{ marginRight: -180 }}>Bihar Sharif</DataTable.Cell>
                        </DataTable.Row>
                        <DataTable.Row style={{ backgroundColor: "#f6f6f6" }}>
                            <DataTable.Cell textStyle={{ fontSize: 15 }} >Chapra</DataTable.Cell>
                            <DataTable.Cell textStyle={{ fontSize: 15 }} style={{ marginRight: -180 }}>Darbhanga</DataTable.Cell>
                        </DataTable.Row>

                        <DataTable.Row style={{ backgroundColor: "#fff", justifyContent: "space-between", }} >
                            <DataTable.Cell textStyle={{ fontSize: 15 }}>Dehri</DataTable.Cell>
                            <DataTable.Cell textStyle={{ fontSize: 15 }} style={{ marginRight: -180 }}>Gaya</DataTable.Cell>
                        </DataTable.Row>
                        <DataTable.Row style={{ backgroundColor: "#f6f6f6" }}>
                            <DataTable.Cell textStyle={{ fontSize: 15 }} >Muzaffarpur</DataTable.Cell>
                            <DataTable.Cell textStyle={{ fontSize: 15 }} style={{ marginRight: -180 }}>Motihari</DataTable.Cell>
                        </DataTable.Row>

                        <DataTable.Row style={{ backgroundColor: "#fff", justifyContent: "space-between", borderBottomRightRadius: 20, borderBottomLeftRadius: 20, }} >
                            <DataTable.Cell textStyle={{ fontSize: 15 }}>Patna</DataTable.Cell>
                            <DataTable.Cell textStyle={{ fontSize: 15 }} style={{ marginRight: -180 }}>Siwan</DataTable.Cell>
                        </DataTable.Row>
                    </DataTable>
                    {/* ----------------Chattisgarh----------------- */}
                    <DataTable>
                        <DataTable.Header style={{ marginTop: 20, backgroundColor: "#bc9954", borderTopRightRadius: 20, borderTopLeftRadius: 20, width: 370, alignItems: "center" }} >
                            <DataTable.Title textStyle={{ fontSize: 20, color: "white", fontWeight: "bold" }} style={{ justifyContent: "center", color: "black" }} >CHATTISGARH</DataTable.Title>
                        </DataTable.Header>

                        <DataTable.Row style={{ backgroundColor: "#f6f6f6" }}>
                            <DataTable.Cell textStyle={{ fontSize: 15 }} >Bhilai</DataTable.Cell>
                            <DataTable.Cell textStyle={{ fontSize: 15 }} style={{ marginRight: -180 }}>Bilaspur</DataTable.Cell>
                        </DataTable.Row>

                        <DataTable.Row style={{ backgroundColor: "#fff", justifyContent: "space-between", }} >
                            <DataTable.Cell textStyle={{ fontSize: 15 }}>Durg</DataTable.Cell>
                            <DataTable.Cell textStyle={{ fontSize: 15 }} style={{ marginRight: -180 }}>Korba</DataTable.Cell>
                        </DataTable.Row>
                        <DataTable.Row style={{ backgroundColor: "#f6f6f6", borderBottomRightRadius: 20, borderBottomLeftRadius: 20, }}>
                            <DataTable.Cell textStyle={{ fontSize: 15 }} >Rajnandgaon</DataTable.Cell>
                            <DataTable.Cell textStyle={{ fontSize: 15 }} style={{ marginRight: -180 }}>Raipur</DataTable.Cell>
                        </DataTable.Row>
                    </DataTable>
                    {/* ----------------Delhi----------------- */}
                    <DataTable>
                        <DataTable.Header style={{ marginTop: 20, backgroundColor: "#bc9954", borderTopRightRadius: 20, borderTopLeftRadius: 20, width: 370, alignItems: "center" }} >
                            <DataTable.Title textStyle={{ fontSize: 20, color: "white", fontWeight: "bold" }} style={{ justifyContent: "center", color: "black" }} >DELHI</DataTable.Title>
                        </DataTable.Header>

                        <DataTable.Row style={{ backgroundColor: "#f6f6f6", borderBottomRightRadius: 20, borderBottomLeftRadius: 20, }}>
                            <DataTable.Cell textStyle={{ fontSize: 15 }} >Delhi-NCR</DataTable.Cell>
                        </DataTable.Row>
                    </DataTable>
                    {/* ----------------Goa----------------- */}
                    <DataTable>
                        <DataTable.Header style={{ marginTop: 20, backgroundColor: "#bc9954", borderTopRightRadius: 20, borderTopLeftRadius: 20, width: 370, alignItems: "center" }} >
                            <DataTable.Title textStyle={{ fontSize: 20, color: "white", fontWeight: "bold" }} style={{ justifyContent: "center", color: "black" }} >GOA</DataTable.Title>
                        </DataTable.Header>

                        <DataTable.Row style={{ backgroundColor: "#f6f6f6", borderBottomRightRadius: 20, borderBottomLeftRadius: 20, }}>
                            <DataTable.Cell textStyle={{ fontSize: 15 }} >Panji</DataTable.Cell>
                            <DataTable.Cell textStyle={{ fontSize: 15 }} style={{ marginRight: -180 }}>Margao</DataTable.Cell>
                        </DataTable.Row>
                    </DataTable>
                    {/* ----------------Gujarat----------------- */}
                    <DataTable>
                        <DataTable.Header style={{ marginTop: 20, backgroundColor: "#bc9954", borderTopRightRadius: 20, borderTopLeftRadius: 20, width: 370, alignItems: "center" }} >
                            <DataTable.Title textStyle={{ fontSize: 20, color: "white", fontWeight: "bold" }} style={{ justifyContent: "center", color: "black" }} >GUJARAT</DataTable.Title>
                        </DataTable.Header>

                        <DataTable.Row style={{ backgroundColor: "#f6f6f6" }}>
                            <DataTable.Cell textStyle={{ fontSize: 15 }} >Ahmedabad</DataTable.Cell>
                            <DataTable.Cell textStyle={{ fontSize: 15 }} style={{ marginRight: -180 }}>Anand</DataTable.Cell>
                        </DataTable.Row>

                        <DataTable.Row style={{ backgroundColor: "#fff", justifyContent: "space-between", }} >
                            <DataTable.Cell textStyle={{ fontSize: 15 }}>Anjar</DataTable.Cell>
                            <DataTable.Cell textStyle={{ fontSize: 15 }} style={{ marginRight: -180 }}>Baroda</DataTable.Cell>
                        </DataTable.Row>
                        <DataTable.Row style={{ backgroundColor: "#f6f6f6" }}>
                            <DataTable.Cell textStyle={{ fontSize: 15 }} >Bhavnagar</DataTable.Cell>
                            <DataTable.Cell textStyle={{ fontSize: 15 }} style={{ marginRight: -180 }}>Bhuj</DataTable.Cell>
                        </DataTable.Row>

                        <DataTable.Row style={{ backgroundColor: "#fff", justifyContent: "space-between", }} >
                            <DataTable.Cell textStyle={{ fontSize: 15 }}>Billimora</DataTable.Cell>
                            <DataTable.Cell textStyle={{ fontSize: 15 }} style={{ marginRight: -180 }}>Gandhidham</DataTable.Cell>
                        </DataTable.Row>
                        <DataTable.Row style={{ backgroundColor: "#f6f6f6" }}>
                            <DataTable.Cell textStyle={{ fontSize: 15 }} >Jamnagar</DataTable.Cell>
                            <DataTable.Cell textStyle={{ fontSize: 15 }} style={{ marginRight: -180 }}>Jungarh</DataTable.Cell>
                        </DataTable.Row>

                        <DataTable.Row style={{ backgroundColor: "#fff", justifyContent: "space-between", borderBottomRightRadius: 20, borderBottomLeftRadius: 20, }} >
                            <DataTable.Cell textStyle={{ fontSize: 15 }}>Rajkot</DataTable.Cell>
                            <DataTable.Cell textStyle={{ fontSize: 15 }} style={{ marginRight: -180 }}>Surat</DataTable.Cell>
                        </DataTable.Row>
                        <DataTable.Row style={{ backgroundColor: "#f6f6f6" }}>
                            <DataTable.Cell textStyle={{ fontSize: 15 }} >Navsari</DataTable.Cell>
                            <DataTable.Cell textStyle={{ fontSize: 15 }} style={{ marginRight: -180 }}>Valsad</DataTable.Cell>
                        </DataTable.Row>
                        <DataTable.Row style={{ backgroundColor: "#fff", justifyContent: "space-between", borderBottomRightRadius: 20, borderBottomLeftRadius: 20, }} >
                            <DataTable.Cell textStyle={{ fontSize: 15 }}>Wapi</DataTable.Cell>
                        </DataTable.Row>
                    </DataTable>
                    {/* ----------------Haryana----------------- */}
                    <DataTable>
                        <DataTable.Header style={{ marginTop: 20, backgroundColor: "#bc9954", borderTopRightRadius: 20, borderTopLeftRadius: 20, width: 370, alignItems: "center" }} >
                            <DataTable.Title textStyle={{ fontSize: 20, color: "white", fontWeight: "bold" }} style={{ justifyContent: "center", color: "black" }} >HARYANA</DataTable.Title>
                        </DataTable.Header>

                        <DataTable.Row style={{ backgroundColor: "#f6f6f6" }}>
                            <DataTable.Cell textStyle={{ fontSize: 15 }} >Bahadurgah</DataTable.Cell>
                            <DataTable.Cell textStyle={{ fontSize: 15 }} style={{ marginRight: -180 }}>Ballabhgarh</DataTable.Cell>
                        </DataTable.Row>

                        <DataTable.Row style={{ backgroundColor: "#fff", justifyContent: "space-between", }} >
                            <DataTable.Cell textStyle={{ fontSize: 15 }}>Bhiwani</DataTable.Cell>
                            <DataTable.Cell textStyle={{ fontSize: 15 }} style={{ marginRight: -180 }}>Faridabad</DataTable.Cell>
                        </DataTable.Row>
                        <DataTable.Row style={{ backgroundColor: "#f6f6f6" }}>
                            <DataTable.Cell textStyle={{ fontSize: 15 }} >Fatehabad</DataTable.Cell>
                            <DataTable.Cell textStyle={{ fontSize: 15 }} style={{ marginRight: -180 }}>Hasi</DataTable.Cell>
                        </DataTable.Row>

                        <DataTable.Row style={{ backgroundColor: "#fff", justifyContent: "space-between", }} >
                            <DataTable.Cell textStyle={{ fontSize: 15 }}>Hisar</DataTable.Cell>
                            <DataTable.Cell textStyle={{ fontSize: 15 }} style={{ marginRight: -180 }}>Karnal</DataTable.Cell>
                        </DataTable.Row>
                        <DataTable.Row style={{ backgroundColor: "#f6f6f6" }}>
                            <DataTable.Cell textStyle={{ fontSize: 15 }} >Kurukshetra</DataTable.Cell>
                            <DataTable.Cell textStyle={{ fontSize: 15 }} style={{ marginRight: -180 }}>Mewat</DataTable.Cell>
                        </DataTable.Row>

                        <DataTable.Row style={{ backgroundColor: "#fff", justifyContent: "space-between", borderBottomRightRadius: 20, borderBottomLeftRadius: 20, }} >
                            <DataTable.Cell textStyle={{ fontSize: 15 }}>Panipat</DataTable.Cell>
                            <DataTable.Cell textStyle={{ fontSize: 15 }} style={{ marginRight: -180 }}>Rohtak</DataTable.Cell>
                        </DataTable.Row>
                        <DataTable.Row style={{ backgroundColor: "#f6f6f6", borderBottomRightRadius: 20, borderBottomLeftRadius: 20 }}>
                            <DataTable.Cell textStyle={{ fontSize: 15 }} >Sonipat</DataTable.Cell>
                        </DataTable.Row>
                    </DataTable>
                    {/* ----------------Himachal Pradesh----------------- */}
                    <DataTable>
                        <DataTable.Header style={{ marginTop: 20, backgroundColor: "#bc9954", borderTopRightRadius: 20, borderTopLeftRadius: 20, width: 370, alignItems: "center" }} >
                            <DataTable.Title textStyle={{ fontSize: 20, color: "white", fontWeight: "bold" }} style={{ justifyContent: "center", color: "black" }} >HIMACHAL PRADESH</DataTable.Title>
                        </DataTable.Header>

                        <DataTable.Row style={{ backgroundColor: "#f6f6f6", borderBottomRightRadius: 20, borderBottomLeftRadius: 20 }}>
                            <DataTable.Cell textStyle={{ fontSize: 15 }} >Baddi</DataTable.Cell>
                            <DataTable.Cell textStyle={{ fontSize: 15 }} style={{ marginRight: -180 }}>Parwanoo</DataTable.Cell>
                        </DataTable.Row>
                    </DataTable>
                    {/* ----------------Jammu----------------- */}
                    <DataTable>
                        <DataTable.Header style={{ marginTop: 20, backgroundColor: "#bc9954", borderTopRightRadius: 20, borderTopLeftRadius: 20, width: 370, alignItems: "center" }} >
                            <DataTable.Title textStyle={{ fontSize: 20, color: "white", fontWeight: "bold" }} style={{ justifyContent: "center", color: "black" }} >JAMMU</DataTable.Title>
                        </DataTable.Header>

                        <DataTable.Row style={{ backgroundColor: "#f6f6f6", borderBottomRightRadius: 20, borderBottomLeftRadius: 20 }}>
                            <DataTable.Cell textStyle={{ fontSize: 15 }} >Jammu</DataTable.Cell>
                        </DataTable.Row>
                    </DataTable>
                    {/* ----------------Kashmir----------------- */}
                    <DataTable>
                        <DataTable.Header style={{ marginTop: 20, backgroundColor: "#bc9954", borderTopRightRadius: 20, borderTopLeftRadius: 20, width: 370, alignItems: "center" }} >
                            <DataTable.Title textStyle={{ fontSize: 20, color: "white", fontWeight: "bold" }} style={{ justifyContent: "center", color: "black" }} >KASHMIR</DataTable.Title>
                        </DataTable.Header>

                        <DataTable.Row style={{ backgroundColor: "#f6f6f6", borderBottomRightRadius: 20, borderBottomLeftRadius: 20 }}>
                            <DataTable.Cell textStyle={{ fontSize: 15 }} >Kashmir</DataTable.Cell>
                        </DataTable.Row>
                    </DataTable>
                    {/* ----------------JHARKHAND----------------- */}
                    <DataTable>
                        <DataTable.Header style={{ marginTop: 20, backgroundColor: "#bc9954", borderTopRightRadius: 20, borderTopLeftRadius: 20, width: 370, alignItems: "center" }} >
                            <DataTable.Title textStyle={{ fontSize: 20, color: "white", fontWeight: "bold" }} style={{ justifyContent: "center", color: "black" }} >JHARKHAND</DataTable.Title>
                        </DataTable.Header>

                        <DataTable.Row style={{ backgroundColor: "#f6f6f6" }}>
                            <DataTable.Cell textStyle={{ fontSize: 15 }} >Bokaro</DataTable.Cell>
                            <DataTable.Cell textStyle={{ fontSize: 15 }} style={{ marginRight: -180 }}>Daltonganj</DataTable.Cell>
                        </DataTable.Row>

                        <DataTable.Row style={{ backgroundColor: "#fff", justifyContent: "space-between", }} >
                            <DataTable.Cell textStyle={{ fontSize: 15 }}>Deoghar</DataTable.Cell>
                            <DataTable.Cell textStyle={{ fontSize: 15 }} style={{ marginRight: -180 }}>Dhanbad</DataTable.Cell>
                        </DataTable.Row>
                        <DataTable.Row style={{ backgroundColor: "#f6f6f6" }}>
                            <DataTable.Cell textStyle={{ fontSize: 15 }} >Giridih</DataTable.Cell>
                            <DataTable.Cell textStyle={{ fontSize: 15 }} style={{ marginRight: -180 }}>Hazaribagh</DataTable.Cell>
                        </DataTable.Row>
                        <DataTable.Row style={{ backgroundColor: "#fff", justifyContent: "space-between", }} >
                            <DataTable.Cell textStyle={{ fontSize: 15 }}>Jamshedpur</DataTable.Cell>
                            <DataTable.Cell textStyle={{ fontSize: 15 }} style={{ marginRight: -180 }}>Ranchi</DataTable.Cell>
                        </DataTable.Row>
                        <DataTable.Row style={{ backgroundColor: "#f6f6f6", borderBottomRightRadius: 20, borderBottomLeftRadius: 20 }}>
                            <DataTable.Cell textStyle={{ fontSize: 15 }} >Rourkela</DataTable.Cell>
                        </DataTable.Row>
                    </DataTable>
                    {/* ----------------Karnataka----------------- */}
                    <DataTable>
                        <DataTable.Header style={{ marginTop: 20, backgroundColor: "#bc9954", borderTopRightRadius: 20, borderTopLeftRadius: 20, width: 370, alignItems: "center" }} >
                            <DataTable.Title textStyle={{ fontSize: 20, color: "white", fontWeight: "bold" }} style={{ justifyContent: "center", color: "black" }} >JHARKHAND</DataTable.Title>
                        </DataTable.Header>

                        <DataTable.Row style={{ backgroundColor: "#f6f6f6" }}>
                            <DataTable.Cell textStyle={{ fontSize: 15 }} >Bokaro</DataTable.Cell>
                            <DataTable.Cell textStyle={{ fontSize: 15 }} style={{ marginRight: -180 }}>Daltonganj</DataTable.Cell>
                        </DataTable.Row>

                        <DataTable.Row style={{ backgroundColor: "#fff", justifyContent: "space-between", }} >
                            <DataTable.Cell textStyle={{ fontSize: 15 }}>Deoghar</DataTable.Cell>
                            <DataTable.Cell textStyle={{ fontSize: 15 }} style={{ marginRight: -180 }}>Dhanbad</DataTable.Cell>
                        </DataTable.Row>
                        <DataTable.Row style={{ backgroundColor: "#f6f6f6" }}>
                            <DataTable.Cell textStyle={{ fontSize: 15 }} >Giridih</DataTable.Cell>
                            <DataTable.Cell textStyle={{ fontSize: 15 }} style={{ marginRight: -180 }}>Hazaribagh</DataTable.Cell>
                        </DataTable.Row>
                        <DataTable.Row style={{ backgroundColor: "#fff", justifyContent: "space-between", }} >
                            <DataTable.Cell textStyle={{ fontSize: 15 }}>Jamshedpur</DataTable.Cell>
                            <DataTable.Cell textStyle={{ fontSize: 15 }} style={{ marginRight: -180 }}>Ranchi</DataTable.Cell>
                        </DataTable.Row>
                        <DataTable.Row style={{ backgroundColor: "#f6f6f6", borderBottomRightRadius: 20, borderBottomLeftRadius: 20 }}>
                            <DataTable.Cell textStyle={{ fontSize: 15 }} >Rourkela</DataTable.Cell>
                        </DataTable.Row>
                    </DataTable>
                    {/* ----------------Karnataka----------------- */}
                    <DataTable>
                        <DataTable.Header style={{ marginTop: 20, backgroundColor: "#bc9954", borderTopRightRadius: 20, borderTopLeftRadius: 20, width: 370, alignItems: "center" }} >
                            <DataTable.Title textStyle={{ fontSize: 20, color: "white", fontWeight: "bold" }} style={{ justifyContent: "center", color: "black" }} >KARNATKA</DataTable.Title>
                        </DataTable.Header>

                        <DataTable.Row style={{ backgroundColor: "#f6f6f6" }}>
                            <DataTable.Cell textStyle={{ fontSize: 15 }} >Anantpuram</DataTable.Cell>
                            <DataTable.Cell textStyle={{ fontSize: 15 }} style={{ marginRight: -180 }}>Asan</DataTable.Cell>
                        </DataTable.Row>

                        <DataTable.Row style={{ backgroundColor: "#fff", justifyContent: "space-between", }} >
                            <DataTable.Cell textStyle={{ fontSize: 15 }}>Balgam</DataTable.Cell>
                            <DataTable.Cell textStyle={{ fontSize: 15 }} style={{ marginRight: -180 }}>Bellari</DataTable.Cell>
                        </DataTable.Row>
                        <DataTable.Row style={{ backgroundColor: "#f6f6f6" }}>
                            <DataTable.Cell textStyle={{ fontSize: 15 }} >Bengaluru</DataTable.Cell>
                            <DataTable.Cell textStyle={{ fontSize: 15 }} style={{ marginRight: -180 }}>Bijapur</DataTable.Cell>
                        </DataTable.Row>
                        <DataTable.Row style={{ backgroundColor: "#fff", justifyContent: "space-between", }} >
                            <DataTable.Cell textStyle={{ fontSize: 15 }}>Chikmanglore</DataTable.Cell>
                            <DataTable.Cell textStyle={{ fontSize: 15 }} style={{ marginRight: -180 }}>Dharwad</DataTable.Cell>
                        </DataTable.Row>
                        <DataTable.Row style={{ backgroundColor: "#f6f6f6" }}>
                            <DataTable.Cell textStyle={{ fontSize: 15 }} >Hubli</DataTable.Cell>
                            <DataTable.Cell textStyle={{ fontSize: 15 }} style={{ marginRight: -180 }}>Mandya</DataTable.Cell>
                        </DataTable.Row>
                        <DataTable.Row style={{ backgroundColor: "#fff", justifyContent: "space-between", }} >
                            <DataTable.Cell textStyle={{ fontSize: 15 }}>Manglore</DataTable.Cell>
                            <DataTable.Cell textStyle={{ fontSize: 15 }} style={{ marginRight: -180 }}>Mdanpalli</DataTable.Cell>
                        </DataTable.Row>
                        <DataTable.Row style={{ backgroundColor: "#f6f6f6" }}>
                            <DataTable.Cell textStyle={{ fontSize: 15 }} >Mysore</DataTable.Cell>
                            <DataTable.Cell textStyle={{ fontSize: 15 }} style={{ marginRight: -180 }}>Puttur</DataTable.Cell>
                        </DataTable.Row>
                        <DataTable.Row style={{ backgroundColor: "#fff", justifyContent: "space-between", }} >
                            <DataTable.Cell textStyle={{ fontSize: 15 }}>Shivmoga</DataTable.Cell>
                            <DataTable.Cell textStyle={{ fontSize: 15 }} style={{ marginRight: -180 }}>Tumkur</DataTable.Cell>
                        </DataTable.Row>
                        <DataTable.Row style={{ backgroundColor: "#f6f6f6", borderBottomRightRadius: 20, borderBottomLeftRadius: 20 }}>
                            <DataTable.Cell textStyle={{ fontSize: 15 }} >Udupi</DataTable.Cell>
                        </DataTable.Row>
                    </DataTable>
                    {/* ----------------KERALA----------------- */}
                    <DataTable>
                        <DataTable.Header style={{ marginTop: 20, backgroundColor: "#bc9954", borderTopRightRadius: 20, borderTopLeftRadius: 20, width: 370, alignItems: "center" }} >
                            <DataTable.Title textStyle={{ fontSize: 20, color: "white", fontWeight: "bold" }} style={{ justifyContent: "center", color: "black" }} >KERALA</DataTable.Title>
                        </DataTable.Header>

                        <DataTable.Row style={{ backgroundColor: "#f6f6f6" }}>
                            <DataTable.Cell textStyle={{ fontSize: 15 }} >Adoor</DataTable.Cell>
                            <DataTable.Cell textStyle={{ fontSize: 15 }} style={{ marginRight: -180 }}>Alappuzha</DataTable.Cell>
                        </DataTable.Row>

                        <DataTable.Row style={{ backgroundColor: "#fff", justifyContent: "space-between", }} >
                            <DataTable.Cell textStyle={{ fontSize: 15 }}>Ernakulam</DataTable.Cell>
                            <DataTable.Cell textStyle={{ fontSize: 15 }} style={{ marginRight: -180 }}>Idukki</DataTable.Cell>
                        </DataTable.Row>
                        <DataTable.Row style={{ backgroundColor: "#f6f6f6" }}>
                            <DataTable.Cell textStyle={{ fontSize: 15 }} >Kannur</DataTable.Cell>
                            <DataTable.Cell textStyle={{ fontSize: 15 }} style={{ marginRight: -180 }}>Karunagappally</DataTable.Cell>
                        </DataTable.Row>
                        <DataTable.Row style={{ backgroundColor: "#fff", justifyContent: "space-between", }} >
                            <DataTable.Cell textStyle={{ fontSize: 15 }}>Kasaragod</DataTable.Cell>
                            <DataTable.Cell textStyle={{ fontSize: 15 }} style={{ marginRight: -180 }}>Kayamkulam</DataTable.Cell>
                        </DataTable.Row>
                        <DataTable.Row style={{ backgroundColor: "#f6f6f6" }}>
                            <DataTable.Cell textStyle={{ fontSize: 15 }} >Kochi</DataTable.Cell>
                            <DataTable.Cell textStyle={{ fontSize: 15 }} style={{ marginRight: -180 }}>Kollam</DataTable.Cell>
                        </DataTable.Row>
                        <DataTable.Row style={{ backgroundColor: "#fff", justifyContent: "space-between", }} >
                            <DataTable.Cell textStyle={{ fontSize: 15 }}>Kottayam</DataTable.Cell>
                            <DataTable.Cell textStyle={{ fontSize: 15 }} style={{ marginRight: -180 }}>Kozhikode</DataTable.Cell>
                        </DataTable.Row>
                        <DataTable.Row style={{ backgroundColor: "#f6f6f6" }}>
                            <DataTable.Cell textStyle={{ fontSize: 15 }} >Malappuram</DataTable.Cell>
                            <DataTable.Cell textStyle={{ fontSize: 15 }} style={{ marginRight: -180 }}>Palakkad</DataTable.Cell>
                        </DataTable.Row>
                        <DataTable.Row style={{ backgroundColor: "#fff", justifyContent: "space-between", }} >
                            <DataTable.Cell textStyle={{ fontSize: 15 }}>Pathanamthitta</DataTable.Cell>
                            <DataTable.Cell textStyle={{ fontSize: 15 }} style={{ marginRight: -180 }}>Thalayolaparambu</DataTable.Cell>
                        </DataTable.Row>
                        <DataTable.Row style={{ backgroundColor: "#f6f6f6" }}>
                            <DataTable.Cell textStyle={{ fontSize: 15 }} >Thiruvalla</DataTable.Cell>
                            <DataTable.Cell textStyle={{ fontSize: 15 }} style={{ marginRight: -180 }}>Thiruvananthapuram</DataTable.Cell>
                        </DataTable.Row>
                        <DataTable.Row style={{ backgroundColor: "#fff", justifyContent: "space-between", }} >
                            <DataTable.Cell textStyle={{ fontSize: 15 }}>Thrissur</DataTable.Cell>
                            <DataTable.Cell textStyle={{ fontSize: 15 }} style={{ marginRight: -180 }}>Thodupuzha</DataTable.Cell>
                        </DataTable.Row>
                        <DataTable.Row style={{ backgroundColor: "#f6f6f6", borderBottomRightRadius: 20, borderBottomLeftRadius: 20 }}>
                            <DataTable.Cell textStyle={{ fontSize: 15 }} >Trivandrum</DataTable.Cell>
                            <DataTable.Cell textStyle={{ fontSize: 15 }} style={{ marginRight: -180 }}>Wayanadu</DataTable.Cell>
                        </DataTable.Row>
                    </DataTable>
                    {/* ----------------MADHYA PRADESH----------------- */}

                    <DataTable>
                        <DataTable.Header style={{ marginTop: 20, backgroundColor: "#bc9954", borderTopRightRadius: 20, borderTopLeftRadius: 20, width: 370, alignItems: "center" }} >
                            <DataTable.Title textStyle={{ fontSize: 20, color: "white", fontWeight: "bold" }} style={{ justifyContent: "center", color: "black" }} >MADHYA PRADESH</DataTable.Title>
                        </DataTable.Header>

                        <DataTable.Row style={{ backgroundColor: "#f6f6f6" }}>
                            <DataTable.Cell textStyle={{ fontSize: 15 }} >Bhopal</DataTable.Cell>
                            <DataTable.Cell textStyle={{ fontSize: 15 }} style={{ marginRight: -180 }}>Dewas</DataTable.Cell>
                        </DataTable.Row>

                        <DataTable.Row style={{ backgroundColor: "#fff", justifyContent: "space-between", }} >
                            <DataTable.Cell textStyle={{ fontSize: 15 }}>Indore</DataTable.Cell>
                            <DataTable.Cell textStyle={{ fontSize: 15 }} style={{ marginRight: -180 }}>Itarsi</DataTable.Cell>
                        </DataTable.Row>
                        <DataTable.Row style={{ backgroundColor: "#f6f6f6" }}>
                            <DataTable.Cell textStyle={{ fontSize: 15 }} >Jabalpur</DataTable.Cell>
                            <DataTable.Cell textStyle={{ fontSize: 15 }} style={{ marginRight: -180 }}>Ratlam</DataTable.Cell>
                        </DataTable.Row>
                        <DataTable.Row style={{ backgroundColor: "#fff", justifyContent: "space-between", borderBottomRightRadius: 20, borderBottomLeftRadius: 20 }} >
                            <DataTable.Cell textStyle={{ fontSize: 15 }}>Rewa</DataTable.Cell>
                            <DataTable.Cell textStyle={{ fontSize: 15 }} style={{ marginRight: -180 }}>Ujjain</DataTable.Cell>
                        </DataTable.Row>
                    </DataTable>
                    {/* ----------------MAHARASHTRA----------------- */}
                    <DataTable>
                        <DataTable.Header style={{ marginTop: 20, backgroundColor: "#bc9954", borderTopRightRadius: 20, borderTopLeftRadius: 20, width: 370, alignItems: "center" }} >
                            <DataTable.Title textStyle={{ fontSize: 20, color: "white", fontWeight: "bold" }} style={{ justifyContent: "center", color: "black" }} >MAHARASHTRA</DataTable.Title>
                        </DataTable.Header>

                        <DataTable.Row style={{ backgroundColor: "#f6f6f6" }}>
                            <DataTable.Cell textStyle={{ fontSize: 15 }} >Amaravati</DataTable.Cell>
                            <DataTable.Cell textStyle={{ fontSize: 15 }} style={{ marginRight: -180 }}>Aurangabad</DataTable.Cell>
                        </DataTable.Row>

                        <DataTable.Row style={{ backgroundColor: "#fff", justifyContent: "space-between", }} >
                            <DataTable.Cell textStyle={{ fontSize: 15 }}>Baramati</DataTable.Cell>
                            <DataTable.Cell textStyle={{ fontSize: 15 }} style={{ marginRight: -180 }}>Bhayander</DataTable.Cell>
                        </DataTable.Row>
                        <DataTable.Row style={{ backgroundColor: "#f6f6f6" }}>
                            <DataTable.Cell textStyle={{ fontSize: 15 }} >Chandrapur</DataTable.Cell>
                            <DataTable.Cell textStyle={{ fontSize: 15 }} style={{ marginRight: -180 }}>Chhindwara</DataTable.Cell>
                        </DataTable.Row>
                        <DataTable.Row style={{ backgroundColor: "#f6f6f6" }}>
                            <DataTable.Cell textStyle={{ fontSize: 15 }} >Dahisar</DataTable.Cell>
                            <DataTable.Cell textStyle={{ fontSize: 15 }} style={{ marginRight: -180 }}>Hupari</DataTable.Cell>
                        </DataTable.Row>

                        <DataTable.Row style={{ backgroundColor: "#fff", justifyContent: "space-between", }} >
                            <DataTable.Cell textStyle={{ fontSize: 15 }}>Jalgaon</DataTable.Cell>
                            <DataTable.Cell textStyle={{ fontSize: 15 }} style={{ marginRight: -180 }}>Karad</DataTable.Cell>
                        </DataTable.Row>
                        <DataTable.Row style={{ backgroundColor: "#f6f6f6" }}>
                            <DataTable.Cell textStyle={{ fontSize: 15 }} >Kankavali</DataTable.Cell>
                            <DataTable.Cell textStyle={{ fontSize: 15 }} style={{ marginRight: -180 }}>Kolhapur</DataTable.Cell>
                        </DataTable.Row>

                        <DataTable.Row style={{ backgroundColor: "#fff", justifyContent: "space-between", }} >
                            <DataTable.Cell textStyle={{ fontSize: 15 }}>Mumbai Metropolitan</DataTable.Cell>
                            <DataTable.Cell textStyle={{ fontSize: 15 }} style={{ marginRight: -180 }}>Nagpur</DataTable.Cell>
                        </DataTable.Row>
                        <DataTable.Row style={{ backgroundColor: "#f6f6f6" }}>
                            <DataTable.Cell textStyle={{ fontSize: 15 }} >Nanded</DataTable.Cell>
                            <DataTable.Cell textStyle={{ fontSize: 15 }} style={{ marginRight: -180 }}>Nashik</DataTable.Cell>
                        </DataTable.Row>

                        <DataTable.Row style={{ backgroundColor: "#fff", justifyContent: "space-between", }} >
                            <DataTable.Cell textStyle={{ fontSize: 15 }}>Pune</DataTable.Cell>
                            <DataTable.Cell textStyle={{ fontSize: 15 }} style={{ marginRight: -180 }}>Ratnagiri</DataTable.Cell>
                        </DataTable.Row>
                        <DataTable.Row style={{ backgroundColor: "#f6f6f6" }}>
                            <DataTable.Cell textStyle={{ fontSize: 15 }} >Sangli</DataTable.Cell>
                            <DataTable.Cell textStyle={{ fontSize: 15 }} style={{ marginRight: -180 }}>Satara</DataTable.Cell>
                        </DataTable.Row>

                        <DataTable.Row style={{ backgroundColor: "#fff", justifyContent: "space-between", borderBottomRightRadius: 20, borderBottomLeftRadius: 20 }} >
                            <DataTable.Cell textStyle={{ fontSize: 15 }}>Thane</DataTable.Cell>
                            <DataTable.Cell textStyle={{ fontSize: 15 }} style={{ marginRight: -180 }}>Vashi</DataTable.Cell>
                        </DataTable.Row>
                    </DataTable>
                    {/* ----------------ODISHA----------------- */}
                    <DataTable>
                        <DataTable.Header style={{ marginTop: 20, backgroundColor: "#bc9954", borderTopRightRadius: 20, borderTopLeftRadius: 20, width: 370, alignItems: "center" }} >
                            <DataTable.Title textStyle={{ fontSize: 20, color: "white", fontWeight: "bold" }} style={{ justifyContent: "center", color: "black" }} >ODISHA</DataTable.Title>
                        </DataTable.Header>

                        <DataTable.Row style={{ backgroundColor: "#f6f6f6" }}>
                            <DataTable.Cell textStyle={{ fontSize: 15 }} >Bhubaneswar</DataTable.Cell>
                            <DataTable.Cell textStyle={{ fontSize: 15 }} style={{ marginRight: -180 }}>Bharampur</DataTable.Cell>
                        </DataTable.Row>

                        <DataTable.Row style={{ backgroundColor: "#fff", justifyContent: "space-between", borderBottomRightRadius: 20, borderBottomLeftRadius: 20 }} >
                            <DataTable.Cell textStyle={{ fontSize: 15 }}>Cuttak</DataTable.Cell>
                        </DataTable.Row>
                    </DataTable>
                    {/* ----------------PUNJAB----------------- */}
                    <DataTable>
                        <DataTable.Header style={{ marginTop: 20, backgroundColor: "#bc9954", borderTopRightRadius: 20, borderTopLeftRadius: 20, width: 370, alignItems: "center" }} >
                            <DataTable.Title textStyle={{ fontSize: 20, color: "white", fontWeight: "bold" }} style={{ justifyContent: "center", color: "black" }} >PUNJAB</DataTable.Title>
                        </DataTable.Header>

                        <DataTable.Row style={{ backgroundColor: "#f6f6f6" }}>
                            <DataTable.Cell textStyle={{ fontSize: 15 }} >Abohar</DataTable.Cell>
                            <DataTable.Cell textStyle={{ fontSize: 15 }} style={{ marginRight: -180 }}>Bhatinda</DataTable.Cell>
                        </DataTable.Row>

                        <DataTable.Row style={{ backgroundColor: "#fff", justifyContent: "space-between", }} >
                            <DataTable.Cell textStyle={{ fontSize: 15 }}>Chandigarh</DataTable.Cell>
                            <DataTable.Cell textStyle={{ fontSize: 15 }} style={{ marginRight: -180 }}>Firozpur</DataTable.Cell>
                        </DataTable.Row>
                        <DataTable.Row style={{ backgroundColor: "#f6f6f6" }}>
                            <DataTable.Cell textStyle={{ fontSize: 15 }} >Ganga Nagar</DataTable.Cell>
                            <DataTable.Cell textStyle={{ fontSize: 15 }} style={{ marginRight: -180 }}>Jagraon</DataTable.Cell>
                        </DataTable.Row>

                        <DataTable.Row style={{ backgroundColor: "#fff", justifyContent: "space-between", }} >
                            <DataTable.Cell textStyle={{ fontSize: 15 }}>Jalandhar</DataTable.Cell>
                            <DataTable.Cell textStyle={{ fontSize: 15 }} style={{ marginRight: -180 }}>Nagpur</DataTable.Cell>
                        </DataTable.Row>
                        <DataTable.Row style={{ backgroundColor: "#f6f6f6" }}>
                            <DataTable.Cell textStyle={{ fontSize: 15 }} >Ludhiana</DataTable.Cell>
                            <DataTable.Cell textStyle={{ fontSize: 15 }} style={{ marginRight: -180 }}>Muktsar</DataTable.Cell>
                        </DataTable.Row>

                        <DataTable.Row style={{ backgroundColor: "#fff", justifyContent: "space-between", }} >
                            <DataTable.Cell textStyle={{ fontSize: 15 }}>Nawashahar</DataTable.Cell>
                            <DataTable.Cell textStyle={{ fontSize: 15 }} style={{ marginRight: -180 }}>Pathankot</DataTable.Cell>
                        </DataTable.Row>

                        <DataTable.Row style={{ backgroundColor: "#fff", justifyContent: "space-between", borderBottomRightRadius: 20, borderBottomLeftRadius: 20 }} >
                            <DataTable.Cell textStyle={{ fontSize: 15 }}>Patiala</DataTable.Cell>
                            <DataTable.Cell textStyle={{ fontSize: 15 }} style={{ marginRight: -180 }}>Sirhind</DataTable.Cell>
                        </DataTable.Row>
                    </DataTable>
                    {/* ----------------RAJASTHAN----------------- */}
                    <DataTable>
                        <DataTable.Header style={{ marginTop: 20, backgroundColor: "#bc9954", borderTopRightRadius: 20, borderTopLeftRadius: 20, width: 370, alignItems: "center" }} >
                            <DataTable.Title textStyle={{ fontSize: 20, color: "white", fontWeight: "bold" }} style={{ justifyContent: "center", color: "black" }} >RAJASTHAN</DataTable.Title>
                        </DataTable.Header>

                        <DataTable.Row style={{ backgroundColor: "#f6f6f6" }}>
                            <DataTable.Cell textStyle={{ fontSize: 15 }} >Ajmer</DataTable.Cell>
                            <DataTable.Cell textStyle={{ fontSize: 15 }} style={{ marginRight: -180 }}>Alwar</DataTable.Cell>
                        </DataTable.Row>

                        <DataTable.Row style={{ backgroundColor: "#fff", justifyContent: "space-between", }} >
                            <DataTable.Cell textStyle={{ fontSize: 15 }}>Beawar</DataTable.Cell>
                            <DataTable.Cell textStyle={{ fontSize: 15 }} style={{ marginRight: -180 }}>Bhilwara</DataTable.Cell>
                        </DataTable.Row>
                        <DataTable.Row style={{ backgroundColor: "#f6f6f6" }}>
                            <DataTable.Cell textStyle={{ fontSize: 15 }} >Bikaner</DataTable.Cell>
                            <DataTable.Cell textStyle={{ fontSize: 15 }} style={{ marginRight: -180 }}>Chittor</DataTable.Cell>
                        </DataTable.Row>

                        <DataTable.Row style={{ backgroundColor: "#fff", justifyContent: "space-between", }} >
                            <DataTable.Cell textStyle={{ fontSize: 15 }}>Jaipur</DataTable.Cell>
                            <DataTable.Cell textStyle={{ fontSize: 15 }} style={{ marginRight: -180 }}>Jodhpur</DataTable.Cell>
                        </DataTable.Row>
                        <DataTable.Row style={{ backgroundColor: "#f6f6f6" }}>
                            <DataTable.Cell textStyle={{ fontSize: 15 }} >Kota</DataTable.Cell>
                            <DataTable.Cell textStyle={{ fontSize: 15 }} style={{ marginRight: -180 }}>Kishangarh</DataTable.Cell>
                        </DataTable.Row>

                        <DataTable.Row style={{ backgroundColor: "#fff", justifyContent: "space-between", }} >
                            <DataTable.Cell textStyle={{ fontSize: 15 }}>Nathdwara</DataTable.Cell>
                            <DataTable.Cell textStyle={{ fontSize: 15 }} style={{ marginRight: -180 }}>Pali</DataTable.Cell>
                        </DataTable.Row>
                        <DataTable.Row style={{ backgroundColor: "#f6f6f6" }}>
                            <DataTable.Cell textStyle={{ fontSize: 15 }} >Kota</DataTable.Cell>
                            <DataTable.Cell textStyle={{ fontSize: 15 }} style={{ marginRight: -180 }}>Kishangarh</DataTable.Cell>
                        </DataTable.Row>

                        <DataTable.Row style={{ backgroundColor: "#fff", justifyContent: "space-between", }} >
                            <DataTable.Cell textStyle={{ fontSize: 15 }}>Nathdwara</DataTable.Cell>
                            <DataTable.Cell textStyle={{ fontSize: 15 }} style={{ marginRight: -180 }}>Pali</DataTable.Cell>
                        </DataTable.Row>
                        <DataTable.Row style={{ backgroundColor: "#f6f6f6" }}>
                            <DataTable.Cell textStyle={{ fontSize: 15 }} >Rajsamand</DataTable.Cell>
                            <DataTable.Cell textStyle={{ fontSize: 15 }} style={{ marginRight: -180 }}>Ratangarh</DataTable.Cell>
                        </DataTable.Row>

                        <DataTable.Row style={{ backgroundColor: "#fff", justifyContent: "space-between", }} >
                            <DataTable.Cell textStyle={{ fontSize: 15 }}>Sikar</DataTable.Cell>
                            <DataTable.Cell textStyle={{ fontSize: 15 }} style={{ marginRight: -180 }}>Sujangarh</DataTable.Cell>
                        </DataTable.Row>

                        <DataTable.Row style={{ backgroundColor: "#fff", justifyContent: "space-between", borderBottomRightRadius: 20, borderBottomLeftRadius: 20 }} >
                            <DataTable.Cell textStyle={{ fontSize: 15 }}>Udaipur</DataTable.Cell>
                        </DataTable.Row>
                    </DataTable>


                    {/* ----------------Tamil Nadu----------------- */}


                    <DataTable>
                        <DataTable.Header style={{ marginTop: 20, backgroundColor: "#bc9954", borderTopRightRadius: 20, borderTopLeftRadius: 20, width: 370, alignItems: "center" }} >
                            <DataTable.Title textStyle={{ fontSize: 20, color: "white", fontWeight: "bold" }} style={{ justifyContent: "center", color: "black" }} >TAMIL NADU</DataTable.Title>
                        </DataTable.Header>

                        <DataTable.Row style={{ backgroundColor: "#f6f6f6" }}>
                            <DataTable.Cell textStyle={{ fontSize: 15 }} >Ambur</DataTable.Cell>
                            <DataTable.Cell textStyle={{ fontSize: 15 }} style={{ marginRight: -180 }}>Arcot</DataTable.Cell>
                        </DataTable.Row>

                        <DataTable.Row style={{ backgroundColor: "#fff", justifyContent: "space-between", }} >
                            <DataTable.Cell textStyle={{ fontSize: 15 }}>Chennai</DataTable.Cell>
                            <DataTable.Cell textStyle={{ fontSize: 15 }} style={{ marginRight: -180 }}>Coimbatore</DataTable.Cell>
                        </DataTable.Row>
                        <DataTable.Row style={{ backgroundColor: "#f6f6f6" }}>
                            <DataTable.Cell textStyle={{ fontSize: 15 }} >Cuddalore</DataTable.Cell>
                            <DataTable.Cell textStyle={{ fontSize: 15 }} style={{ marginRight: -180 }}>Dindigul</DataTable.Cell>
                        </DataTable.Row>

                        <DataTable.Row style={{ backgroundColor: "#fff", justifyContent: "space-between", }} >
                            <DataTable.Cell textStyle={{ fontSize: 15 }}>Dindivanam</DataTable.Cell>
                            <DataTable.Cell textStyle={{ fontSize: 15 }} style={{ marginRight: -180 }}>Eral</DataTable.Cell>
                        </DataTable.Row>
                        <DataTable.Row style={{ backgroundColor: "#f6f6f6" }}>
                            <DataTable.Cell textStyle={{ fontSize: 15 }} >Erode</DataTable.Cell>
                            <DataTable.Cell textStyle={{ fontSize: 15 }} style={{ marginRight: -180 }}>Gudiyatham</DataTable.Cell>
                        </DataTable.Row>

                        <DataTable.Row style={{ backgroundColor: "#fff", justifyContent: "space-between", }} >
                            <DataTable.Cell textStyle={{ fontSize: 15 }}>Kanchipuram</DataTable.Cell>
                            <DataTable.Cell textStyle={{ fontSize: 15 }} style={{ marginRight: -180 }}>Kanyakumari</DataTable.Cell>
                        </DataTable.Row>
                        <DataTable.Row style={{ backgroundColor: "#f6f6f6" }}>
                            <DataTable.Cell textStyle={{ fontSize: 15 }} >Karaikal</DataTable.Cell>
                            <DataTable.Cell textStyle={{ fontSize: 15 }} style={{ marginRight: -180 }}>Karur</DataTable.Cell>
                        </DataTable.Row>

                        <DataTable.Row style={{ backgroundColor: "#fff", justifyContent: "space-between", }} >
                            <DataTable.Cell textStyle={{ fontSize: 15 }}>Kumbakonam</DataTable.Cell>
                            <DataTable.Cell textStyle={{ fontSize: 15 }} style={{ marginRight: -180 }}>Madurai</DataTable.Cell>
                        </DataTable.Row>
                        <DataTable.Row style={{ backgroundColor: "#f6f6f6" }}>
                            <DataTable.Cell textStyle={{ fontSize: 15 }} >Marthandam</DataTable.Cell>
                            <DataTable.Cell textStyle={{ fontSize: 15 }} style={{ marginRight: -180 }}>Mayiladuthurai</DataTable.Cell>
                        </DataTable.Row>

                        <DataTable.Row style={{ backgroundColor: "#fff", justifyContent: "space-between", }} >
                            <DataTable.Cell textStyle={{ fontSize: 15 }}>Ooty</DataTable.Cell>
                            <DataTable.Cell textStyle={{ fontSize: 15 }} style={{ marginRight: -180 }}>Palani</DataTable.Cell>
                        </DataTable.Row>
                        <DataTable.Row style={{ backgroundColor: "#f6f6f6" }}>
                            <DataTable.Cell textStyle={{ fontSize: 15 }} >Pondicherry</DataTable.Cell>
                            <DataTable.Cell textStyle={{ fontSize: 15 }} style={{ marginRight: -180 }}>Polur</DataTable.Cell>
                        </DataTable.Row>

                        <DataTable.Row style={{ backgroundColor: "#fff", justifyContent: "space-between", }} >
                            <DataTable.Cell textStyle={{ fontSize: 15 }}>Ramanathapuram</DataTable.Cell>
                            <DataTable.Cell textStyle={{ fontSize: 15 }} style={{ marginRight: -180 }}>Salem</DataTable.Cell>
                        </DataTable.Row>
                        <DataTable.Row style={{ backgroundColor: "#f6f6f6" }}>
                            <DataTable.Cell textStyle={{ fontSize: 15 }} >Sangarankovil</DataTable.Cell>
                            <DataTable.Cell textStyle={{ fontSize: 15 }} style={{ marginRight: -180 }}>Selam</DataTable.Cell>
                        </DataTable.Row>

                        <DataTable.Row style={{ backgroundColor: "#fff", justifyContent: "space-between", }} >
                            <DataTable.Cell textStyle={{ fontSize: 15 }}>Thanjavur</DataTable.Cell>
                            <DataTable.Cell textStyle={{ fontSize: 15 }} style={{ marginRight: -180 }}>Theni</DataTable.Cell>
                        </DataTable.Row>
                        <DataTable.Row style={{ backgroundColor: "#f6f6f6" }}>
                            <DataTable.Cell textStyle={{ fontSize: 15 }} >Tirunelveli</DataTable.Cell>
                            <DataTable.Cell textStyle={{ fontSize: 15 }} style={{ marginRight: -180 }}>Tirupathur</DataTable.Cell>
                        </DataTable.Row>

                        <DataTable.Row style={{ backgroundColor: "#fff", justifyContent: "space-between", }} >
                            <DataTable.Cell textStyle={{ fontSize: 15 }}>Tirupur</DataTable.Cell>
                            <DataTable.Cell textStyle={{ fontSize: 15 }} style={{ marginRight: -180 }}>Tiruvannamalai</DataTable.Cell>
                        </DataTable.Row>
                        <DataTable.Row style={{ backgroundColor: "#f6f6f6" }}>
                            <DataTable.Cell textStyle={{ fontSize: 15 }} >Trichy</DataTable.Cell>
                            <DataTable.Cell textStyle={{ fontSize: 15 }} style={{ marginRight: -180 }}>Tuticorin</DataTable.Cell>
                        </DataTable.Row>

                        <DataTable.Row style={{ backgroundColor: "#fff", justifyContent: "space-between", }} >
                            <DataTable.Cell textStyle={{ fontSize: 15 }}>Vanniyambadi</DataTable.Cell>
                            <DataTable.Cell textStyle={{ fontSize: 15 }} style={{ marginRight: -180 }}>Vellore</DataTable.Cell>
                        </DataTable.Row>
                        <DataTable.Row style={{ backgroundColor: "#f6f6f6" }}>
                            <DataTable.Cell textStyle={{ fontSize: 15 }} >Villupuram</DataTable.Cell>
                            <DataTable.Cell textStyle={{ fontSize: 15 }} style={{ marginRight: -180 }}>Virudhachalam</DataTable.Cell>
                        </DataTable.Row>

                        <DataTable.Row style={{ backgroundColor: "#fff", justifyContent: "space-between", borderBottomRightRadius: 20, borderBottomLeftRadius: 20 }} >
                            <DataTable.Cell textStyle={{ fontSize: 15 }} style={{ marginRight: -180 }}>Udaipur</DataTable.Cell>
                        </DataTable.Row>
                    </DataTable>
                    {/* ----------------Uttar Pradesh----------------- */}

                    <DataTable>
                        <DataTable.Header style={{ marginTop: 20, backgroundColor: "#bc9954", borderTopRightRadius: 20, borderTopLeftRadius: 20, width: 370, alignItems: "center" }} >
                            <DataTable.Title textStyle={{ fontSize: 20, color: "white", fontWeight: "bold" }} style={{ justifyContent: "center", color: "black" }} >UTTAR PRADESH</DataTable.Title>
                        </DataTable.Header>

                        <DataTable.Row style={{ backgroundColor: "#f6f6f6" }}>
                            <DataTable.Cell textStyle={{ fontSize: 15 }} >Agra</DataTable.Cell>
                            <DataTable.Cell textStyle={{ fontSize: 15 }} style={{ marginRight: -180 }}>Aligarh</DataTable.Cell>
                        </DataTable.Row>

                        <DataTable.Row style={{ backgroundColor: "#fff", justifyContent: "space-between", }} >
                            <DataTable.Cell textStyle={{ fontSize: 15 }}>Azamgarh</DataTable.Cell>
                            <DataTable.Cell textStyle={{ fontSize: 15 }} style={{ marginRight: -180 }}>Awagarh</DataTable.Cell>
                        </DataTable.Row>
                        <DataTable.Row style={{ backgroundColor: "#f6f6f6" }}>
                            <DataTable.Cell textStyle={{ fontSize: 15 }} >Badayun</DataTable.Cell>
                            <DataTable.Cell textStyle={{ fontSize: 15 }} style={{ marginRight: -180 }}>Ballia</DataTable.Cell>
                        </DataTable.Row>

                        <DataTable.Row style={{ backgroundColor: "#fff", justifyContent: "space-between", }} >
                            <DataTable.Cell textStyle={{ fontSize: 15 }}>Barabanki</DataTable.Cell>
                            <DataTable.Cell textStyle={{ fontSize: 15 }} style={{ marginRight: -180 }}>Bareilly</DataTable.Cell>
                        </DataTable.Row>
                        <DataTable.Row style={{ backgroundColor: "#f6f6f6" }}>
                            <DataTable.Cell textStyle={{ fontSize: 15 }} >Basti</DataTable.Cell>
                            <DataTable.Cell textStyle={{ fontSize: 15 }} style={{ marginRight: -180 }}>Bhadohi</DataTable.Cell>
                        </DataTable.Row>

                        <DataTable.Row style={{ backgroundColor: "#fff", justifyContent: "space-between", }} >
                            <DataTable.Cell textStyle={{ fontSize: 15 }}>Bijnor</DataTable.Cell>
                            <DataTable.Cell textStyle={{ fontSize: 15 }} style={{ marginRight: -180 }}>Bulandshahar</DataTable.Cell>
                        </DataTable.Row>
                        <DataTable.Row style={{ backgroundColor: "#f6f6f6" }}>
                            <DataTable.Cell textStyle={{ fontSize: 15 }} >Deoria</DataTable.Cell>
                            <DataTable.Cell textStyle={{ fontSize: 15 }} style={{ marginRight: -180 }}>Dhualpur</DataTable.Cell>
                        </DataTable.Row>

                        <DataTable.Row style={{ backgroundColor: "#fff", justifyContent: "space-between", }} >
                            <DataTable.Cell textStyle={{ fontSize: 15 }}>Etah</DataTable.Cell>
                            <DataTable.Cell textStyle={{ fontSize: 15 }} style={{ marginRight: -180 }}>Etawah</DataTable.Cell>
                        </DataTable.Row>
                        <DataTable.Row style={{ backgroundColor: "#f6f6f6" }}>
                            <DataTable.Cell textStyle={{ fontSize: 15 }} >Faizabad</DataTable.Cell>
                            <DataTable.Cell textStyle={{ fontSize: 15 }} style={{ marginRight: -180 }}>Farukhabad</DataTable.Cell>
                        </DataTable.Row>

                        <DataTable.Row style={{ backgroundColor: "#fff", justifyContent: "space-between", }} >
                            <DataTable.Cell textStyle={{ fontSize: 15 }}>Firozabad</DataTable.Cell>
                            <DataTable.Cell textStyle={{ fontSize: 15 }} style={{ marginRight: -180 }}>Gajraula</DataTable.Cell>
                        </DataTable.Row>
                        <DataTable.Row style={{ backgroundColor: "#f6f6f6" }}>
                            <DataTable.Cell textStyle={{ fontSize: 15 }} >Gazipur</DataTable.Cell>
                            <DataTable.Cell textStyle={{ fontSize: 15 }} style={{ marginRight: -180 }}>Gopiganj</DataTable.Cell>
                        </DataTable.Row>

                        <DataTable.Row style={{ backgroundColor: "#fff", justifyContent: "space-between", }} >
                            <DataTable.Cell textStyle={{ fontSize: 15 }}>Gwalior</DataTable.Cell>
                            <DataTable.Cell textStyle={{ fontSize: 15 }} style={{ marginRight: -180 }}>Gorakhpur</DataTable.Cell>
                        </DataTable.Row>
                        <DataTable.Row style={{ backgroundColor: "#f6f6f6" }}>
                            <DataTable.Cell textStyle={{ fontSize: 15 }} >Ghaziabad</DataTable.Cell>
                            <DataTable.Cell textStyle={{ fontSize: 15 }} style={{ marginRight: -180 }}>Gurgaon</DataTable.Cell>
                        </DataTable.Row>

                        <DataTable.Row style={{ backgroundColor: "#fff", justifyContent: "space-between", }} >
                            <DataTable.Cell textStyle={{ fontSize: 15 }}>Hardoi</DataTable.Cell>
                            <DataTable.Cell textStyle={{ fontSize: 15 }} style={{ marginRight: -180 }}>Hathras</DataTable.Cell>
                        </DataTable.Row>
                        <DataTable.Row style={{ backgroundColor: "#f6f6f6" }}>
                            <DataTable.Cell textStyle={{ fontSize: 15 }} >Itawa</DataTable.Cell>
                            <DataTable.Cell textStyle={{ fontSize: 15 }} style={{ marginRight: -180 }}>Jaunpur</DataTable.Cell>
                        </DataTable.Row>

                        <DataTable.Row style={{ backgroundColor: "#fff", justifyContent: "space-between", }} >
                            <DataTable.Cell textStyle={{ fontSize: 15 }}>Jhansi</DataTable.Cell>
                            <DataTable.Cell textStyle={{ fontSize: 15 }} style={{ marginRight: -180 }}>Kanpur</DataTable.Cell>
                        </DataTable.Row>
                        <DataTable.Row style={{ backgroundColor: "#f6f6f6" }}>
                            <DataTable.Cell textStyle={{ fontSize: 15 }} >Kaushambi</DataTable.Cell>
                            <DataTable.Cell textStyle={{ fontSize: 15 }} style={{ marginRight: -180 }}>Lakimpur</DataTable.Cell>
                        </DataTable.Row>

                        <DataTable.Row style={{ backgroundColor: "#fff", justifyContent: "space-between", }} >
                            <DataTable.Cell textStyle={{ fontSize: 15 }}>Lucknow</DataTable.Cell>
                            <DataTable.Cell textStyle={{ fontSize: 15 }} style={{ marginRight: -180 }}>Mathura</DataTable.Cell>
                        </DataTable.Row>
                        <DataTable.Row style={{ backgroundColor: "#f6f6f6" }}>
                            <DataTable.Cell textStyle={{ fontSize: 15 }} >Meerut</DataTable.Cell>
                            <DataTable.Cell textStyle={{ fontSize: 15 }} style={{ marginRight: -180 }}>Mau</DataTable.Cell>
                        </DataTable.Row>

                        <DataTable.Row style={{ backgroundColor: "#fff", justifyContent: "space-between", }} >
                            <DataTable.Cell textStyle={{ fontSize: 15 }}>Mirzapur</DataTable.Cell>
                            <DataTable.Cell textStyle={{ fontSize: 15 }} style={{ marginRight: -180 }}>Moradabad</DataTable.Cell>
                        </DataTable.Row>
                        <DataTable.Row style={{ backgroundColor: "#f6f6f6" }}>
                            <DataTable.Cell textStyle={{ fontSize: 15 }} >Mughalsarai</DataTable.Cell>
                            <DataTable.Cell textStyle={{ fontSize: 15 }} style={{ marginRight: -180 }}>Muraina</DataTable.Cell>
                        </DataTable.Row>

                        <DataTable.Row style={{ backgroundColor: "#fff", justifyContent: "space-between", }} >
                            <DataTable.Cell textStyle={{ fontSize: 15 }}>Muzaffar Nagar</DataTable.Cell>
                            <DataTable.Cell textStyle={{ fontSize: 15 }} style={{ marginRight: -180 }}>Prayagraj</DataTable.Cell>
                        </DataTable.Row>
                        <DataTable.Row style={{ backgroundColor: "#f6f6f6" }}>
                            <DataTable.Cell textStyle={{ fontSize: 15 }} >Rampur</DataTable.Cell>
                            <DataTable.Cell textStyle={{ fontSize: 15 }} style={{ marginRight: -180 }}>Raebareilly</DataTable.Cell>
                        </DataTable.Row>

                        <DataTable.Row style={{ backgroundColor: "#fff", justifyContent: "space-between", }} >
                            <DataTable.Cell textStyle={{ fontSize: 15 }}>Saharanpur</DataTable.Cell>
                            <DataTable.Cell textStyle={{ fontSize: 15 }} style={{ marginRight: -180 }}>Shahjahanpur</DataTable.Cell>
                        </DataTable.Row>
                        <DataTable.Row style={{ backgroundColor: "#f6f6f6" }}>
                            <DataTable.Cell textStyle={{ fontSize: 15 }} >Sitapur</DataTable.Cell>
                            <DataTable.Cell textStyle={{ fontSize: 15 }} style={{ marginRight: -180 }}>Sultanpur</DataTable.Cell>
                        </DataTable.Row>

                        <DataTable.Row style={{ backgroundColor: "#fff", justifyContent: "space-between", }} >
                            <DataTable.Cell textStyle={{ fontSize: 15 }}>Thandla</DataTable.Cell>
                            <DataTable.Cell textStyle={{ fontSize: 15 }} style={{ marginRight: -180 }}>Tundla</DataTable.Cell>
                        </DataTable.Row>
                        <DataTable.Row style={{ backgroundColor: "#f6f6f6" }}>
                            <DataTable.Cell textStyle={{ fontSize: 15 }} >Unnao</DataTable.Cell>
                            <DataTable.Cell textStyle={{ fontSize: 15 }} style={{ marginRight: -180 }}>Varanasi</DataTable.Cell>
                        </DataTable.Row>
                        <DataTable.Row style={{ backgroundColor: "#fff", justifyContent: "space-between", borderBottomRightRadius: 20, borderBottomLeftRadius: 20 }} >
                            <DataTable.Cell textStyle={{ fontSize: 15 }}>Thanjavur</DataTable.Cell>
                            <DataTable.Cell textStyle={{ fontSize: 15 }} style={{ marginRight: -180 }}>Theni</DataTable.Cell>
                        </DataTable.Row>
                    </DataTable>
                    {/* ----------------UTTRAKHAND----------------- */}
                    <DataTable>
                        <DataTable.Header style={{ marginTop: 20, backgroundColor: "#bc9954", borderTopRightRadius: 20, borderTopLeftRadius: 20, width: 370, alignItems: "center" }} >
                            <DataTable.Title textStyle={{ fontSize: 20, color: "white", fontWeight: "bold" }} style={{ justifyContent: "center", color: "black" }} >UTTRAKHAND</DataTable.Title>
                        </DataTable.Header>

                        <DataTable.Row style={{ backgroundColor: "#f6f6f6" }}>
                            <DataTable.Cell textStyle={{ fontSize: 15 }} >Dehradun</DataTable.Cell>
                            <DataTable.Cell textStyle={{ fontSize: 15 }} style={{ marginRight: -180 }}>Haldwani</DataTable.Cell>
                        </DataTable.Row>

                        <DataTable.Row style={{ backgroundColor: "#fff", justifyContent: "space-between", }} >
                            <DataTable.Cell textStyle={{ fontSize: 15 }}>Haridwar</DataTable.Cell>
                            <DataTable.Cell textStyle={{ fontSize: 15 }} style={{ marginRight: -180 }}>Kashipur</DataTable.Cell>
                        </DataTable.Row>
                        <DataTable.Row style={{ backgroundColor: "#f6f6f6" }}>
                            <DataTable.Cell textStyle={{ fontSize: 15 }} >Pantnagar</DataTable.Cell>
                            <DataTable.Cell textStyle={{ fontSize: 15 }} style={{ marginRight: -180 }}>Roorkee</DataTable.Cell>
                        </DataTable.Row>

                        <DataTable.Row style={{ backgroundColor: "#fff", justifyContent: "space-between", borderBottomRightRadius: 20, borderBottomLeftRadius: 20, }} >
                            <DataTable.Cell textStyle={{ fontSize: 15 }}>Rudrapur</DataTable.Cell>
                        </DataTable.Row>
                    </DataTable>
                    {/* ----------------WEST BENGAL----------------- */}
                    <DataTable>
                        <DataTable.Header style={{ marginTop: 20, backgroundColor: "#bc9954", borderTopRightRadius: 20, borderTopLeftRadius: 20, width: 370, alignItems: "center" }} >
                            <DataTable.Title textStyle={{ fontSize: 20, color: "white", fontWeight: "bold" }} style={{ justifyContent: "center", color: "black" }} >WEST BENGAL</DataTable.Title>
                        </DataTable.Header>

                        <DataTable.Row style={{ backgroundColor: "#f6f6f6", borderBottomRightRadius: 20, borderBottomLeftRadius: 20, marginBottom: 20 }}>
                            <DataTable.Cell textStyle={{ fontSize: 15 }} >Durgapur</DataTable.Cell>
                            <DataTable.Cell textStyle={{ fontSize: 15 }} style={{ marginRight: -180 }}>Kolkata</DataTable.Cell>
                        </DataTable.Row>
                    </DataTable>
                </View>
            </ScrollView>
        </View>
    )
}

export default ServiceAvailable;

const styles = StyleSheet.create({
    container: {
        paddingTop: 20,
        paddingHorizontal: 30,
    },
    OurServiceAlignment: {
        marginTop: 20,
        marginLeft: 20,
        marginBottom: 2
    },
    stateName: {

    },
    OurServiceText: {
        fontSize: 30,
        fontWeight: "bold",
        // fontStyle: "600",
        color: "#bc9954",
        textAlign: 'justify',
    },
    OurServiceline: {
        width: 100,
        height: 3,
        backgroundColor: "#bc9954",
        marginBottom: 10,
        marginTop: 1,
        marginLeft: 20
    },
    StateNameAlignment: {
        // marginleft: 10
    },
    StateName: {
        fontSize: 30,
        marginLeft: 36,

    },
    citiesAlignment: {
        flexDirection: "row",
        justifyContent: "space-around",
        marginHorizontal: -50,
    },
    citiesStyle1: {
        textAlign: 'left',
        fontSize: 20,
        fontWeight: "300",
        color: "black",
        marginVertical: 5,
        fontWeight: "500"
    },
    citiesStyle2: {
        textAlign: 'right',
        fontSize: 20,
        fontWeight: "300",
        color: "black",
        marginVertical: 5,
        fontWeight: "500"
    },
    TotalAlignment: {
        flexDirection: "row",
        justifyContent: "space-around",
        marginHorizontal: -15,
    },
    TotalPaddingAlignment: {
        marginVertical: 5,

    },
    TotalSubChildAlignment: {
        textAlign: 'left',
        fontSize: 20,
        fontWeight: "300",
        color: "black",
        marginVertical: 5,
    },
    TotalSubChildAlignment2: {
        textAlign: 'right',
        fontSize: 20,
        fontWeight: "300",
        color: "black",
        marginVertical: 5,
    },

})