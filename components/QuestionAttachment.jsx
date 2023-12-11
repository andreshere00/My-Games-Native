import React from "react";
import { View, Image } from "react-native";

export default function Question(props) {
	const getImage = (props) =>
		props.quiz.attachment === null
			? "https://media.giphy.com/media/LOznMvZUKneOhiIscg/giphy.gif"
			: props.quiz.attachment.url;
	return (
		<View style={{ alignContent: "center", alignItems: "center" }}>
			<Image
				resizeMode="contain"
				style={{
					width: 400,
					height: 350,
				}}
				source={{
					uri: getImage(props),
				}}
			/>
		</View>
	);
}
