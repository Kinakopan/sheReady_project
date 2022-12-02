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
    display: "flex",
    alignItems: "flex-between",
    // flex: 1,
    width: 100,
    marginHorizontal: 10,
    position: "relative",
  },
  image: {
    flex: 1,
    justifyContent: "center",
    resizeMode: "contain",
    zIndex: 0,
    position: "absolute",
    left: 0,
    width: "100%",
    height: "100%",
    // backgroundColor: "red"
  },

  btn: {
    width: 40,
    height: 40,
    borderRadius: "50%",
    zIndex: 3,
    position: "absolute",
    top: 48,
    left: 20,
    // backgroundColor: "yellow",
    justifyContent: "center",
    // alignItems: "center"
    padding: 0,
  },

  icon: {
    // // flex: 1,
    // justifyContent: "center",
    // alignItems: "center",
    // // resizeMode: "cover",
    // width: 55,
    // height: 55,
    // fontSize: 30,
    // tintColor: "#484644",
    // zIndex: 20,
    // backgroundColor: "pink",
    // position: "absolute",
  },

  txtcont: {
    width: 65,
    height: 40,
    position: "absolute",
    zIndex: 3,
    flexWrap: "wrap",
    top: "58%",
    left: "17%",
    fontSize: 14,
  },
  txt: {
    width: 65,
    height: 40,
    fontSize: "1em",
    textAlign: "center",
    fontFamily: "Comfortaa",
    fontWeight: "bold",
    color: "#484644",
      fontSize: 14,
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
      <Image style={styles.icon} resizeMode="contain" source={icons[Math.floor(Math.random()*icons.length)]}/>
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
