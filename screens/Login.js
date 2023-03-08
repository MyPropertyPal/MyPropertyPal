import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
function Login({navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <Text style={styles.title}>Login to MyPropertyPal</Text>
        <Button title="SignUp" onPress={()=>{
          navigation.navigate('SignUp')
        }}/>
      </View>
    </View>
  );
}

export default Login;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    height: "100%",
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  form: {
    backgroundColor: "grey",
    height: "50%",
    width: "75%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
  buttonContainer: {
    width: 200,
    height: 58,
    marginHorizontal: 20,
    alignItems: "center",
    justifyContent: "center",
    padding: 3,
  },
  button: {
    borderRadius: 10,
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    backgroundColor: "white",
  },
  title: {
    paddingBottom: 10
  }
});
