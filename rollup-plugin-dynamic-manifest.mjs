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
        name: options.name || "Weather App",
        short_name: options.shortName || "Weather",
        description: options.description || "A weather application",
        start_url: normalizedBasePath,
        scope: normalizedBasePath,
        display: options.display || "standalone",
        background_color: options.backgroundColor || "#ffffff",
        theme_color: options.themeColor || "#007bff",
        orientation: options.orientation || "portrait-primary",
        icons: (options.icons || [
          { size: "72x72" },
          { size: "96x96" },
          { size: "128x128" },
          { size: "144x144" },
          { size: "152x152" },
          { size: "192x192" },
          { size: "384x384" },
          { size: "512x512" }
        ]).map(icon => ({
          src: `${normalizedBasePath}icons/icon-${icon.size}.png`,
          sizes: icon.size,
          type: icon.type || "image/png",
          ...(icon.purpose ? { purpose: icon.purpose } : {})
        }))
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
