reverserKata = (kata) => {
    if(typeof(kata) == 'string'){
        let hasil = kata.split(" ").reverse().join(' ')
        console.log(`${kata} 
${hasil}`)
        
    }else{
        console.log("kata harus string")
    } 
}

reverserKata(12435)