import { RouterProvider } from "react-router-dom";
import { router } from "./router";

export const AppRouter: React.FC = () => {
	return <RouterProvider router={router} />;
};
