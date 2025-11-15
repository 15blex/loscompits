import { writable } from 'svelte/store';
import { persisted } from 'svelte-persisted-store';

type languageType = 'en' | 'es' | 'fr' | 'ca' | 'it' | 'de' | 'pt';

export const darkThemeEnabled = writable(false);
export const languageStore = persisted<languageType>('language', 'es');