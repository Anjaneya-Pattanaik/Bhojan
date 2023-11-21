let optionicon=document.querySelector('#option');
let navbar=document.querySelector('.navbar');

optionicon.onclick = () => {
    optionicon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}