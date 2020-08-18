const satu = (num) =>{
    return new Promise((resolve, reject)=>{
        if(num % 2 == 0){
            resolve("genap")
        }else{
            reject("ganjil")
        }
    })
}

// satu(5)
//     .then(res => console.log(res))
//     .catch(res => console.log(res))




const beli = (x) => {
    let barang = [
        //catatan saya stuck nyari nama produk jd saya ganti dengan lirik
        {
            id:1,
            namaProduk:"Shofira remajah anak bapak kades....",
            harga:8000,
            jumlah:1
        },
        {
            id:2,
            namaProduk:"(Dan) si Rido jejaka baruuuuuh aja mudik...",
            harga:1000,
            jumlah:1
        },
        {
            id:3,
            namaProduk:"Berduaaaaaaaa saling mencintah sejak lulus SD...",
            harga:2000,
            jumlah:2
        },     
    ]
    

    let hasil = barang.filter(e=> e.id == x)
    return hasil
    // let[{namaProduk, jumlah}]=hasil
    // console.log(namaProduk,jumlah)

}

const bayar = async (x) =>{
    console.log(`Loading......`)
    let hasil = await beli(x)
    setTimeout(() => {
        try{
            //console.log(hasil)
            let [{namaProduk,jumlah,harga}] = hasil
            //console.log(namaProduk)
            let total = jumlah * harga
            console.log(`Pembelian ${namaProduk} totalnya menjadi ${total} Rupiah`)
        }catch{
            console.log(`Error`)
        }    
    }, 2000);
    
}

bayar("tigas")