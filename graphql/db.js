<<<<<<< HEAD
import { prisma } from "../../ONT/s02p12c108/backend/generated/prisma-client";

export let movies = [
  {
    id: 0,
    name: "Movie1",
    score: 0.1
  },
  {
    id: 1,
    name: "Movie2",
    score: 8
  },
  {
    id: 2,
    name: "Movie3",
    score: 99
  },
  {
    id: 3,
    name: "Movie4",
    score: 2
  }
];

export const getMovies = () => movies;

// export const getById = id => {
//   const filteredMovies = movies.filter(movie => movie.id === String(id));
//   return filteredMovies[0];
// };

export const getById = id => {
  const filteredMovies = movies.filter(movie => movie.id !== String(id));
  return filteredMovies[0];
};

export const deleteMovie = id => {
  const cleanedMovies = movies.filter(movie => movie.id !== String(id));
  if (movies.length > cleanedMovies.length) {
    movies = cleanedMovies;
    return true;
  } else return false;
};

// export default {
//   Mutation: {
//     setMovie: async (name, score) => {
//       return await movies.push(name, score);
//     }
//   }
// };

export const setMovie = (name, score) => {
  const len = movies.length;
  movies.push({ id: len - 1, name: name, score: score });
  return movies[movies.length - 1];
};

export const addMovie = (name, score) => {
  const newMovie = {
    id: `${movies.length + 1}`,
    name,
    score
  };
  movies.push(newMovie);
  return newMovie;
};
=======
export const people = [
    {
    id: "0",
    name: "Nicolas",
    age: 18,
    gender: "female"
  },
    {
    id: "1",
    name: "Jisu",
    age: 18,
    gender: "female"
  },
  {
    id: "2",
    name: "Japan Guy",
    age: 25,
    gender: "male"
  },
  {
    id: "3",
    name: "JD",
    age: 22,
    gender: "male"
  },
  {
    id: "4",
    name: "GwangWoo",
    age: 27,
    gender: "male"
  },
  {
    id: "5",
    name: "flynn",
    age: 25,
    gender: "female"
  }
  ];

export const getById = id => {
    const filteredPeople = people.filter(person => String(id) === person.id);
    return filteredPeople[0];
}
>>>>>>> 757a3c875e3afb48bdddc3b503d0049b1eb6c19d
