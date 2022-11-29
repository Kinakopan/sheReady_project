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
    width: 35,
    height: 35,
    tintColor: "#484644"
  },

  btn: {
    width: "25%",
    height: "25%",
    zIndex: 3,
    position: "absolute",
    bottom: "52%",
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

export default function GoalView({ number = 1, txt = "Keep Traning" }) {
  const icons = [
    require(`../../assets/SC_Goals/progress_bg1.png`),
    require(`../../assets/SC_Goals/progress_bg2.png`),
    require(`../../assets/SC_Goals/progress_bg3.png`),
  ];
  return (
    <View style={styles.cont}>
      <Image style={styles.image} source={image} />
      <Button style={styles.btn}>
        <Image style={styles.icon} source={icons[Math.floor(Math.random()*icons.length)]}/>
      </Button>
      <View style={styles.txtcont}>
        <Text style={styles.txt}>{txt}</Text>
      </View>
    </View>
  );
}

// export default function randomImage() {
//   componentDidMount() {
//     this.changeImage();
//   }

//   changeImage = () => {
//     const randomNumber = Math.floor(Math.random() * icons.length);
//     this.setState({
//       currentImageIndex: randomNumber
//     });
//   }

//   return (
//     <Image
//       source={icons[this.state.currentImageIndex]}/>
//   )

// }
