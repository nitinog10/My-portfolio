/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  transpilePackages: ['@shadergradient/react'],
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
      }
    }
    // Handle ESM packages - allow resolving .mjs files
    config.resolve.extensionAlias = {
      '.js': ['.js', '.ts', '.tsx', '.mjs'],
      '.mjs': ['.mjs', '.js'],
    }
    // Ensure proper module resolution for ESM packages
    config.resolve.conditionNames = ['import', 'require', 'default']
    return config
  },
}

export default nextConfig