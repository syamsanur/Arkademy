reverserKata = (kata) => {
    if(typeof(kata) == 'string'){
        let hasil = kata.split(" ").reverse().join(' ')
        console.log(`${kata} 
${hasil}`)
        
    }else{
        console.log("kalimat harus string")
    } 
}

reverserKata("Saya Suka Javascript")