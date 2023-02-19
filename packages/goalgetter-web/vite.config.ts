/// <reference types="vitest" />
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
// import solidPlugin from 'vite-plugin-solid';
import viteTsConfigPaths from 'vite-tsconfig-paths';

// https://stackoverflow.com/a/66389044
export default ({ mode }: { mode: string }) => {
  console.log('MODE: ' + mode);
  process.env = { ...process.env, ...loadEnv(mode, process.cwd(), '') };

  return defineConfig({
    cacheDir: '../../node_modules/.vite/goalgetter-web',

    plugins: [
      react(),
      // solidPlugin(),
      viteTsConfigPaths({
        root: '../../',
      }),
    ],

    build: {
      target: 'esnext',
    },

    server: {
      // "import.meta" is not available with the "cjs" output format and will be empty [empty-import-meta]
      // You need to set the output format to "esm" for "import.meta" to work correctly.
      // port: import.meta.env.PORT_APP || 8080,
      port: Number(process.env.PORT_APP) || 8080,
      // port: 8080,
      host: 'localhost',
    },

    preview: {
      port: 8081,
      host: 'localhost',
    },

    // Uncomment this if you are using workers.
    // worker: {
    //  plugins: [
    //    viteTsConfigPaths({
    //      root: '../../',
    //    }),
    //  ],
    // },

    test: {
      globals: true,
      cache: {
        dir: '../../node_modules/.vitest',
      },
      environment: 'jsdom',
      include: ['src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    },
  });
};
