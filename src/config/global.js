export default {
  global: {
    componenteFormativo: 'Marco de referencia Arquitectura Empresarial',
    descripcionCurso:
      'La Arquitectura Empresarial (AE) permite que las organizaciones armonicen los procesos de negocio con la gestión de tecnología; por lo tanto, es necesario identificar los casos de uso resueltos comúnmente, así como los elementos que componen un modelo de AE, sus principales marcos de referencia y las ventajas logradas por las organizaciones que adoptan este modelo.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.svg'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo:
          'Razones para diseñar e implementar una Arquitectura Empresarial (AE)',
        desarrolloContenidos: true,
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Conceptualización de Arquitectura Empresarial',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Elementos del modelo de Arquitectura Empresarial',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Ventajas de desarrollar Arquitectura Empresarial',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Marcos de Referencia de Arquitectura Empresarial',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo:
              'Tipos y características de los marcos de referencia de la Arquitectura Empresarial',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Principios y dominios',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Proceso de Arquitectura Empresarial',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo: 'Productos de la arquitectura',
            hash: 't_3_4',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo:
          'Selección del marco de arquitectura adecuado para la organización',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar PDF',
        download: 'downloads/CFA_003_228127_DU.zip',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Conceptualización de Arquitectura empresarial',
      referencia:
        'CertCampus. (10 de septiembre de 2019). <em>ADM El método de desarrollo de la Arquitectura.</em> [Video]. Youtube ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=5sXE4izHgWc',
    },
    {
      tema: 'Conceptualización de Arquitectura empresarial',
      referencia:
        'Ministerio TIC Colombia. (22 jun 2021) Arquitectura para todos. [Video]. Youtube',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=JJLQCK8LmVA',
    },
  ],
  glosario: [
    {
      termino: 'Arquitectura',
      significado:
        'Es un conjunto de elementos, sus interrelaciones y factores externos que gobiernan su diseño, su comportamiento y su evolución.',
    },
    {
      termino: 'Dominios',
      significado:
        'Son vistas, o perspectivas de Arquitectura Empresarial, para facilitar la descripción y el análisis. Cada marco de AE tiene denominación diferente para dichas perspectivas. En la arquitectura empresarial pueden existir los dominios: arquitectura de aplicaciones, arquitectura de datos, arquitectura de infraestructura y arquitectura de seguridad.',
    },
    {
      termino: 'Empresa',
      significado:
        'Es el nivel más alto (típicamente) de descripción de una organización y normalmente cubre todas las misiones y funciones. Una empresa a menudo abarca varias organizaciones bien sea entidad pública, corporación privada o entidad sin ánimo de lucro.',
    },
    {
      termino: 'CIO - <em>Chief Information Officer</em>',
      significado:
        'Director de Tecnologías de la información y Comunicaciones, es el ejecutivo que se encarga de que la organización logre el mejor rendimiento posible a través del uso de tecnologías de la información (TI).',
    },
    {
      termino: 'DevOps',
      significado:
        'Se refiere a una combinación de los términos “<em>development</em>” (desarrollo) y “<em>operations</em>” (operaciones), designa la unión de personas, procesos y tecnología para ofrecer valor a los clientes de forma constante (Microsoft, 2022).',
    },
    {
      termino: 'Marcos de referencia',
      significado:
        'Conjunto de métodos, herramientas y lenguaje común para la creación, adopción y mantenimiento de la Arquitectura Empresarial en las organizaciones.',
    },
    {
      termino: 'Metodología LEAN',
      significado:
        'Modelo de gestión empresarial que consiste en “hacer más con menos”. Útil para ajustar el negocio a lo que necesitan los clientes, esto es lograr hacer más con menos tiempo, esfuerzo humano, maquinaria, materiales, espacio, etc.',
    },
  ],
  referencias: [
    {
      referencia:
        'Arango, M., Londoño, J., & Zapata, J. (2010). Arquitectura Empresarial una visión general. <em>Revista Ingenierías Universidad de Medellín</em>, 9(16), 101-111. O ',
      link:
        'http://www.scielo.org.co/scielo.php?script=sci_arttext&pid=S1692-33242010000100009&lng=en&tlng=es',
    },
    {
      referencia:
        'CertCampus. (2019, 10 de septiembre). ADM El método de desarrollo de la Arquitectura. ',
      link: 'https://www.youtube.com/watch?v=5sXE4izHgWc',
    },
    {
      referencia:
        'Conexiam.com. (2022).  <em>Los tres tipos de marcos de arquitectura empresarial.</em> ',
      link:
        'https://conexiam.com/es/the-three-types-of-enterprise-architecture-framework/',
    },
    {
      referencia:
        'Gartner.com. (2020). <em>Arquitectura Empresarial (AE).</em> ',
      link:
        'https://www.gartner.com/en/information-technology/glossary/enterprise-architecture-ea',
    },
    {
      referencia:
        'Leanix.net. (2021). <em>Nine Use Cases Solved With Enterprise Architecture.</em> ',
      link:
        'https://www.leanix.net/en/download/nine-use-cases-solved-with-enterprise-architecture?__hstc=65454513.0d5b9229691fb3862f59d1107d1202ee.1665196286446.1665196286446.1665196286446.1&__hssc=65454513.1.1665196286447&__hsfp=661783108&hsCtaTracking=9200acfc-8a43',
    },
    {
      referencia: 'Leanix.net. (2021). <em>Zachman framework.</em> ',
      link: 'https://www.leanix.net/en/wiki/ea/zachman-framework',
    },
    {
      referencia: 'Microsoft. (2022). <em>¿Qué es DevOps?</em> ',
      link:
        'https://azure.microsoft.com/es-es/resources/cloud-computing-dictionary/what-is-devops/#devops-overview',
    },
    {
      referencia:
        'Ministerio TIC Colombia. (22 de junio de 2021). <em>Arquitectura para todos.</em> ',
      link: 'https://www.youtube.com/watch?v=JJLQCK8LmVA',
    },
    {
      referencia: 'MINTIC. (2019). <em>Arquitectura TI Colombia.</em> ',
      link:
        'https://www.mintic.gov.co/portal/inicio/Atencion-y-Servicio-a-la-Ciudadania/Preguntas-frecuentes/54891:Arquitectura-TI-Colombia',
    },
    {
      referencia: 'The Open Group. (2018). <em>Togaf Versión 9.2.</em> ',
      link: 'https://pubs.opengroup.org/architecture/togaf9-doc/arch/',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Patricia Aristizabal',
          cargo: 'Responsable del equipo',
          centro: 'Dirección General',
        },
        {
          nombre: 'Norma Constanza Morales Cruz',
          cargo: 'Responsable de línea de producción',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Dolly Stella Carrillo Vega',
          cargo: 'Experto temático',
          centro:
            'Regional Norte de Santander, Centro de la Industria, la Empresa y los Servicios',
        },
        {
          nombre: 'María Fernanda Chacón Castro',
          cargo: 'Diseñadora Instruccional',
          centro: 'Regional Distrito Capital - Centro de Gestión Industrial',
        },
        {
          nombre: 'Alix Cecilia Chinchilla Rueda',
          cargo: 'Asesor Metodológico',
          centro: 'Regional Distrito Capital - Centro de diseño y metrología',
        },
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Responsable Equipo Desarrollo Curricular',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Sandra Patricia Hoyos Sepúlveda',
          cargo: 'Corrector de Estilo',
          centro: 'Regional Distrito Capital - Centro de Diseño y Metrología',
        },
        {
          nombre: 'María Inés Machado López',
          cargo: 'Metodóloga',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'José Yobani Penagos Mora',
          cargo: 'Diseñador Web',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Oscar Daniel Espitia Marin',
          cargo: 'Desarrollador Fullstack',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Gilberto Junior Rodríguez Rodríguez',
          cargo: 'Storyboard e Ilustración',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Nelson Iván Vera Briceño',
          cargo: 'Producción Audiovisual',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Oleg Litvin',
          cargo: 'Animador',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Oscar Daniel Espitia Marín',
          cargo: 'Actividad Didáctica',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Jorge Bustos Gómez',
          cargo: 'Validación y vinculación en plataforma LMS',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Gilberto Naranjo Farfán',
          cargo: 'Validación de contenidos accesibles',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
