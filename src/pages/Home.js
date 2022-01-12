import { ScrollView, StyleSheet, Text, View } from "react-native";
import { Feather } from "@expo/vector-icons";
import global, { colors, sizes } from "../styles";
import Account from "../components/Account";
import CreditCard from "../components/CreditCard";
import Expense from "../components/Expense";

export default function homePage() {
  return (
    <ScrollView>
      <View style={[global.container, { paddingBottom: 32 }]}>
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
            <View style={local.greenBar}></View>
            <View style={[global.columnGroup, local.flex1]}>
              <Text style={global.text_normal}>Overall balance</Text>
              <Text style={global.h2}>R$ 123,26</Text>
            </View>
            <Feather name="eye" color="#f0f0f0" size={32} />
          </View>
        </View>

        <View style={global.card}>
          <View style={global.rowGroup}>
            <Text style={[global.h3, local.flex1]}>My accounts</Text>
            <Feather name="edit-2" color="#f0f0f0" size={sizes.l} />
          </View>
          {/* for each: Account Component */}
          <Account
            iconName="home"
            name="Carteira"
            category="other"
            value={230.5}
            hasBorder={true}
          />
          <Account
            iconName="eye"
            name="Diego Poupança Teste Long"
            category="Savings Account"
            value={120}
            hasBorder={true}
          />
          <Account
            iconName="github"
            name="Hello"
            category="world"
            value={220.9}
          />
          {/* button: manage accounts: goto(accounts) */}
        </View>

        <View style={global.card}>
          <View style={global.rowGroup}>
            <Text style={[global.h3, local.flex1]}>Credit Cards</Text>
            <Feather name="edit-2" color="#f0f0f0" size={sizes.l} />
          </View>
          {/* for each: Credit card Component */}
          <CreditCard
            iconName="credit-card"
            name="Cartao Teste"
            category="Elo"
            available="1234.2"
            statement="123"
            hasBorder={true}
          />
          <CreditCard
            iconName="credit-card"
            name="Cartao Teste"
            category="Elo"
            available="1234.2"
            statement="123"
            hasBorder={false}
          />
          {/* button: manage credit cards: goto(creditCards) */}
        </View>

        <View style={global.card}>
          <Expense
            iconName="eye"
            iconColor="#0f0f0f"
            name="The name here"
            category="category"
            value={1234.56}
            status="paid"
          />
          <Expense
            iconName="eye"
            iconColor="#0f0f0f"
            name="The name here"
            category="category"
            value={-1234.56}
            status="paid"
          />
        </View>
      </View>
    </ScrollView>
  );
}

const local = StyleSheet.create({
  flex1: {
    flex: 1,
  },
  greenBar: {
    backgroundColor: colors.green,
    width: sizes.xxs,
    height: "100%",
    marginRight: sizes.s,
  },
});
