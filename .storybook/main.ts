import type { StorybookConfig } from "@storybook/react-vite"
import { mergeConfig } from "vite"
import { fileURLToPath } from "url"
import { dirname, resolve } from "path"
import tailwindcss from "tailwindcss"
import autoprefixer from "autoprefixer"

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const config: StorybookConfig = {
  stories: ["../stories/**/*.stories.@(js|jsx|ts|tsx|mdx)"],
  addons: ["@storybook/addon-links", "@storybook/addon-docs"],

  framework: {
    name: "@storybook/react-vite",
    options: {},
  },

  async viteFinal(config) {
    return mergeConfig(config, {
      resolve: {
        alias: {
          "@": resolve(__dirname, "../"),
        },
      },
      css: {
        postcss: {
          plugins: [tailwindcss, autoprefixer],
        },
      },
    })
  },
}

export default config

