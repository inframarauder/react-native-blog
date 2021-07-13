import React, { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Context as BlogContext } from "../contexts/BlogContext";

const ShowScreen = ({ navigation }) => {
	const { state } = useContext(BlogContext);

	const blogPost = state.find((post) => post.id === navigation.getParam("id"));

	return (
		<View style={styles.container}>
			<Text style={styles.title}>{blogPost.title}</Text>
			<Text style={styles.content}>{blogPost.content}</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		padding: 10,
		flex: 1,
		alignItems: "center",
	},
	title: {
		marginVertical: 10,
		fontSize: 24,
		textDecorationLine: "underline",
	},
	content: {
		padding: 10,
		margin: 5,
		fontSize: 18,
		textAlign: "justify",
	},
});
export default ShowScreen;
