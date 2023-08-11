import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useTheme } from "@react-navigation/native";
import Icons from "@expo/vector-icons/MaterialIcons";

import Header from "../components/Header";
import SearchFilter from "../components/SearchFilter";

const HomeScreen = () => {
  const { colors } = useTheme();

  return (
    <ScrollView style={{paddingVertical: 24, gap: 24}}>
      <SafeAreaView>
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
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    padding: 24,
  },
  containerTitle: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  title: {
    fontSize: 22,
    fontWeight: "700",
  },
});
