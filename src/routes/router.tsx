import App from "@/App";
import { LoginPage } from "@/pages";
import { SelectedCustomers } from "@/pages/SelectedCustomers";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <LoginPage />,
	},
	{
		path: "/clientes",
		element: <App />,
	},
	{
		path: "/clientes-selecionados",
		element: <SelectedCustomers />,
	},
]);
