// import fs from 'fs/promises';
import { readFileSync } from 'fs';

export const dynamicManifest = (options = {}) => {
  return {
    name: 'dynamic-manifest',
    async generateBundle(outputOptions, bundle) {
      const getBasePath = async () => {
        if (options.basePath) return options.basePath;
        if (process.env.BASE_PATH) return process.env.BASE_PATH;

        try {
          const packageJson = JSON.parse(readFileSync('package.json', 'utf8'));
          if (packageJson.homepage) {
            const url = new URL(packageJson.homepage);
            return url.pathname;
          }
        } catch (e) {}

        if (process.env.NODE_ENV === 'production' && process.env.GITHUB_PAGES) {
          const repoName = process.env.GITHUB_REPOSITORY?.split('/')[1];
          if (repoName) return `/${repoName}/`;
        }

        return '/';
      };

      const basePath = await getBasePath();
      const normalizedBasePath = basePath.endsWith('/') ? basePath : basePath + '/';

      const manifest = {
        name: options.name || "Minimal Weather",
        short_name: options.shortName || "Mini Weather",
        description: options.description || "A Minimal Weather Application",
        start_url: normalizedBasePath,
        scope: normalizedBasePath,
        display: options.display || "standalone",
        background_color: options.backgroundColor || "#ffffff",
        theme_color: options.themeColor || "#007bff",
        orientation: options.orientation || "portrait-primary",
        icons: (options.icons || [
          { size: "96x96" },
          { size: "192x192" },
          { size: "512x512" }
        ]).map(icon => ({
          src: `${normalizedBasePath}favicon/favicon-${icon.size}.png`,
          sizes: icon.size,
          type: icon.type || "image/png",
          ...(icon.purpose ? { purpose: icon.purpose } : {})
        })),
        screenshots: options.screenshots || [
          {
              "src": `${normalizedBasePath}screenshots/weather-app-main-screenshot.png`,
              "sizes": "432x988",
              "type": "image/jpg",
              "form_factor": "wide"
          },
          {
              "src": `${normalizedBasePath}screenshots/weather-app-main-screenshot.png`,
              "sizes": "432x988",
              "type": "image/jpg",
              "form_factor": "narrow"
          }
        ],
      };

      this.emitFile({
        type: 'asset',
        fileName: 'manifest.json',
        source: JSON.stringify(manifest, null, 2)
      });

      console.log(`✓ Generated manifest.json with base path: ${normalizedBasePath}`);
    }
  };
};
