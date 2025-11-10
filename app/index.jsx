import React from "react";
import { Link } from "expo-router";
import { View, Text, StyleSheet, Image,Pressable } from "react-native";
import logoimg from "../assets/images/logoimg.png";

const App = () => {
  return (
    <View style={styles.container}>
      <Image source={logoimg} style={styles.logo} />

      <Text style={styles.h1}>Game Atlas</Text>
      <Text style={styles.h2}>An encyclopedia for games</Text>

      <Link href="/explore" style={styles.button} asChild>
      <Pressable style={styles.button}>
        <Text style={styles.buttonText}>Explore Here</Text>
      </Pressable>
       
      </Link>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#708090",
  },
  logo: {
    width: 80,
    height: 80,
    marginTop: 80,
  },
  h1: {
    fontSize: 32,
    fontWeight: "bold",
    color: "black",
  },
  h2: {
    fontSize: 22,
    backgroundColor: "red",
    color: "white",
    margin: 5,
  },
  button:{
    height:60,
    borderRadius: 50,
    backgroundColor:'green',
    padding: 6,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    margin:10,
   
    textAlign: "center",
  },

});
