const name = [
    'Abigail','Alexander','Alison',
    'Amanda','Angela','Bella',
    'Carol','Caroline','Carolyn',
    'Deidre','Diana','Elizabeth',
    'Ella','Faith','Olivia','Penelope',
]

getName = (x,y,callback) =>{
    let result 
     result = name.map(v => v.toLowerCase()); //kecilkan
     result =result.filter(e => e.includes(x))
    if(result.length == 0){
        console.log("nama tidak d temukan")
    }else{
        if(y<result.length){
             result = result.slice(0,y) //potong array dari index[0] sampe index[y]
             result =result.map(i => i.charAt(0).toUpperCase()+ i.slice(1)) //besarkan huruf awal 
             callback(result)//kirim k callback
        }else{
            console.log("ooray panjang teuing")
        }
    }
}

printName = (result)=>{
    console.log(result)//tampikan hasil
}

getName("an",3,printName)