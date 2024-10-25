import { Navigate } from "react-router-dom";

interface IProps {
	children: React.ReactNode;
}

export const ProtectedRoute: React.FC<IProps> = ({ children }) => {
	const username = localStorage.getItem("username");

	if (!username) {
		return <Navigate to="/" />;
	}

	return children;
};
