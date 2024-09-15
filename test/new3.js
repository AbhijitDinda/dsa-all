// let A = [1, 3, 5, 6, 7, 8, 9];

// function reverseArray(){
//     if(A.length === 0){
//         return;
//     }
//     let lastElement = A.pop();
//     console.log(lastElement);
//     reverseArray();
//     A.unshift(lastElement); 
//     return A;
    
// }
// console.log(reverseArray());


let A = [1, 3, 5, 6, 7, 8, 9];

function reverseArray(arr) {
    if (arr.length === 0) {
        return [];
    }
    let lastElement = arr.pop();
    console.log(lastElement);
    reverseArray(arr);
    arr[arr.length] = lastElement;
    return arr;
}

console.log(reverseArray(A));

