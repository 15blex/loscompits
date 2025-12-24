<script lang="ts">
  import { onMount } from 'svelte';

  let theme = $state('light');

  onMount(() => {
    // Check for saved preference or system preference
    const savedTheme = localStorage.getItem('theme');
    const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    
    theme = savedTheme || systemTheme;
    applyTheme(theme);
  });

  function applyTheme(newTheme: string) {
    // We set the style property on the root element to force the color-scheme
    // tailored for our light-dark() CSS usage
    if (!document.startViewTransition) {
      document.documentElement.style.colorScheme = newTheme;
      localStorage.setItem('theme', newTheme);
      theme = newTheme;
      return;
    } else {
      document.startViewTransition(() => {
        document.documentElement.style.colorScheme = newTheme;
        localStorage.setItem('theme', newTheme);
        theme = newTheme;
      });
    }
  }

  function toggleTheme() {
    if (!document.startViewTransition) {
      const newTheme = theme === 'dark' ? 'light' : 'dark';
      localStorage.setItem('theme', newTheme);
      applyTheme(newTheme);
      return;
    } else {
      document.startViewTransition(() => {
        const newTheme = theme === 'dark' ? 'light' : 'dark';
        localStorage.setItem('theme', newTheme);
        applyTheme(newTheme);
      });
    }
  }
</script>

<button 
  class="theme-toggle" 
  onclick={toggleTheme}
  aria-label="Toggle dark mode"
  title="Toggle dark mode"
>
  {#if theme === 'dark'}
    <!-- Sun Icon -->
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4"/></svg>
  {:else}
    <!-- Moon Icon -->
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
  {/if}
</button>

<style>
  .theme-toggle {
    background: none;
    border: none;
    cursor: pointer;
    padding: var(--space-xs);
    color: var(--text-1);
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-radius: var(--radius-full);
    transition: background-color var(--transition-fast), color var(--transition-fast);

    &:hover {
      background-color: var(--bg-surface-2);
      color: var(--color-primary-500);
    }
  }
</style>
