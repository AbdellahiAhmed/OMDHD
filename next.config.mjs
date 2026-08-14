import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./i18n/request.ts');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Shared hosting (cPanel/CloudLinux) caps process memory low enough that
  // Next's default parallel build workers can OOM. One worker is slower but
  // fits the constraint.
  experimental: {
    cpus: 1,
  },
  // `next build` runs ESLint by default. eslint-config-next pulls in
  // eslint-import-resolver-typescript -> unrs-resolver, which falls back to a
  // WASM binding when no native binary matches the host platform. Instantiating
  // that WASM module blows past this host's hard 4GiB address-space limit
  // (LVE), crashing the build before it even compiles anything. Lint is a
  // separate concern from building — run `npm run lint` locally/in CI instead.
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Pin the project root so Next/Turbopack don't mis-infer it from stray
  // lockfiles higher up the tree (which causes the whole home dir to be scanned).
  outputFileTracingRoot: import.meta.dirname,
  turbopack: {
    root: import.meta.dirname,
  },
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'cdn.sanity.io' },
    ],
  },
};

export default withNextIntl(nextConfig);
