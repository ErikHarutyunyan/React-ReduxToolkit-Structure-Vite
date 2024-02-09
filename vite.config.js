// import million from "million/compiler";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { defineConfig } from "vite";
import svgr from "vite-plugin-svgr";
// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		// million.vite({ auto: true }),
		react(),
		svgr({
			svgrOptions: {
				ref: true,
			},
		}),
	],
	resolve: {
		/*eslint-disable */
		alias: {
			"@": path.resolve(__dirname, "./src/"),
			assets: `${path.resolve(__dirname, "./src/assets/")}`,
			components: `${path.resolve(__dirname, "./src/components/")}`,
			images: `${path.resolve(__dirname, "./src/components/Images/")}`,
			data: `${path.resolve(__dirname, "./src/data/")}`,
			helpers: `${path.resolve(__dirname, "./src/helpers/")}`,
			hooks: `${path.resolve(__dirname, "./src/hooks/")}`,
			pages: `${path.resolve(__dirname, "./src/pages/")}`,
			public: `${path.resolve(__dirname, "./public/")}`,
			router: `${path.resolve(__dirname, "./src/router/")}`,
		},
	},
	// server: {
	//   port: 3000,
	//   host: true
	// },
});
