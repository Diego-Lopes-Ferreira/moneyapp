import { Text, View } from "react-native";
import { Feather } from "@expo/vector-icons";
import global from "../styles";
import Account from "../components/Account";

export default function homePage() {
  return (
    <View style={global.container}>
      <View style={global.rowGroup}>
        <Feather name="user" color="#f0f0f0" size={32} />
        <View style={global.columnGroup}>
          <Text style={global.text_normal}>Good Morning</Text>
          <Text style={global.h2}>Diego!</Text>
        </View>
        <Feather name="bell" color="#f0f0f0" size={32} />
      </View>

      <View style={global.card}>
        <View style={global.rowGroup}>
          <View style={global.columnGroup}>
            <Text style={global.text_normal}>Overall balance</Text>
            <Text style={global.h2}>R$ 311,26</Text>
          </View>
          <Feather name="eye" color="#f0f0f0" size={32} />
        </View>
      </View>

      <View style={global.card}>
        <Text style={global.h3}>My accounts</Text>
        {/* for each: Account Component */}
        <Account
          iconName="home"
          name="Carteira"
          category="other"
          value={120}
          hasBorder={true}
        />
        <Account
          iconName="eye"
          name="Diego Poupança Teste Long"
          category="Savings Account"
          value={120}
          hasBorder={true}
        />
        <Account iconName="github" name="Hello" category="world" value={220.9} />
        {/* button: manage accounts: goto(accounts) */}
      </View>

      <View style={global.card}>
        <View style={global.rowGroup}>
          <Text style={global.h3}>Credit Cards</Text>
          <Feather name="plus" color="#f0f0f0" size={32} />
        </View>
        <Text style={global.h3}>My accounts</Text>
        {/* for each: Credit card Component */}
        {/* button: manage accounts: goto(accounts) */}
      </View>
    </View>
  );
}
