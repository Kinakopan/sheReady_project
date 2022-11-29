import * as React from "react";
import {
  View,
  Image,
  TouchableOpacity,
  ImageBackground,
  StyleSheet,
  Text,
  ScrollView,
} from "react-native";
import { Button } from "react-native-paper";

const styles = StyleSheet.create({
  cont: {
    flex: 1,
    width: 100,
    marginHorizontal: 10,
  },
  image: {
    flex: 1,
    justifyContent: "center",
    resizeMode: "contain",
    zIndex: 1,
  },

  icon: {
    flex: 1,
    justifyContent: "center",
    resizeMode: "contain",
    width: 40,
    height: 40,
  },

  btn: {
    width: "25%",
    height: "25%",
    zIndex: 3,
    position: "absolute",
    bottom: "56%",
    left: "18.9%",
  },

  txtcont: {
    width: 65,
    height: 40,
    position: "absolute",
    zIndex: 3,
    flexWrap: "wrap",
    top: "58%",
    left: "17%",
  },
  txt: {
    width: 65,
    height: 40,
    fontSize: "1em",
    textAlign: "center",
    fontFamily: "Comfortaa",
    fontWeight: "bold",
    color: "#484644"
  },
});
const image = require("../../assets/SC_Goals/moduleView.png");

export default function AddView({ action }) {
  return (
    <View style={styles.cont}>
      <Image style={styles.image} source={image} />
      <Button onPress={action} style={styles.btn}>
        <Image
          style={styles.icon}
          source={require("../../assets/SC_Home/add.png")}
        />
      </Button>
      <View style={styles.txtcont}>
        <Text style={styles.txt}>Add Goals</Text>
      </View>
    </View>
  );
}
