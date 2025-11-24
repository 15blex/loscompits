# Los Compits - AI Coding Guidelines

## Project Overview
This is a SvelteKit static site for the band "Los Compits" featuring internationalization (i18n) across 7 languages. Built with Svelte 5, Vite, and deployed via static adapter.

## Architecture
- **Framework**: SvelteKit with static export (`@sveltejs/adapter-static`)
- **Styling**: Custom CSS architecture in `src/lib/styles/` with tokens, base styles, and component-specific sheets
- **Internationalization**: Wuchale-based system with source locale 'es' (Spanish), supporting 'ca', 'fr', 'pt', 'it', 'de', 'en'
- **State Management**: Svelte stores with `svelte-persisted-store` for language preference

## Development Workflow
- **Extract i18n strings**: Run `npx wuchale` after adding/changing user-facing text in Svelte/JS files
- **Build**: `npm run build` (includes Wuchale processing)
- **Dev server**: `npm run dev` (hot-reload with i18n)
- **Type checking**: `npm run check` (includes SvelteKit sync)

## Key Conventions
- **i18n Setup**: Strings in Svelte/JS are msgid; translations in `src/locales/*.po`. Load via `loadLocale()` in layout load functions
- **Language Store**: Use `$languageStore` (persisted, default 'es') for current locale
- **File Structure**: Routes in `src/routes/`, assets in `src/lib/assets/`, styles modular in `src/lib/styles/`
- **CSS Patterns**: Use CSS custom properties from `tokens.css`, follow BEM-like naming in component styles

## Examples
- **Adding translatable text**: Hardcode English/Spanish strings in components, run `npx wuchale` to generate msgid in PO files
- **Language switching**: Bind select to `$languageStore`, load locale in `$effect` (see `+layout.svelte`)
- **Styling**: Import from `index.css` in layouts, use theme tokens for consistent design

## Dependencies
- **Wuchale**: Custom i18n tool for extraction and runtime loading
- **Svelte 5**: Use runes (`$state`, `$effect`) for reactivity
- **Vite**: Includes Wuchale plugin for build-time processing</content>
<parameter name="filePath">/Users/alessandro.bonanno/Personal/loscompits/.github/copilot-instructions.md