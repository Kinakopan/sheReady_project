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
} from "react-native";
import { useState } from "react";
import { useTheme } from "@react-navigation/native";
import { Button, IconButton } from "react-native-paper";
import GoalView from "../components/goals/goalview.js";
("react-native");
import ModelView from "../components/goals/goalview.js";
import AddGoalPopup from "../components/goals/addgoalpop.js";
import AddView from "../components/goals/addview.js";
import TaskList from "../components/goals/taskList.js";
import PopUp1 from "../components/goals/popup_1.js";
// import PopUp2 from "../components/goals/popup_2.js";
import Prof_Window from "../components/common/prof_window.js";
import Footer_Menu from "../components/common/footer_menu.js";
import { BlurView } from "expo-blur";


const styles = StyleSheet.create({
  grid: {
    flex: 1,
    flexDirection: "row",
    width: "100%",
    position: "absolute",
    bottom: 0,
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
    width: "100%",
    flexDirection: "row",
  },

  taskcont: {
    height: "100%",
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
  return (
    <Provider>
      <Portal>
        <View
          style={{
            flex: 1,
            alignItems: "center",
          }}
          >
          <Prof_Window nav={navigation} />
          <View
            style={{
              width: "100%",
              height: "15%",
              top: 40,
            }}
          >
            <Text
              style={{
                fontFamily: "Leky",
                fontSize: 20,
                top: 40,
                color: "#484644",
                textAlign: "center",
              }}
            >
              Goals
            </Text>
          </View>
          <View style={{ width: "100%", height: "22%" }}>
            <ScrollView horizontal style={styles.scroll}>
              <GoalView number={2} txt={"Build Network"} />
              <GoalView number={1} txt={"Be Proactive"} />
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
          <ScrollView vertical>
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
            </View>
          </ScrollView>
          <View style={styles.grid}>
            <Button
              mode="text"
              onPress={() => navigation.navigate("Home")}
              style={styles.btn}
            >
              <View>
                <Image
                  style={styles.icon}
                  // source={require("../assets/svg/home.png")}
                />
                <Text style={styles.text}>Home</Text>
              </View>
            </Button>

            <Footer_Menu action={navigation}></Footer_Menu>

          </View>

          <Modal
            visible={popVisible}
            onDismiss={hidePop}
            contentContainerStyle={containerStyle}
          >
          <TouchableOpacity
            onPress={hidePop}
          >
          <BlurView
              blurType="light"
              style={{
              height: "100%",
              width: "100%",
              justifyContent: "center",
              alignSelf: "center"
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
          >
            <IconButton
              onPress={hideModal}
              icon="close-outline"
              iconColor={colors.text}
              style={{ position: "absolute", right: 0, top: "20%" }}
            ></IconButton>
            <AddGoalPopup action={onAddDone} hide={hideModal} />
          </Modal>
        </View>
      </Portal>
    </Provider>
  );
}
