import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

export default defineConfig(({ mode }) => ({
  // ✅ Ensure correct base path for production deployment
  base: "/wp-content/reactpress/apps/palbytes/",

  // ✅ Local development server
  server: {
    host: "0.0.0.0",  // Accessible from anywhere (useful for local network testing)
    port: 8080,
    strictPort: true,  // Don't auto-switch ports
  },

  // ✅ Plugins
  plugins: [
    react(),
    mode === "development" && componentTagger(), // Only load tagger in dev mode
  ].filter(Boolean),

  // ✅ Resolve aliases for cleaner imports
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },

  // ✅ Build optimizations
  build: {
    outDir: "dist", // Default output directory
    assetsDir: "assets", // Assets folder inside dist
    sourcemap: false, // Disable source maps in production for speed
    manifest: true, // Helps WordPress detect files if needed
    rollupOptions: {
      output: {
        // Clean, cache-friendly file names
        entryFileNames: `assets/[name]-[hash].js`,
        chunkFileNames: `assets/[name]-[hash].js`,
        assetFileNames: `assets/[name]-[hash].[ext]`,
      },
    },
  },
}));
