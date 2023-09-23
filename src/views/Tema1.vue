<template lang="pug">
.curso-main-container.pb-3.tema1
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Razones para diseñar e implementar una Arquitectura Empresarial (AE)

    p.mb-3(data-aos="fade-down") Para afrontar los retos que se presentan actualmente, las organizaciones requieren marcos de trabajo que contribuyan a sumar esfuerzos de todas las unidades de negocio para optimizar recursos, habilitar el crecimiento empresarial empleando tecnologías basadas en datos, gestionar riesgos y asegurar el cumplimiento de las regulaciones. La Arquitectura Empresarial ofrece un marco de trabajo precisamente con esas características para potenciar los negocios, incorporar cambios y aplicar innovación en los procesos.

    p.mb-5(data-aos="fade-down") Pero, entonces, ¿Cuáles son los retos que deben enfrentar las organizaciones?.

    .row.justify-content-center.align-items-center.mb-5(data-aos="flip-right")
      .col-12.col-md-11.col-lg-11
        .bloque-texto-g.color-primario.p-3.p-sm-3.p-md-3
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/tema1-01.png')})`}" 
          )
          .bloque-texto-g__texto.p-3
            p.mb-0 Las organizaciones se enfrentan a todo tipo de retos como de competencia, restricciones de costos y de tiempos de comercialización, de agilidad, de seguridad o sostenibilidad, entre otros. Así sean grandes o pequeñas, pueden enfrentar problemas complejos, cuyas soluciones no pueden ser probadas fácilmente, ya sea porque no se han definido claramente o porque presentan varias explicaciones.
            br
            br 
            | Entre tanto, la alta dirección tiene dificultades para tomar decisiones; aunque saben que la organización debe cambiar, no tiene claridad sobre qué cambiar y cómo hacerlo. 
      
    p.mb-5(data-aos="fade-down") Sabemos que las organizaciones dependen cada vez más de las capacidades tecnológicas; la entrega de valor a clientes y usuarios requiere de la construcción de soluciones basadas en información, con tecnologías innovadoras y ágiles; sin embargo, en algunas organizaciones existe una desconexión entre la gerencia de Tecnologías de la Información (TI) y la del negocio.

    .row.align-items-center.justify-content-center.mb-5(data-aos="fade-down-left")
      .col-12.col-md-10.col-lg-10
        .cajon.color-secundario.p-3
          p.mb-0 En el mundo de hoy, la inversión en tecnología no es suficiente para que las empresas logren sobrevivir a la competencia; Es necesario contar con estrategias orientadas a entender e incorporar el cambio continuo y la cultura de la innovación. 

    .row.align-items-center.justify-content-center.mb-4(data-aos="fade-down-left")
      .col-12.col-md-4.col-lg-4
        figure
          img(src='@/assets/curso/temas/tema1/tema1-02.svg', alt='')
      .col-12.col-md-6.col-lg-6
        p Se requiere pensar en el uso de las tecnologías digitales para crear nuevos modelos de negocio, en los que se mezclan el mundo digital y el físico, con lo cual es posible conducir a los clientes, cada vez más exigentes, a la denominada transformación digital como un imperativo para la evolución de los negocios. Por ello aplicar la Arquitectura Empresarial (AE) facilita que las organizaciones tengan un entendimiento común sobre la forma en la que funciona el negocio en el momento actual. Esta comprensión se dirige a conocer la estrategia, las operaciones, los sistemas de información y la tecnología; también permite responder preguntas del tipo ¿qué?, ¿dónde?, ¿cuándo?, ¿cómo? y ¿por qué?.

    .row.align-items-center.justify-content-center.mb-4(data-aos="fade-down-left")
      .col-lg-8.col.md-10.col-12
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/tema1/tema1-03.svg' alt='AvatarTop' style="width:60%")
          .tarjeta.tarjeta--azul
            .p-4
              p.mb-0 Transformar digitalmente la organización, para articular al estado futuro deseado con la correspondiente planeación para alcanzarlo.

    .h4.py-4.mb-4(data-aos="zoom-down-right")
      span.titulo-herramientas.d-none.d-sm-none.d-md-inline-flex Campos de acción y casos de uso en la Arquitectura Empresarial
      div.titulo-herramientas.d-block.d-md-none Campos de acción y casos de uso en la Arquitectura Empresarial

    p.mb-3(data-aos="fade-down") De acuerdo con Leanix.net (2021), los arquitectos empresariales se desempeñan en determinados campos de acción clave, con lo cual logran agregar valor a las organizaciones. Asimismo, estos campos se relacionan con casos de uso que se resuelven comúnmente mediante la AE.
    p.mb-5(data-aos="fade-down") A continuación, nos familiarizaremos con los campos de acción clave:  

    AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta color-primario" data-aos="flip-left")
      .row(titulo="Permitir el crecimiento")
        .col-md-9.col-lg-10.col-12.mb-4.mb-md-0
          p Las empresas necesitan innovar rápidamente para seguir siendo competitivas. Muchas organizaciones se esfuerzan por adoptar tecnologías más nuevas como microservicios, Internet de las cosas (IoT) o migración a la nube. También buscan implementar las metodologías de desarrollo de #[i software] como Lean y DevOps necesarias para mantener el ritmo en el mundo digital actual. Estas tendencias pueden aportar un valor considerable al acelerar el tiempo de comercialización, crear nuevas fuentes de ingresos, reducir costos y mejorar la agilidad. 
        .col-md-3.col-lg-2.col-12.mb-4.mb-md-0
          img(src='@/assets/curso/temas/tema1/tema1-04.svg' alt='')
        .col-12.mt-3
          .cajon.color-secundario.p-3
            p.mb-0 En este sentido, los arquitectos empresariales están en la mejor posición para ayudar a sus empresas a navegar por la transformación digital, que, si se hace correctamente, puede generar enormes oportunidades de crecimiento.
      .row(titulo="Asegurar el cumplimiento")
        .col-md-9.col-lg-10.col-12.mb-4.mb-md-0
          p Los arquitectos empresariales son fundamentales para mantener el cumplimiento de las legislaciones de los países, así como las normas de los organismos reguladores y demás disposiciones. 
          .cajon.color-secundario.p-3
            p.mb-0 Tengamos en cuenta que mantenerse en cumplimiento de todas esta normativa es costoso para las organizaciones, pero las tarifas por incumplimiento son aún más altas. 
        .col-md-3.col-lg-2.col-12.mb-4.mb-md-0
          img(src='@/assets/curso/temas/tema1/tema1-05.svg' alt='')
      .row(titulo="Reducir la complejidad")
        .col-md-9.col-lg-10.col-12.mb-4.mb-md-0
          p A medida que las organizaciones experimentan un crecimiento orgánico e inorgánico, los entornos de TI pueden volverse inmanejables rápidamente, lo cual puede resultar en sistemas duplicados, datos inconsistentes y la necesidad de integración de sistemas. Los arquitectos empresariales pueden abordar la complejidad excesiva al proporcionar una hoja de ruta para optimizar los entornos de TI, lo que contribuye directamente a reducir los costos.
        .col-md-3.col-lg-2.col-12.mb-4.mb-md-0
          img(src='@/assets/curso/temas/tema1/tema1-06.svg' alt='')
        .col-12.mt-3
          .cajon.color-secundario.p-3
            p.mb-0 Como observamos, los arquitectos empresariales facilitan que las empresas realicen el tránsito hacia la transformación digital, vigilan el cumplimiento de la normativa y están capacitados para orientar la complejidad en entornos de TI, para evitar el caos y el aumento de los costos.

    p.mb-5(data-aos="fade-down") Ahora conozcamos los casos de uso más comunes de la AE:

    .row.align-items-center.justify-content-center.mb-4(data-aos="fade-down-left")
      .col-md-8.col-12
        LineaTiempoD.color-acento-contenido.mb-5
          .row(numero="A" titulo="Armonización después de fusiones")
            .col-12.mb-4.mb-md-0
              p.text-small Las fusiones y adquisiciones a menudo fallan o consumen recursos no deseados, porque las organizaciones involucradas son incapaces de integrarse con éxito. Desde la perspectiva de TI, los desafíos son enormes, varias organizaciones tienen que unificar y transformar sus tecnologías sin interrumpir el negocio del día a día.
          .row(numero="B" titulo="Racionalización de aplicaciones")
            .col-12.mb-4.mb-md-0
              p.text-small Cuando las personas del negocio se enfocan en impulsar el crecimiento económico, es frecuente que se pase por alto alinear con TI. En consecuencia, a menudo se introducen varias aplicaciones en diferentes momentos cuando lo solicitan diferentes equipos. Lo que el lado empresarial no se da cuenta es que tener un panorama de TI lleno de aplicaciones con funcionalidad superpuesta, ciclos de vida variables y tecnologías redundantes a menudo generan problemas de integración significativos e ineficiencias en el funcionamiento de la empresa, a nivel general. 
              div.p-3(style="background-color:#FFFFFF")
                p.mb-0.text-small La ejecución de un ecosistema de TI complejo y rígido aumenta el gasto en cientos de millones de dólares, al tiempo que reduce directamente la calidad de los servicios de TI y la satisfacción de quienes confían en él.
          .row(numero="C" titulo="DMBoK")
            .col-12.mb-4.mb-md-0
              p.text-small A veces, las aplicaciones se crean a medida, algunas se ejecutan en sus configuraciones estándar y otras tienen una combinación de ambas, lo que crea una situación delicada para los responsables de la integración, que es un aspecto clave, porque las aplicaciones brindan el mayor valor cuando trabajan juntas para producir soluciones perfectas y los requisitos de las capacidades de cada negocio son diferentes. 
              p.text-small Veamos algunos ejemplos:
              ul.lista-ul.mb-2
                li.mb-0.text-small 
                  i.fas.fa-angle-right
                  | Las tiendas en línea o de comercio electrónico deben integrarse directamente con los sistemas de inventario.
                li.mb-0.text-small 
                  i.fas.fa-angle-right
                  | Los calendarios deben sincronizarse con las aplicaciones de recursos humanos.
                li.mb-0.text-small 
                  i.fas.fa-angle-right
                  | Las aplicaciones de marketing deben sincronizarse con el CRM.
          .row(numero="D" titulo="Gestión de riesgos tecnológicos")
            .col-12.mb-4.mb-md-0
              p.text-small En todas las industrias, las organizaciones confían en la tecnología para ejecutar con éxito sus operaciones; sin embargo, siempre existe el riesgo inherente que puede afectar cualquier tecnología, es decir, el riesgo cibernético, que se presenta a través de innumerables fuentes: 
              ul.lista-ul.mb-2
                li.mb-0.text-small 
                  i.fas.fa-angle-right
                  | Las interrupciones de TI.    
                li.mb-0.text-small 
                  i.fas.fa-angle-right
                  | Las aplicaciones obsoletas (#[em legacy applications]).    
                li.mb-0.text-small 
                  i.fas.fa-angle-right
                  | El soporte a la infraestructura.
              p.text-small Estas situaciones conducen a filtraciones de datos, aunque son de las más comunes, también es posible realizar mecanismos de prevención.
              div.p-3(style="background-color:#FFFFFF")
                p.mb-0.text-small Los costos de los incidentes de seguridad a nivel global son altos, entre los daños financieros y de reputación, las consecuencias de un incidente cibernético pueden ser extremadamente difíciles para las organizaciones.
      .col-md-4.col-10
        figure
          img(src='@/assets/curso/temas/tema1/tema1-07.png', alt='')

    p.mb-5(data-aos="fade-down") Sigamos identificando los casos de uso más común que debe enfrentar el arquitecto empresarial:

    .row.align-items-center.justify-content-center.mb-4(data-aos="fade-down-left")
      .col-md-4.col-10
        figure
          img(src='@/assets/curso/temas/tema1/tema1-08.png', alt='')
      .col-md-8.col-12
        LineaTiempoD.color-acento-contenido.mb-5
          .row(numero="E" titulo="Cumplimiento de datos")
            .col-12.mb-4.mb-md-0
              p.text-small Cumplir con la normatividad tiene numerosas ventajas debido a la estandarización que conlleva, pero muchas veces requieren cambios drásticos en la forma de abordar la gestión de datos. Es el caso del cumplimiento de normas sobre la gestión de los datos personales, cuyo incumplimiento conlleva sanciones monetarias severas. 
              div.p-3(style="background-color:#FFFCE9")
                p.mb-0.text-small Los arquitectos empresariales pueden demostrar claramente el cumplimiento de los Datos Personales, asegurándose de que todos los datos pertinentes se recopilan y presentan de manera bien organizada.
          .row(numero="F" titulo="Gobernanza de estándares")
            .col-12.mb-4.mb-md-0
              p.text-small El uso de tecnología de la información estandarizada tiene beneficios medibles:
              ul.lista-ul.mb-2
                li.mb-0.text-small 
                  i.fas.fa-angle-right
                  | Reduce el tiempo de capacitación. 
                li.mb-0.text-small 
                  i.fas.fa-angle-right
                  | Reduce los costos en el soporte y mantenimiento.
                li.mb-0.text-small 
                  i.fas.fa-angle-right
                  | Ofrece mejor poder de negociación con proveedores y comunicación mejorada. 
              p.text-small Sin embargo, la estandarización también puede tener sus inconvenientes, ya que las tecnologías cambian muy rápidamente y los procesos deben actualizarse cuando se actualiza la tecnología. Ser abierto y adaptable a las nuevas tecnologías es crucial tanto para la misión de la organización como para su capacidad de operar de manera eficiente. Por estas razones, es importante adoptar una política de estandarización que se ajuste a las necesidades.

          .row(numero="G" titulo="De monolito a microservicios")
            .col-12.mb-4.mb-md-0
              p.text-small La rápida aceleración de la digitalización está obligando a muchas empresas a repensar sus arquitecturas y para satisfacer las expectativas en constante crecimiento de los clientes expertos en tecnología, las empresas deben asegurarse de que sus productos estén disponibles en todos los canales digitales lo más rápido posible.  Una forma de reducir los tiempos de producción es introducir una arquitectura de microservicios en el desarrollo de #[i software].
              div.p-3(style="background-color:#FFFCE9")
                p.mb-0.text-small Las empresas que utilizan microservicios implementan nuevas versiones de #[i software] cinco veces más rápido que las que no los utilizan. 
          .row(numero="H" titulo="Transformación en la nube")
            .col-12.mb-4.mb-md-0
              p.text-small La computación en la nube tiene muchos beneficios, incluidos ahorros de costos, mejoras en la eficiencia, ciclos de desarrollo más cortos, tiempo de comercialización más rápido y la capacidad de escalar con la demanda. La nube se ha convertido en un determinante clave de la estrategia empresarial y de TI.
              p.text-small Los arquitectos empresariales pueden implementar una hoja de ruta desde la infraestructura local hasta la nube, a pesar de las numerosas restricciones que influyen en la adopción de la nube, incluidos los límites presupuestarios, la creciente complejidad de las políticas corporativas y las regulaciones externas. 
          .row(numero="I" titulo="Arquitectura del Internet de las cosas")
            .col-12.mb-4.mb-md-0
              p.text-small Mientras que los accesorios inteligentes hacen espacio en la vida personal y en los hogares de más personas en el mundo, los arquitectos empresariales deben analizar cómo el Internet de las cosas (IoT) puede beneficiar a sus organizaciones. 
              p.text-small Algunos de los beneficios son los siguientes:
              ul.lista-ul.mb-2
                li.mb-0.text-small 
                  i.fas.fa-angle-right
                  | IoT trae tiempos más cortos al mercado.
                li.mb-0.text-small 
                  i.fas.fa-angle-right
                  | Proporciona información de Big Data en tiempo real.
                li.mb-0.text-small 
                  i.fas.fa-angle-right
                  | Permite nuevos servicios y modelos de negocio.
                li.mb-0.text-small 
                  i.fas.fa-angle-right
                  | Reduce los costes. 
              p.text-small Sin embargo, también existen desafíos importantes que enfrenta el IoT, desde los riesgos de seguridad y privacidad, hasta la falta de supervisión estándar y la complejidad de la integración.

    p.mb-5(data-aos="fade-down") Le invitamos a consultar la siguiente infografía para conocer la relación entre los campos de acción y los casos de uso en la AE:
    
    .row.justify-content-center.mb-5(data-aos="fade-down-right")
      //- .col-12.mb-2.mb-md-0
      //-   figure
      //-     img.d-none.d-sm-none.d-md-block(src='@/assets/curso/temas/tema1/tema1-09-md.svg', alt='')
      //-     img.d-block.d-md-none(src='@/assets/curso/temas/tema1/tema1-09-sm.svg', alt='') 
      .col-12.mb-5
        .h4.text-center
          span Casos de uso resueltos con Arquitectura Empresarial
        PasosA.color-primario.mb-5(tipo="n")
          .row.justify-content-center.align-items-center(data-aos="fade-down-right")
            .col-md-6.mb-4.mb-md-0
              h5.text-center Campos de acción
              .tarjeta.color-secundario.p-3
                p.text-center.mb-0 #[b Permitir el crecimiento]
            .col-md-6
              h5.text-center Casos de uso
              .tarjeta-avatar-b
                .tarjeta-avatar-b__img
                  img(src='@/assets/curso/temas/tema1/info-1.svg' alt='AvatarTop')
                .tarjeta.tarjeta--azul
                  .px-5.py-3.text-small
                    p.mb-0 1. Armonización después de fusiones.
                    p.mb-0 2. Racionalización de aplicaciones.
                    p.mb-0 3. Arquitectura de Integración.
          .row.justify-content-center.align-items-center(data-aos="fade-down-left")
            .col-md-6.mb-4.mb-md-0
              h5.text-center Campos de acción
              .tarjeta.color-secundario.p-3
                p.text-center.mb-0 #[b Asegurar el cumplimiento]
            .col-md-6
              h5.text-center Casos de uso
              .tarjeta-avatar-b
                .tarjeta-avatar-b__img
                  img(src='@/assets/curso/temas/tema1/info-2.svg' alt='AvatarTop')
                .tarjeta.tarjeta--azul.text-start
                  .px-5.py-3.text-small
                    p.mb-0 4. Gestión de riesgos tecnológicos.
                    p.mb-0 5. Cumplimiento de datos.
                    p.mb-0 6. Gobernanza de estándares.
          .row.justify-content-center.align-items-center(data-aos="fade-down-right")
            .col-md-6.mb-4.mb-md-0
              h5.text-center Campos de acción
              .tarjeta.color-secundario.p-3
                p.text-center.mb-0 #[b Reducir la complejidad]
            .col-md-6
              h5.text-center Casos de uso
              .tarjeta-avatar-b
                .tarjeta-avatar-b__img
                  img(src='@/assets/curso/temas/tema1/info-3.svg' alt='AvatarTop')
                .tarjeta.tarjeta--azul.text-start
                  .px-5.py-3.text-small
                    p.mb-0 7. De monolito a Microservicios.
                    p.mb-0 8. Transformación en la nube.
                    p.mb-0 9. Arquitectura del Internet de las cosas.


</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
