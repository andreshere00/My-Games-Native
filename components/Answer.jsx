import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

export default function Answer(props) {
	return (
		<View
			style={{
				alignContent: "center",
				alignItems: "center",
				paddingTop: 10,
				paddingBottom: 10,
			}}
		>
			<TextInput
				style={styles.input}
				placeholder="Enter your answer here"
				onChangeText={props.answer_user}
				value={props.input}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	input: {
		borderWidth: 2,
		borderColor: "#ffa500",
		padding: 10,
		margin: 10,
		width: 320,
		backgroundColor: "#FFFFFF",
		textAlign: "center",
	},
});
