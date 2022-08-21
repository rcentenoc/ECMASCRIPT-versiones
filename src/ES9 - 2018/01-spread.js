const user = {username: 'efren', password:'1234'};
const {username, ...values} = user;
console.log(username, values);
console.log(values.password);
console.log(values);

const user1 = {id:1, username: 'efren', password:'1234'};
const {id, ...rest} = user1;
console.log(id, rest);
