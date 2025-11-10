import React from "react";
import { Link } from "expo-router";
import { View, Text, StyleSheet, Image } from "react-native";
import logoimg from "../assets/images/logoimg.png"; // ✅ FIXED

const App = () => {
  return (
    <View style={styles.container}>
      <Image source={logoimg} style={styles.logo} />

      <Text style={styles.h1}>Game Atlas</Text>
      <Text style={styles.h2}>An encyclopedia for games</Text>

      <Link href="/explore" style={styles.link}>
        Explore Here
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
  link: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 20,
    backgroundColor: "green",
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 5,
    textAlign: "center",
  },
});
