

printSegitiga = (angka) =>{
if(isNaN(angka)){
    console.log("data harus number")
}else{
    for( let i =angka; i>=1;  i--){
        baris='';
        for (let j =1; j<=i; j++){
            baris += j;
        }
        console.log(baris);
    }
}
}

printSegitiga("asdaf");


/*
i   j   true/false?   baris 
5   1   true           1
5   2   true           12
5   5   true           12345
5   6   false                   

4   1   true           1
4   2   true           12
4   5   false

1   1   true           1


*/