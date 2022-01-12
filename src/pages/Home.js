import { Text, View } from "react-native";
import { Feather } from "@expo/vector-icons";
import styles from "../styles";

export default function homePage() {
  return (
    <View style={styles.container}>
      <View style={styles.rowGroup}>
        <Feather name="user" color="#f0f0f0" size={32} />
        <View style={styles.columnGroup}>
          <Text style={styles.text_normal}>Good Morning</Text>
          <Text style={styles.h2}>Diego!</Text>
        </View>
        <Feather name="bell" color="#f0f0f0" size={32} />
      </View>

      <View style={styles.card}>
        <View style={styles.rowGroup}>
          <View style={styles.columnGroup}>
            <Text style={styles.text_normal}>Overall balance</Text>
            <Text style={styles.h2}>R$ 311,26</Text>
          </View>
          <Feather name="eye" color="#f0f0f0" size={32} />
        </View>
      </View>

      <View style={styles.card}>
        <Text style={styles.h3}>My accounts</Text>
        {/* for each: Account Component */}
        {/* button: manage accounts: goto(accounts) */}
      </View>

      <View style={styles.card}>
        <View style={styles.rowGroup}>
          <Text style={styles.h3}>Credit Cards</Text>
          <Feather name="plus" color="#f0f0f0" size={32} />
        </View>
        <Text style={styles.h3}>My accounts</Text>
        {/* for each: Credit card Component */}
        {/* button: manage accounts: goto(accounts) */}
      </View>
    </View>
  );
}
