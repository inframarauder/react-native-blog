import React, { useContext } from "react";
import {
	View,
	Text,
	StyleSheet,
	FlatList,
	Button,
	TouchableOpacity,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { Context as BlogContext } from "../contexts/BlogContext";

const IndexScreen = () => {
	const { state, addBlogPost, deleteBlogPost } = useContext(BlogContext);

	return (
		<View>
			<Text style={styles.caption}>Posts</Text>
			<Button title="Add Post" onPress={() => addBlogPost()} />
			<FlatList
				data={state}
				keyExtractor={(post) => post.id.toString()}
				renderItem={({ item }) => {
					return (
						<View style={styles.row}>
							<Text style={styles.title}>{item.title}</Text>
							<TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
								<Feather name="trash" style={styles.icon} />
							</TouchableOpacity>
						</View>
					);
				}}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	caption: {
		fontSize: 20,
		textAlign: "center",
		textDecorationLine: "underline",
		padding: 10,
	},
	row: {
		flexDirection: "row",
		justifyContent: "space-between",
		marginVertical: 10,
		padding: 20,
		borderTopWidth: 1,
		borderBottomWidth: 1,
		borderColor: "gray",
	},
	title: {
		fontSize: 18,
	},
	icon: {
		fontSize: 24,
	},
});

export default IndexScreen;
