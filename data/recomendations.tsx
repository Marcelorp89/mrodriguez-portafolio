export type Recommendation = {
  quote: string
  name: string
  role: string
  project: string
  projectSlug: string
}

export const recommendations: Recommendation[] = [
  {
    quote: "¡Estamos felices con la nueva página web del club! El resultado final es impecable y sumamente profesional. Lo que más destacamos es el trato con Marcelo: su disposición para escuchar nuestras sugerencias y la claridad para resolver cada duda hicieron que todo el proceso fuera muy fluido. Totalmente recomendado.",
    name: "Club de Pesca y Caza Chinook Toltén",
    role: "Directiva del Club",
    project: "Website del Club de Pesca y Caza",
    projectSlug: "club-pesca-chinook-tolten",
  },
    {
    quote: "Excelente ejecucion de la pagina de la carniceria.",
    name: "Carnes Abdul",
    role: "Dueño",
    project: "Website Carnes Abdul",
    projectSlug: "link-carnes",
  },
]