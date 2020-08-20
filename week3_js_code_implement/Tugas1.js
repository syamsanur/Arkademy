cekPalindrome = (kata) =>{

    if(typeof(kata) === "string"){
        
        kata2 = kata.toLowerCase()
        
        let palin= kata2.split('').reverse().join('')

        if(kata2 === palin){
            console.log(`${kata} merupakan palindrome`)
        }else{
            console.log(`${kata} bukan merupakan palindrome`)
        }

    }else{
        console.log("harus string")
    }
}

cekPalindrome(12556)

 
