import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { AppRouter } from "./routes";
import { Providers } from "./utils";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<Providers>
			<AppRouter />
		</Providers>
	</StrictMode>,
);
