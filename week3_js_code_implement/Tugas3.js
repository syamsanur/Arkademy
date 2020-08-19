divideAndSort = (x) => {
    if(typeof(x) == "number"){
        
        let deret = x.toString().split(0) //ubah k string supaya bisa split()
        let hasil = deret.map(i => i.split('').sort().join('')) //split buat pecah setiap element dalam array k dalam array baru(jd multidimensional array), urut, dan join
        let hasil2 = hasil.join('')
        hasil2=parseInt(hasil2) //ubah jd number

        console.log(`data yang dimasukan adalah ${x}      
menjadi ${hasil2} dengan tipe data ${typeof(hasil2)}`)

    }else{
        console.log("Data harus Number ")
    }
}

divideAndSort(5956560159466056)