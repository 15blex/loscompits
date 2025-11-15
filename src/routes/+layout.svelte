<script lang="ts">
	import { onNavigate } from '$app/navigation';
	import favicon from '$lib/assets/favicon.svg';

	import '$lib/styles/index.css';

	onNavigate((navigation) => {
		if (!document.startViewTransition) return;

		return new Promise((resolve) => {
			document.startViewTransition(async () => {
				resolve();
				await navigation.complete;
			});
		});
	});

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<header>
	<nav>
		<a href="/">Home</a>
		<a href="/band">Band</a>
		<a href="/bio">Bio</a>
		<a href="/media">Media</a>
	</nav>
</header>

<main>
	{@render children()}
</main>

<footer>
	<p>© 2025 Los Compits</p>
</footer>