import React, { useState, useEffect } from "react";
import { Text, View, Image, ScrollView } from "react-native";
import Game from "../components/Game";
import Result from "../components/Result";

export default function Quiz(props) {
	const [score, setScore] = useState(0);
	const [finished, setFinished] = useState(false);
	const [currentQuiz, setCurrentQuiz] = useState(0);
	const [quiz, setQuiz] = useState([]);
	const [answer, setAnswer] = useState([]);
	const [loaded, setLoaded] = useState(false);
	const [input, setInput] = useState("");
	//console.log(quiz);

	useEffect(() => {
		const getQuizzes = async () => {
			const response = await fetch(
				"https://core.dit.upm.es/api/quizzes/random10wa?token=6f226febf9eb9f2fe02a"
			);
			const quizzes = await response.json();
			if (quizzes.length === 0) {
				setQuiz(local.quizzes);
				local.quizzes.map((quiz) => answer.push(quiz.answer));
				setLoaded(true);
				alert(
					"Los quizzes no han sido cargados del servidor. Es por ello por lo que hemos cargado unos quizzes de reserva de nuestro archivo local."
				);
			}
			setQuiz(quizzes);
			quizzes.map(() => answer.push(""));
			setLoaded(true);
		};
		getQuizzes();
	}, []);

	const answer_user = (answer) => {
		setInput(answer);
		quiz[currentQuiz].userAns = answer;
	};

	const backItem = () => {
		currentQuiz === 0
			? setCurrentQuiz(currentQuiz)
			: setCurrentQuiz(currentQuiz - 1);
		setInput("");
	};

	const nextItem = () => {
		currentQuiz === 9
			? setCurrentQuiz(currentQuiz)
			: setCurrentQuiz(currentQuiz + 1);
		setInput("");
	};

	const removeAnswer = () => {
		setAnswer([]);
	};

	const submitItem = () => {
		let s = 0;
		quiz.map((quiz) => {
			if (!(quiz.userAns === undefined)) {
				if (quiz.answer.toLowerCase() === quiz.userAns.toLowerCase()) {
					s++;
				}
			}
		});
		//console.log(answer)
		setScore(s);
		setFinished(true);
		removeAnswer();
	};

	const resetItem = async () => {
		setFinished(false);
		setLoaded(false);
		setScore(0);
		setInput("");
		setAnswer([]);
		const response = await fetch(
			"https://core.dit.upm.es/api/quizzes/random10wa?token=6f226febf9eb9f2fe02a"
		);
		const quizzes = await response.json();
		if (quizzes.length === 0) {
			setQuiz(local.quizzes);
			local.quizzes.map((quiz) => answer.push(quiz.answer));
			setLoaded(true);
			alert(
				"Los quizzes no han sido cargados del servidor. Es por ello por lo que hemos cargado unos quizzes de reserva de nuestro archivo local."
			);
		}
		setQuiz(quizzes);
		//console.log(quizzes);
		setAnswer(["", "", "", "", "", "", "", "", "", ""]);
		setCurrentQuiz(0);
		setLoaded(true);
	};
	if (finished === false) {
		if (loaded === true) {
			return (
				<ScrollView>
					<View>
						<Game
							currentQuiz={currentQuiz}
							quiz={quiz[currentQuiz]}
							answer_user={answer_user}
							back={backItem}
							next={nextItem}
							submit={submitItem}
							input={input}
							reset={resetItem}
						/>
					</View>
				</ScrollView>
			);
		} else {
			return (
				<View>
					<Text
						style={{
							textAlign: "center",
							color: "#ffa500",
							fontSize: 20,
							marginTop: 15,
							fontWeight: "bold",
						}}
					>
						Loading quizzes...
					</Text>
				</View>
			);
		}
	} else {
		return <Result reset={resetItem} score={score} />;
	}
}
