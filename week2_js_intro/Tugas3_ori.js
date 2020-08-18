

seleksiNilai =(nilaiAwal, nilaiAkhir, dataArray) => {
    if((nilaiAwal < nilaiAkhir) && (dataArray.length >=5)){
        hasil= dataArray.filter(i=> i> nilaiAwal && i<nilaiAkhir)
        hasil.sort()
        console.log(hasil)
    

    }else{
        console.log(`Nilai Akhir harus lebih besar dari nilai awal`)
    }
}

seleksiNilai(1,2,[9,6,1,7,4,2])
