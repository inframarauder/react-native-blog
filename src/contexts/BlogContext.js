import React, { createContext } from "react";

export default BlogContext = createContext();

export const BlogProvider = ({ children }) => {
	const posts = [
		{
			id: 1,
			title: "Blog Post #1",
		},
		{
			id: 2,
			title: "Blog Post #2",
		},
		{
			id: 3,
			title: "Blog Post #3",
		},
	];

	return <BlogContext.Provider value={posts}>{children}</BlogContext.Provider>;
};
