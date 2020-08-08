let bIndo =56
let bIng =45
let mtk =56
let ipa =78

let total = null
let nilai = null
let grade

//console.log(typeof (bIng || bIndo || mtk || ipa) )
console.log(typeof (bIng && bIndo && mtk && ipa) )


if(typeof (bIng && bIndo && mtk && ipa) === 'number' ) {

    total = bIng+bIndo+mtk+ipa
    nilai = total/4

    if(nilai <=100 && nilai >=90){
        grade= "A"
    }else if( nilai <=89 && nilai >=80){
        grade ="B"
    }else if( nilai <=79 && nilai >=70){
        grade="C"
    }else if( nilai <=69 && nilai >=60){
        grade="D"
    }else{
        grade="E"
    }

    console.log(`nilai ${nilai} dan grade ${grade}`)

}else{
    console.log("data tidak boleh kosong dan harus angka")
}
