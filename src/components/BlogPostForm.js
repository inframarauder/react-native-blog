import React, { useState } from "react";
import {
	View,
	Text,
	TextInput,
	StyleSheet,
	TouchableOpacity,
} from "react-native";

const BlogPostForm = ({ onSubmit, blogPost = null }) => {
	const [title, setTitle] = useState(blogPost?.title || "");
	const [content, setContent] = useState(blogPost?.content || "");

	return (
		<View style={styles.container}>
			<Text style={styles.caption}>Create/Edit Post</Text>
			<Text style={styles.label}>Enter title:</Text>
			<TextInput
				style={styles.textInput}
				autoCorrect={false}
				value={title}
				onChangeText={(text) => setTitle(text)}
			/>
			<Text style={styles.label}>Enter content:</Text>
			<TextInput
				style={styles.textInput}
				autoCorrect={false}
				multiline={true}
				numberOfLines={10}
				value={content}
				onChangeText={(text) => setContent(text)}
				textAlignVertical="top"
			/>
			<TouchableOpacity
				style={styles.button}
				onPress={() => onSubmit({ title, content })}
			>
				<Text>Save</Text>
			</TouchableOpacity>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		padding: 10,
		flex: 1,
	},

	caption: {
		fontSize: 20,
		textAlign: "center",
		textDecorationLine: "underline",
		padding: 10,
	},

	label: {
		fontSize: 18,
		padding: 5,
		margin: 5,
	},
	textInput: {
		padding: 10,
		borderWidth: 2,
		borderRadius: 8,
	},
	button: {
		width: 100,
		backgroundColor: "#DDDDDD",
		alignItems: "center",
		padding: 10,
		marginTop: 10,
		marginLeft: 150,
	},
});

export default BlogPostForm;
