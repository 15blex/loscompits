<script lang="ts">
  import logo from '$lib/assets/logo.png';

  import { page } from '$app/state';
  import { language, mode } from '$lib/stores';
  import { loadLocale } from 'wuchale/load-utils';

	let popoverElement: HTMLDivElement | null = null;

  const toggleMode = () => {
    document.startViewTransition(()=>{
      mode.update((current) => (current === 'light' ? 'dark' : 'light'));
      document.body.setAttribute('data-mode', $mode);
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
		language.set(lang);
		if (popoverElement) {
			popoverElement.hidePopover();
		}
	};

	$effect(() => {
		if (!document.startViewTransition) {
			loadLocale($language);
			return;
		} else {
			loadLocale($language);
			document.startViewTransition(()=>{
				document.getElementById('html')?.setAttribute('lang', $language);
			});
		}
	});

	$effect(() => {
		document.body.setAttribute('data-mode', $mode);
	});
</script>

<header>
	<nav class="nav">
		<a href="/" class="nav__link" aria-label="Home" class:active="{page.route.id === '/'}">
      <img src={logo} alt="Los Compits logo">
    </a>
		<a href="/" class="nav__link" class:active="{page.route.id === '/'}">Home</a>
		<a href="/band" class="nav__link" class:active="{page.route.id === '/band'}">Band</a>
		<a href="/bio" class="nav__link" class:active="{page.route.id === '/bio'}">Bio</a>
		<a href="/media" class="nav__link" class:active="{page.route.id === '/media'}">Media</a>
    <a href="/events" class="nav__link" class:active="{page.route.id === '/events'}">Events</a>
	</nav>
	<div id="language-selector">
		<button popovertarget="languages">
			{getFlag($language)}
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
    {#if $mode === 'light'}
      🌙
    {:else}
      ☀️
    {/if}
  </button>
</header>