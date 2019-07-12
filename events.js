// console.log(document.readyState);

let step = 1;

document.addEventListener('readyStateChange', () => {
    console.log(`current state =  ${document.readyState} step ${step++}`);
});

document.addEventListener('DOMContentLoaded', () => {
    console.log(`DOMContentLoaded = step ${step++}`);
});
