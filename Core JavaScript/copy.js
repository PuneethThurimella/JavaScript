const objectOne = {
  name: "Puneeth",
  age: 25,
  address: {
    place: "Madhapur",
    city: "Hyderabad",
    state: "Telangana",
  },
};

const objectTwo = structuredClone(objectOne); // Deep copy
const objectThree = { ...objectOne }; // Shallow copy

objectTwo.address.place = "Hi-tech"; // Doesn't affect obj1 -Deep copy
console.log(objectOne, objectTwo);

objectThree.address.place = "Hi-tech"; // Modifies obj1 too -Shallow copy
console.log(objectOne, objectThree);
