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

var glider = new Glider(document.querySelector('.glider'), {
    slidesToShow: 1,
    dots: '.glider-dots',
    draggable: true,
    
  });

window.addEventListener('load', () => {
    
    window.innerWidth >= 768 ? (
        glider.destroy(),
        document.querySelector('.draggable').classList.add('flex-row'),
        document.querySelector('.glider-dots').style.display = 'none'
    ) : 
    (
        glider = new Glider(document.querySelector('.glider'), {
            slidesToShow: 1,
            dots: '.glider-dots',
            draggable: true,
            
          }),

        glider.refresh(true)

        
    )
    
})



