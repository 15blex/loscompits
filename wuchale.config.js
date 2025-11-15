import { adapter as svelte } from "@wuchale/svelte"
import { adapter as js } from "wuchale/adapter-vanilla"
import { defineConfig } from "wuchale"

export default defineConfig({
    sourceLocale: 'es',
    otherLocales: ['ca', 'fr', 'pt', 'it', 'de', 'en'],
    adapters: {
      main: svelte({ loader: 'svelte' }),
      js: js({
        files: ['src/**/+{page,layout}.{ts,js}']
      })
    }
})