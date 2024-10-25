import App from "@/App";
import { LoginPage } from "@/pages";
import { SelectedCustomers } from "@/pages/SelectedCustomers";
import { createBrowserRouter } from "react-router-dom";
import { ProtectedRoute } from "./ProtectedRoute";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <LoginPage />,
	},
	{
		path: "/clientes",
		element: (
			<ProtectedRoute>
				<App />
			</ProtectedRoute>
		),
	},
	{
		path: "/clientes-selecionados",
		element: (
			<ProtectedRoute>
				<SelectedCustomers />
			</ProtectedRoute>
		),
	},
]);
