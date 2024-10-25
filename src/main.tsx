import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { AppRouter } from "./routes/Provider.tsx";
import { Providers } from "./utils/Providers.tsx";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<Providers>
			<AppRouter />
		</Providers>
	</StrictMode>,
);
