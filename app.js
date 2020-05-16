const btn = document.querySelector('.hamburger');
const navlinks = document.querySelector('.nav-items');
let menuOpen = false;
btn.addEventListener('click', ()=>{
    if(!menuOpen){
        btn.classList.add('open');
        navlinks.classList.add('show-menu');
        menuOpen = true;
    }else{
        btn.classList.remove('open');
        navlinks.classList.remove('show-menu');
        menuOpen = false;
    }
});