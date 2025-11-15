<script lang="ts">
  import logo from '$lib/assets/logo.jpeg';
  import { language, mode } from '$lib/stores';
  import { loadLocale } from 'wuchale/load-utils';

  const toggleMode = () => {
    document.startViewTransition(()=>{
      mode.update((current) => (current === 'light' ? 'dark' : 'light'));
      document.body.setAttribute('data-mode', $mode);
    })
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
		<a href="/" class="nav__link" aria-label="Home">
      <img src={logo} alt="Los Compits logo">
    </a>
		<a href="/" class="nav__link">Home</a>
		<a href="/band" class="nav__link">Band</a>
		<a href="/bio" class="nav__link">Bio</a>
		<a href="/media" class="nav__link">Media</a>
    <a href="/events" class="nav__link">Events</a>
	</nav>
	<select class="language-select" name="language" bind:value={$language}>
		<option value="es">Español</option>
		<option value="ca">Català</option>
		<option value="pt">Português</option>
		<option value="it">Italiano</option>
		<option value="fr">Français</option>
		<option value="de">Deutsch</option>
		<option value="en">English</option>
	</select>
  <button class="btn btn--secondary" onclick={toggleMode}>
    <span>Mode {$mode}</span>
  </button>
</header>