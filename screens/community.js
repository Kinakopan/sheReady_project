("rect-native");
import { Wrapper } from "../styles/globals.js";
import * as React from "react";
import {
  Text,
  View,
  SafeAreaView,
  Button,
  IconButton,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import styled from "styled-components/native";
import { useState } from "react";
import { useTheme } from "@react-navigation/native";
import { Modal, Portal, Provider } from "react-native-paper";
import Prof_Window from "../components/common/prof_window.js";
import TaskPopup from "../components/home/taskPop";
import WinsCard from "../components/community/winsCard";
import Button_Gate from "../components/home/button_gate_img.js";
import Footer_Menu from "../components/common/footer_menu.js";

const MyImg = styled.Image`
  background-image: ${(props) => props.imgSrc} !important;
`;

const MyBgImg = styled.ImageBackground`
  background-position: bottom;
  background-size: contain;
  align-self: "flex-start";
  width: 100%;
  height: 200px;
`;

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




  wrap1: {
    display: "flex",
    flexDirection: "row",
    position: "relative",
    // width: "100%",
    width: 400,
    height: 200,
    paddingLeft: "5%",
    paddingRight: "5%",
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: 20,
  },
  imgCont: {
    overflow: "hidden",
    height: 200,
    width: 150,
    flexGrow: 1,
    borderRadius: 150,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    marginTop: 20,
  },
  img: {
    display: "block",
    width: "100%",
    height: "100%",
    fontSize: 13,
  },
  quote_cont: {
    display: "flex",
    height: 200,
    width: 200,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    paddingTop: 50,
    paddingLeft: 10,
  },
  quote_ttl: {
    fontFamily: "Comfortaa",
    fontWeight: 400,
    height: 14,
    fontSize: 14,
    flexWrap: "wrap",
  },
  quote_txt: {
    marginTop: 5,
    fontFamily: "Leky",
    fontWeight: 400,
    height: 100,
    fontSize: 14,
    width: 170,
    flexWrap: "wrap",
  },
  stairsImg: {
    width: 200,
    height: 60,
    marginLeft: -35,
    marginTop: -10,
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

            {/* Main visual same as HOME page */}
            {/* <View style={styles.newscont}>
              <View
                style={styles.wrap1}
                >
                <TouchableOpacity
                  style={styles.imgCont}
                  onPress={() => action.navigate(btnUrl)}
                >
                  <MyImg
                    style={styles.img}
                    // source={imgSrc}
                    source={require("../assets/SC_Community/mv.png")}
                    />
                </TouchableOpacity>
                <View
                  style={styles.quote_cont}>
                  <Text style={styles.quote_ttl}>
                    QUOTE OF THE DAY
                  </Text>
                  <Text style={styles.quote_txt}>
                    Everything   You Touch   Flourishes
                  </Text>
                  <MyBgImg
                    style={styles.stairsImg}
                    resizeMode="contain"
                    source={require("../assets/SC_Home/stairs.png")}/>
                </View>
              </View>
            </View> */}



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
