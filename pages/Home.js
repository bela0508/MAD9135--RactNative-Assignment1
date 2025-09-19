import { Button } from "@react-navigation/elements";
import { StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import theme from "../theme/styles";

export default function HomeScreen() {
  const nav = useNavigation();

  function goto(page) {
    nav.navigate(page);
  }
  return (
    <SafeAreaView style={theme.components.screen}>
      <View style={theme.components.container}>
        <Text style={theme.typography.title}>Welcome to your bass store</Text>
        <Button
          style={theme.components.primaryButton}
          onPress={() => goto("List")}
        >
          <Text style={theme.components.primaryButtonText}>
            Check Available Basses
          </Text>
        </Button>
      </View>
      <View style={theme.components.footer}>
        <Text style={[theme.typography.small, { padding: theme.spacing.md }]}>
          Developed by Othmane Belatik
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 20,
  },
});
