const { makeExecutableSchema, addMockFunctionsToSchema } = require('graphql-tools')
const resolvers = require('../resolvers')
// const casual = require('casual')

const Curso = require('./Cursos')
const Profesor = require('./Profesor')

const rootQuerys = `
  union ResultadoBusqueda = Profesor | Curso

  type Query {
    cursos: [Curso]  
    profesores: [Profesor]
    curso(id: Int): Curso
    profesor(id: Int): Profesor
    buscar(query: String!): [ResultadoBusqueda]
  }

  type Mutation {
    profesorAdd(profesor: NuevoProfesor): Profesor
    profesorEdit(profesorId: Int!, profesor: ProfesorEditable): Profesor
    profesorDelete(profesorId: Int!): Profesor
    cursoAdd(curso: NuevoCurso): Curso
    cursoEdit(cursoId: Int!, curso: CursoEditable): Curso
    cursoDelete(cursoId: Int!): Curso
  }
`

const schema = makeExecutableSchema({
  typeDefs: [rootQuerys, Profesor, Curso],
  resolvers   
})

/*addMockFunctionsToSchema({
  schema,
  mocks: {
    Curso: () => {
      return {
        id: casual.uuid,
        titulo: casual.sentence,
        descripcion: casual.sentence
      }
    },
    Profesor: () => {
      return {
        nombre: casual.name,
        nacionalidad: casual.country
      }
    }
  },
  preserveResolvers: true
})*/

module.exports = schema
