<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
      
    p.mb-5(data-aos="fade-down") Cordial bienvenida a este componente formativo en el que se tratará el marco de referencia de la Arquitectura Empresarial; para conocer su importancia y los diferentes elementos que le competen, le invitamos a observar el siguiente video:

    figure(data-aos="fade-down")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/aUlh3eBXacI" title="Marco de referencia arquitectura empresarial" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
