<template lang="pug">
.curso-main-container.pb-3.tema2
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Conceptualización de Arquitectura Empresarial

    p.mb-5(data-aos="fade-down") Hasta ahora hemos analizado la importancia que conlleva para las organizaciones el desempeño de los arquitectos empresariales. Es importante conocer en qué consiste la Arquitectura Empresarial (AE).

    .row.justify-content-center.align-items-center.mb-5(data-aos="flip-right")
      .col-12.col-md-11.col-lg-11
        .bloque-texto-g.color-primario.p-3.p-sm-3.p-md-3
          .bloque-texto-g__img( 
            :style="{'background-image': `url(${require('@/assets/curso/temas/tema2/tema2-01.png')})`}" 
          )
          .bloque-texto-g__texto.p-3
            h4.mb-0 Arquitectura Empresarial
              br
              br 
            p.mb-0 De acuerdo con MinTic (2021), la Arquitectura Empresarial es un conjunto de elementos de una organización dentro de los cuales se encuentran los objetivos estratégicos, los procesos, las personas, la infraestructura tecnológica, los sistemas de información, así como sus interrelaciones y factores externos tales como la normatividad o el comportamiento del mercado, entre otros, que gobiernan su diseño, su comportamiento y su evolución.


    .row.justify-content-center.align-items-center.mb-5(data-aos="flip-right")
      .col-12.col-md-11.col-lg-11.cajon.color-secundario.p-3
        p La AE es una disciplina que ha tomado conceptos y prácticas de los modelos administrativos y de gestión, tales como la Teoría Organizacional y la Teoría de Sistemas; actualmente, se enfoca en la generación de valor con el tratamiento que se proporciona a la información, lo que ha llevado a su continua evolución, según las exigencias de la era digital.

    .row.justify-content-center.mb-5(data-aos="fade-down-right")
      .col-12.mb-2.mb-md-0
        .titulo-sexto.color-acento-contenido
          p.titulo.pb-0.mb-0 <b>Figura 1. </b> <i>Conceptualización arquitectura empresarial</i>
        figure
          img.d-none.d-sm-none.d-md-block(src='@/assets/curso/temas/tema2/tema2-02-md.svg', alt='La conceptualización de la estrategia empresarial, se relaciona con la tecnología la información, las personas y los procesos. Todo lo anterior mediado por la normatividad, el comportamiento del mercado y el comportamiento de los ciudadanos.')
          img.d-block.d-md-none(src='@/assets/curso/temas/tema2/tema2-02-sm.svg', alt='La conceptualización de la estrategia empresarial, se relaciona con la tecnología la información, las personas y los procesos. Todo lo anterior mediado por la normatividad, el comportamiento del mercado y el comportamiento de los ciudadanos.') 

    p.mb-3(data-aos="fade-down") Con el desarrollo de la AE se trata de comprender precisamente el comportamiento de las relaciones entre elementos de la organización y cómo son afectados por los factores externos, comportamiento de clientes y usuarios, además de los cambios regulatorios.
    p.mb-5(data-aos="fade-down") Conozcamos algunas importantes definiciones que nos proporcionan ISO/IEC/EEE 42010:2011 y TOGAF:

    AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta color-primario" data-aos="flip-left")
      .row(titulo="ISO/IEC/EEE 42010:2011")
        .col-md-3.col-lg-2.col-12.mb-4.mb-md-0
          img(src='@/assets/curso/temas/tema2/tema2-03.svg' alt='')
        .col-md-9.col-lg-10.col-12.mb-4.mb-md-0 
          p Para ISO/IEC/EEE 42010:2011 la Arquitectura Empresarial se refiere a los conceptos o propiedades fundamentales de un sistema y su entorno incorporados en sus elementos, relaciones y en los principios de su diseño y evolución.
      .row(titulo="TOGAF")
        .col-md-3.col-lg-2.col-12.mb-4.mb-md-0
          img(src='@/assets/curso/temas/tema2/tema2-04.svg' alt='')
        .col-md-9.col-lg-10.col-12.mb-4.mb-md-0 
          p El estándar TOGAF presenta un segundo significado según el contexto: “la estructura de los componentes, sus interrelaciones y los principios y pautas que rigen su diseño y evolución a lo largo del tiempo” (The Open Group, 2018). 

    .row.align-items-center.justify-content-center.mb-4(data-aos="fade-down-left")
      .col-12.col-md-6.col-lg-6
        p Como hemos mencionado, la Arquitectura Empresarial (AE) se orienta a liderar, de manera proactiva y holística, las respuestas empresariales a las fuerzas disruptivas mediante la identificación y el análisis de la ejecución del cambio hacia la visión y los resultados comerciales deseados. Ofrece valor al presentar a los líderes comerciales y de TI recomendaciones listas para firmar, para ajustar políticas y proyectos, para lograr resultados comerciales específicos que aprovechen las interrupciones comerciales relevantes (Gartner.com, 2020).
      .col-12.col-md-4.col-lg-4
        figure
          img(src='@/assets/curso/temas/tema2/tema2-05.svg', alt='')

    .row.align-items-center.justify-content-center.mb-5(data-aos="fade-down-left")
      .col-12.col-md-10.col-lg-10
        .cajon.color-secundario.p-3
          p.mb-0 Desde esta perspectiva, la planificación basada en la capacidad permite que los arquitectos empresariales logren alinear TI con el negocio y encontrar la creación continua de valor empresarial.  Tengamos en cuenta que anteriormente, los proyectos de TI, frecuentemente, se describen en términos de productos técnicos y no como resultados comerciales, lo que dificulta que las empresas aprecian lo que se estaba entregando, lo que afectaba la visión de los arquitectos de TI hacia el objetivo comercial final.

    p.mb-5(data-aos="fade-down") Entonces, ¿qué se puede esperar de la planificación basada en la capacidad? 

    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-md-10
        .bloque-texto-d.color-primario.p-4(data-aos="fade-down")
          .bloque-texto-d__texto.mb-2
            i.fas.fa-quote-left
            p.mb-0 Según de Open Group (2018), la planificación basada en la capacidad es un paradigma de planificación empresarial muy útil, que enmarca todas las fases del desarrollo de la arquitectura en el contexto de los resultados comerciales, vinculando claramente la visión de TI, las arquitecturas y los planes de implementación y migración con la estrategia corporativa, el negocio y la línea de negocio.
          .bloque-texto-d__autor
            p.mb-0 (Citado en ManageEngine, 2020) #[i.fas.fa-quote-right]


    .row.align-items-center.justify-content-center.mb-4(data-aos="fade-down-left")
      .col-12.col-md-4.col-lg-4
        figure
          img(src='@/assets/curso/temas/tema2/tema2-06.png', alt='')
      .col-12.col-md-6.col-lg-6
        p Hemos estado mencionando el término “arquitecto” reiterativamente, por lo que consideramos necesario indicar que se podría relacionar este término al profesional de la construcción que proyecta, diseña y dirige la construcción de estructuras urbanísticas. En este mismo sentido, lo empleamos a nivel organizacional, ya que los arquitectos empresariales hacen lo propio para que la organización enfrente desafíos digitales.
        p Tengamos presente que los arquitectos empresariales son intermediarios entre el negocio y la gerencia de tecnologías de la información.

    p.mb-5(data-aos="fade-down") Pero, ¿Cuáles son los roles que se relacionan con la Arquitectura Empresarial?.

    .row.align-items-center.justify-content-center.mb-5(data-aos="fade-down-left")
      .col-lg-11.col-12.d-block.d-md-none
        img(src='@/assets/curso/temas/tema2/tema2-07-sm.svg', alt='') 
      .col-lg-11.col-12.d-none.d-sm-none.d-md-block
        ImagenInfografica.color-acento-botones
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/temas/tema2/tema2-07-md.svg', alt='')
          .tarjeta.color-acento-botones.p-3(x="20%" y="50%" numero="1")
            h4 Arquitecto Empresarial
            p Existen varios tipos de arquitectos, que se desempeñan desde su dominio y colaboran con su experiencia y habilidades en la construcción de la Arquitectura Empresarial de una organización. Estos son:
            p.mb-0 ▪  Arquitectos empresariales.
            p.mb-0 ▪  Arquitectos de soluciones. 
            p.mb-0 ▪  Arquitectos de seguridad.
            p.mb-0 ▪  Arquitectos de datos.
            p.mb-0 ▪  Arquitecto de TI.
          .tarjeta.color-acento-botones.p-3(x="70%" y="50%" numero="2")
            h4 #[i Stakeholders]
            p También conocidos como partes interesadas; se refiere a todas las personas que se ven afectadas por la AE, tienen influencia o interés en la AE, e inciden en su conclusión exitosa o no exitosa.
            p Dentro de estos se mencionan los altos ejecutivos, roles de organización de proyectos, roles de organización de clientes, desarrolladores de sistemas, socios de alianzas, proveedores, operaciones de TI, clientes, etc.

    p.mb-5(data-aos="fade-down") El desarrollo de una Arquitectura Empresarial ayuda a las partes interesadas como es el caso de la Alta Dirección, que toma las decisiones complejas, a explorar las posibles respuestas a los retos y a hacer la selección de las soluciones con amplios criterios. También proporciona a los patrocinadores, administradores de los recursos de la empresa la hoja de ruta de la arquitectura, para planear los cambios. Finalmente, incide en los consumidores, que como implementadores ejecutan dentro de las restricciones y pautas definidas por la AE. 

    Separador
    #t_2_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.1 Elementos del modelo de Arquitectura Empresarial

    p.mb-3(data-aos="fade-down") El equipo de arquitectura debe considerar los elementos para la adopción de la AE, independientemente del marco de referencia que se determine, para lo cual es importante identificarlos. De acuerdo con MINTIC (2019), en el desarrollo de la AE se tendrán elementos comunes, independiente del alcance que se haya definido en cada ejercicio; comienza con la definición de los principios que orientan de manera transversal los lineamientos que se implementan mediante guías. El proceso de arquitectura se lleva a cabo en Ejercicios de AE. Los principios orientan los ejercicios de AE que generan evidencias que se almacenan en el Repositorio de Arquitectura.
    p.mb-5(data-aos="fade-down") A continuación, puede revisar los elementos del modelo de Arquitectura Empresarial.

    SlyderF.mb-5(columnas="col-lg-6 col-xl-4 col-md-10 col-11 px-5 col-ipad px-lg-2")
      .tarjeta.color-primario.p-3
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema2/tema2-15.svg' alt='')
        h5.text-center Principios 
        p.text-center.text-small Son reglas de alto nivel que direccionan los lineamientos definidos en el modelo de arquitectura empresarial y se deben tener en cuenta para la toma de decisiones durante la ejecución de los ejercicios de arquitectura empresarial. 
      .tarjeta.color-secundario.p-3
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema2/tema2-16.svg' alt='')
        h5.text-center Dominios o vistas de AE  
        p.text-center.text-small Los diferentes marcos de referencia de la Arquitectura Empresarial establecen una descripción en la que representan a través de dimensiones, “vistas” o “perspectivas” que corresponden a los componentes principales, que sirven como instrumentos para el soporte de las operaciones del negocio. 
      .tarjeta.color-primario.p-3
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema2/tema2-17.svg' alt='')
        h5.text-center Lineamientos  
        p.text-center.text-small Se refiere a las orientaciones de carácter general, que corresponden a las disposiciones que deben ser ejecutadas para implementar el marco de referencia de la AE. 
      .tarjeta.color-secundario.p-3
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema2/tema2-18.svg' alt='')
        h5.text-center Guías 
        p.text-center.text-small Son instrumentos procedimentales que determinan las actividades que se deben ejecutar con uno o varios lineamientos del marco de referencia de la AE. 
      .tarjeta.color-primario.p-3
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema2/tema2-19.svg' alt='')
        h5.text-center Evidencias    
        p.text-center.text-small Documentos que representan los resultados de las actividades ejecutadas en el desarrollo de los ejercicios de AE.
      .tarjeta.color-secundario.p-3
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema2/tema2-20.svg' alt='')
        h5.text-center Proceso de Arquitectura 
        p.text-center.text-small Las actividades, organizadas en fases, que se llevan a cabo dentro de un ciclo iterativo de definición y realización continua de la arquitectura, que permite a las organizaciones transformar sus empresas de manera controlada en respuesta a las metas y oportunidades.
      .tarjeta.color-primario.p-3
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema2/tema2-21.svg' alt='')
        h5.text-center Ejercicios de AE   
        p.text-center.text-small Hacen referencia a las iteraciones de arquitectura empresarial. Para cada iteración se define el alcance y las necesidades. 
      .tarjeta.color-secundario.p-3
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema2/tema2-22.svg' alt='')
        h5.text-center Repositorio de AE
        p.text-center.text-small Se usa para almacenar las diferentes salidas arquitectónicas, creados en el proceso de AE como resultado del esfuerzo de los arquitectos, en diferentes niveles de abstracción como flujos de procesos, requisitos arquitectónicos, planes de proyectos, evaluaciones de cumplimiento de proyectos, etc.   

    Separador
    #t_2_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.2 Ventajas de desarrollar Arquitectura Empresarial

    p.mb-3(data-aos="fade-down") Como se ha venido mencionando, adoptar la AE genera diferentes beneficios para las organizaciones, con un entorno de TI unificado en toda la organización, alineado y estandarizado, tanto en plataforma tecnológica como los procesos de desarrollo de #[em software], se habilita la innovación, es posible ejecutar las estrategias, reducir los costos de TI y mejorar los procesos y capacidades.   
    p.mb-5(data-aos="fade-down") #[b En el siguiente esquema se presentan algunas de las ventajas que pueden alcanzar las organizaciones.]

    .row.justify-content-center.mb-5(data-aos="fade-down-right")
      .col-12.mb-2.mb-md-0
        .titulo-sexto.color-acento-contenido
          p.titulo.pb-0.mb-0 <b>Figura 2. </b> <i>Conceptualización arquitectura empresarial</i>
        figure 
          img.d-none.d-sm-none.d-md-block(src='@/assets/curso/temas/tema2/tema2-08-md.svg', alt='Conceptualización arquitectura empresarial: a) Habilita la innovación. b) Estandarización, reducción de complejidad y costos de TI. c) Mejoramiento de procesos y capacidades. d) Realización de la estrategia.')
          img.d-block.d-md-none(src='@/assets/curso/temas/tema2/tema2-08-sm.svg', alt='Conceptualización arquitectura empresarial: a) Habilita la innovación. b) Estandarización, reducción de complejidad y costos de TI. c) Mejoramiento de procesos y capacidades. d) Realización de la estrategia.') 

    p.mb-5(data-aos="fade-down") #[b Según Arango, Londoño, & Zapata (2010), las siguientes son algunas de las utilidades que pueden lograr las empresas con la AE:] 
       
    .row.align-items-center.justify-content-center.mb-4(data-aos="fade-down-left")
      .col-md-8.col-12
        LineaTiempoD.color-acento-contenido.mb-5
          .row(numero="1" titulo="Identificación")
            .col-12.mb-4.mb-md-0
              p.text-small Permite la comprensión con identificación del estado actual de la empresa y la describe como una estructura coherente y articulada en todos sus componentes. 
          .row(numero="2" titulo="Fuerza integradora")
            .col-12.mb-4.mb-md-0
              p.text-small Actúa como una fuerza integradora entre aspectos de planificación del negocio, de operación del negocio y aspectos tecnológicos.  
          .row(numero="3" titulo="Visión general")
            .col-12.mb-4.mb-md-0
              p.text-small Permite capturar la visión completa del sistema empresarial en todas sus dimensiones y complejidad.  
          .row(numero="4" titulo="Toma de decisiones")
            .col-12.mb-4.mb-md-0
              p.text-small Ayuda en la toma de decisiones, permite conocer de forma real, medible y detallada, la brecha que existe entre el estado actual de los procesos del negocio y la tecnología que los soporta, respecto al estado requerido o deseado que exige la dirección estratégica. 
          .row(numero="5" titulo="Reducción de costos")
            .col-12.mb-4.mb-md-0
              p.text-small Permite unificar, mejorar y/o eliminar procesos y tecnologías redundantes, disminuyendo los costos operacionales que ello conlleva.  
          .row(numero="6" titulo="Soporte")
            .col-12.mb-4.mb-md-0
              p.text-small Actúa como una plataforma corporativa que apoya y prepara a la empresa para afrontar de manera fácil y oportuna cambios del mercado, retos de crecimiento y respuesta a la competencia, entre otros aspectos. 
          .row(numero="7" titulo="Mapa integral")
            .col-12.mb-4.mb-md-0
              p.text-small Proporciona un mapa integral de la empresa y la planeación para afrontar y/o crear los cambios empresariales y tecnológicos, permitiendo identificar oportunamente los impactos organizacionales y técnicos antes de que sean implementados. 
          
      .col-md-4.col-10
        figure
          img(src='@/assets/curso/temas/tema2/tema2-09.png', alt='')
   



</template>

<script>
export default {
  name: 'Tema2',
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
