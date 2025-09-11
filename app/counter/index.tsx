import { useRouter } from "expo-router";
import { theme } from "../../theme";
import { Text, View, StyleSheet, TouchableOpacity, Alert } from "react-native";
import * as Notifications from "expo-notifications"
import * as Device from "expo-device"
import { registerForPushNotificationsAsync } from "../../utils/registerForPushNotificationsAsync";

export default function CounterScreen() {
  const router = useRouter();
  const scheduleNotification = async () => {
    const result = await registerForPushNotificationsAsync()
    if (result === "granted"){
      await Notifications.scheduleNotificationAsync({
        content: {
          title: "Yo, I'm a notification from the app"
        },
        trigger:{
          type: Notifications.SchedulableTriggerInputTypes.TIME_INTERVAL,
          seconds: 5
        }
      })
    } else {
      Alert.alert(
        "Unable to schedule notification",
        "Enable the notifications permission for Expo Go in settings",
      )
    }
  }
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={scheduleNotification} style={styles.button} activeOpacity={.8}>
        <Text style={styles.buttonText}>Schedule notification</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  button: {
    backgroundColor: theme.colorBlack,
    padding: 12,
    borderRadius: 6,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    textTransform: "uppercase",
    letterSpacing: 1,
   },
 });
;
