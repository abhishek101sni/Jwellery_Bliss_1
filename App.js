import React, { useContext, useEffect } from 'react'
import Navigation from './src/navigation/Navigation'
import { AuthContext, AuthProvider } from "./src/Screens/AuthContext";
import { NavigationContainer } from '@react-navigation/native';
import "react-native-gesture-handler";
import WaitSplash from './src/Screens/WaitSplash'
import FlashMessage from 'react-native-flash-message'
import { StyleSheet } from 'react-native'
const App = () => {
  const { isLoading } = useContext(AuthContext);

  if (isLoading) {
    return <WaitSplash />;
  } else
    return (
      <Navigation />
    )
}


export default () => {
  return (
    <NavigationContainer >
      <AuthProvider>
        <App />
        <FlashMessage position="top" style={styles.FlashMessage} titleStyle={{ fontWeight: 'bold', fontSize: 20, color: "black", justifyContent: "center", alignItems: "center" }} />
      </AuthProvider>
    </NavigationContainer>
  );
};


const styles = StyleSheet.create({
  FlashMessage: {
    backgroundColor: "#eec06b",
    alignItems: "center",
    height: 100,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    // justifyContent: "center",
    // alignItems: "center",
    // alignSelf: "center",
    // marginTop:40,
    fontSize: 20,
    fontFamily: "Poppins-Medium",
    color: "black"
  }
});


