import { defineConfig } from 'astro/config';
import { loadEnv } from "vite";

import tailwind from "@astrojs/tailwind";

// You can't use import.meta in astro.config, you must use VITE's `loadEnv` function at this point in the Lifecycle.
//const bucketSlug = import.meta.env.BACKBLAZE_BUCKET_SLUG;
const bucketSlug = loadEnv(process.env.NODE_ENV, process.cwd(), "BACKBLAZE_BUCKET_SLUG")["BACKBLAZE_BUCKET_SLUG"]
const imgurURL = loadEnv(process.env.NODE_ENV, process.cwd(), "IMGUR_URL")["IMGUR_URL"]


// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  image: {
    // Setup S3 / B2 bucket for image optimizations
    //domains: [bucketSlug],
    remotePatterns: [{protocol: "https" }],
    domains: [imgurURL]
  }
});