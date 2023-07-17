<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    p La Arquitectura Empresarial se desarrolla en las organizaciones empleando marcos de referencia que existen de industria, por dominio, o marcos de referencia integrales. Independiente del marco se encuentran elementos comunes como son la definición de principios que orientan de manera transversal los lineamientos, que se implementan mediante guías. El proceso de Arquitectura se lleva a cabo en Ejercicios de AE, a través de los dominios o perspectivas de arquitectura, en el ejercicio se elaboran evidencias que se almacenan en el repositorio de arquitectura. Los productos de arquitectura pueden ser de la categoría entregables, que son documentos completos o artefactos que describen los bloques de construcción. En relación con los bloques de construcción, se encuentran de dos tipos: de solución (SBB) y de arquitectura (ABB). Un buen ejercicio de arquitectura agrega valor a la organización y la habilita para la transformación digital, el desarrollo de capacidades tecnológicas y de negocio.
    p.mb-5 En el siguiente mapa encontrara los principales temas que aborda este componente:

    .row.justify-content-center
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="alt")
      .col-auto
        a.anexo.mb-4(:href="obtenerLink('/downloads/sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
