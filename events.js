let step = 1;
console.log(document.readyState + `step ${step++}`);

document.onreadystatechange = () => {
    console.log(`${document.readyState} step ${step++}`);
};

const timeout = setTimeout(() => {console.log('timeout')}, 4000);

const domLoaded = () => {
    console.log(`DOMContentLoaded = step ${step++}`);
};

document.addEventListener('DOMContentLoaded', domLoaded);

