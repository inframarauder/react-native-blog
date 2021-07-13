import React, { useContext } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import BlogContext from "../contexts/BlogContext";

const IndexScreen = () => {
	const posts = useContext(BlogContext);

	return (
		<View>
			<Text style={styles.text}>Posts</Text>
			<FlatList
				data={posts}
				keyExtractor={(post) => post.id}
				renderItem={({ item }) => {
					return <Text style={styles.text}>{item.title}</Text>;
				}}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	text: {
		fontSize: 20,
		margin: 10,
		padding: 10,
	},
});

export default IndexScreen;
