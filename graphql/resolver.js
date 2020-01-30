import { movies, getMovies, getById } from "../graphql/db";
// import { getMovies } from "../graphql/db";
import { setMovie } from "../graphql/db";
import { addMovie } from "../graphql/db";

const nicolas = {
  name: "Nicolas",
  age: 18,
  gender: "female"
};

const resolvers = {
  Query: {
    person: () => nicolas,
    getMovies: () => movies,
    movies: () => getMovies(),
    movie: (_, { id }) => getById(id)
  },
  Mutation: {
    addMovie: (_, { name, score }) => addMovie(name, score)
  }
};

export default resolvers;
