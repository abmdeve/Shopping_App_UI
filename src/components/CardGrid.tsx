import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import React from "react";

// const AVATAR_URL =
//   "https://images.unsplash.com/photo-1496345875659-11f7dd282d1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fD8MHxwaG90by1wYwdlfHx8fGVufDB8fH&auto=format&fit=crop&w=2340&q=80";


const AVATAR_URL =
"https://images.unsplash.com/photo-1484515991647-c5760fcecfc7?ixlib=rb-4.0.3&ixid=MnwxMjA3fD8MHxwaG90by1wYwdlfHx8fGVufDB8fH&auto=format&fit=crop&w=1049&q=80";

const CardGrid = () => {
  return (
    <View style={styles.card}>
      <Image
        style={styles.image}
        source={{uri: AVATAR_URL}}
        // source={require("../Images/image-1.jpg")}
        resizeMode="cover"
      />
      <View style={styles.containerPrice} >
        <Text style={styles.price}>$130</Text>
      </View>
    </View>
  );
};

export default CardGrid;

const styles = StyleSheet.create({
  card: {
    flex: 1,
    position: "relative",
    overflow: "hidden",
    borderRadius: 24,
  },
  image: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  containerPrice: {
    position: 'absolute',
    left: 16,
    top: 16,
    paddingHorizontal: 16,
    paddingVertical: 10,
    backgroundColor: "rgba(0,0,0,0.25)",
    borderRadius: 100,
  },
  price: {
    fontSize: 14,
    fontWeight: '600',
    color: '#fff',
  }
});
