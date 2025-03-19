import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";

const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineConfig({

    base: 'decodinguserneeds/',
    root: resolve(__dirname, 'src'),
    build: {
        outDir: resolve(__dirname, 'docs/'),
        emptyOutDir: true,
        rollupOptions: {

            input: {
                main: resolve(__dirname, 'src/index.html'),
                buildingclarity: resolve(__dirname, 'src/buildingclarity.html')
            },
        },
    },
})