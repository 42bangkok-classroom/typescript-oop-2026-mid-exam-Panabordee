interface Person {
  firstName?: string;
  lastName?: string;
  age?: number;
}

export function sortPersons(persons: Person[]): Person[] {
  let L = []
  for (let A = 0; A < persons.length; A++) {
    const { firstName, lastName, age } = persons[A];
    if (!firstName || !lastName || !age) continue;
    if (age < 0|| age > 100) continue;
    L.push(persons[A])
  }
  return L;
}
const persons: Person[] = [
  { firstName: "Somchai", lastName: "Jaidee", age: 30 },
  { firstName: "", lastName: "Test", age: 20 },
  { firstName: "Anan", lastName: "Sukjai", age: 25 },
  { firstName: "Somchai", lastName: "Dee", age: 25 },
  { firstName: "John", lastName: "Doe", age: 150 },
  { firstName: "Jane", lastName: "Smith", age: -5 },
  { lastName: "NoName", age: 40 }
];

