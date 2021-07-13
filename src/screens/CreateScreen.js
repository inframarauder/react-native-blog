import React, { useContext } from "react";
import Toast from "react-native-simple-toast";
import { Context as BlogContext } from "../contexts/BlogContext";
import BlogPostForm from "../components/BlogPostForm";

const CreateScreen = ({ navigation }) => {
	const { addBlogPost } = useContext(BlogContext);

	return (
		<BlogPostForm
			onSubmit={({ title, content }) => {
				addBlogPost({ title, content }, () => {
					Toast.show("Blog saved!");
					navigation.navigate("IndexScreen");
				});
			}}
		/>
	);
};

export default CreateScreen;
