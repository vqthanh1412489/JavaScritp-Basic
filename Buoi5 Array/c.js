const a = [1 , 5, 44, 12, 3];

function locSoChan(arr){
    const b = [];
    for (let item in arr){
        if (arr[item] % 2 === 0)
            b.push(arr[item]);
    }
    return b;
}

console.log(locSoChan(a));