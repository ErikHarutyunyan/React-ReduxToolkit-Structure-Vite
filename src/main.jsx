import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App.jsx";
import { store } from "./app/store.js";
import { FontStyle } from "./themes/FontStyle.jsx";
import { GlobalStyle } from "./themes/GlobalStyle.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<Provider store={store}>
			<FontStyle />
			<GlobalStyle />
			<App />
		</Provider>
	</React.StrictMode>
);
