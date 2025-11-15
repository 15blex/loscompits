import { adapter as svelte } from "@wuchale/svelte"
import { defineConfig } from "wuchale"

export default defineConfig({
    // sourceLocale is en by default
    sourceLocale: 'es',
    otherLocales: ['ca', 'fr', 'pt', 'it', 'de', 'en'],
    adapters: {
      main: svelte({ loader: 'svelte' }),
    }
})