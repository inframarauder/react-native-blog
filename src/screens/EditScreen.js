import React, { useContext } from "react";
import Toast from "react-native-simple-toast";
import BlogPostForm from "../components/BlogPostForm";
import { Context as BlogContext } from "../contexts/BlogContext";

const EditScreen = ({ navigation }) => {
	const { state, editBlogPost } = useContext(BlogContext);
	const blogPost = state.find((item) => item.id === navigation.getParam("id"));

	return (
		<BlogPostForm
			onSubmit={({ title, content }) => {
				editBlogPost({ ...blogPost, title, content }, () => {
					Toast.show("Blog saved!");
					navigation.pop();
				});
			}}
			blogPost={blogPost}
		/>
	);
};

export default EditScreen;
