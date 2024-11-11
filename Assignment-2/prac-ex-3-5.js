
let people = {
    friends: []  
};

let friend1 = {
    firstName: "Jon",   
    lastName: "Snow",      
    id: 1                
};

let friend2 = {
    firstName: "Will",   
    lastName: "Byers",    
    id: 2               
};

let friend3 = {
    firstName: "Max",   
    lastName: "Mayfield", 
    id: 3                 
};

people.friends.push(friend1, friend2, friend3);

console.log(people);
