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