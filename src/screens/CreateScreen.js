import React, { useState, useContext } from "react";
import Toast from "react-native-simple-toast";
import { Context as BlogContext } from "../contexts/BlogContext";
import {
	View,
	Text,
	TextInput,
	StyleSheet,
	TouchableOpacity,
} from "react-native";

const CreateScreen = ({ navigation }) => {
	const [title, setTitle] = useState("");
	const [content, setContent] = useState("");

	const { addBlogPost } = useContext(BlogContext);

	const handleSubmit = () => {
		addBlogPost({ title, content });
		Toast.show("Blog post added!");
		navigation.navigate("IndexScreen");
	};

	return (
		<View style={styles.container}>
			<Text style={styles.caption}>Create New Post</Text>
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
			<TouchableOpacity style={styles.button} onPress={handleSubmit}>
				<Text>Create</Text>
			</TouchableOpacity>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		padding: 10,
		flex: 1,
		justifyContent: "center",
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

export default CreateScreen;
