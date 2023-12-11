import { View, Text, StyleSheet } from "react-native";

export default function Question(props) {
	console.log(props);
	return (
		<View style={{ paddingTop: 10, paddingBottom: 10 }}>
			<Text style={styles.question}>{props.quiz.question}</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	question: {
		fontSize: 20,
		fontWeight: "bold",
		textAlign: "center",
		color: "#ffa500",
	},
});
