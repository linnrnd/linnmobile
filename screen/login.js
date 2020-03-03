import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity
} from "react-native";
import * as Font from "expo-font";

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fontLoaded: false
    };
  }
  async componentDidMount() {
    await Font.loadAsync({
      Fertigo_PRO: require("../assets/fonts/Fertigo_PRO.otf")
    });
    this.setState({ fontLoaded: true });
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.secondContainer}>
          <Image
            source={require("../assets/Icons/linnlogo.png")}
            style={styles.img}
          />
          <Text
            style={{ marginTop: 10, fontFamily: "Fertigo_PRO", fontSize: 18 }}
          >
            IT,Mobile & Electronic Mart
          </Text>
          <Text
            style={{ marginTop: 30, fontFamily: "Fertigo_PRO", fontSize: 15 }}
          >
            Please Login
          </Text>
          <TextInput style={styles.textInput}>
            Enter your phone number
          </TextInput>
          <TouchableOpacity style={styles.touch}>
            <Text
              style={{
                fontFamily: "Fertigo_PRO",
                fontSize: 15,
                color: "#FFFFFF"
              }}
            >
              Login
            </Text>
          </TouchableOpacity>
          <Text style={{ margin: 10, fontFamily: "Fertigo_PRO", fontSize: 13 }}>
            or
          </Text>
          <TouchableOpacity
            style={styles.touchCreate}
            onPress={()=>this.props.navigation.navigate("Register")}
          >
            <Text
              style={{
                fontFamily: "Fertigo_PRO",
                fontSize: 15,
                color: "#FFFFFF"
              }}
            >
              Create New User
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  secondContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "20%"
  },
  img: {
    width: 180,
    height: 100
  },
  textInput: {
    borderWidth: 1,
    margin: 10,
    width: 250,
    height: 45,
    borderRadius: 5,
    textAlign: "center",
    marginTop: 20,
    fontFamily: "Fertigo_PRO",
    fontSize: 15,
    color: "#22B6EE",
    borderColor: "#22B6EE"
  },
  touch: {
    borderWidth: 1,
    width: 70,
    height: 30,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#22B6EE",
    borderColor: "#22B6EE"
  },
  touchCreate: {
    borderWidth: 1,
    width: 250,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    backgroundColor: "#9074EF",
    borderColor: "#9074EF"
  }
});
