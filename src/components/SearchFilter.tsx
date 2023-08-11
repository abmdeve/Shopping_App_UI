import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { useTheme } from "@react-navigation/native";
import Icons from "@expo/vector-icons/MaterialIcons";

const SearchFilter = () => {
  const { colors } = useTheme();

  return (
    <View style={styles.container}>
      <TouchableOpacity style={[styles.search, { borderColor: colors.border }]}>
        <Icons
          name="search"
          size={24}
          color={colors.text}
          style={{ opacity: 0.5 }}
        />
        <Text style={[styles.title, { color: colors.text }]}>Search</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.touchable, { backgroundColor: colors.primary }]}
      >
        <Icons name="tune" size={24} color={colors.background} />
      </TouchableOpacity>
    </View>
  );
};

export default SearchFilter;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingHorizontal: 24,
    gap: 12,
  },
  search: {
    flex: 1,
    height: 52,
    borderRadius: 52,
    borderWidth: 1,
    alignItems: "center",
    paddingHorizontal: 24,
    gap: 12,
    flexDirection: "row",
  },
  title: {
    flex: 1,
    fontSize: 16,
    opacity: 0.5,
  },
  touchable: {
    width: 52,
    aspectRatio: 1,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 52,
    borderWidth: 1,
  },
});
