let arr = [1, 2, 3, 4];
let visit = [];
let k = 3;
let a = new Map();
let count = 0;

function backTracking(tmp) {
    if (tmp.length === k) {
        let tmp1 = [...tmp];
        a.set(tmp1.sort().join(","), 1);
        return;
    }
    for (let i = 0; i < arr.length; i++) {
        if (visit[i] !== 1) {
            tmp.push(arr[i]);
            visit[i] = 1;
            backTracking(tmp);
            visit[i] = 0;
            tmp.pop();
        }
    }
}
for (let i = 0; i < arr.length; i++) {
    visit[i] = 1;
    backTracking([arr[i]]);
    visit[i] = 0;
}
for (const item of a) {
    console.log(item[0].split(",").map(Number));
    count ++
}

console.log(count)