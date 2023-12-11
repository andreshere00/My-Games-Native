import { Text, View, Image, Button, TextInput, StyleSheet } from "react-native";

export default function Home({ navigation }) {
	return (
		<View>
			<View>
				<Button
					title="TicTacToe"
					color="#FFA500"
					onPress={() => navigation.navigate("TicTacToe")}
					style={styles.button}
				/>
				<Button
					title="Quiz"
					color="#FFA500"
					onPress={() => navigation.navigate("Quiz")}
					style={styles.button}
				/>
			</View>
			<Text style={styles.h1}>
				{"Hola, Bienvenido a la página web de Minijuegos en React."}
			</Text>
			<Text style={styles.h2}>
				En esta página podrás jugar a diferentes juegos. Haz click en la pestaña
				del juego al que quieras jugar.{"\n"}
			</Text>
			<View>
				<Image
					resizeMode="contain"
					style={{
						width: "100%",
						height: 400,
						justifyContent: "center",
						alignItems: "center",
					}}
					source={require("../assets/images/homeimg.png")}
				/>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	h1: {
		fontSize: 20,
		fontWeight: "bold",
		textAlign: "center",
	},
	h2: {
		fontSize: 15,
		flexWrap: "wrap",
		textAlign: "center",
	},
	button: {
		marginHorizontal: 16,
	},
});
