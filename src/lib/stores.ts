import { persisted } from 'svelte-persisted-store';

type languages= 'en' | 'es' | 'fr' | 'ca' | 'it' | 'de' | 'pt';
type siteMode = 'light' | 'dark';

export const mode = persisted<siteMode>('mode', 'light');
export const language = persisted<languages>('language', 'es');