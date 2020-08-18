cekNumber = (nilaiAwal,nilaiAkhir,dataArray) =>{
    let hasil
    if( typeof(nilaiAwal) && (nilaiAkhir) ==='number' || typeof(dataArray) === 'array'  ){
        if(nilaiAwal>nilaiAkhir){
            hasil = "Nilai awal tidak boleh lebih kecil dari nilai akhir"
        }else{
            if(dataArray.length < 5){
                hasil="data array kurang panjang"
            }else{
                let filter = dataArray.filter( i=>{
                    return i>nilaiAwal && i<nilaiAkhir
                })
                if(filter.length ===0){
                    hasil="tidak ada yang sesuai"
                }else{
                    hasil= filter.sort()
                }
            }
        }
        console.log(hasil)
    }else{
        hasil = "Nilai awal, nilai akhir harus number dan dataArray harus array"
    }
}

cekNumber("satu","dua","tiga")