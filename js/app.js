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

// Scroll
const navigation = document.querySelector('.container-nav');

window.addEventListener("scroll", (e)  => {
    var scroll = this.scrollY;
    console.log(scroll)

    if(scroll == 0){ 
        navigation.style.position = 'relative'
    } else {
        navigation.style.position = 'fixed'
    }
});



// GliderJs
new Glider(document.querySelector('.glider'),{
    slidesToShow : 1,
    draggable : true,
    dots : '#dots',
   
});