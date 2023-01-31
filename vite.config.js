import { defineConfig } from "vite";

export default defineConfig({
    root: "./src",
    base: "/space-ranger/",
    build: {
        assetsDir: "",
        outDir: "../dist",
        emptyOutDir: true,
    },
    publicDir: "assets",
});
