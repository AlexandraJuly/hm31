/* 1 Що виведе код нижче?

let promise = new Promise(function(resolve, reject) {
    resolve(1);
    setTimeout(() => resolve(2), 1000);
});
promise.then(alert);

    Відповідь - 1 
*/

// 2

function delay(ms) {
    return new Promise ( (resolve, reject) => {
        setTimeout(() => resolve(), ms);
    });
}
delay(1000).then((_)=> {
    return alert('Task #2_Promise'), console.log('Task #2_Promise')});

async function delayTwo (ms){
    const pau = await new Promise((resolve, reject) => {
        setTimeout(() => resolve(), ms);
    });
    return pau;
}

 // 3

const numTest = 7;

function returnNumber (num) {
    return new Promise ( (resolve, reject) => {
        setTimeout(() => resolve(num), 2000);
    });
}
returnNumber(numTest).then(num => console.log('Task #3_Promise -', num));

async function returnNumberTwo (num) {
    const newNum = await delay(2000).then(()=> num);
    return newNum;
}

// 4

const arr = [10,14,100,4,22,11,9,13,12,8];

function maxNumber (arr) {
    return new Promise((resolve, reject) => {
        const max = Math.max(... arr);
        resolve(max)
    });
}
maxNumber(arr).then((max)=> console.log('Task #4_Promise -', max));

async function maxNumberTwo (arr) {
    const res = await Math.max(... arr);
    return res;
}

async function play () {
    let a = await delayTwo(3000).then((_)=> {console.log('Task #2_async/await')});
    let b = await returnNumberTwo(numTest).then((vol)=>console.log('Task #3_async/await -', vol));
    let s = await maxNumberTwo(arr).then((vol)=>console.log('Task #4_async/await -', vol))
}
play()