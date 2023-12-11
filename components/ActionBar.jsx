import ActionButton from "./ActionButton";
import { View, StyleSheet, Text } from "react-native";

export default function ActionBar(props) {
	return (
		<View>
			<View style={styles.container}>
				<ActionButton title="BACK" onPress={props.back} />
				<ActionButton title="SUBMIT" onPress={props.submit} />
				<ActionButton title="NEXT" onPress={props.next} />
			</View>
			<View style={styles.container2}>
				<ActionButton title="RESET" onPress={props.reset} />
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		justifyContent: "space-evenly",
	},
	container2: {
		flexDirection: "row",
		justifyContent: "space-evenly",
		paddingTop: 20,
	},
});
