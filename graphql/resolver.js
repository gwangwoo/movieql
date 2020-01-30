import { movies, getMovies, getById, deleteMovie } from "../graphql/db";
// import { getMovies } from "../graphql/db";
// import { setMovie } from "../graphql/db";
import { addMovie } from "../graphql/db";
const resolvers = {
  Query: {
    getMovies: () => movies,
    movies: () => getMovies(),
    movie: (_, { id }) => getById(id)
  },
  Mutation: {
    addMovie: (_, { name, score }) => addMovie(name, score),
    deleteMovie: (_, { id }) => deleteMovie(id)
  }
};

export default resolvers;
