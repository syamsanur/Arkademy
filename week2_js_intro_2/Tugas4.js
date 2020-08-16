const fetch = require("node-fetch");

const url = "https://jsonplaceholder.typicode.com/users/"; //buat tambah error tambah 1000 d belakang

fetch(url)
  .then((res) => res.json())
  .then((res) => res.map((user) => user.name))
  
  .then((user) => console.log(user))
  
  .catch(err => console.log("error"))




// fetchData = async (url) =>{
//     const res = await fetch(url) //var res tunggu proses fetch
//     return res.json() //return res dalam bentuk json
// }

// printData = async () =>{
//   console.log("test debug chrome")
//   const hasil = await fetchData(url) //hasil tunggu proses fetch
//     try{
//         name = hasil.map(i=> i.name)
//         console.log(name)
        
//     }catch(err){
//         console.log("error")
//     }
// }

// printData()

  
    
