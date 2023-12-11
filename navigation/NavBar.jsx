import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../pages/Home";
import TicTacToe from "../pages/TicTacToe";
import Quiz from "../pages/Quiz";

const Stack = createNativeStackNavigator();

export default function NavBar() {
	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen name="Home" component={Home} />
				<Stack.Screen name="TicTacToe" component={TicTacToe} />
				<Stack.Screen name="Quiz" component={Quiz} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}
