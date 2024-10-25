import { createContext, useContext, useEffect, useState } from "react";

interface IAuthContextProps {
	username: string;
	handleUsername: (name: string) => void;
	logout: () => void;
}

interface IProviderProps {
	children: React.ReactNode;
}

export const AuthContext = createContext({} as IAuthContextProps);

export const AuthProvider: React.FC<IProviderProps> = ({ children }) => {
	const [username, setUsername] = useState<string>("");

	const handleUsername = (name: string) => {
		localStorage.setItem("username", name);
		setUsername(name);
	};

	const logout = () => {
		localStorage.removeItem("username");
		setUsername("");
		window.location.reload(); // To avoid reloading the entire page when logging out.
	};

	useEffect(() => {
		const localUsername = localStorage.getItem("username");
		if (localUsername) {
			setUsername(localUsername);
		}
	}, []);

	const contextValue: IAuthContextProps = {
		username,
		handleUsername,
		logout,
	};

	return (
		<AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
	);
};

export function useAuthContext() {
	const context = useContext(AuthContext);

	if (!context) {
		throw new Error(
			"useAuthContext must be used within an AuthContextProvider",
		);
	}

	return context;
}
