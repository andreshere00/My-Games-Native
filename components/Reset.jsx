import React from "react";
import { TouchableHighlight, Text, StyleSheet } from "react-native";

export default function Reset(props) {
	function click() {
		props.resetClick();
	}

	return (
		<TouchableHighlight
			onPress={click}
			style={styles.button}
			underlayColor="orange"
		>
			<Text style={styles.text}>Reset</Text>
		</TouchableHighlight>
	);
}

const styles = StyleSheet.create({
	button: {
		borderWidth: 1,
		borderColor: "black",
		backgroundColor: "#eee",
		fontSize: 25,
		textAlign: "center",
		padding: 10,
	},
	text: { textAlign: "center" },
});
