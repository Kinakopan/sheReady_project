import { Wrapper } from "../styles/globals.js";
import * as React from "react";
import {
  View,
  TouchableOpacity,
  Image,
  StyleSheet,
  Text,
  ScrollView,
} from "react-native";
import { Button, Modal, Provider, Portal } from "react-native-paper";
import { BlurView } from "expo-blur";
import Goalwinscard from "../components/wins/goalwinscard.js";
import Export_Selected from "../components/wins/export_selected.js";
import Export_All from "../components/wins/export_all.js";
import Prof_Window from "../components/common/prof_window.js";
import Footer_Menu from "../components/common/footer_menu.js";
// import { Colors } from "react-native/Libraries/NewAppScreen";
import { useTheme } from "@react-navigation/native";import * as Print from "expo-print";
import * as Sharing from "expo-sharing";

const pdf =`
<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Pdf Content</title>
    <style>
        body {
          padding: 30px;
          font-size: 20px;
          color: "black";
        }
        h1 {
          font-size: 48px;
          text-align: center;
          font-weight: bold;
        }
        span {
          text-align: center;
          display: block;
        }
        p {
          font-size: 20px;
          // font-weight: bold;
          text-align: right;
          display: block;
          width: 100%;
        }
        h2 {
          font-size: 32px;
          font-weight: bold;
        }
        ul {

        }
        li {
          font-size: 24px;
          // list-style: none;
          margin-bottom: 15px;
        }
    </style>
  </head>

  <body>
    <h1>Accomplished goals</h1>
    <span>- Minyoung Bae -</span>
    <p>December 2, 2022 </p>

    <h2>Goal: Find a mentor and seek advide</h2>
    <ul>
      <li>Task 1: Inivte the mentor to participate in usability teset</li>
      <li>Task 2: Get the mentor's advice on how to explain design ideas</li>
    </ul>

    <h2>Goal: Be proactive</h2>
    <ul>
      <li>Task 1: Reaching out to a colleague a few days ahead of a cross-functional deadline to check in on their progress and offer support.</li>
      <li>Task 2: Blocking time on your manager’s calendar well in advance to review an important project.</li>
      <li>Task 3: Creating calendar reminders for recurring tasks you might have forgotten in the past.</li>
    </ul>

    <h2>Goal: Form a good bond with developers</h2>
    <ul>
      <li>Task 1: Know what you need from your colleagues.</li>
      <li>Task 2: Practice active listening.</li>
      <li>Task 3: Make time for your coworkers.</li>
    </ul>
  </body>
  </html>
;
`

const exportPDF = async() => {
const file = await Print.printToFileAsync({
  html: pdf,
  base64: false
  });
await Sharing.shareAsync(file.uri);}


const styles = StyleSheet.create({
  containerStyle: {
    boxShadow: "rgb(0 0 0 / 30%) 0px 0px px",
    backgroundColor: "transparent",
    height: "100%",
    width: "100%",
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },

  scroll: {
    overflow: "hidden",
  },

  btnbox: {
    width: 220,
    marginTop: 40,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },

  methodbtn_1: {
    width: 104,
    height: 104,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 0,
    alignItems: "center",
  },

  expBtn_cont: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "center",
    backgroundColor: "#F3EAE2",
    height: 60,
    paddingTop: 10,
    marginTop: 10,
  },

  expBtn_box: {
    width: "80%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "transparent"
  },

  exportText_1: {
    fontFamily: "Comfortaa",
    fontSize: 14,
    fontWeight: 600,
    display: "flex",
    alignItems: "flex-end",
    textAlign: "center",
    color: "#484644",
    marginTop: 18,
    marginLeft: 13,
  },

  exportText_2: {
    fontFamily: "Comfortaa",
    fontSize: 12,
    display: "flex",
    alignItems: "flex-end",
    textAlign: "center",
    color: "#484644",
    marginTop: 2,
    marginLeft: 10,
  },

  img_1: {
    width: 46,
    height: 46,
    marginTop: 18,
    marginBottom: 5,
  },

  img_2: {
    width: 37,
    height: 31,
    marginTop: 24,
    marginBottom: 14,
  },

  img_3: {
    width: 58,
    height: 58,
    marginTop: 12,
  },

  img_4: {
    width: 52,
    height: 59,
    marginTop: 10,
  },

  btnText: {
    fontFamily: "Comfortaa",
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: 16,
    lineHeight: 16,
    display: "flex",
    alignItems: "center",
    textAlign: "center",
    color: "#000000",
  },

  methodbtn_2: {
    width: 104,
    height: 104,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 30,
    backgroundColor: "#484644",
    alignItems: "center",
  },

  methodbtn_3: {
    width: 104,
    height: 104,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    backgroundColor: "#484644",
    alignItems: "center",
  },

  methodbtn_4: {
    width: 104,
    height: 104,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 30,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    backgroundColor: "#484644",
    alignItems: "center",
  },

  bggate_outside: {
    position: "relative",
    padding: 10,
    width: 330,
    height: 450,
    borderTopLeftRadius: 180,
    borderTopRightRadius: 180,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: "8%",
  },

  bggate: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 310,
    height: 430,
    margin: 10,
    justifyContent: "center",
    alignItems: "center",
    borderTopLeftRadius: 180,
    borderTopRightRadius: 180,
    borderColor: "#F3EAE2",
    borderWidth: 1,
  }
});

export default function Wins({
  navigation,
  action,
  }) {
  const [visible, setVisible] = React.useState(false);
  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const { colors } = useTheme();
  return (
    <Provider>
      <Portal>
        <Prof_Window nav={navigation} />
        <Wrapper>
          <Text
            style={{
              fontFamily: "Leky",
              fontSize: 25,
              color: "#484644",
            }}
          >
            Export Wins
          </Text>

          <Text
            style={{
              fontFamily: "Comfortaa",
              fontSize: 15,
              color: "#484644",
              marginTop: 10,
            }}
          >
            Long Term Goal
          </Text>

          <Text
            style={{
              fontFamily: "Comfortaa",
              fontSize: 15,
              color: "#484644",
              marginVertical: 10,
            }}
          >
            Choose your category
          </Text>

          <View
            style={{ height: "60%" }}
            >
            <ScrollView style={styles.scroll}>
              <Goalwinscard taskName="Find a mentor and seek advice" />
              <Goalwinscard taskName="Be proactive" />
              <Goalwinscard taskName="Keep Training" />
              <Goalwinscard taskName="From a good bond with developers" />
            </ScrollView>
          </View>

          <View
            style={styles.expBtn_cont}>
            <View
              style={styles.expBtn_box}
              >
              <Export_Selected
                action={showModal} />
              <Export_All
                action={showModal} />
            </View>
          </View>

          <Footer_Menu action={navigation}></Footer_Menu>

          <Modal
            visible={visible}
            onDismiss={hideModal}
            contentContainerStyle={styles.containerStyle}
            animationType="slide"
          >
            <BlurView
              blurType="light"
              style={{
                height: "120%",
                justifyContent: "center",
                // backgroundColor: "pink",
                display: "flex",
                marginTop: -50,
              }}>
              <View style={[styles.bggate_outside, {
                backgroundColor: colors.text,
              }]}>
                <View style={[styles.bggate, {
                backgroundColor: "transparent",
              }]}>
                  <View style={styles.border}>
                    <Text
                      style={{
                        color: "#F2E4D9",
                        fontFamily: "Comfortaa",
                        fontSize: 16,
                        marginTop: 40,
                        fontStyle: 24,
                      }}
                    >
                      Choose Your
                    </Text>
                    <Text
                      style={{
                        color: "#F2E4D9",
                        fontFamily: "Leky",
                        fontSize: 20,
                      }}
                    >
                      Export Method
                    </Text>

                    <View style={styles.btnbox}>
                      <TouchableOpacity
                        style={[styles.methodbtn_1, {
                          backgroundColor: colors.card,
                        }]}
                        onPress={exportPDF}
                      >
                        <Image
                          style={styles.img_1}
                          source={require("../assets/SC_Wins/export_pdf.png")}
                        ></Image>
                        <Text style={styles.btnText}>PDF</Text>
                      </TouchableOpacity>

                      <TouchableOpacity
                        style={[styles.methodbtn_2, {
                          backgroundColor: colors.card,
                        }]}
                        onPress={hideModal}
                      >
                        <Image
                          style={styles.img_2}
                          source={require("../assets/SC_Wins/export_email.png")}
                        ></Image>
                        <Text style={styles.btnText}>Email</Text>
                      </TouchableOpacity>

                      {/* <TouchableOpacity
                        style={styles.methodbtn_3}
                        onPress={hideModal}
                      >
                        <Image
                          style={styles.img_3}
                          source={require("../assets/svg/instagram.png")}
                        ></Image>
                        <Text style={styles.btnText}>Instagram</Text>
                      </TouchableOpacity>
                      <TouchableOpacity
                        style={styles.methodbtn_4}
                        onPress={hideModal}
                      >
                        <Image
                          style={styles.img_4}
                          source={require("../assets/svg/message.png")}
                        ></Image>
                        <Text style={styles.btnText}>Message</Text>
                      </TouchableOpacity> */}
                    </View>
                  </View>
                </View>
              </View>
            </BlurView>
          </Modal>
        </Wrapper>
      </Portal>
    </Provider>
  );
}
