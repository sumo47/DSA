
// let array = [90, 80, 70, 30, 50, 44]
// let position = 2;
// let newEl = 33

// for (let i = array.length - 1; i >= position; i--) {
//     if (i >= position) {
//         array[i + 1] = array[i]
//     }
//     if (i == position) {
//         array[i] = newEl
//     }
// }
// console.log(array)
// let arr=[2,4,4,6,5]
// let arr2=[6,7,8,9]
// let n=arr.length
// let m=arr2.length
// let ar=[]
// let i=0
// let j=0
// for(i=0;i<arr.length+arr2.length;i++){
//     if(i<n){
//         ar[i]=arr[i]
//     }else{
//         ar[i]=arr2[j]
//         j++
//     }

// }
// console.log(ar);

let arr1 = [1,2,3,4]
let arr2 = [5,6,7,8]
let a1 = 0;
let a2 = 0; 
let a3 = 0;
let arr3 = []

while(a1<arr1.length && a2<arr2.length){
    if(arr1[a1]<arr2[a2]){
        arr3[a3] = arr1[a1]
        a1++
    }else{
        arr3[a3] = arr2[a2]
        a2++
    }
    a3++ 
}

while (a1<arr1.length){
    arr3[a3] =arr1[a1]
    a1++
    a3++
}
while (a2<arr2.length){
    arr3[a3] =arr2[a2]
    a2++
    a3++
}
console.log(arr3)