const entries = new Map([["name","Fabricio"],["age", 36],["country","Brazil"]]);
console.log(entries);
console.log(Object.fromEntries(entries));
const data = Object.fromEntries(entries);
console.log(data);