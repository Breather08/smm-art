import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "node:path";

// https://vitejs.dev/config/
export default defineConfig(() => {
  const envDir = "env";

  return {
    envDir,
    base: "/your/baseurl",
    plugins: [vue()],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
  };
});
