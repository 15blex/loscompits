<script lang="ts">
  import { page } from '$app/stores';
  import logo from '$lib/assets/logo.jpg';
  import ThemeToggle from './ThemeToggle.svelte';

  const links = [
    { name: 'Logo', href: '/', isLogo: true },
    { name: 'Band', href: '/band' },
    { name: 'Bio', href: '/bio' },
    { name: 'Media', href: '/media' },
    { name: 'Events', href: '/events' }
  ];

  let isOpen = $state(false);

  const toggleMenu = () => {
    isOpen = !isOpen;
  };
</script>

<header class="site-header">
  <div class="header-inner">
    <a href="/" class="logo-link" onclick={() => isOpen = false}>
      <img src={logo} alt="Los Compits Logo">
    </a>

    <button 
      class="nav-toggle" 
      aria-expanded={isOpen} 
      aria-label="Toggle navigation"
      onclick={toggleMenu}
    >
      <span class="hamburger"></span>
    </button>

    <nav class="site-nav" class:is-open={isOpen}>
      <ul>
        {#each links as link}
          {#if !link.isLogo}
            <li>
              <a 
                class:active={$page.url.pathname === link.href} 
                href={link.href}
                onclick={() => isOpen = false}
              >
                {link.name}
              </a>
            </li>
          {/if}
        {/each}
        <li class="theme-toggle-item">
          <ThemeToggle />
        </li>
      </ul>
    </nav>
  </div>
</header>

<style>
  /* 
   * LOCAL STYLES
   * Only component-specific layout that doesn't affect global responsive behavior 
   * if possible, otherwise rely on class names for base.css as requested.
   */
   
   /* We leave most layout to base.css as requested */
   
  img {
    block-size: 75px;
    border-radius: var(--radius-full);
  }
</style>