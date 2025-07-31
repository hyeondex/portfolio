import { defineConfig } from "vite";
import { resolve } from "path";
export default defineConfig({
  resolve: {
    alias: {
      "@": resolve(__dirname, "/src"), // `@`를 `src`로 매핑
    },
  },
  optimizeDeps: {
    include: ["gsap", "smooth-scrollbar"], // GSAP 사전 번들링 강제
  },
  build: {
    commonjsOptions: {
      include: [/node_modules/], // CommonJS 모듈 처리
    },
  },
  server: {
    port: 2999,
    fs: {
      strict: false,
    },
    open: "./src/html/index.html",
  },
});
