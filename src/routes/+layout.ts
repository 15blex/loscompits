import { locales } from '../locales/data.js'
import { browser } from '$app/environment'
import { loadLocale } from 'wuchale/load-utils'
import '../locales/main.loader.svelte.js'

import type { LayoutLoad } from './$types.js'

export const load: LayoutLoad = async ({url}) => {
  const locale = url.searchParams.get('locale') ?? 'en'
  if (browser && locales.includes(locale)) {
    await loadLocale(locale)
  }
}

export const prerender = true;