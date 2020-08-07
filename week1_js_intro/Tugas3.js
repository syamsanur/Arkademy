let angka=5;

if(isNaN(angka)){
    console.log("data harus number")
}else{
    for( let i =1; i<=angka;  i++){
        baris='';
        for (let j =1; j<=(angka -i +1); j++){
            baris += j;
        }
        console.log(baris);
    }
}


/*
i   j   j<=(5-i +1)     true/false          baris           hasil

1   1   1<=(5-1+1)=5    true                '' = ''+j       1
1   2   2<=(5-1+1)=5    true                '1'= '1'+j      12
1   3   3<=(5-1+1)=5    true                '12'= '12'+j    123
1   6   6<=(5-1+1)=5    false
--
2   1   1<=(5-2+1)=4    true                '' = ''+j       1
--
5   1   5<=(5-5+1)=1    true                '' = ''+j       1

*/