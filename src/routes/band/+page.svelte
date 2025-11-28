<script lang="ts">
  import facu from '$lib/assets/band/facu.png';
  import marco from '$lib/assets/band/Marco.png';
  import lalo from '$lib/assets/band/lalo.png';
  import jesus from '$lib/assets/band/jesus.png';
</script>

<svelte:head>
  <title>Los Compits - La banda</title>
</svelte:head>

<section id="band-section">
  <h1>La banda</h1>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus odit earum laborum culpa, velit, labore libero assumenda temporibus deleniti recusandae obcaecati voluptatem consequatur, quod dolor ducimus. Sunt adipisci cum nulla.</p>

  <div id="band">
    <div class="member">
      <img src={marco} alt="Member 1">
      <div class="info">
        <h2>Omar Alejandro Ramos Narváez</h2>
        <p>Percusiones - Voz</p>
      </div>
    </div>
    <div class="member">
      <img src={facu} alt="Member 2">
      <div class="info">
        <h2>Facundo López</h2>
        <p>Percusión - Voz</p>
      </div>
    </div>
    <div class="member">
      <img src={lalo} alt="Member 3">
      <div class="info">
        <h2>Ricardo Garcia Gutierrez</h2>
        <p>Trompeta </p>
      </div>
    </div>
    <div class="member">
      <img src={jesus} alt="Member 4">
      <div class="info">
        <h2>Lucas Raiquen Pereyra</h2>
        <p>Trompeta </p>
      </div>
    </div>
    <div class="member">
      <img src={facu} alt="Member 4">
      <div class="info">  
        <h2>Abraham Ruvalcaba</h2>
        <p>Guitarra - Voz</p>
      </div>
    </div>
    <div class="member">
      <img src={lalo} alt="Lalo Abbadié">
      <div class="info">
        <h2>Lalo Abbadié</h2>
        <p>Contrabajo - Voz</p>
      </div>
    </div>
  </div>
</section>

<style>
  #band {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
    padding: var(--space-8);
    gap: var(--space-6);
    place-content: center;
    place-items: center;

    .member {
      position: relative;
      isolation: isolate;
      border-radius: var(--radius);
      border: 1px solid var(--border-color-subtle);
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
      transition-property: transform, box-shadow;
      transition-duration: var(--transition-duration-medium);

      img {
        width: 100%;
        height: auto;
      }
    }

    .info {
      background: var(--bg-elevated);
      padding: var(--space-4);

      h2 {
        margin: 0
      }

      p {
        font-size: var(--font-size-h4);
        color: var(--text-secondary);
        margin: 0;
      }
    }
  }
</style>