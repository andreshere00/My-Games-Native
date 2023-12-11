import React from "react";
import {
	View,
	TouchableHighlight,
	ScrollView,
	StyleSheet,
	Text,
} from "react-native";

export default function (props) {
	return (
		<View style={styles.container}>
			<Text allowFontScaling={false} style={styles.text1}>
				Tu Puntuación es: {props.score}
			</Text>
			<TouchableHighlight
				style={styles.button}
				onPress={props.reset}
				underlayColor="#ba7800"
			>
				<Text style={styles.text}>Jugar de nuevo</Text>
			</TouchableHighlight>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
		paddingHorizontal: 10,
	},
	button: {
		alignItems: "center",
		backgroundColor: "#ffa500",
		padding: 10,
		width: 300,
		borderWidth: 1,
		borderColor: "#ffffff",
	},
	text: {
		fontSize: 20,
		textAlign: "center",
		color: "#ffffff",
		fontWeight: "bold",
	},
	text1: {
		fontSize: 20,
	},
});
