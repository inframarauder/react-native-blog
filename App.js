import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { Provider as BlogProvider } from "./src/contexts/BlogContext";
import IndexScreen from "./src/screens/IndexScreen";
import ShowScreen from "./src/screens/ShowScreen";
import CreateScreen from "./src/screens/CreateScreen";

const navigator = createStackNavigator(
	{
		IndexScreen,
		ShowScreen,
		CreateScreen,
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
