import { defineConfig } from "tsdown";

export default defineConfig({
  entry: ["./src/index.tsx"],
  platform: "neutral",
  external: ["react", "react-dom"],
  dts: true,
  format: ["esm"],
  clean: true,
});
