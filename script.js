let user = {
    name: 'Alex',
    surname: 'Adams',
    age: 23,
    isMarried: true,
    girls: ['Nargiza', 'malika', 'karina', 'rayxon'],
    passport: {
        serries: 'AC',
        number: 23412321
    },
}

let parents = {
    mom: 'Alina', 
    dad: 'Bred Pitt'
}


let all = Object.assign(user, parents);

// console.log(all);

let arrKeys = [Object.keys(all)]

// console.log(arrKeys);

let arrValues = [Object.values(all)]

// console.log(arrValues);

let arrEntries = [].concat(...arrKeys,...arrValues)

console.log(arrEntries);

let types = {
    number: [],
    string: [],
    boolean: [],
    object: []
}


arrEntries.filter(item => {if (typeof item === "number") {
    
    types.number.push(item)
    console.log(types.number);
}else if (typeof item === "string") {
    
    types.string.push(item)
    console.log(types.string);
}else if (typeof item === "boolean") {
    
    types.boolean.push(item)
    console.log(types.boolean);
}else if (typeof item === "object") {
    
    types.object.push(item)
    console.log(types.object);
}
})

