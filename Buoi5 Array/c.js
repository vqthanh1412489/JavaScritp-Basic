const a = [1 , 5, 44, 12, 3];

function filterPear(arr){
    const b = [];
    for (let item in arr){
        if (arr[item] % 2 === 0)
            b.push(arr[item]);
    }
    return b;
}

function filterFoot(arr){
    const b = [];
    for (let item in arr){
        if (arr[item] % 2 === 1)
            b.push(arr[item]);
    }
    return b;
}


console.log(filterPear(a));
console.log(filterFoot(a));