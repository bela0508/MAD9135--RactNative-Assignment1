import { View, Text, Image } from "react-native";
import { Button } from "@react-navigation/elements";

import { useEffect, useState } from "react";
import theme from "../theme/styles";
export default function Details({ route }) {
  const { item } = route.params;
  const [shouldRotate, setShouldRotate] = useState(false);
  useEffect(() => {
    Image.getSize(item.image_link, (width, height) => {
      setShouldRotate(width > height);
    });
  }, [item.image_link]);
  return (
    <View style={theme.components.screen}>
      <Image
        source={{ uri: item.image_link }}
        style={[
          theme.components.horizontalImage,
          !shouldRotate && { transform: [{ rotate: "90deg" }] },
        ]}
      />
      <Text style={theme.typography.title}>
        {item.brand + " " + item.model}
      </Text>
      <View style={theme.components.container}>
        <Text style={theme.typography.subtitle2}>Make: {item.make}</Text>
        <Text style={theme.typography.body}>Color: {item.color}</Text>
        <Text style={theme.typography.body}>
          Number of strings: {item.string_number}
        </Text>
        <Text style={theme.typography.body}>
          Form Factor: {item.form_factor}
        </Text>
        <Text style={theme.typography.body}>
          Number of Frets: {item.number_of_frets}
        </Text>
        <Text style={theme.typography.small}>Year: {item.year}</Text>
        <Button style={theme.components.primaryButton}>
          <Text style={theme.components.primaryButtonText}>
            Buy for: {item.price} $
          </Text>
        </Button>
      </View>
    </View>
  );
}
