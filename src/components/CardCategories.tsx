import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { useTheme } from "@react-navigation/native";
import { DATA } from '../config/data';


const CardCategories = () => {
    const { colors } = useTheme();

    const [categoryIndex, setCategoryIndex] = useState(0)
  return (
    <FlatList
        contentContainerStyle={{
            paddingHorizontal: 12,
            gap: 12,
        }}
          horizontal
          showsHorizontalScrollIndicator={false}
          data={DATA}
          renderItem={({ item, index }) => {
            const isSelect = categoryIndex === index;
            return (
              <TouchableOpacity
                onPress={() => setCategoryIndex(index)}
                style={{
                  backgroundColor: isSelect ? colors.primary : colors.card,
                  paddingHorizontal: 20,
                  paddingVertical: 10,
                  borderRadius: 100,
                  borderWidth: isSelect ? 0 : 1,
                  borderColor: colors.border,
                }}
              >
                <Text
                  style={{
                    color: isSelect ? colors.background : colors.text,
                    fontWeight: "600",
                    fontSize: 16,
                    opacity: isSelect ? 1 : 0.5,
                  }}
                >
                  {item.title}
                </Text>
              </TouchableOpacity>
            );
          }}
          keyExtractor={(item) => {
            item.id.toString();
          }}
        />
  )
}

export default CardCategories

const styles = StyleSheet.create({})