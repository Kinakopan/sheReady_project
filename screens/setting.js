("rect-native");
import { Wrapper } from "../styles/globals.js";
import * as React from "react";
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  Button,
  Image
} from "react-native";
import { useState } from "react";
import { useTheme } from "@react-navigation/native";
import { Modal, SegmentedButtons, Portal, Provider } from "react-native-paper";
import Prof_Window from "../components/common/prof_window.js";
import IcnBtn from "../components/common/IcnBtn";
import SettingPop from "../components/setting/setting";
import { TouchableOpacity } from "react-native-web";
import Footer_Menu from "../components/common/footer_menu.js";

const styles = StyleSheet.create({
  sarearea: {
    width: "100%",
    height: "100%",
    display: "flex",
    flex: 1,
    flexDirection: "column",
    // justifyContent: "space-evenly",
    alignItems: "center",
  },

  homecont: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "flex-start",
  },

  top: {
    justifyContent: "flex-start",
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "flex-start",
  },

  textL: {
    fontFamily: "Leky",
    fontSize: 20,
  },

  img: {
    width: 150,
  },

  group: {
    marginBottom: 20,
    justifyContent: "center"
  }
})


export default function Setting({
  navigation,
}) {
  const containerStyle = {
    width: "100%",
    height: "100%",
  }

  const { colors } = useTheme();
  const [visible, setVisible] = React.useState(false);
  const [value, setValue] = React.useState('');
  const [ showSetting, setShowSetting ] = React.useState(false);
  const showModal = () => setShowSetting(true);
  const hideModal = () => setShowSetting(false);
  const userImg = require("../assets/common/profile1.png");

  return (
    <SafeAreaView
      style={styles.sarearea}>
      <Provider>
        <Portal>
          <Prof_Window nav={navigation}/>

          <View
            style={styles.homecont}
            >
              {/* <View style={styles.top}> */}
              <Text style={styles.textL}>Setting</Text>
              <Image style={styles.img} source={userImg} resizeMode="contain" />
              <Text style={[styles.textL, {fontSize:16}]}>username</Text>
              {/* </View> */}
              <IcnBtn
                title="Edit Profile"
                img={require("../assets/SC_Settings/editprofie.png")}
                onPress={showModal}
              />
              <IcnBtn
                title="Notification"
                img={require("../assets/SC_Settings/notification.png")}
                onPress={("edit profile")}
              />

              <View style={{ borderBottomColor: "#808080", borderBottomWidth: 1, width: "85%", alignSelf: "center", }}>
                <SegmentedButtons
                  value={value}
                  onValueChange={setValue}
                  buttons={[
                    {
                      value: 'on',
                      label: 'On'
                    },
                    {
                      value: 'off',
                      label: 'Off'
                    }
                  ]}
                  style={styles.group}
                />
              </View>

              <IcnBtn
                title="Log Out"
                img={require("../assets/SC_Settings/signout.png")}
                onPress={("edit profile")}
              />

              <Footer_Menu action={navigation}></Footer_Menu>

              {/* <Modal
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
              </Modal> */}

              {/* <Modal
                visible={showSetting}
                onDismiss={hideModal}
                contentContainerStyle={containerStyle}
              >
                  {showSetting? <SettingPop action={hideModal} source={userImg} />: null}
              </Modal> */}
          </View>
        </Portal>
      </Provider>
    </SafeAreaView>
  );
}
