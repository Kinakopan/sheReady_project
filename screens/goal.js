import * as React from "react";
import { Wrapper } from "../styles/globals.js";
import { Modal, Portal, Provider } from "react-native-paper";
import {
  View,
  TouchableOpacity,
  Image,
  StyleSheet,
  Text,
  ScrollView,
  SafeAreaView,
} from "react-native";
import { useState } from "react";
import { useTheme } from "@react-navigation/native";
import { Button, IconButton } from "react-native-paper";
import GoalView from "../components/goals/goalview.js";
("react-native");
import AddGoalPopup from "../components/goals/addgoalpop.js";
import AddView from "../components/goals/addview.js";
import TaskList from "../components/goals/taskList.js";
import PopUp1 from "../components/goals/popup_1.js";
import Prof_Window from "../components/common/prof_window.js";
import Footer_Menu from "../components/common/footer_menu.js";
import { BlurView } from "expo-blur";

const styles = StyleSheet.create({
  sarearea: {
    width: "100%",
    height: "100%",
    display: "flex",
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    // justifyContent: "space-evenly",
    alignItems: "flex-start",
  },

  grid: {
    flex: 1,
    flexDirection: "row",
    width: "100%",
  },

  btn: {
    padding: 5,
    width: "20%",
    justifyContent: "center",
  },

  icon: {
    padding: "50%",
    resizeMode: "contain",
  },

  text: {
    color: "#572516",
    padding: 2,
    fontSize: "80%",
    textAlign: "center",
    fontFamily: "Comfortaa",
    fontWeight: "bold",
  },

  texton: {
    color: "#F39770",
    padding: 2,
    fontSize: "80%",
    textAlign: "center",
    fontFamily: "Comfortaa",
    fontWeight: "bold",
  },

  scroll: {
    display: "flex",
    // marginLeft: "auto",
    // marginRight "auto",
    width: "100%",
    flexDirection: "row",
  },

  scrollview: {
    display: "flex",
  },

  taskcont: {
    display: "flex",
    width: "100%",
  },

  taskbtn: {
    width: "100%"
  },


});

export default function Goal({
  navigation,
}) {
  const { colors } = useTheme();
  const [visible, setVisible] = React.useState(false);
  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const [addDone, setAddDone] = React.useState(false);
  const onAddDone = () => setAddDone(true);
  const [popVisible, setPopVisible] = React.useState(false);
  const showPop = () => setPopVisible(true);
  const hidePop = () => setPopVisible(false);

  const containerStyle = {
    flex: 1,
    width: "80%",
    height: "80%",
    margin: "10%",
  };

  const image = require("../assets/SC_Home/add.png");


  return (
    <SafeAreaView
      style={styles.sarearea}>
      <Provider>
        <Portal>
          <View
            style={{
              flex: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
            }}
            >
            <Prof_Window nav={navigation} />
            <View
              style={{
                width: "100%",
                display: "flex",
              }}
              >
              <Text
                style={{
                  fontFamily: "Leky",
                  fontSize: 20,
                  // top: 40,
                  color: "#484644",
                  textAlign: "center",
                }}
              >
                Goals
              </Text>
            </View>
            <View style={{
                width: "100%",
                height: "22%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
              }}>
              <ScrollView horizontal style={styles.scroll}>
                <GoalView
                  number={0}
                  txt={"Add Goal"}
                  source={require(`../assets/SC_Home/add.png`)}
                />
                <GoalView number={1} txt={"Be Proactive"} />
                <GoalView number={2} txt={"Build Network"} />
                <GoalView number={3} txt={"Find Mentor"} />
                {addDone === true && <GoalView number={1} />}
                <AddView action={showModal} />
              </ScrollView>
            </View>
            <View
              style={{
                width: "100%",
                height: "8%",
                top: 10,
              }}
            >
              <Text
                style={{
                  fontFamily: "Comfortaa",
                  fontSize: 20,
                  fontWeight: 600,
                  top: 10,
                  color: "#484644",
                  textAlign: "center",
                }}
              >
                ONGOING TASK
              </Text>
            </View>
            <ScrollView
              vertical
              style={styles.scrollview}>
              <View style={styles.taskcont}>
                <Button onPress={showPop} style={styles.taskbtn}>
                  <TaskList
                    tasknum={"Task1"}
                    task={"Get the mentor’s advice - design ideas"}
                    due={"Due: Nov,28,2022"}
                    progress={"3/6"}
                    progressNum={0.5}
                  />
                </Button>
                <Button onPress={showPop} style={styles.taskbtn}>
                  <TaskList
                    tasknum={"Task2"}
                    task={"Checking progress with mentor"}
                    due={"Due: Nov,30,2022"}
                    progress={"8/10"}
                    progressNum={0.8}
                  />
                </Button>
                <Button onPress={showPop} style={styles.taskbtn}>
                  <TaskList
                    tasknum={"Task3"}
                    task={"Implementing amendment"}
                    due={"Due: Dec,2,2022"}
                    progress={"9/10"}
                    progressNum={0.9}
                  />
                </Button>
              </View>
            </ScrollView>

            <Footer_Menu action={navigation}></Footer_Menu>

            <Modal
              visible={popVisible}
              onDismiss={hidePop}
              contentContainerStyle={containerStyle}



              style={{
                width: "100%",
                height: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                // backgroundColor: "gray",
                marginTop: -10,
              }}
              >
              <TouchableOpacity
                onPress={hidePop}
              >
                <BlurView
                    blurType="light"
                    style={{
                      height: 800,
                      width: 600,
                      justifyContent: "flex-start",
                      alignSelf: "center",
                    }}
                >
                  <PopUp1 action={hidePop} />
                </BlurView>
              </TouchableOpacity>
            </Modal>

            <Modal
              visible={visible}
              onDismiss={hideModal}
              contentContainerStyle={containerStyle}
              // style={{
              //   height: "100%",
              //   display: "flex",
              //   justifyContent: "center"
              // }}
              >
              <IconButton
                onPress={hideModal}
                icon="close-outline"
                iconColor={colors.text}
                style={{
                  // position: "absolute",
                  // right: 0,
                  // top: "20%"

                // height: "100%",
                // display: "flex",
                // justifyContent: "center"
                  }}
              ></IconButton>
              <AddGoalPopup action={onAddDone} hide={hideModal} />
            </Modal>
          </View>
        </Portal>
      </Provider>
    </SafeAreaView>
  );
}
