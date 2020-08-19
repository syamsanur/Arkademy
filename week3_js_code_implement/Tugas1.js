cekPalindrome = (kata) =>{

    if(typeof(kata) === "string"){
        
        kata2 = kata.toLowerCase()
        
        let palin= kata2.split('').reverse().join('')

        //console.log(` ${kata2}, ${palin}`)

        if(kata2 === palin){
            console.log(`${kata2} merupakan palindrome`)
        }else{
            console.log(`${kata2} bukan merupakan palindrome`)
        }

    }else{
        console.log("harus string")
    }
}

cekPalindrome("malam")

 
