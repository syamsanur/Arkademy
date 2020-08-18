let q =[5,1,2,4,3]
let a = "aSdf ghj"

//1 map buat dulpikat array berdasarkan kondisi yang d tentukan
let w=q.map(q => q+2)
console.log(`1 map element +2`)
console.log(w)

//2 push masukan element k dalam array di index terakhir
w.push(8)
console.log(`---
2 push angka 8`)
console.log(w)

//3 pop buang element array di index terakhir
w.pop()
console.log(`---
3 pop angka 8`)
console.log(w)

//4 unshift masukan element k dalam array d index pertama
w.unshift(9)
console.log(`---
4 unshift angka 9`)
console.log(w)

//5 shift buang element array d index pertama
w.shift()
console.log(`---
5 shift angka 9`)
console.log(w)

//6 includes cari apa value parameter ada di array, return true atau false, case sensitive
console.log(`---
6 includes 5?`)
console.log(w.includes(5))

//7 lowerCase membuat string menjadi huruf kecil
console.log(`---
7 lowerCase`)
console.log(a.toLowerCase())

//8 upperCase membuat string menjadi huruf kapital
console.log(`---
8 Uppercase`)
console.log(a.toUpperCase())

//9 sort mengurutkan array dari value terkecil
console.log(`---
9 sort`)
console.log(w.sort())

//10 filter membuat array baru yang berisi semua element yang memenuhi kondisi
console.log(`---
10 filter ganjil`)
let e = w.filter(e => e % 2 ==1)
console.log(e)
