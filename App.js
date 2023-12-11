import * as React from "react";
import { StyleSheet, Text, Dimensions, View, SafeAreaView } from "react-native";
import NavBar from "./navigation/NavBar";

export default function App() {
	let deviceWidth = Dimensions.get("window").width;
	if (deviceWidth > 900) {
		return (
			<SafeAreaView
				style={{
					flex: 1,
					paddingTop: 30,
					justifyContent: "center",
				}}
			>
				<Text
					style={{
						textAlign: "center",
						fontSize: 25,
						fontWeight: "bold",
						lineHeight: 30,
						paddingLeft: 15,
						fontSize: 40,
						paddingBottom: 20,
					}}
				>
					My games
				</Text>
				<NavBar />
			</SafeAreaView>
		);
	} else {
		return (
			<SafeAreaView
				style={{
					flex: 1,
					paddingTop: 50,
					justifyContent: "center",
				}}
			>
				<Text
					style={{
						textAlign: "center",
						fontSize: 25,
						fontWeight: "bold",
						lineHeight: 30,
						paddingLeft: 15,
						fontSize: 30,
					}}
				>
					My games
				</Text>
				<NavBar />
			</SafeAreaView>
		);
	}
}

var styles = StyleSheet.create({
	linearGradient: {
		flex: 1,
		paddingLeft: 15,
		paddingRight: 15,
		borderRadius: 5,
	},
	buttonText: {
		fontSize: 18,
		fontFamily: "Gill Sans",
		textAlign: "center",
		margin: 10,
		color: "#ffffff",
		backgroundColor: "transparent",
	},
});
