import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { Provider as BlogProvider } from "./src/contexts/BlogContext";
import IndexScreen from "./src/screens/IndexScreen";

const navigator = createStackNavigator(
	{
		IndexScreen,
	},
	{
		initialRouteName: "IndexScreen",
		defaultNavigationOptions: {
			title: "Blogs",
		},
	}
);

const App = createAppContainer(navigator);

export default () => {
	return (
		<BlogProvider>
			<App />
		</BlogProvider>
	);
};
