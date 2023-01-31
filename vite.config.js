import { defineConfig } from "vite";

export default defineConfig({
    root: "./src",
    build: {
        assetsDir: "",
        outDir: "../dist",
        emptyOutDir: true,
    },
    publicDir: "assets",
});
