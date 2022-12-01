import * as React from "react";
import {
  View,
  TouchableOpacity,
  Image,
  StyleSheet,
  Text,
  TextInput,
} from "react-native";
import { Button, IconButton } from "react-native-paper";
("react-native");
import { useTheme } from "@react-navigation/native";
import { List } from "react-native-paper";
import { Picker } from "@react-native-picker/picker";

const styles = StyleSheet.create({
  popuptitle: {
    color: "#484644",
    padding: 10,
    fontSize: 18,
    textAlign: "center",
    fontFamily: "Comfortaa",
    fontWeight: "bold",
    marginTop: 20,
  },

  maintitlecont: {
    height: "20%",
    width: "40%",
  },

  maintitle: {
    resizeMode: "contain",
    height: 100,
    width: 200,
  },

  contentcont: {
    width: "90%",
  },

  input: {
    fontSize: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#484644",
    fontFamily: "Comfortaa",
    color: "#8E8E8E",
    marginTop: 10,
  },

  buttoncont: {
    flexDirection: "row",
    marginTop: 50,
    alignItems: "center",
    justifyContent: "center"
  },

  btn: {
    flex: 1,
    width: 100,
    height: 32,
    border: "1px solid #484644",
    borderRadius: 25,
    marginHorizontal: 30,
    justifyContent: "center"
  },

  buttontxt: {
    color: "#484644",
    fontFamily: "Comfortaa",
    fontSize: 16,
    fontWeight: 600,
  },
  picker: {
    backgroundColor: "#F3EAE2",
    color: "#484644",
    fontFamily: "Comfortaa",
    marginTop: "0.5em",
    marginBottom: "0.5em",
    border: "none",
    justifyContent: "space-between",
  },
});

export default function AddGoalPopup({ action, hide }) {
  const { colors } = useTheme();
  const [currentJob, onCurrentJob] = React.useState();
  const [idealJob, onIdealJob] = React.useState();
  const [setpnum, setStepNum] = React.useState(1);
  const [selectedCategory, setSelectedCategory] = React.useState("Pick a category");
  const [task, onTask] = React.useState();
  const [Month, setMonth] = React.useState();
  const [Date, setDate] = React.useState();
  const [Year, setYear] = React.useState();
  const [Time, setTime] = React.useState();
  const [Hour, setHour] = React.useState();
  const [Minute, setMinute] = React.useState();
  const [goalObj, setGaolObj] = useState({})

  const onNext = () => {
    console.log("Next")
    setStepNum(setpnum + 1);
  };

  const onBack = () => {
    setStepNum(setpnum - 1);
  };
  const addGoal = async () => {
    await db.collection("goals").add(goalObj)
  }
  const saveGoal = async () => {setGoal({ currentJob: currentJob, idealJob: idealJob, setpnum: setpnum, selectedCategory: selectedCategory, task: task, Date: Date, Year: Year, Month: Month, Time: Time, Hour: Hour, Minute: Minute}

  )
  addGoal()

  console.log(await db.collection("goals").where("userEmail", "==", auth.currentUser.userEmail).get().then((querySnapshot) => {return querySnapshot.docs}))

  // action()
}

  // {goalString: "your goal string", goalSteps: "total ongoing task steps", goalCompleted: "total complete ongoing task  part"}

  return (
    <View
      style={{
        backgroundColor: colors.background,
        width: "100%",
        opacity: 1,
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: -4 },
        borderTopLeftRadius: 200,
        borderTopRightRadius: 200,
        height: "80%",
        alignItems: "center",
        position: "absolute",
        bottom: 0,
      }}
    >
      <Text style={styles.popuptitle}>Create Goals</Text>

      <View style={styles.maintitlecont}>
        {setpnum === 0 && (
          <Image
            style={styles.maintitle}
            source={require("../../assets/common/create_goals/0_jobtitle.png")}
          />
        )}
        {setpnum === 1 && (
          <Image
            style={styles.maintitle}
            source={require("../../assets/common/create_goals/1_goalssetting.png")}
          />
        )}
        {setpnum === 2 && (
          <Image
            style={styles.maintitle}
            source={require("../../assets/common/create_goals/2_smalltasks.png")}
          />
        )}
        {setpnum === 3 && (
          <Image
            style={styles.maintitle}
            source={require("../../assets/common/create_goals/3_notificationsetting.png")}
          />
        )}
      </View>

      <View style={styles.contentcont}>
        {setpnum === 0 && (
          <View>
            <Text
              style={{
                color: "#484644",
                fontFamily: "Comfortaa",
                fontSize: 18,
                marginTop: 15,
              }}
            >
              Your current job title
            </Text>
            <IconButton
              icon="magnify"
              iconColor={colors.text}
              style={{ position: "absolute", right: 0, bottom: 0 }}
            ></IconButton>
            <TextInput
              style={styles.input}
              onChangeText={onCurrentJob}
              value={currentJob}
            />
          </View>
        )}
        {setpnum === 0 && (
          <View>
            <Text
              style={{
                color: "#484644",
                fontFamily: "Comfortaa",
                fontSize: 18,
                marginTop: 15,
              }}
            >
              Your ideal job title
            </Text>
            <IconButton
              icon="magnify"
              iconColor={colors.text}
              style={{ position: "absolute", right: 0, bottom: 0 }}
            ></IconButton>
            <TextInput
              style={styles.input}
              onChangeText={onIdealJob}
              value={idealJob}
            />
          </View>
        )}

        {setpnum === 1 && (
          <View style={styles.pickercont}>
            <Picker
              style={{
                backgroundColor: "#F3EAE2",
                // backgroundColor: colors.background,
                borderBottomColor: "#484644",
                color: "#484644",
                fontFamily: "Comfortaa",
                fontSize: 20,
                marginTop: "1em"
              }}
              selectedValue={selectedCategory}
              onValueChange={(itemValue, itemIndex) =>
                setSelectedCategory(itemValue)
              }
            >
              <Picker.Item
                style={{
                  color: "#484644",
                  fontFamily: "Comfortaa",
                }}
                label="Readership skills"
                value="Redear"
              />
              <Picker.Item
                style={{
                  color: "#484644",
                  fontFamily: "Comfortaa",
                }}
                label="Communication skills"
                value="Communication"
              />
              <Picker.Item
                style={{
                  color: "#484644",
                  fontFamily: "Comfortaa",
                }}
                label="Time management skills"
                value="Time"
              />
              <Picker.Item
                style={{
                  color: "#484644",
                  fontFamily: "Comfortaa",
                }}
                label="Add more.."
                value="Add"
              />
            </Picker>
          </View>
        )}

        {setpnum === 2 && (
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-around",
              alignItems: "center",
              marginTop: "1em"
            }}
          >
            <View>
              <Image
                style={{ height: 25, width: 25, resizeMode: "contain" }}
                source={require("../../assets/common/create_goals/icon_task.png")}
              />
            </View>
            <View style={{ flexDirection: "column", flex: 0.7 }}>
              <View>
                <Text style={{ color: "#484644", fontFamily: "Comfortaa" }}>
                  <Text style={{ fontWeight: "bold" }}>Task</Text> (required)
                </Text>
                <TextInput
                  style={styles.input}
                  onChangeText={onTask}
                  value={task}
                />
              </View>
            </View>
          </View>
        )}

        {setpnum === 2 && (
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-around",
              alignItems: "center",
              marginTop: "1.5em",
            }}
          >
            <View>
              <Image
                style={{ height: 25, width: 25, resizeMode: "contain" }}
                source={require("../../assets/common/create_goals/icon_date.png")}
              />
            </View>
            <View style={{ flexDirection: "column", flex: 0.7 }}>
              <View>
                <Text style={{ color: "#484644", fontFamily: "Comfortaa" }}>
                  <Text style={{ fontWeight: "bold" }}>Deadline</Text>{" "}
                  (optional)
                </Text>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    flex: 1,
                    padding: "0.1em",
                    borderBottomColor: "#484644",
                    borderBottomWidth: 1
                  }}
                >
                  <View
                    style={{ flex: 0.4 }}>
                    <Picker
                      style={[styles.picker, {
                        // backgroundColor: colors.background,
                      }]}
                      selectedValue={Month}
                      onValueChange={(itemValue, itemIndex) =>
                        setMonth(itemValue)
                      }
                    >
                      <Picker.Item label="Month" color="#484644" value="0" />
                      <Picker.Item label="January" value="1" />
                      <Picker.Item label="February" value="2" />
                      <Picker.Item label="March" value="3" />
                      <Picker.Item label="April" value="4" />
                      <Picker.Item label="May" value="5" />
                      <Picker.Item label="June" value="6" />
                      <Picker.Item label="July" value="7" />
                      <Picker.Item label="August" value="8" />
                      <Picker.Item label="September" value="9" />
                      <Picker.Item label="October" value="10" />
                      <Picker.Item label="November" value="11" />
                      <Picker.Item label="December" value="12" />
                    </Picker>
                  </View>

                  <View style={{ flex: 0.4 }}>
                    <Picker
                      style={styles.picker}
                      selectedValue={Date}
                      onValueChange={(itemValue, itemIndex) =>
                        setDate(itemValue)
                      }
                    >
                      <Picker.Item label="Date" value="0" />
                      <Picker.Item label="1" value="1" />
                      <Picker.Item label="2" value="2" />
                      <Picker.Item label="3" value="3" />
                      <Picker.Item label="4" value="4" />
                      <Picker.Item label="5" value="5" />
                      <Picker.Item label="6" value="6" />
                      <Picker.Item label="7" value="7" />
                      <Picker.Item label="8" value="8" />
                      <Picker.Item label="9" value="9" />
                      <Picker.Item label="10" value="10" />
                      <Picker.Item label="11" value="11" />
                      <Picker.Item label="12" value="12" />
                      <Picker.Item label="13" value="13" />
                      <Picker.Item label="14" value="14" />
                      <Picker.Item label="15" value="15" />
                      <Picker.Item label="16" value="16" />
                      <Picker.Item label="17" value="17" />
                      <Picker.Item label="18" value="18" />
                      <Picker.Item label="19" value="19" />
                      <Picker.Item label="20" value="20" />
                      <Picker.Item label="21" value="21" />
                      <Picker.Item label="22" value="22" />
                      <Picker.Item label="23" value="23" />
                      <Picker.Item label="24" value="24" />
                      <Picker.Item label="25" value="25" />
                      <Picker.Item label="26" value="26" />
                      <Picker.Item label="27" value="27" />
                      <Picker.Item label="28" value="28" />
                      <Picker.Item label="29" value="29" />
                      <Picker.Item label="30" value="30" />
                      <Picker.Item label="31" value="31" />
                    </Picker>
                  </View>

                  <View style={{ flex: 0.4 }}>
                    <Picker
                      style={styles.picker}
                      selectedValue={Year}
                      onValueChange={(itemValue, itemIndex) =>
                        setYear(itemValue)
                      }
                    >
                      <Picker.Item label="Year" value="0" />
                      <Picker.Item label="2021" value="2021" />
                      <Picker.Item label="2022" value="2021" />
                      <Picker.Item label="2023" value="2022" />
                      <Picker.Item label="2024" value="2024" />
                    </Picker>
                  </View>
                </View>
              </View>
            </View>
          </View>
        )}

        {setpnum === 2 && (
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-around",
              alignItems: "center",
              marginTop: "1.5em",
            }}
          >
            <View>
              <Image
                style={{ height: 25, width: 25, resizeMode: "contain" }}
                source={require("../../assets/common/create_goals/icon_time.png")}
              />
            </View>
            <View style={{ flexDirection: "column", flex: 0.7 }}>
              <View style={{ borderBottomColor: "#484644", borderBottomWidth: 1 }}>
                <Text style={{ color: "#484644", fontFamily: "Comfortaa" }}>
                  <Text style={{ fontWeight: "bold" }}>Time Limit</Text>{" "}
                  (optional)
                </Text>
                <Picker
                  style={styles.picker}
                  selectedValue={Time}
                  onValueChange={(itemValue, itemIndex) => setTime(itemValue)}
                >
                  <Picker.Item label="Time" color="gray" value="0" />
                  <Picker.Item label="10 mins" value="10" />
                  <Picker.Item label="15 mins" value="15" />
                  <Picker.Item label="20 mins" value="20" />
                  <Picker.Item label="30 mins" value="30" />
                  <Picker.Item label="40 mins" value="40" />
                  <Picker.Item label="50 mins" value="50" />
                  <Picker.Item label="1 hour" value="60" />
                </Picker>
              </View>
            </View>
          </View>
        )}

        {setpnum === 3 && (
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-around",
              alignItems: "center",
              marginTop: "1.5em",
            }}
          >
            <View>
              <Image
                style={{ height: 25, width: 25, resizeMode: "contain" }}
                source={require("../../assets/common/create_goals/icon_time.png")}
              />
            </View>
            <View style={{ flexDirection: "column", flex: 0.7 }}>
              <View>
                <Text style={{ color: "#484644", fontFamily: "Comfortaa" }}>
                  <Text Text style={{ fontWeight: "bold" }}>
                    Time Setting
                  </Text>
                </Text>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    flex: 1,
                    padding: "0.1em",
                    borderBottomColor: "#484644",
                    borderBottomWidth: 1
                  }}
                >
                  <View style={{ flex: 0.5 }}>
                    <Picker
                      style={styles.picker}
                      selectedValue={Hour}
                      onValueChange={(itemValue, itemIndex) =>
                        setHour(itemValue)
                      }
                    >
                      <Picker.Item label="HH" value="0" />
                      <Picker.Item label="05" value="05" />
                      <Picker.Item label="06" value="06" />
                      <Picker.Item label="07" value="07" />
                      <Picker.Item label="08" value="08" />
                      <Picker.Item label="09" value="09" />
                      <Picker.Item label="10" value="10" />
                      <Picker.Item label="11" value="11" />
                      <Picker.Item label="12" value="12" />
                      <Picker.Item label="13" value="13" />
                      <Picker.Item label="14" value="14" />
                      <Picker.Item label="15" value="15" />
                      <Picker.Item label="16" value="16" />
                      <Picker.Item label="17" value="17" />
                      <Picker.Item label="18" value="18" />
                      <Picker.Item label="19" value="19" />
                      <Picker.Item label="20" value="20" />
                      <Picker.Item label="21" value="21" />
                      <Picker.Item label="22" value="22" />
                      <Picker.Item label="23" value="23" />
                      <Picker.Item label="24" value="24" />
                      <Picker.Item label="01" value="01" />
                      <Picker.Item label="02" value="02" />
                      <Picker.Item label="03" value="03" />
                      <Picker.Item label="04" value="04" />
                    </Picker>
                  </View>

                  <View style={{ flex: 0.5 }}>
                    <Picker
                      style={styles.picker}
                      selectedValue={Minute}
                      onValueChange={(itemValue, itemIndex) =>
                        setMinute(itemValue)
                      }
                    >
                      <Picker.Item label="MM" value="0" />
                      <Picker.Item label="00" value="00" />
                      <Picker.Item label="05" value="05" />
                      <Picker.Item label="10" value="10" />
                      <Picker.Item label="15" value="15" />
                      <Picker.Item label="20" value="20" />
                      <Picker.Item label="25" value="25" />
                      <Picker.Item label="30" value="30" />
                      <Picker.Item label="35" value="35" />
                      <Picker.Item label="40" value="40" />
                      <Picker.Item label="45" value="45" />
                      <Picker.Item label="50" value="50" />
                      <Picker.Item label="55" value="55" />
                    </Picker>
                  </View>
                </View>
              </View>
            </View>
          </View>
        )}
      </View>

      <View style={styles.buttoncont}>
        {setpnum > 0 && (
          <Button style={styles.btn}
          // onPress={onBack}
          >
            <Text style={[styles.buttontxt, {backgroundColor: "black"}]}>Back</Text>
          </Button>
        )}

        {setpnum < 3 && (
          <Button style={styles.btn}
          // onPress={onNext}
          >
            <Text style={styles.buttontxt}>Next</Text>
          </Button>
        )}

        {setpnum === 3 && (
          <Button style={styles.btn}
          // onPress={saveGoal}
          // onPressOut={hide}
          >
            <Text style={styles.buttontxt}>Done</Text>
          </Button>
        )}
      </View>

      <View style={styles.stepcont}></View>
      {setpnum === 0 && (
        <Image
          style={{
            position: "absolute",
            margin: 40,
            right: 0,
            bottom: 0,
            width: "30%",
            height: "40%",
            resizeMode: "contain",
          }}
          source={require("../../assets/SC_Goals/widget_flower.png")}
        />
      )}
    </View>
  );
}
