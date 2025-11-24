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
