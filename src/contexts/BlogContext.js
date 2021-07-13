import createDataContext from "./createDataContext";

const blogReducer = (state, action) => {
	const { type, payload } = action;

	switch (type) {
		case "add_blogpost":
			return [
				...state,
				{ id: state.length + 1, title: `Blog Post #${state.length + 1}` },
			];
		case "delete_blogpost":
			return state.filter((item) => item.id !== payload.id);
		default:
			return state;
	}
};

const addBlogPost = (dispatch) => {
	return () => dispatch({ type: "add_blogpost" });
};

const deleteBlogPost = (dispatch) => {
	return (id) => dispatch({ type: "delete_blogpost", payload: { id } });
};

export const { Context, Provider } = createDataContext(
	blogReducer,
	{ addBlogPost, deleteBlogPost },
	[]
);
