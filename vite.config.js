import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
    root: "src",
    resolve: {
        alias: {
            "~": resolve(__dirname, "src"),
        },
    },
    base: "./",
    build: {
        assetsDir: "",
        outDir: "../dist",
        emptyOutDir: true,
    },
    publicDir: "assets",
});
