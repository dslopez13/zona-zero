import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    unoptimized: true, // Agrega esto para exportar imágenes si las usas
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
    ],
  },
  output: 'export', // 🔹 clave para usar `next export`
  trailingSlash: true, // 🔹 necesario para que los enlaces funcionen bien en GitHub Pages
  // Si estás desplegando en una subruta (como github.com/usuario/repositorio):
  // basePath: '/nombre-del-repo',
  // assetPrefix: '/nombre-del-repo',
};

export default nextConfig;
