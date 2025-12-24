<script lang="ts">
  import { page } from '$app/stores';
  import logo from '$lib/assets/logo.jpg';

  const links = [
    { name: 'Logo', href: '/', isLogo: true },
    { name: 'Band', href: '/band' },
    { name: 'Bio', href: '/bio' },
    { name: 'Media', href: '/media' },
    { name: 'Events', href: '/events' }
  ];
</script>

<header>
  <nav>
    <ul>
      {#each links as link}
        <li>
          <a 
            class:active={$page.url.pathname === link.href} 
            href={link.href}
          >
            {#if link.isLogo}
              <img src={logo} alt="Los Compits Logo">
            {:else}
              {link.name}
            {/if}
          </a>
        </li>
      {/each}
    </ul>
  </nav>
</header>

<style>
  img {
    block-size: 75px;
    border-radius: var(--radius-full);
  }
</style>