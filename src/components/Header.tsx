import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import Icons from "@expo/vector-icons/MaterialIcons";
import { useTheme } from "@react-navigation/native";

const AVATAR_URL =
  "https://images.unsplash.com/photo-1496345875659-11f7dd282d1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fD8MHxwaG90by1wYwdlfHx8fGVufDB8fH&auto=format&fit=crop&w=2340&q=80";

const Header = () => {
  const { colors } = useTheme();

  return (
    <View style={styles.header}>
      <Image
        style={styles.image}
        resizeMode="cover"
        source={{ uri: AVATAR_URL }}
      />
      <View style={{ flex: 1 }}>
        <Text style={[styles.title, { color: colors.text }]} numberOfLines={1}>
          Hi, James
        </Text>
        <Text style={[styles.subTitle, { color: colors.text }]}>
          Discover fashion that suit your style
        </Text>
      </View>
      <TouchableOpacity
        style={[styles.touchable, { borderColor: colors.border }]}
      >
        <Icons name="notifications" size={24} color={colors.text} />
      </TouchableOpacity>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: 24,
    paddingVertical: 24,
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  image: {
    width: 52,
    aspectRatio: 1,
    borderRadius: 52,
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 8,
  },
  subTitle: {
    opacity: 0.75,
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
