let data = {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address: 
    {
    street: "Kulas Light",
    suite: "Apt. 556",
    city: "Gwenborough",
    zipcode: "92998-3874",
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
    }

//console.log(data)

let spread = {...data, name :"Raden Syamsa Nur Ashari Mahmud", email:"syamsanur0@gmail.com", hobby: "travelling, gaming"};

console.log(spread)

let {address:{street, city}} =data
console.log(`alamat adalah ${street} 
dan kota adalah ${city}`)