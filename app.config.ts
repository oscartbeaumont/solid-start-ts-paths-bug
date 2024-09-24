import { defineConfig } from "@solidjs/start/config";
import { Plugin } from "vinxi";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
	// Makes example clearer
	ssr: false,
	// Needed to handle resolving the `~` alias
	vite: {
		plugins: [
			tsconfigPaths({
				projects: [".", "./lib"]
			}),
		],
	},
	// Without this the server is complaining about the client entrypoint.
	server: {
		fs: {
		  allow: ['..'],
		},
	  },
});
