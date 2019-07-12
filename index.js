document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.querySelector('.js-button');
    const toggleEle = document.querySelector('.js-showHide');

    const toggleElement = (element) => {
        element.style.display === 'none' ? element.style.display = 'block' : element.style.display = 'none';
    }

    toggleButton.addEventListener('click', () => {
        toggleElement(toggleEle)
    });
});

