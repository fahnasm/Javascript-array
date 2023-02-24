

// 1. Join
// console.log(arr.join(' - '));

// 2. Push
// arr.push('Kelinci', 'Rusa');
// console.log(arr.join(' - ')); 

// 3. Pop
// arr.pop();
// console.log(arr.join(' - ')); 

// 4. Unshift
// arr.unshift('Unta', 'Kijang');
// console.log(arr.join(' - ')); 

// 5. Shift
// arr.shift();
// console.log(arr.join(' - ')); 

// 6. Splice
// Rumus splice (indexAwal, mau dihapus berapa, elemenBaru1, elemenBaru2, ..)
// arr.splice(1, 1, 'Buaya', 'Kura-kura')
// console.log(arr.join(' - ')); 

// 7. Slice
// Rumus slice (awal, akhir)
// var arr2 = arr.slice(1, 4);
// console.log(arr2.join(' - ')); 


// 8. forEach
var arr = ["Koala", "Harimau", "Singa", "Gajah", "Jerapah"];
var angka = [1, 2, 3, 4, 5];

// for (var i = 0; i < arr.length; i++){
//     console.log(arr[i]);
// }

// arr.forEach (function (e){
//     console.log(e);
// })
arr.forEach (function(e, i){
    console.log('Binatang ke-' + (i+1) + ': ' + e);
})

// 8. Map
var angka = [1, 2, 3, 4, 5];
var angka2 = angka.map(function(e){
    return e * 2;
})
console.log(angka2.join(' - '));

// 9. sort
var angka = [1, 5, 10, 3, 2, 6, 18, 4, 7, 13]
angka.sort(function(a,b){
    return a-b;
});
console.log(angka.join(' - '))

// 10. Filter
var angka = [1, 5, 10, 3, 2, 6, 18, 4, 7, 13]
var angka2 = angka.filter(function(x) {
    return x > 5;
})
console.log(angka2.sort (function(a, b){
    return a - b;
}));


// 11. Find
var angka = [1, 5, 3, 2, 6, 18, 4, 7, 13]
var angka2 = angka.find(function(x) {
    return x > 5;
})
console.log(angka2);



