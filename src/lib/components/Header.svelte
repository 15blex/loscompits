<script lang="ts">
  import logo from '$lib/assets/logo.png';

  import { page } from '$app/state';
	import { resolve } from '$app/paths';
  import { loadLocale } from 'wuchale/load-utils';
  import { onMount } from 'svelte';

	let popoverElement: HTMLDivElement | null = null;

  let mode = $state('light');
  let language = $state('es');
  
  const toggleMode = () => {
    document.startViewTransition(()=>{
      mode = mode === 'light' ? 'dark' : 'light';
      localStorage.setItem('mode', mode);
			document.documentElement.style.colorScheme = mode;
    })
  };

  const getFlag = (lang: string) => {
    const flags: Record<string, string> = {
      es: '🇪🇸',
      ca: '🇪🇸',
      pt: '🇵🇹',
      it: '🇮🇹',
      fr: '🇫🇷',
      de: '🇩🇪',
      en: '🇬🇧'
    };
    return flags[lang] || lang.toUpperCase();
  };

	const selectLanguage = (lang: 'en' | 'es' | 'fr' | 'ca' | 'it' | 'de' | 'pt') => {
    document.startViewTransition(()=>{
      language = lang;
      localStorage.setItem('language', lang);
      if (popoverElement) {
        popoverElement.hidePopover();
      }
    })
	};

  onMount(()=>{
    mode = localStorage.getItem('mode') || 'light';
    language = localStorage.getItem('language') || 'es';
    document.documentElement.style.colorScheme = mode;
    loadLocale(language);
  })

	$effect(() => {
		loadLocale(language);
	});
</script>

<header>
	<nav class="nav">
		<a href={resolve('/')} class="nav__link" aria-label="Home" class:active="{page.route.id === '/'}">
      <img src={logo} alt="Los Compits logo">
    </a>
		<a href={resolve('/')} class="nav__link" class:active="{page.route.id === '/'}">Home</a>
		<a href={resolve('/band')} class="nav__link" class:active="{page.route.id === '/band'}">Band</a>
		<a href={resolve('/bio')} class="nav__link" class:active="{page.route.id === '/bio'}">Bio</a>
		<a href={resolve('/media')} class="nav__link" class:active="{page.route.id === '/media'}">Media</a>
    <a href={resolve('/events')} class="nav__link" class:active="{page.route.id === '/events'}">Events</a>
	</nav>
	<div id="language-selector">
		<button popovertarget="languages">
			{getFlag(language)}
		</button>
		<div popover id="languages" bind:this={popoverElement}>
			<button onclick={() => selectLanguage('es')}>🇪🇸 Español</button>
			<button onclick={() => selectLanguage('ca')}>🇪🇸 Català</button>
			<button onclick={() => selectLanguage('pt')}>🇵🇹 Português</button>
			<button onclick={() => selectLanguage('it')}>🇮🇹 Italiano</button>
			<button onclick={() => selectLanguage('fr')}>🇫🇷 Français</button>
			<button onclick={() => selectLanguage('de')}>🇩🇪 Deutsch</button>
			<button onclick={() => selectLanguage('en')}>🇬🇧 English</button>
		</div>
	</div>
  <button onclick={toggleMode}>
    {#if mode === 'light'}
      🌙
    {:else}
      ☀️
    {/if}
  </button>
</header>

<style>
	header {
  padding: var(--space-4);
  background: linear-gradient(135deg, color-mix(in oklab, var(--bg-primary), var(--accent-primary) 12%), var(--bg-primary));
  border-bottom: 4px solid;
  border-image: linear-gradient(to right, var(--red-600), var(--gold-500), var(--green-600)) 1;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  gap: var(--space-4);

  nav {
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    gap: var(--space-3);

    a {
      color: var(--text-primary);
      text-decoration: none;
      transition-property: color;
      transition-duration: var(--transition-duration-fast);

      &:hover {
        color: var(--accent-secondary);
      }
    }

    img {
      max-width: 75px;
      border-radius: var(--radius);
    }
  }

  #language-selector {
    position: relative;
    isolation: isolate;

    button {
      anchor-name: --languages;
      text-align: left;
    }

    #languages {
      inset: auto;
      margin: 0;
      position: absolute;
      position-anchor: --languages;
      position-try-fallbacks: --left;
      top: anchor(bottom);
      left: anchor(right);
      width: max-content;
      padding: var(--space-2);
      gap: var(--space-1);
      background: var(--bg-secondary);
      opacity: 0;
      border: 1px solid var(--border-color-strong);
      border-radius: var(--radius);
      transition-property: opacity, display;
      transition-duration: 0.35s, 0.35s;
      transition-behavior: allow-discrete;

      &:popover-open {
        display: grid;
        opacity: 1;

        @starting-style {
          display: grid;
          opacity: 0;
        }
      }
    }
  }
}

@position-try --left {
  inset: unset;
  top: anchor(bottom);
  right: anchor(left);
}

.active {
  color: var(--accent-secondary);
}
</style>