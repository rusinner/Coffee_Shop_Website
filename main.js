// show side menu on click in small screens

let navbar = document.querySelector('.navbar');
document.querySelector('#menu-btn').onclick = () => {
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
}

//show cart items on click
let cartItem = document.querySelector('.cart-items-container');
document.querySelector('#cart-btn').onclick = () => {
    cartItem.classList.toggle('active');
    navbar.classList.remove('active');
    searchForm.classList.remove('active-search');
}

//show search bar on click

let searchForm = document.querySelector('.search-form');
document.querySelector('#search-btn').onclick = () => {
    searchForm.classList.toggle('active-search');
    cartItem.classList.remove('active');
    navbar.classList.remove('active');
}


//hide all menus when scrolling
window.onscroll = () => {
    navbar.classList.remove('active');
    searchForm.classList.remove('active-search');
    cartItem.classList.remove('active');
}