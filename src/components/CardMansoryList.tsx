import { StyleSheet, Text, TouchableOpacity, View, Image, } from 'react-native'
import React from 'react'
import { BlurView } from 'expo-blur';
import { useTheme } from "@react-navigation/native";
import MasonryList from "reanimated-masonry-list";
import Icons from "@expo/vector-icons/MaterialIcons";

const AVATAR_URL =
  "https://images.unsplash.com/photo-1516914943479-89db7d9ae7f2?ixlib=rb-4.0.3&ixid=MnwxMjA3fD8MHxwaG90by1wYwdlfHx8fGVufDB8fH&auto=format&fit=crop&w=987&q=80";

const CardMansoryList = () => {
    const { colors } = useTheme();

  return (
    <MasonryList
          data={[1, 2, 3, 454, 4, 56, 44]}
          keyExtractor={(item): string => item}
          numColumns={2}
          contentContainerStyle={{ paddingHorizontal: 12 }}
          showsVerticalScrollIndicator={false}
          renderItem={({ item, i }) => {
            return (
              <View style={{ padding: 6 }}>
                <View
                  style={{
                    aspectRatio: i === 0 ? 1 : 2 / 3,
                    position: "relative",
                    overflow: "hidden",
                    borderRadius: 24,
                    padding: 4,
                  }}
                >
                  <Image
                    source={{ uri: AVATAR_URL }}
                    resizeMode="cover"
                    style={StyleSheet.absoluteFill}
                  />
                  <View
                    style={[
                      StyleSheet.absoluteFill,
                      {
                        padding: 12,
                      },
                    ]}
                  >
                    <View style={{ flexDirection: "row", gap: 8, padding: 4 }}>
                      <Text
                        style={{
                          flex: 1,
                          fontSize: 16,
                          fontWeight: "600",
                          color: colors.text,
                        }}
                      >
                        PUMA Everyday Hussle
                      </Text>
                      <View
                        style={{
                          backgroundColor: colors.background,
                          borderRadius: 100,
                          height: 32,
                          aspectRatio: 1,
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <Icons
                          name="favorite-border"
                          size={20}
                          color={colors.text}
                        />
                      </View>
                    </View>
                    <View style={{ flex: 1 }} />
                    <BlurView
                      style={{
                        flexDirection: "row",
                        backgroundColor: "rgba(0,0,0,0.35)",
                        alignItems: "center",
                        padding: 5,
                        borderRadius: 100,
                        overflow: "hidden",
                      }}
                      intensity={20}
                    >
                      <Text
                        style={{
                          flex: 1,
                          fontSize: 16,
                          fontWeight: "600",
                          color: "#fff",
                          marginLeft: 4,
                        }}
                      >
                        $160.00
                      </Text>
                      <TouchableOpacity
                        style={{
                          paddingHorizontal: 12,
                          paddingVertical: 8,
                          borderRadius: 100,
                          backgroundColor: "#fff",
                        }}
                      >
                        <Icons
                          name="add-shopping-cart"
                          size={20}
                          color={"#000"}
                        />
                      </TouchableOpacity>
                    </BlurView>
                  </View>
                </View>
              </View>
            );
          }}
          onEndReachedThreshold={0.1}
        />
  )
}

export default CardMansoryList

const styles = StyleSheet.create({})