import App from "@/App";
import LoginPage from "@/pages/login";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
	},
	{
		path: "/login",
		element: <LoginPage />,
	},
]);
