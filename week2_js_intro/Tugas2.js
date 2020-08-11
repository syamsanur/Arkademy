const name = [
    'Abigail','Alexander','Alison',
    'Amanda','Angela','Bella',
    'Carol','Caroline','Carolyn',
    'Deidre','Diana','Elizabeth',
    'Ella','Faith','Olivia','Penelope',
]

getName = (x,y,callback) =>{
    let nameLow = name.map(v => v.toLowerCase()); //kecilkan
    let filter =nameLow.filter(e => e.includes(x)) //buang element yang tidak mengandung kata d cari
    if( y <= filter.length){ // apa kepanjangan?
        let result = filter.slice(0,y) //potong array dari index[0] sampe index[y]
        let result2 =result.map(i => i.charAt(0).toUpperCase()+ i.slice(1)) //besarkan huruf awal 
        callback(result2)//kirim k callback
    }else{
        console.log("ooray panjang teuing atau nama tidak ditemukan")
    }
    
}

printName = (result)=>{
    console.log(result)//tampikan hasil
}

getName("an",0,printName)



//console.log(string.includes(substring));

/*
getName = (x) => {
    nameLow = name.map(v => v.toLowerCase());
    let hasil= []    
    for (let i = 0; i < nameLow.length; i++){
        if( nameLow[i].includes(x)){
            hasil.push(nameLow[i])
            
        }
    }
    console.log(hasil)
}

getName("an")


for ( i=0; i<3; i++){ //y
    console.log(nameLow[i])
}


let i
let j

let hasil =[]
nameLow = name.map(v => v.toLowerCase());

getName = (x,y) =>{
    let filter =nameLow.filter(e => e.includes(x))
    console.log(filter)

    for (i=0; i<y; i++){
        hasil.push(filter[i])
    }
    
    console.log(hasil)
}

getName("an",6)




*/

//x kata d cari
//y batas


