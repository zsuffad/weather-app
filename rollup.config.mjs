import { nodeResolve } from '@rollup/plugin-node-resolve';
import fs from 'fs';
// import path from 'path';
import terser from '@rollup/plugin-terser';
import copy from 'rollup-plugin-copy';
import html from 'rollup-plugin-html';
import serve from 'rollup-plugin-serve';
import del from 'rollup-plugin-delete';
import livereload from 'rollup-plugin-livereload';
import { injectManifest } from 'rollup-plugin-workbox';
import commonjs from '@rollup/plugin-commonjs';
import { dynamicManifest } from './rollup-plugin-dynamic-manifest.mjs';

const production = !process.env.ROLLUP_WATCH;

const htmlTemplatePlugin = () => {
  return {
    name: 'html-template-plugin',
    generateBundle(options, bundle) {
      const jsFile = Object.keys(bundle).find(file => file.endsWith('.js'));

      // Prepare placeholder replacement
      const html = fs.readFileSync('src/index.html', 'utf-8');
      let result = html.replace('<%= jsBundle %>', jsFile);

      if (process.env.BASE_PATH) {
        result = result.replace(/<%= basePath %>/g, process.env.BASE_PATH);
      }

      this.emitFile({
        type: 'asset',
        fileName: 'index.html',
        source: result,
      });
    }
  };
};

export default [
  // Main application bundle
  {
    input: 'src/index.js',
    output: {
      dir: 'dist',
      format: 'es',
      sourcemap: !production,
      entryFileNames: production ? 'bundle-[hash].js' : 'bundle.js'
    },
    watch: {
      include: ['src/*', 'src/**/*'],
      exclude: ['node_modules/**']
    },
    plugins: [
      del({
        targets: 'dist/*',
      }),

      // Resolve node modules
      nodeResolve(),

      // Convert CommonJS modules to ES6
      commonjs({
        include: 'node_modules/**',
        strictRequires: 'auto',
      }),

      htmlTemplatePlugin(),

      // Process HTML
      html({
        include: 'src/index.html',
        htmlMinifierOptions: {
          collapseWhitespace: production,
          removeComments: production,
          minifyCSS: production,
          minifyJS: production
        }
      }),

      // Generate dynamic manifest
      dynamicManifest({
        name: "Weather App",
        shortName: "Weather",
        description: "A beautiful weather application",
        themeColor: "#007bff",
        backgroundColor: "#ffffff",
        // basePath: "/weather-app/" // Uncomment to override auto-detection
      }),

      // Copy static assets
      copy({
        targets: [
          { src: 'public/favicon', dest: 'dist' },
          { src: 'public/font', dest: 'dist' },
          { src: 'public/icons', dest: 'dist' },
          { src: 'public/css', dest: 'dist' },
          { src: 'public/screenshots', dest: 'dist' },
          { src: 'public/manifest.json', dest: 'dist' },
          { src: 'src/styles.css', dest: 'dist' },
        ]
      }),

      // Minify in production
      production && terser(),

      // Dev server
      !production && serve({
        contentBase: 'dist',
        port: 10001,
        host: '0.0.0.0'
      }),

      // Live reload - uncomment and fix the configuration
      !production && livereload({
        watch: 'dist',
        verbose: true
      })
    ]
  },

  // Service worker bundle (separate build)
  {
    input: 'src/service-worker.js',
    output: {
      file: 'dist/service-worker.js',
      format: 'iife'
    },
    plugins: [
      nodeResolve(),
      commonjs(),
      copy({
        targets: [
          { src: 'src/service-worker.js', dest: 'dist' }
        ]
      }),
      injectManifest({
        swSrc: 'src/service-worker.js',
        swDest: 'dist/service-worker.js',
        globDirectory: 'dist/',
        // Include all files in the dist directory
        globPatterns: ['**/*.{js,css,html,png,svg,jpg,json}'],
        dontCacheBustURLsMatching: /\.\w{8}\./,
        maximumFileSizeToCacheInBytes: 5 * 1024 * 1024, // Increase limit to 5MB if needed
      }),
      production && terser()
    ]
  }
];
