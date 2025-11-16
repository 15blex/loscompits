import { locales } from '../locales/data.js'
import { browser } from '$app/environment'
import { loadLocale } from 'wuchale/load-utils'
import '../locales/main.loader.svelte.js'

import type { LayoutLoad } from './$types.js'

import { get } from 'svelte/store'
import { language } from '$lib/stores.js'

export const load: LayoutLoad = async () => {
  const locale = get(language)
  if (browser && locales.includes(locale)) {
    await loadLocale(locale)
  }
}

export const prerender = true;