import createDataContext from "./createDataContext";

const blogReducer = (state, action) => {
	const { type, payload } = action;

	switch (type) {
		case "add_blogpost":
			return [
				...state,
				{ id: Math.floor(Math.random() * 10000), ...payload.post },
			];

		case "edit_blogpost":
			return state.map((item) =>
				item.id === payload.post.id ? payload.post : item
			);

		case "delete_blogpost":
			return state.filter((item) => item.id !== payload.id);

		default:
			return state;
	}
};

const addBlogPost = (dispatch) => {
	return (post, callback) => {
		dispatch({ type: "add_blogpost", payload: { post } });
		callback && callback();
	};
};

const editBlogPost = (dispatch) => {
	return (post, callback) => {
		dispatch({ type: "edit_blogpost", payload: { post } });
		callback && callback();
	};
};

const deleteBlogPost = (dispatch) => {
	return (id) => dispatch({ type: "delete_blogpost", payload: { id } });
};

export const { Context, Provider } = createDataContext(
	blogReducer,
	{ addBlogPost, editBlogPost, deleteBlogPost },
	[]
);
