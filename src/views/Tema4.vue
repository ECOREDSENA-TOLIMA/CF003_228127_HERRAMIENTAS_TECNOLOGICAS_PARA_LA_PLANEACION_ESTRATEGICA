<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Selección del marco de arquitectura adecuado para la organización

    p.mb-3(data-aos="fade-down") Cuando se habla de marco de referencia de Arquitectura Empresarial, la mayoría automáticamente piensa en el estándar TOGAF®; esto puede deberse a que, por casi tres décadas, los arquitectos empresariales lo han utilizado indistintamente. Sin embargo, es esencial tener en mente que, aunque este marco permite alcanzar una arquitectura integral, también existen otros marcos que pueden aplicarse a las necesidades empresariales.
    p.mb-5(data-aos="fade-down") La elección del marco de arquitectura parte de la necesidad específica de la organización, analicemos las siguientes situaciones:

    .row.justify-content-center.align-items-center.mb-5(data-aos="flip-right")
      .col-12
        .bloque-texto-g.color-primario.p-3.p-sm-3.p-md-3
          .bloque-texto-g__img( 
            :style="{'background-image': `url(${require('@/assets/curso/temas/tema4/tema4-01.png')})`}" 
          )
          .bloque-texto-g__texto.p-3
            p.mb-0 Si la organización pertenece al sector bancario, defensa, telecomunicaciones o Gobierno, es fácil decidirse por el marco de la industria. Sabemos que en estos casos podemos emplear los marcos BIAN, DODAF, TM Forum o MRAE para el Estado colombiano
              br
              br
              | En cambio, para otro tipo de necesidades, será necesario revisar el propósito del equipo de Arquitectura Empresarial, conocer el problema que se requiere resolver, que impulsa el diseño de su equipo de AE. 

    p.mb-3(data-aos="fade-down") Por ejemplo, es importante revisar qué se puede adaptar del marco de otra industria; si el problema es de integración se puede adaptar DODAF o si el problema es de seguridad se puede adaptar el modelo ABSA.
    p.mb-4(data-aos="fade-down") Si el equipo de AE no está bien establecido, seleccionar TOGAF es la mejor opción, porque se aprovecha su modularidad, cubre la metodología y la creación de una capacidad de AE. 
    p.mb-5(data-aos="fade-down") #[b Aunque los marcos TOGAF y Zachman se complementan, cada uno de estos modelos presenta ventajas y desventajas en su aplicación, veamos en qué consisten:]

    .row.justify-content-center.mb-5(data-aos="fade-down-right")
      .col-12.mb-2.mb-md-0
        .tabla-a.color-primario.mb-4
              table
                thead
                  tr
                    th Modelo
                    th Ventajas
                    th Desventajas
                tbody
                  tr 
                    th.text-center Zachman
                    td 
                      ul.lista-ul.mb-2
                        li
                          i.fas.fa-angle-right
                          | Facilita la comparación y el contraste de una amplia gama de herramientas y enfoques en la práctica de la AE.
                        li
                          i.fas.fa-angle-right
                          | Tiende a favorecer las metodologías tradicionales centradas en datos.
                    td 
                      ul.lista-ul.mb-2
                        li
                          i.fas.fa-angle-right
                          | No proporciona ninguna guía de implementación real para crear artefactos arquitectónicos.
                        li
                          i.fas.fa-angle-right
                          | No es popular en la comunidad de desarrolladores de software.
                  tr 
                    th.text-center TOGAF
                    td 
                      ul.lista-ul.mb-2
                        li
                          i.fas.fa-angle-right
                          | Entre sus mayores ventajas, presenta un método sencillo, en el que se describe paso a paso el diseño de la AE.
                        li
                          i.fas.fa-angle-right
                          | Es flexible y adaptable, por lo que es fácil de usar y da como resultado un ahorro masivo de recursos por parte de las organizaciones.
                        li
                          i.fas.fa-angle-right
                          | Es el marco de arquitectura empresarial más popular del mundo, es fácilmente transferible entre varios sectores y unidades de negocio.
                    td 
                      ul.lista-ul.mb-2
                        li
                          i.fas.fa-angle-right
                          | No una arquitectura simple.
                        li
                          i.fas.fa-angle-right
                          | No suministra plantillas de documentos o ejemplos que facilitar el inicio rápido.
                        li
                          i.fas.fa-angle-right
                          | Dentro del modelo no hay evaluación de la madurez.












</template>

<script>
export default {
  name: 'Tema4',
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
