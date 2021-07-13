import createDataContext from "./createDataContext";

const blogReducer = (state, action) => {
	const { type, payload } = action;

	switch (type) {
		case "add_blogpost":
			return [
				...state,
				{ id: Math.floor(Math.random() * 10000), ...payload.post },
			];
		case "delete_blogpost":
			return state.filter((item) => item.id !== payload.id);

		default:
			return state;
	}
};

const addBlogPost = (dispatch) => {
	return (post) => dispatch({ type: "add_blogpost", payload: { post } });
};

const deleteBlogPost = (dispatch) => {
	return (id) => dispatch({ type: "delete_blogpost", payload: { id } });
};

export const { Context, Provider } = createDataContext(
	blogReducer,
	{ addBlogPost, deleteBlogPost },
	[]
);
