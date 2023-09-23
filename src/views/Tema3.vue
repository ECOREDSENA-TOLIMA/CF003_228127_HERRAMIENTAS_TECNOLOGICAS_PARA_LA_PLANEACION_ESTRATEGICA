<template lang="pug">
.curso-main-container.pb-3.tema3
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
        .tarjeta--container.row.mb-2
          .col-md.tarjeta.color-secundario.p-4
            .row.justify-content-center.mb-4
              .col-12
                h4.text-center Marcos de referencia integrales
              .col-10.col-md-7.mb-4
                figure
                  img(src='@/assets/curso/temas/tema3/fig-3-1.svg', alt='Marcos de referencia integrales, que contienen los TOGAF y Zachman')
              .col-10.col-md-6
                p.text-small.mb-0 ▪ TOGAF
                p.text-small.mb-0 ▪ Zachman 
          .col-md.tarjeta.color-adicional-1.p-4
            .row.justify-content-center.mb-4
              .col-12
                h4.text-center Marcos de referencia industrias
              .col-10.col-md-7.mb-4
                figure
                  img(src='@/assets/curso/temas/tema3/fig-3-2.svg', alt='Marcos de referencia de industrias, que contienen los BIAN, los DODAF, los FEAF ODF, los IndEA y los MRAE')
              .col-12.row.justify-content-center
                .col-10.col-md-4
                  p.text-small.mb-0 ▪ BIAN
                  p.text-small.mb-0 ▪ DODAF
                  p.text-small.mb-0 ▪ FEAF ODF
                .col-10.col-md-4 
                  p.text-small.mb-0  ▪ IndEA
                  p.text-small.mb-0 ▪ MRAE

          .col-md.tarjeta.color-secundario.p-4
            .row.justify-content-center.mb-4
              .col-12
                h4.text-center Marcos de referencia dominio
              .col-10.col-md-7.mb-4
                figure
                  img(src='@/assets/curso/temas/tema3/fig-3-3.svg', alt='Marcos de referencia de dominio, que corresponden con los SABSA y los DODAF')
              .col-md-6.col-10
                p.text-small.mb-0 ▪ SABSA
                p.text-small.mb-0 ▪ DODAF 
        //- figure 
        //-   img.d-none.d-sm-none.d-md-block(src='@/assets/curso/temas/tema3/tema3-02-md.svg', alt='')
        //-   img.d-block.d-md-none(src='@/assets/curso/temas/tema3/tema3-02-sm.svg', alt='') 

    .h4.py-4.mb-4(data-aos="zoom-down-right")
      span.titulo-herramientas Marcos integrales de arquitectura empresarial

    p.mb-0(data-aos="fade-down") Los marcos de arquitectura integral se aplican ampliamente, son independientes de la industria y del dominio. 
    p.mb-5(data-aos="fade-down") En este tipo de marco se presentan dos marcos integrales principales: #[b TOGAF® y Zachman.]

    .row.align-items-center.justify-content-center.mb-5(data-aos="fade-down-left")
      .col-12.col-md-4
        figure
          img(src='@/assets/curso/temas/tema3/tema3-03.png', alt='')
      .col-12.col-md-8
        .cajon.color-secundario.p-3
          p El estándar TOGAF® se publicó por primera vez en 1995 y proporciona el andamiaje esencial universal para los tres problemas centrales que enfrentan los arquitectos empresariales: 
          p.mb-0 • ¿Cómo desarrollar arquitectura empresarial?
          p.mb-0 • ¿Cómo documentar una arquitectura?
          p • ¿Cómo desarrollar un equipo de arquitectura empresarial?
          p Este marco cuenta con conceptos fundamentales y universales, además de tener un conjunto de guías, que se aplican a todas las organizaciones e industrias. Las diferentes guías identifican cómo usar el andamiaje universal para diferentes circunstancias o dominios.

    .row.align-items-center.justify-content-center.mb-4(data-aos="fade-down-left")
      .col-12.col-md-8
        p De otra parte, el #[b Marco Zachman] se basa en un conjunto de perspectivas; cada una existe en la intersección del tipo de parte interesada y el aspecto de la arquitectura.  Este marco no proporciona un modelo de base ni un método para desarrollar la Arquitectura Empresarial. El equipo de AE necesita desarrollar su método, proceso y notación para recolectar, administrar o usar la información.
        p.mb-0 El cuadro de Zachman presenta seis columnas con los aspectos basados en los siguientes interrogantes:
        p ¿qué?, ¿dónde?, ¿quién?, ¿cuándo’, ¿por qué? y ¿cómo?.
        p Las columnas se utilizan para enmarcar diferentes explicaciones de cada una de las partes interesadas. Las filas presentan las partes interesadas: planificadores, propietarios, diseñadores (arquitectos), implementadores, usuarios. Alternativamente, se utilizan para representar el alcance, el contexto, los conceptos comerciales, la lógica del sistema, la tecnología.
      .col-12.col-md-4
        figure
          img(src='@/assets/curso/temas/tema3/tema3-04.svg', alt='')

    .row.justify-content-center.align-items-center.mb-5
      .col-12.mb-4.mb-md-0(data-aos="fade-left")
        .tarjeta-a.color-primario.p-2
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-2.p-3
              img(src="@/assets/curso/temas/web.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h4 Marcos de referencia Zachman y Togaf
                  p.text-small.mb-0 Para conocer más sobre el marco Zachman consulte la página.
                  p.text-small Para profundizar en el estándar TOGAF® consulte la página The Open Group
                .col-sm-auto
                  a.boton.color-acento-botones(href="https://www.zachman.com/" target="_blank")
                    span Link
                    i.fas.fa-link
                  br
                  a.boton.color-acento-botones.mt-3(href="https://pubs.opengroup.org/architecture/togaf9-doc/arch/index.html" target="_blank")
                    span Link
                    i.fas.fa-link
        
    .h4.py-4.mb-4(data-aos="zoom-down-right")
      span.titulo-herramientas Marcos integrales de arquitectura empresarial

    p.mb-3(data-aos="fade-down") Estos marcos se optimizaron para industrias específicas, en los que se especifican las partes interesadas, los puntos de vista y las técnicas del modelo. También pueden proporcionar modelos de referencia de la industria. 
    p.mb-5(data-aos="fade-down") #[b #[i Según conexiam.com (2022)]], se pueden mencionar los siguientes tipos de marcos de arquitectura de la industria: 

    AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta color-primario" data-aos="flip-left")
      .row(titulo="BIAN")
        .col-md-3.col-lg-2.col-12.mb-4.mb-md-0
          img(src='@/assets/curso/temas/tema3/tema3-05.svg' alt='')
        .col-md-9.col-lg-10.col-12.mb-4.mb-md-0 
          p Se refiere a la Red de Arquitectura de la industria bancaria. Es una comunidad global, abierta, independiente y única en la que bancos, proveedores de #[em software] e integradores de sistemas colaboran para definir un marco común para la industria bancaria y promover la interoperabilidad bancaria.  
      .row(titulo="DODAF")
        .col-md-3.col-lg-2.col-12.mb-4.mb-md-0
          img(src='@/assets/curso/temas/tema3/tema3-06.svg' alt='')
        .col-md-9.col-lg-10.col-12.mb-4.mb-md-0 
          p Es el Marco de Arquitectura desarrollado por el Departamento de Defensa de los Estados Unidos, centrado en el problema de la interoperabilidad. Otros países también han desarrollado sus propios marcos de arquitectura de defensa especializados como Canadá que desarrolló el DNDAF y el Reino Unido, el MODAF. 
      .row(titulo="FEAF")
        .col-md-3.col-lg-2.col-12.mb-4.mb-md-0
          img(src='@/assets/curso/temas/tema3/tema3-07.svg' alt='')
        .col-md-9.col-lg-10.col-12.mb-4.mb-md-0 
          p Marco de Arquitectura Gubernamental - FEAF es el marco de arquitectura empresarial federal de los Estados Unidos. Similar a este, el Gobierno de la India ha desarrollado IndEA que adopta un enfoque más amplio que FEAF.  
      .row(titulo="TM Forum")
        .col-md-3.col-lg-2.col-12.mb-4.mb-md-0
          img(src='@/assets/curso/temas/tema3/tema3-08.svg' alt='')
        .col-md-9.col-lg-10.col-12.mb-4.mb-md-0 
          p El marco digital abierto del foro TM (ODF) está diseñado para la industria de las telecomunicaciones. Lo optimizan para sus desafíos, que se centran en la migración de sistemas y procesos de TI heredados a sistemas modulares nativos en la nube. 
      .row(titulo="Marco de Referencia de Arquitectura Empresarial (MRAE)")
        .col-md-3.col-lg-2.col-12.mb-4.mb-md-0
          img(src='@/assets/curso/temas/tema3/tema3-09.svg' alt='')
        .col-md-9.col-lg-10.col-12.mb-4.mb-md-0 
          p Diseñado para la gestión de Tecnologías de la Información del Estado colombiano; es un instrumento para implementar la Arquitectura de la Política de Gobierno Digital (PGD), que establece el uso y aprovechamiento de las tecnologías de la información y las comunicaciones, para consolidar un Estado y ciudadanos competitivos, proactivos e innovadores, que generen valor público en un entorno de confianza digital. 

    .h4.py-4.mb-4(data-aos="zoom-down-right")
      span.titulo-herramientas Marcos de arquitectura de dominio

    p.mb-5(data-aos="fade-down") Optimizan los marcos de arquitectura para un dominio específico. A continuación, se mencionan dos marcos de referencia que proporcionan técnicas y métodos más detallados para la Arquitectura de Seguridad y la de Integración:

    .row.justify-content-center.mb-5(data-aos="fade-down")
      .col-md-5.tarjeta.color-secundario.p-3.mx-md-2.mb-3
        .h4 
          span(style="border-bottom: 3px solid #FEE132") Marco de Arquitectura de Seguridad - SABSA
        p Utiliza el modelo como base y construye herramientas especializadas para identificar objetivos y riesgos. Después de todo, el riesgo es el efecto de la incertidumbre en la realización de sus objetivos.
        //- img(src='@/assets/curso/temas/tema3/tema3-11.svg' alt='')
      .col-md-5.tarjeta.color-secundario.p-3.mx-md-2.mb-3
        .h4 
          span(style="border-bottom: 3px solid #FEE132") Arquitectura de Integración - DODAF
        p Fue diseñado para resolver el problema central al que se enfrentan las agencias de defensa, la integración de sistemas duraderos y organizaciones diversas en misiones y capacidades comunes.
        //- img(src='@/assets/curso/temas/tema3/tema3-10.svg' alt='')

    Separador
    #t_3_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 3.2 Principios y dominios

    p.mb-3(data-aos="fade-down") Como ya habíamos explicado anteriormente, entre los elementos fundamentales de la AE, se encuentran los principios y dominios; a partir de los principios se definen los lineamientos y las guías que deben ser tenidos en cuenta en los ejercicios de arquitectura. Asimismo, los dominios ofrecen las perspectivas o capas de arquitectura, entonces, profundicemos en estos dos importantes aspectos.
    p.mb-5(data-aos="fade-down") Los principios son reglas y directrices generales, destinados a ser duraderos y rara vez modificados; informan y respaldan la forma en que una organización se propone el cumplimiento de su misión. Dependiendo de la organización, los principios pueden establecerse dentro de diferentes dominios y en diferentes niveles. Es clave contar con la definición de los principios empresariales y los de arquitectura. #[i (The Open Group, 2018)] 

    .row.justify-content-center.mb-5
      .col-xl-4.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/tema3/tema3-12.png", alt="alt")
          .crd_hover_txt--body
            h4.mb-3 Principios Empresariales
            p.mb-0 Proporcionan una base para la toma de decisiones en toda la empresa e informan cómo la organización se dispone a cumplir su misión. Se encuentran como un medio para armonizar la toma de decisiones en toda la organización. En particular, son un elemento clave en una estrategia exitosa de gobernanza de la arquitectura. Estos principios deben estar alineados con el contexto organizacional de la capacidad de la arquitectura.
      .col-xl-4.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/tema3/tema3-13.png", alt="alt")
          .crd_hover_txt--body
            h4.mb-3 Principios de Arquitectura
            p.mb-0 Gobiernan el proceso de arquitectura, afectando el desarrollo, mantenimiento y uso de la AE. Cada principio de arquitectura debe relacionarse con los objetivos comerciales y los impulsores clave de la arquitectura. Por lo general, estos principios son desarrollados por el arquitecto principal, junto con el gerente de tecnología de la empresa, el consejo de arquitectura y otras partes interesadas clave del negocio. 

    p.mb-3(data-aos="fade-down") Luego de escribir los principios, se deben desarrollar políticas y procedimientos apropiados para apoyar la implementación de los mismos.
    p.mb-3(data-aos="fade-down") #[b Ahora, revisemos los dominios de arquitectura TOGAF-BDAT.]
    p.mb-5(data-aos="fade-down") El marco de la Arquitectura Empresarial TOGAF se divide en cuatro capas o subarquitecturas: Negocio, datos, aplicaciones y tecnología, también conocidas por sus siglas en inglés BDAT (#[i Business, Data, Application, Technology]): 

    .tarjeta.color-primario.p-4.mb-5
      SlyderA(tipo="b")
        .row.justify-content-center.align-items-center
          .col-md-6.mb-4.mb-md-0
            h4 Dominio de negocio
            p Corresponde a la primera capa en la parte superior y se refiere a la estrategia comercial, la gobernanza, la organización y los procesos comerciales clave, dictada por los empresarios, representados por los ejecutivos y los jefes de las unidades de negocio. La gran ventaja de la AE es que la arquitectura de negocio se define primero y, posteriormente, la arquitectura técnica, la parte DAT. 
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema3/tema3-14.png', alt='')
        .row.justify-content-center.align-items-center
          .col-md-6.mb-4.mb-md-0
            h4 Dominio de datos 
            p Se ocupa de los activos de datos lógicos y físicos de la organización y los recursos de gestión de datos. Toma mayor relevancia en la transformación digital, pues es fundamental para las estrategias de negocio. Una buena arquitectura de datos garantiza que los altos volúmenes de datos sean manejables y útiles, para facilitar la gestión del ciclo de vida. Específicamente, evita el almacenamiento de datos redundantes, mejora la calidad de estos y la habilitación de nuevas aplicaciones.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema3/tema3-15.png', alt='')
        .row.justify-content-center.align-items-center
          .col-md-6.mb-4.mb-md-0
            h4 Dominio de aplicación 
            p Corresponde a la tercera capa y se ocupa de la forma en la que se desarrollan e implementan las aplicaciones individuales, así como la relación que se genera en esas aplicaciones con el proceso comercial central. Se describen el conjunto de aplicativos, aplicaciones o sistemas de información que habilitan las actividades de los negocios, y este dominio se centra en el ciclo del desarrollo del #[em software] y la integración entre las diferentes aplicaciones.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema3/tema3-16.png', alt='')
        .row.justify-content-center.align-items-center
          .col-md-6.mb-4.mb-md-0
            h4 Dominio tecnológico  
            p Corresponde a la capa inferior, describe las capacidades lógicas de #[em software] y #[em hardware] que se requieren para respaldar la implementación de servicios comerciales, de datos y de aplicaciones; incluye la infraestructura de TI, #[em middleware], redes, comunicaciones, procesamiento, y estándares. El crecimiento del gasto en el dominio de la tecnología a menudo supera el resto del gasto en el negocio, se busca ser estratégicos en la forma en que el dominio de la tecnología satisface las necesidades del negocio. 
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema3/tema3-17.png', alt='')

    p.mb-5(data-aos="fade-down") Como parte del desarrollo propiamente dicho, se presenta el proceso de AE, ¿cuáles son las fases o etapas que lo componen?

    Separador
    #t_3_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 3.3 Proceso de Arquitectura Empresarial

    p.mb-3(data-aos="fade-down") Como parte del desarrollo propiamente dicho, se presenta el proceso de Arquitectura Empresarial que implica desarrollar el estado deseado y el estado actual de la empresa, utilizando un conjunto de artefactos singulares; en este proceso son importantes las relaciones de los artefactos de arquitectura y la brecha entre el estado actual y el objetivo.
    p.mb-3(data-aos="fade-down") El método #[i Architecture Development Method] (ADM) desarrolla y administra el ciclo de vida de una Arquitectura Empresarial y constituye el núcleo del estándar TOGAF. 
    p.mb-5(data-aos="fade-down") En la siguiente infografía podrá conocer este ciclo que consta de ocho fases etiquetadas de la A hasta la H y la gestión de requerimientos de arquitectura ADM en el centro del ciclo.

    .row.align-items-center.justify-content-center.mb-5(data-aos="fade-down-left")
      .col-lg-11.col-12.d-block.d-md-none
        img.mb-3(src='@/assets/curso/temas/tema3/tema3-18-sm.svg', alt='') 
        a.anexo.mb-4(:href="obtenerLink('/downloads/ciclo_de_arquitectura_togaf.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Ciclo de arquitectura TOGAF
      .col-lg-11.col-12.d-none.d-sm-none.d-md-block
        ImagenInfografica.color-acento-botones
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/temas/tema3/tema3-18-md.svg', alt='')
          .tarjeta.color-acento-botones.p-3(x="48.5%" y="12%" numero="A")
            p Define una visión para el proyecto.  
          .tarjeta.color-acento-botones.p-3(x="68%" y="23%" numero="B")
            p Las fases B, C y D definen las arquitecturas de cada uno de los cuatro dominios de arquitectura BDAT. 
          .tarjeta.color-acento-botones.p-3(x="76%" y="45%" numero="C")
            p Las fases B, C y D definen las arquitecturas de cada uno de los cuatro dominios de arquitectura BDAT.
          .tarjeta.color-acento-botones.p-3(x="68%" y="70%" numero="D")
            p Las fases B, C y D definen las arquitecturas de cada uno de los cuatro dominios de arquitectura BDAT.
          .tarjeta.color-acento-botones.p-3(x="48.5%" y="81%" numero="E")
            p Las fases E y F definen un proceso para diseñar una hoja de ruta, un plan de trabajo y una serie de arquitecturas de transición para llevarlo desde donde está hasta donde se quiere estar, una vez que las etapas anteriores se han definido y han sido firmadas por todas las partes interesadas. 
          .tarjeta.color-acento-botones.p-3(x="29.5%" y="70%" numero="F")
            p Las fases E y F definen un proceso para diseñar una hoja de ruta, un plan de trabajo y una serie de arquitecturas de transición para llevarlo desde donde está hasta donde se quiere estar, una vez que las etapas anteriores se han definido y han sido firmadas por todas las partes interesadas. 
          .tarjeta.color-acento-botones.p-3(x="21.5%" y="45%" numero="G")
            p En la fase G, el arquitecto trabaja con los equipos de desarrollo para implementar el trabajo y establecer el contrato de arquitectura. 
          .tarjeta.color-acento-botones.p-3(x="29.5%" y="22%" numero="H")
            p La fase H se ocupa del período posterior a la implementación de la arquitectura, en la cual se manejan los cambios que se generarán. 

 
    Separador
    #t_3_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 3.4 Productos de la arquitectura

    p.mb-3(data-aos="fade-down") Dentro de cada fase del proceso, se generan unas salidas o productos del ejercicio de la arquitectura, TOGAF describe tres tipos de producto de trabajo arquitectónico: los artefactos que conforman el contenido del Repositorio de Arquitectura, los bloques de construcción y los entregables. 

    .h4.py-4.mb-4(data-aos="zoom-down-right")
      span.titulo-herramientas Artefactos

    .row.align-items-center.justify-content-center.mb-5(data-aos="fade-down-left")
      .col-12.col-md-8
        p Los artefactos (#[i Artifacts]) son productos de trabajo que se producen durante el trabajo de arquitectura y que describen un aspecto de la arquitectura general. Generalmente, se clasifican de la siguiente manera: 
        ul.lista-ul.mb-2.ps-3
          li.mb-0
            i.fas.fa-play(style="color:#60CB28")
            | Catálogos de listas.
          li.mb-0
            i.fas.fa-play(style="color:#60CB28")
            | Matrices que muestran las relaciones entre cosas.  
          li.mb-0
            i.fas.fa-play(style="color:#60CB28")
            | Diagramas o imágenes de las cosas.
        p En el ciclo ADM, se define una serie de artefactos estándar, por ejemplo: diagrama de flujo de proceso, diagrama de caso de uso, catálogo de requisitos, planes de proyectos, en general los artefactos describen bloques de construcción.
      .col-12.col-md-4
        figure
          img(src='@/assets/curso/temas/tema3/tema3-19.png', alt='')

    p.mb-3(data-aos="fade-down") A continuación, se presentan algunos ejemplos de los artefactos entendidos como un tipo de producto que hace parte de la arquitectura TOGAF, en el ciclo ADM.

    AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta color-primario" data-aos="flip-left")
      .row(titulo="Catálogo de lista")
        .col-md-3.col-lg-2.col-12.mb-4.mb-md-0
          img(src='@/assets/curso/temas/tema3/tema3-20.svg' alt='')
        .col-md-9.col-lg-10.col-12.mb-4.mb-md-0 
          p Ejemplos:
          ul.lista-ul.mb-2.ps-3
            li.mb-0
              i.fas.fa-play(style="color:#7E10B8")
              | Catálogo de servicios de TI. 
            li.mb-0
              i.fas.fa-play(style="color:#7E10B8")
              | Catálogo de entidades de negocio.
            li.mb-0
              i.fas.fa-play(style="color:#7E10B8")
              | Catálogo de datos georreferenciados.  
      .row(titulo="Matrices")
        .col-md-3.col-lg-2.col-12.mb-4.mb-md-0
          img(src='@/assets/curso/temas/tema3/tema3-21.svg' alt='')
        .col-md-9.col-lg-10.col-12.mb-4.mb-md-0 
          p Ejemplos: 
          ul.lista-ul.mb-2.ps-3
            li.mb-0
              i.fas.fa-play(style="color:#7E10B8")
              | Matriz de servicios Tecnológicos por Sistemas de Información.
            li.mb-0
              i.fas.fa-play(style="color:#7E10B8")
              | Matriz de canales de acceso por componente de información.
            li.mb-0
              i.fas.fa-play(style="color:#7E10B8")
              | Matriz de asignación de responsabilidades (RACI).
            li.mb-0
              i.fas.fa-play(style="color:#7E10B8")
              | Matriz de Sistemas de Información por Entidades de Negocio.
      .row(titulo="Diagramas")
        .col-md-3.col-lg-2.col-12.mb-4.mb-md-0
          img(src='@/assets/curso/temas/tema3/tema3-22.svg' alt='')
        .col-md-9.col-lg-10.col-12.mb-4.mb-md-0 
          p Ejemplos:
          ul.lista-ul.mb-2.ps-3
            li.mb-0
              i.fas.fa-play(style="color:#7E10B8")
              | Diagrama de caso de uso.
            li.mb-0
              i.fas.fa-play(style="color:#7E10B8")
              | Diagramas de diseño de cada uno de los servicios.
            li.mb-0
              i.fas.fa-play(style="color:#7E10B8")
              | Diagrama cadena de valor.
            li.mb-0
              i.fas.fa-play(style="color:#7E10B8")
              | Diagrama de despliegue.
            li.mb-0
              i.fas.fa-play(style="color:#7E10B8")
              | Diagrama de componentes.


    .h4.py-4.mb-4(data-aos="zoom-down-right")
      span.titulo-herramientas Bloques de construcción

    p.mb-5(data-aos="fade-down") Los bloques de construcción (#[i Building Blocks]) son un componente básico que se puede reutilizar tanto como se pueda en la arquitectura. Ahora, TOGAF desglosa este concepto en bloques de construcción de arquitectura y bloques de construcción de soluciones como se describe a continuación:

    .row.justify-content-center.mb-5(data-aos="fade-down-right")
      .col-12.mb-2.mb-md-0
        .tabla-a.color-primario.mb-4
          table
            thead
              tr
                th Bloque de construcción de arquitectura 
                th El componente básico de la solución 
            tbody
              tr 
                td
                  p #[b #[i Architecture Building Blocks (ABB)]] representa procesos comerciales que se pueden reutilizar entre diagramas de arquitectura, se denominan conceptos y describen capacidades. Un ejemplo de ABB es la función “búsqueda de cliente” que podría ser utilizado en un diagrama de caso de uso. 
                td
                  p #[b #[i Solution building block (SBB)]] representa la solución técnica que se puede reutilizar entre los diagramas de arquitectura, básicamente, se trata de implementaciones. Si seguimos el ejemplo anterior, la capacidad ABB “búsqueda de cliente”, se implementa en una solución tecnológica o plataforma CRM (#[i Customer Relationship Management]), que es la solución SBB, al concepto de negocio “búsqueda de cliente”. 

    .h4.py-4.mb-4(data-aos="zoom-down-right")
      span.titulo-herramientas Entregables 

    .row.align-items-center.justify-content-center.mb-5(data-aos="fade-down-left")
      .col-12.col-md-8
        p Un entregable (#[i Deliverables]) es un producto de trabajo que especifica responsabilidades contractuales y, a su vez, se revisa, acuerda y firma formalmente por las partes interesadas. Entonces, el entregable es básicamente un documento completo, no solo un diagrama. 
      .col-12.col-md-4
        figure
          img(src='@/assets/curso/temas/tema3/tema3-23.png', alt='')


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
