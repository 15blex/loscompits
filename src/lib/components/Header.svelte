<script lang="ts">
  import logo from '$lib/assets/logo.jpeg';
  import { languageStore } from '$lib/stores';
  import { loadLocale } from 'wuchale/load-utils';

	$effect(() => {
		if (!document.startViewTransition) {
			loadLocale($languageStore);
			return;
		} else {
			loadLocale($languageStore);
			document.startViewTransition(()=>{
				document.getElementById('html')?.setAttribute('lang', $languageStore);
			});
		}
	});
</script>

<header>
	<nav>
		<a href="/">
      <img src={logo} alt="">
    </a>
		<a href="/">Home</a>
		<a href="/band">Band</a>
		<a href="/bio">Bio</a>
		<a href="/media">Media</a>
	</nav>
	<select name="language" bind:value={$languageStore}>
		<option value="es">Español</option>
		<option value="ca">Català</option>
		<option value="pt">Português</option>
		<option value="it">Italiano</option>
		<option value="fr">Français</option>
		<option value="de">Deutsch</option>
		<option value="en">English</option>
	</select>
</header>