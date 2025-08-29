import { StyleSheet, View } from "react-native";

import { ShoppingListItem } from "../components/ShoppingListItem";
import { Link } from "expo-router";

export default function App() {
  return (
    <View style={styles.container}>
      <Link href="/counter" style={{ textAlign: "center" }}>
        Go to counter
      </Link>
      <ShoppingListItem name="Coffee" />
      <ShoppingListItem name="Dog food" isCompleted />
      <ShoppingListItem name="Bags" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
});
