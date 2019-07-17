let step = 1;
console.log(document.readyState + `step ${step++}`);

const domLoaded = () => {
    console.log(`DOMContentLoaded = step ${step++}`);
};

document.onreadystatechange = () => {
    console.log(`${document.readyState} step ${step++}`);
};

setTimeout(() => {console.log('timeout')}, 4000)
document.addEventListener('DOMContentLoaded', domLoaded);

