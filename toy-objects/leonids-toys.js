const toys = [
    {
    id: 1,
    name: "Toy Soldier",
    manufacturer: "Fightz",
    ageLimit: "12+",
    price: 11.99,
    weight: 3.17
    },

    {
    id: 2,
    name: "Bouncy Ball",
    manufacturer: "Hop",
    ageLimit: "3+",
    price: 5.99,
    weight: 30.69
    },

    {
    id: 3,
    name: "Plush Ferret",
    manufacturer: "Dear Rodents",
    ageLimit: "6+",
    price: 7.99,
    weight: 3.8
    }
]

const storyBook = {
    id: 4,
    name: "Story Book",
    manufacturer: "Golden",
    ageLimit: "6+",
    price: 5.99,
    weight: 4
}

const globe = {
    id: 5,
    name: "World Globe",
    manufacturer: "Golden",
    ageLimit: "8+",
    price: 19.99,
    weight: 7.8
}

toys.push(storyBook);
toys.push(globe);

const toyToFind = 3

for(const toy of toys) {
    if(toy.id === toyToFind) {
        toy.weight * 1.05;
        console.log(`${toy.name} is for children ${toy.ageLimit} years old and weighs ${toy.weight} ounces.`);
    }
    }