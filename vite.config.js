// vite.config.ts
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from "path"

export default defineConfig({
    base: '/',

    resolve: {
        alias: {
            "@": resolve(__dirname, "src")
        }
    },

    plugins: [
        vue()
    ],

    build: {
        outDir: 'dist', // Папка для сборки
        sourcemap: true, // Генерация sourcemaps
    },
})