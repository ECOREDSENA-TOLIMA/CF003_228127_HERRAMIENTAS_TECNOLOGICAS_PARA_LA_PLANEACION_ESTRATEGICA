<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Marcos de Referencia de Arquitectura Empresarial

    .row.justify-content-center.align-items-center.mb-5(data-aos="flip-right")
      .col-12
        .bloque-texto-g.color-primario.p-3.p-sm-3.p-md-3
          .bloque-texto-g__img( 
            :style="{'background-image': `url(${require('@/assets/curso/temas/tema3/tema3-01.png')})`}" 
          )
          .bloque-texto-g__texto.p-3
            p.mb-0 Un marco de referencia se refiere al andamiaje que permite desarrollar la Arquitectura Empresarial. Estos marcos de referencia contemplan los métodos, las herramientas y el lenguaje común para la creación, adopción y mantenimiento de la AE en las organizaciones. Desde los años ochenta, los consorcios, gobiernos o empresas tecnológicas han venido implementando estas metodologías de trabajo de la AE y son la base para las prácticas empresariales que actualmente se adelantan. Existen tres tipos de marcos de referencia: integrales, de industria y de dominio.

    Separador
    #t_3_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 3.1 Tipos y características de los marcos de referencia de la Arquitectura Empresarial

    p.mb-5(data-aos="fade-down") Como ya se ha indicado, existen tres marcos de referencia, dentro de los cuales se relacionan algunos de los marcos de referencia más empleados, como se muestra en la siguiente figura y se describen a continuación.

    .row.justify-content-center.mb-5(data-aos="fade-down-right")
      .col-12.mb-2.mb-md-0
        .titulo-sexto.color-acento-contenido
          p.titulo.pb-0.mb-0 <b>Figura 3. </b> <i>Tipos de marcos de referencia de AE</i>
        figure 
          img.d-none.d-sm-none.d-md-block(src='@/assets/curso/temas/tema3/tema3-02-md.svg', alt='')
          img.d-block.d-md-none(src='@/assets/curso/temas/tema3/tema3-02-sm.svg', alt='') 

    .h4.py-4.mb-4(data-aos="zoom-down-right")
      span.titulo-herramientas Marcos integrales de arquitectura empresarial

    p.mb-0(data-aos="fade-down") Los marcos de arquitectura integral se aplican ampliamente, son independientes de la industria y del dominio. 
    p.mb-5(data-aos="fade-down") En este tipo de marco se presentan dos marcos integrales principales: #[b TOGAF® y Zachman.]





</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
