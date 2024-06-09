import path from 'path';

// import million from 'million/compiler';
// import { compression } from 'vite-plugin-compression2'
import { defineConfig } from 'vite';
// import { imagetools } from 'vite-imagetools';
import viteImagemin from 'vite-plugin-imagemin';
import svgr from 'vite-plugin-svgr';

import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // million.vite({ auto: true }),
    svgr({
      // svgr options: https://react-svgr.com/docs/options/
      svgrOptions: {
        exportType: 'default',
        ref: true,
        svgo: false,
        titleProp: true,
      },
      include: '**/*.svg',
    }),
    // imagetools(),
    viteImagemin({
      gifsicle: {
        optimizationLevel: 7,
        interlaced: false,
      },
      optipng: {
        optimizationLevel: 7,
      },
      mozjpeg: {
        quality: 75,
      },
      pngquant: {
        quality: [0.65, 0.8],
        speed: 4,
      },
      svgo: {
        plugins: [
          {
            name: 'removeViewBox',
            active: false,
          },
          {
            name: 'removeEmptyAttrs',
            active: false,
          },
        ],
      },
      webp: {
        quality: 75,
      },
    }),
    // compression({algorithm: "gzip", deleteOriginalAssets: true}),
    // compression({ algorithm: 'brotliCompress', deleteOriginalAssets: true }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@app': path.resolve(__dirname, './src/app'),
      '@router': path.resolve(__dirname, './src/router'),
      '@pages': path.resolve(__dirname, './src/pages'),
      '@components': path.resolve(__dirname, './src/components'),
      '@containers': path.resolve(__dirname, './src/containers'),
      '@hooks': path.resolve(__dirname, './src/hooks'),
      '@utils': path.resolve(__dirname, './src/utils'),
      '@helpers': path.resolve(__dirname, './src/helpers'),
      '@services': path.resolve(__dirname, './src/services'),
      '@data': path.resolve(__dirname, './src/data'),
      '@assets': path.resolve(__dirname, './src/assets'),
      '@themes': path.resolve(__dirname, './src/themes'),
      '@configs': path.resolve(__dirname, './src/configs'),
      '@constants': path.resolve(__dirname, './src/constants'),
      '@public': path.resolve(__dirname, './public'),
    },
  },
  // server: {
  //   port: 3000,
  //   host: true
  // },
});
