import { View, StyleSheet } from "react-native";
import QuestionAttachment from "./QuestionAttachment.jsx";
import Question from "./Question.jsx";
import Answer from "./Answer.jsx";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

export default function Content(props) {
	return (
		<KeyboardAwareScrollView>
			<Question quiz={props.quiz} />
			<QuestionAttachment quiz={props.quiz} />
			<Answer answer_user={props.answer_user} input={props.input} />
		</KeyboardAwareScrollView>
	);
}
