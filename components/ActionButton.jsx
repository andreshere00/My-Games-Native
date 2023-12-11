import { View, Text, TouchableHighlight, StyleSheet } from "react-native";

export default function ActionButton(props) {
	return (
		<View>
			<TouchableHighlight
				style={styles.button}
				onPress={props.onPress}
				underlayColor="#ba7800"
			>
				<Text style={styles.text}>{props.title}</Text>
			</TouchableHighlight>
		</View>
	);
}

const styles = StyleSheet.create({
	button: {
		backgroundColor: "#ffa500",
		padding: 10,
		width: 100,
		borderWidth: 1,
		borderColor: "#ffffff",
	},
	text: {
		fontSize: 14,
		textAlign: "center",
		color: "#ffffff",
		fontWeight: "bold",
	},
});
