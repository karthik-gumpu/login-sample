import { StyleSheet } from "react-native";

export default StyleSheet.create({
  card: {
    height: "90%",
    width: "90%",
    alignItems: "center"
  },
  mainContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  logo: {
    width: 100,
    height: 100,
    alignSelf: "center"
  },
  input: {
    width: 200,
    paddingTop: 0,
    padding: 0,
    paddingVertical: 0
  },
  footer: {
    flexDirection: "row",
    flex: 1,
    justifyContent: "space-between"
  },
  loginButton: {
    alignSelf: "flex-end"
  },
  rememberMe: {
    flex: 1,
    color: "blue"
  },
  signUpAndPassword: {
    flex: 1,
    justifyContent: "space-between",
    flexDirection: "row",
    marginTop: 10
  },
  signUp: {
    color: "blue"
  },
  forgotPassword: {
    color: "blue"
  },
  termsAndConditions: {
    textAlign: "center"
  }
});
