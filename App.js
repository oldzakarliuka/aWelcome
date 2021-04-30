import React, { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

export default function App() {
  const [count, setCount] = useState(0);

  const styleContainer = () => {
    const style = {
      flex: 1,
      backgroundColor: "#fff",
    };
    if (count > 30) {
      style.backgroundColor = "#F8DF77";
    } else if (count > 20) {
      style.backgroundColor = "#F9F3DE";
    } else if (count > 10) {
      style.backgroundColor = "#FF4E62";
    }
    return style;
  };

  const onBtnClick = () => setCount(count + 1);
  const onResetClick = () => setCount(0);

  return (
    <View style={styleContainer()}>
      <View style={styles.center}>
        <Text style={styles.text}>Clicked {count} times</Text>
      </View>

      <View style={styles.bottom}>
        <Button style={styles.button} onPress={onBtnClick} title="click me" />
        <Button style={styles.button} onPress={onResetClick} title="reset" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 24,
  },
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  bottom: {
    flex: 1,
    justifyContent: "center",
  },
  button: {
    backgroundColor: "#000000",
    color: "#ffffff",
  },
});
