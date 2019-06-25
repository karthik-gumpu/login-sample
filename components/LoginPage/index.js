import React, { PureComponent } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  Button
} from "react-native";
import { Card } from "react-native-elements";
import { TextField } from "react-native-material-textfield";
import styles from "./styles";
class LoginPage extends PureComponent {
  constructor() {
    super();
    this.state = {
      email: "",
      password: ""
    };
  }
  render() {
    return (
      <ImageBackground
        source={require("../../images/loginBackground.jpg")}
        style={styles.mainContainer}
      >
        <Card containerStyle={styles.card}>
          <Image
            source={require("../../images/logo.png")}
            style={styles.logo}
          />
          <TextField
            label="Email"
            value={this.state.email}
            onChangeText={(email) => this.setState({ email })}
            inputContainerStyle={styles.input}
          />
          <TextField
            label="Password"
            value={this.state.password}
            onChangeText={(password) => this.setState({ password })}
            inputContainerStyle={styles.input}
            secureTextEntry
          />
          <View style={styles.footer}>
            <Text style={styles.rememberMe}>Remember me</Text>
            <Button title="Login" style={styles.loginButton} />
          </View>
          <View style={styles.signUpAndPassword}>
            <Text style={styles.signUp}>Sign up</Text>
            <Text style={styles.forgotPassword}>Forgot password</Text>
          </View>
          <Image
            source={require("../../images/logo.png")}
            style={styles.logo}
          />
          <Text style={styles.termsAndConditions}>
            By Logging in you agree to our\nTerms and Conditions and Privacy
            policy
          </Text>
        </Card>
      </ImageBackground>
    );
  }
}

export default LoginPage;
