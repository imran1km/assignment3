let personName = "Imran Memon";

console.log(personName.toLocaleLowerCase());

console.log(personName.toLocaleUpperCase());

console.log(personName.replace(/\b\w/g, (char) => char.toLocaleUpperCase()));