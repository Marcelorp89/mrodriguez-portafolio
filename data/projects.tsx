export type Project = {
  slug: string
  title: string
  tagline: string
  client: string
  role: string
  stack: string[]
  year: number
  category: string
  liveUrl: string | null
  repoUrl: string | null
  coverImage: string
  heroImage: string
  description: string
  challenge: string
  process: {
    research: string
    design: string
    development: string
  }
  solution: {
    summary: string
    features: { title: string; description: string }[]
  }
  gallery: { url: string; label?: string }[]
  results: { title: string; description: string }[]
}

export const projects: Project[] = [
  {
    slug: "api-clima",
    title: "Capas",
    tagline: "Consulta el clima de cualquier ciudad en tiempo real",
    client: "Proyecto personal",
    role: "Desarrollador Frontend",
    stack: ["React", "Tailwind CSS", "API externa"],
    year: 2024,
    category: "Aplicación Web",
    liveUrl: "https://weather-app-jade-six-59.vercel.app/",
    repoUrl: "https://github.com/Marcelorp89/weather-app.git", // ← agrega tu repo GitHub
    coverImage: "https://res.cloudinary.com/dcnclxmwv/image/upload/v1780117142/portafolio/api%20clima/16_g7oxdp.png",
    heroImage: "https://res.cloudinary.com/dcnclxmwv/image/upload/v1780117143/portafolio/api%20clima/17_bxstj8.png",
    description:
      "Aplicación web que consume la API externa Open Weather Map para mostrar el clima actual de cualquier ciudad del mundo. Muestra temperatura, humedad, viento y condición climática en tiempo real. Además, según estas condiciones climáticas, recomienda al usuario que tipo de ropa usar",
    challenge:
      "Construir una interfaz limpia y responsive que consuma datos de una API externa y recomiende que tipo de ropa usar, presentando los resultados de forma clara y atractiva para el usuario.",
    process: {
      research:
        "Investigación de consumo y uso de APIs de clima disponibles. Selección de OpenWeatherMap por su documentación clara y plan gratuito.",
      design:
        "Diseño de interfaz minimalista centrada en mostrar los datos más relevantes de forma rápida y legible. Buscnado una experiencia interesante para el usuario, según el tipo de clima la aplicación cambiará de color.",
      development:
        "Implementación con React y Tailwind CSS. Consumo de API externa con fetch y manejo de estados de carga y error. Aplicación responsive, interactiva y minimalista.",
    },
    solution: {
      summary:
        "Aplicación con una interfaz moderna y atractiva para el usuario, que entrega información sobre el clima de la ciudad elegida por el usuario, mostrando los principales datos climáticos y recomendando que tipo de ropa usar según el clima. Se presenta una arquitectura clara preparada para futuras mejoras.",
      features: [
        {
          title: "Consulta en tiempo real",
          description: "Datos actualizados directamente desde la API de clima.",
        },
        {
          title: "Búsqueda por ciudad",
          description: "El usuario puede buscar cualquier ciudad del mundo.",
        },
        {
          title: "Diseño responsive",
          description: "Experiencia optimizada para móvil y desktop.",
        },
      ],
    },
    gallery: [
      {
        url: "https://res.cloudinary.com/dcnclxmwv/image/upload/v1780117144/portafolio/api%20clima/18_slxarm.png",
        label: "Vista desktop",
      },
      {
        url: "https://res.cloudinary.com/dcnclxmwv/image/upload/v1780117141/portafolio/api%20clima/15_e9bmr9.png",
        label: "Vista móvil",
      },
      {
        url: "https://res.cloudinary.com/dcnclxmwv/image/upload/v1780117139/portafolio/api%20clima/13_edmfbt.png",
        label: "Detalle resultados",
      },
    ],
    results: [
      {
        title: "Consumo de API real",
        description: "Integración exitosa y en tiempo real con OpenWeatherMap API.",
      },
      {
        title: "100% responsive",
        description: "Navegacion optimizada para todos los dispositivos, tanto móvil como desktop.",
      },
      {
        title: "Deploy en producción",
        description: "Aplicación publicada y funcional.",
      },
    ],
  },

  {
    slug: "api-divisas",
    title: "Convertidor de Divisas",
    tagline: "De HTML estático a aplicación React moderna",
    client: "Proyecto personal",
    role: "Desarrollador Frontend",
    stack: ["React", "Tailwind CSS", "API externa"],
    year: 2026,
    category: "Aplicación Web",
    liveUrl: "https://proyectos-divisas-v2.vercel.app/",
    repoUrl: "https://github.com/Marcelorp89/proyectos_divisas_v2", // ← agrega tu repo GitHub
    coverImage: "https://res.cloudinary.com/dcnclxmwv/image/upload/v1780118969/portafolio/api%20divisas/21_x56qwh.png",
    heroImage: "https://res.cloudinary.com/dcnclxmwv/image/upload/v1780118970/portafolio/api%20divisas/22_pzemxf.png",
    description:
      "Aplicación web de conversión de divisas en tiempo real desarrollada con React e integrada con la API externa de tipos de cambio ExchangeRate-API. El proyecto evolucionó desde una versión estática en HTML y CSS hacia una experiencia mas moderna, responsive y escalable enfocada en la claridad visual y la rapidez de uso. ",
    challenge:
      "La versión inicial, desarrollada en HTML y CSS, presentaba limitaciones de mantenimiento, escalabilidad y adaptación a distintos dispositivos. El desafío fue modernizar la aplicación sin perder simplicidad, mejorando tanto la arquitectura frontend como la experiencia de usuario",
    process: {
      research:
        "Se evaluaron distintas APIs de tipo de cambio considerando disponibilidad, estabilidad y facilidad de integración. Paralelamente, se analizaron las limitaciones de la versión original para identificar oportunidades de mejora en diseño y funcionalidad.",
      design:
        "La interfez fue diseñada utilizando Tailwind CSS, priorizando una experiencia limpia, responsive y enfocada en la legibilidad de la información financiera. El objetivo fue reducir la fricción y facilitar las conversiones rápidas entre monedas.",
      development:
        "La aplicación fue migrada a React mediante una arquitectura basada en componentes reutilizables, mejorando la organización del código y facilitando futuras actualizaciones. Además, se integró una API externa para obtener tipos de cambio actualizados en tiempo real.",
    },
    solution: {
      summary:
        "El resultado es una aplicación web moderna y adaptable que permite convertir múltiples divisas con datos actualizados al instante, combinando una experiencia visual clara con una arquitectura frontend más robusta y escalable.",
      features: [
        {
          title: "Conversión en tiempo real",
          description: "Consulta dinámica de tipos de cambio mediante la integración de una API externa.",
        },
        {
          title: "Diseño responsive",
          description: "Experiencia optimizada para escritorio y dispositivos móviles con foco en claridad y rapidez.",
        },
        {
          title: "Arquitectura escalable",
          description: "Migración a React con componentes reutilizables para mejorar mantenimiento y evolución del proyecto.",
        },
      ],
    },
    gallery: [
      {
        url: "https://res.cloudinary.com/dcnclxmwv/image/upload/v1780118966/portafolio/api%20divisas/25_pgtz4v.png",
        label: "Antes — HTML/CSS puro",
      },
      {
        url: "https://res.cloudinary.com/dcnclxmwv/image/upload/v1780118965/portafolio/api%20divisas/23_bcupu9.png",
        label: "Después — React + Tailwind",
      },
      {
        url: "https://res.cloudinary.com/dcnclxmwv/image/upload/v1780118967/portafolio/api%20divisas/19_juqeqf.png",
        label: "Vista detalle",
      },
    ],
    results: [
      {
        title: "Modernización frontend",
        description: "Evolución desde una estructura estática hacia una aplicación React más dinámica y escalable.",
      },
      {
        title: "Experiencia centrada en el usuario",
        description: "Rediseño visual responsive enfocado en claridad, rapidez y facilidad de uso.",
      },
      {
        title: "Base creada para crecer",
        description: "Arquitectura basada en componentes reutilizables que mejora la organización y mantenibilidad del código.",
      },
    ],
  },

  {
    slug: "carniceria-tolten",
    title: "Carnicería Toltén",
    tagline: "Presencia digital para un negocio local",
    client: "Carnicería Toltén",
    role: "Desarrollador Full Stack",
    stack: ["React", "Tailwind CSS"],
    year: 2026,
    category: "Sitio Corporativo",
    liveUrl: "https://carnes-abdul.vercel.app/", // ← agrega URL en vivo
    repoUrl: "https://github.com/Marcelorp89/carnes-abdul", // ← agrega repo GitHub
    coverImage: "https://res.cloudinary.com/dcnclxmwv/image/upload/v1780117111/portafolio/carniceria/10_miyjpe.png",
    heroImage: "https://res.cloudinary.com/dcnclxmwv/image/upload/v1780117111/portafolio/carniceria/10_miyjpe.png",
    description:
      "Sitio web corporativo para una carnicería local de Toltén, diseñada para modernizar su presencia digital, con catálogo de productos, ubicación y canales de contacto directo con clientes, con el objetivo de posicionar la carniceria de manera digital.",
    challenge:
      "La situación inical de este negocio era que no tenía presencia digital, los clientes no podían encontrar información del local, productos ni horarios en línea.Por estas razones, se busco implementar un sitio centrado en el usuario, que tuviera presente el catalogo de productos, ubicación de la carnicería, horarios de atención y canales digitales de comunicación.",
    process: {
      research:
        "Reunión con el cliente para entender necesidades, público objetivo y cómo presentar el catálogo de productos, reseña histórica del negocio y canales de comunicación. Se realizó una investigación de sitios web de carnicerías para evaluar los alcances que podría tener el sitio web que se estaba construyendo. Se realizó un análisis de mapas y geolocalización de ciudades y de puntos de interés. ",
      design:
        "La interfaz tenía que responde a la paleta de colores acorde a la identidad del negocio. Tenía que responder a una experincia centrada en el usuario, simple y con diseño responsive.",
      development:
        "Implementación con React y Tailwind CSS. Componentes reutilizables y diseño completamente responsive.",
    },
    solution: {
      summary:
        "El resultado es un sitio web moderno, rápido y responsive que le da al negocio una presencia digital profesional y un canal directo de contacto con sus clientes.",
      features: [
        {
          title: "Catálogo de productos",
          description: "Presentación visual de los cortes y productos disponibles.",
        },
        {
          title: "Información del local",
          description: "Horarios, dirección y datos de contacto siempre visibles.",
        },
        {
          title: "Diseño responsive",
          description: "Experiencia optimizada para móvil, tablet y desktop.",
        },
      ],
    },
    gallery: [
      {
        url: "https://res.cloudinary.com/dcnclxmwv/image/upload/v1780117112/portafolio/carniceria/12_u9grbu.png",
        label: "Vista desktop",
      },
      {
        url: "https://res.cloudinary.com/dcnclxmwv/image/upload/v1780117109/portafolio/carniceria/9_vftdux.png",
        label: "Vista móvil",
      },
      {
        url: "https://res.cloudinary.com/dcnclxmwv/image/upload/v1780117108/portafolio/carniceria/7_velp3m.png",
        label: "Detalle sección",
      },
    ],
    results: [
      {
        title: "Presencia digital activa",
        description: "El negocio ahora aparece en búsquedas locales.",
      },
      {
        title: "100% responsive",
        description: "Optimizado para todos los dispositivos.",
      },
      {
        title: "Deploy en producción",
        description: "Sitio publicado y funcionando con dominio activo.",
      },
    ],
  },

  {
    slug: "club-pesca-chinook-tolten",
    title: "Club de Pesca Chinook Toltén",
    tagline: "La comunidad de pescadores de Toltén", // ← agrega tu frase motivacional
    client: "Club Chinook Toltén",
    role: "Desarrollador Full Stack",
    stack: ["Next.js", "Tailwind CSS", "Cloudinary", "Framer Motion"],
    year: 2025,
    category: "Sitio Institucional",
    liveUrl: "https://clubchinooktolten.netlify.app",
    repoUrl: "https://github.com/Marcelorp89/clubpesca", // ← agrega repo GitHub
    coverImage: "https://res.cloudinary.com/dcnclxmwv/image/upload/v1780117055/portafolio/fotos-pesca/5_aety0g.png",
    heroImage: "https://res.cloudinary.com/dcnclxmwv/image/upload/v1780117055/portafolio/fotos-pesca/5_aety0g.png",
    description:
      "Sitio web institucional para el Club de Pesca y Caza Chinook Toltén. Incluye galería de fotos, directorio de socios, calendario de eventos y formulario de contacto.",
    challenge:
      "El club necesitaba un espacio digital que representara su identidad, centralizara la información para socios y facilitara el contacto con nuevos interesados.",
    process: {
      research:
        "Levantamiento de requerimientos con la directiva del club. Definición de secciones, contenido y paleta visual acorde a la identidad marina del club.",
      design:
        "Identidad visual con azul marino y acento naranja. Diseño de galería por año y directorio de socios.",
      development:
        "Implementación con Next.js App Router y Tailwind CSS v4. Integración con Cloudinary, Google Calendar, Formspree y Framer Motion.",
    },
    solution: {
      summary:
        "Plataforma digital completa que centraliza toda la información del club en un sitio moderno, rápido y fácil de mantener.",
      features: [
        {
          title: "Galería por año",
          description: "Organización de fotos por temporada con acordeón y tabs.",
        },
        {
          title: "Directorio de socios",
          description: "Cards de miembros con foto y datos institucionales.",
        },
        {
          title: "Calendario de eventos",
          description: "Integración con Google Calendar para eventos actualizados.",
        },
      ],
    },
    gallery: [
      {
        url: "https://res.cloudinary.com/dcnclxmwv/image/upload/v1780117055/portafolio/fotos-pesca/6_kytqjq.png",
        label: "Vista desktop",
      },
      {
        url: "https://res.cloudinary.com/dcnclxmwv/image/upload/v1780117054/portafolio/fotos-pesca/3_yduixb.png",
        label: "Vista móvil",
      },
      {
        url: "https://res.cloudinary.com/dcnclxmwv/image/upload/v1780117054/portafolio/fotos-pesca/1_dmrgyz.png",
        label: "Galería de fotos",
      },
      {
        url: "https://res.cloudinary.com/dcnclxmwv/image/upload/v1780117054/portafolio/fotos-pesca/2_cyjkul.png",
        label: "Directorio socios",
      },
    ],
    results: [
      {
        title: "Sitio institucional activo",
        description: "Publicado en Netlify con dominio activo.",
      },
      {
        title: "Animaciones fluidas",
        description: "Experiencia visual moderna con Framer Motion.",
      },
      {
        title: "Gestión simple",
        description: "Eventos actualizados desde Google Calendar sin tocar código.",
      },
    ],
  },
]