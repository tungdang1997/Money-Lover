let arr = [1,2,3,4,5,6,8,7,11,19]

function sortAndRemoveNonPrime(arr){
    let sortArray = []
    let flag = true
    for (let i = 0; i < arr.length; i++) {
        if (arr[i]>=2) {
            for (let j = 2; j < arr[i]; j++) {
                if(arr[i] % j === 0) flag = false
            }
            if (flag === true) sortArray.push(arr[i])
        }
        flag = true

    }
    return sortArray.sort((a,b)=> a - b)
}

console.log(sortAndRemoveNonPrime(arr))