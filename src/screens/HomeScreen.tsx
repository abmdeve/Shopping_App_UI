import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
} from "react-native";
import React, { useState } from "react";
import { BlurView } from "expo-blur";
import { SafeAreaView } from "react-native-safe-area-context";
import { useTheme } from "@react-navigation/native";
import MasonryList from "reanimated-masonry-list";
import Icons from "@expo/vector-icons/MaterialIcons";

import Header from "../components/Header";
import SearchFilter from "../components/SearchFilter";
import CardGrid from "../components/CardGrid";
import { DATA } from "../config/data";
import CardCategories from "../components/CardCategories";
import CardMansoryList from "../components/CardMansoryList";

const AVATAR_URL =
  "https://images.unsplash.com/photo-1516914943479-89db7d9ae7f2?ixlib=rb-4.0.3&ixid=MnwxMjA3fD8MHxwaG90by1wYwdlfHx8fGVufDB8fH&auto=format&fit=crop&w=987&q=80";
// const AVATAR_URL =
//   "https://images.unsplash.com/photo-1484517186945-df8151a1a871?ixlib=rb-4.0.3&ixid=MnwxMjA3fD8MHxwaG90by1wYwdlfHx8fGVufDB8fH&auto=format&fit=crop&w=1049&q=80";

const HomeScreen = () => {
  const { colors } = useTheme();

  return (
    <ScrollView>
      <SafeAreaView style={{ paddingVertical: 24, gap: 24 }}>
        {/* HEADER COMPONENT */}
        <Header />
        {/* SEARCH BAR COMPONENT */}
        <SearchFilter />
        {/* GRID COLLECTION COMPONENT */}
        <View style={styles.container}>
          {/* TITLE BAR */}
          <View style={styles.containerTitle}>
            <Text style={styles.title}>New Collecttions</Text>
            <TouchableOpacity>
              <Text>See All</Text>
            </TouchableOpacity>
          </View>
          {/* GRID LIST */}
          <View style={styles.grid}>
            {/* CARD */}
            <CardGrid />
            <View style={{ flex: 1, gap: 12 }}>
              <CardGrid />
              <CardGrid />
            </View>
          </View>
        </View>
        {/* CATEGORIES */}
        <CardCategories />
        {/* MASONRY LIST */}
        <CardMansoryList />
      </SafeAreaView>
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
  },
  containerTitle: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 12,
  },
  title: {
    fontSize: 22,
    fontWeight: "700",
  },
  grid: {
    flexDirection: "row",
    height: 200,
    gap: 12,
  },
  card: {
    flex: 1,
  },
});
