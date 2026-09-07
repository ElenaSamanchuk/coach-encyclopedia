import type { NextConfig } from "next";

/**
 * GitHub Pages отдаёт сайт по адресу /coach-encyclopedia/, а не с корня домена.
 * basePath чинит роутинг и `_next/*`, но не трогает пути, написанные руками:
 * `/figma/…` в src/lib/assets.ts и `/type/…` в globals.css префиксованы там же
 * этим значением. Если репозиторий переименуют — менять в трёх местах.
 */
const BASE_PATH = "/coach-encyclopedia";

const nextConfig: NextConfig = {
  // Лендинг полностью статический.
  output: "export",
  basePath: BASE_PATH,
  assetPrefix: BASE_PATH,
  images: { unoptimized: true },
};

export default nextConfig;
