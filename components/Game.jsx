import { View } from "react-native";
import Content from "./Content";
import ActionBar from "./ActionBar";

export default function Game(props) {
	return (
		<View style={{ flexDirection: "column", justifyContent: "space-between" }}>
			<Content
				style={{ flex: 1 }}
				quiz={props.quiz}
				input={props.input}
				answer_user={props.answer_user}
			/>
			<ActionBar
				style={{ alignItems: "flex-end" }}
				back={props.back}
				next={props.next}
				submit={props.submit}
				reset={props.reset}
				currentQuiz={props.currentQuiz}
			/>
		</View>
	);
}
