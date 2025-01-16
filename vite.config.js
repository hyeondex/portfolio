import { defineConfig } from "vite";
import { resolve } from "path";
export default defineConfig({
  // root: "src/html", // HTML 파일이 위치한 디렉토리 설정
  // publicDir: "../../public", // public 디렉토리 설정
  resolve: {
    alias: {
      "@": resolve(__dirname, "/src"), // `@`를 `src`로 매핑
    },
  },
  optimizeDeps: {
    include: ["gsap"], // GSAP 사전 번들링 강제
  },
  build: {
    commonjsOptions: {
      include: [/node_modules/], // CommonJS 모듈 처리
    },
  },
  server: {
    port: 3000,
  },
});
