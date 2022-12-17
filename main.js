const body = document.querySelector('body');
const label = document.querySelector('label');
const main = document.querySelector('main');
const chk = document.getElementById('chk');

chk.addEventListener('change', function() {
    body.classList.toggle('dark');
    main.classList.toggle('dark');
    label.classList.toggle('dark');
})