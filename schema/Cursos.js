module.exports = `
  # Esto es un curso en el sistema
  type Curso {
    id: ID!,
    titulo: String!    
    descripcion: String!
    profesor: Profesor
    rating: Float @deprecated(reason: "No creemos más en los puntajes")
    comentarios: [Comentario]
  }

  input NuevoCurso {
    titulo: String!
    descripcion: String!
    rating: Float!
  }

  input CursoEditable {
    titulo: String!
    descripcion: String!
    rating: Float!
  }

  type Comentario {
    id: ID!
    nombre: String!
    cuerpo: String!
  }
`