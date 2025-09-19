import React, { useState, useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { FlatList, Text, TouchableOpacity } from "react-native";
import data from "../data";
import { useNavigation } from "@react-navigation/native";
import theme from "../theme/styles";
import { Image, View } from "react-native";

const Item = ({ item, onPress }) => {
  const [shouldRotate, setShouldRotate] = useState(false);
  useEffect(() => {
    Image.getSize(item.image_link, (width, height) => {
      setShouldRotate(width > height);
    });
  }, [item.image_link]);
  return (
    <View style={theme.components.card}>
      <Image
        source={{ uri: item.image_link }}
        style={[
          theme.components.verticalImage,
          shouldRotate && { transform: [{ rotate: "-90deg" }] },
        ]}
        resizeMode="contain"
      />
      <TouchableOpacity onPress={onPress}>
        <Text style={theme.typography.title}>{item.brand}</Text>
        <Text style={theme.typography.subtitle}>{item.model}</Text>
        <Text style={theme.typography.small}>{item.year}</Text>
      </TouchableOpacity>
    </View>
  );
};
const List = () => {
  const [list, setList] = useState(data);
  const navigation = useNavigation();

  const goto = (item) => {
    navigation.navigate("Details", { item });
  };

  return (
    <SafeAreaView>
      <FlatList
        styles={theme.components.list}
        data={list}
        renderItem={({ item }) => (
          <Item item={item} onPress={() => goto(item)} />
        )}
        keyExtractor={(item) => item.id.toString()}
        numColumns={1}
      />
    </SafeAreaView>
  );
};

export default List;
