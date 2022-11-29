("rect-native");
import { Wrapper } from "../styles/globals.js";
import * as React from "react";
import {
  Text,
  View,
  SafeAreaView,
  Button,
  IconButton,
  StyleSheet
} from "react-native";
import { useState } from "react";
import { useTheme } from "@react-navigation/native";
import { Modal, Portal, Provider } from "react-native-paper";
import Prof_Window from "../components/common/prof_window.js";
import TaskPopup from "../components/home/taskPop";
import WinsCard from "../components/community/winsCard";
import Button_Gate from "../components/home/button_gate_img.js";
import Footer_Menu from "../components/common/footer_menu.js";

const styles = StyleSheet.create({
  sarearea: {
    height: "100%",
    display: "flex",
    flex: 1,
    flexDirection: "column",
    // justifyContent: "space-evenly",
    alignItems: "center",
  },

  homecont: {
    height: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "flex-start",
  },

  textL: {
    marginTop: 20,
    fontFamily: "Leky",
    fontSize: 20,
    textAlign: "center"
  },

  text: {
    fontSize: 16,
    fontFamily: "Comfortaa",
    textAlign: "center",
    color: "#484644"
  }
})

export default function Community({
  navigation,
  // imgSrc = require("../assets/SC_Community/mv.png"),
}) {
  const { colors } = useTheme();
  const [visible, setVisible] = React.useState(false);
  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const [checked, setChecked] = React.useState(false);

  const containerStyle = {
    width: "100%",
    height: "100%",
  };

  return (
    <SafeAreaView
      style={styles.sarearea}>
      <Provider>
        <Portal>
          <Prof_Window nav={navigation}/>
          <View
            style={styles.homecont}
            >
            <View style={styles.newscont}>
              <Button_Gate
                source={require("../assets/SC_Community/mv.png")}
              ></Button_Gate>
            </View>

            <Text style={styles.textL}>Community</Text>
            <Text style={styles.text}>- Share your wins</Text>
            <View style={{height: "100%"}}>
              <WinsCard
                userName={"Julissa Song"}
                date={"Nov, 28, 2022"}
                progress={"3/6"}
                wins={"Get the mentor's advice for 6 days in a row!"}
                img={require("../assets/SC_Home/mv3.jpg")}
              />
              <WinsCard
                userName={"Julissa Song"}
                date={"Nov, 28, 2022"}
                progress={"3/6"}
                wins={"Get the mentor's advice for 6 days in a row!"}
                img={require("../assets/SC_Home/mv3.jpg")}
              />
            </View>

            <Footer_Menu action={navigation}></Footer_Menu>

            {/* <Modal
              visible={visible}
              onDismiss={hideModal}
              contentContainerStyle={containerStyle}
            >
              <IconButton
                onPress={hideModal}
                icon="close-outline"
                iconColor={colors.text}
                style={{ position: "absolute", right: 0, top: "20%" }}
              ></IconButton>
              <AddGoalPopup action={onAddDone} hide={hideModal} />
            </Modal> */}

          </View>
        </Portal>
      </Provider>
    </SafeAreaView>
  );
}


{/* <WinsCard
userName={user.name}
date={wins.date}
wins={wins.list}
img={require("../assets/SC_Settings/editprofie.png")}
/> */}
