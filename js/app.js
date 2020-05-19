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
    if(scroll == 0){ 
        navigation.style.position = 'relative'
    } else {
        navigation.style.position = 'fixed'
    }
});

var glider1 = new Glider(document.querySelector('.glider-insights'), {
    slidesToShow: 1,
    dots: '.glider-dots',
    draggable: true,
    
  });

var glider2 = new Glider(document.querySelector('.glider-events'), {
slidesToShow: 1,
dots: '.glider-dots',
draggable: true,

});

// Glider To Flex
window.addEventListener('load', () => {
    
    window.innerWidth >= 768 ? (
        glider1.destroy(),
        glider2.destroy(),
        document.querySelectorAll('.draggable').forEach(element => {
            
            element.classList.add('flex-row')
        }),
        document.querySelectorAll('.glider-dots').forEach(element => {
            element.style.display = 'none'
        })
    ) : 
    (   
        null
    )
    
})

window.addEventListener('resize', () => {
    
    window.innerWidth >= 768 ? (
        glider1.destroy(),
        glider2.destroy(),
        document.querySelectorAll('.draggable').forEach(element => {
            
            element.classList.add('flex-row')
        }),
        document.querySelectorAll('.glider-dots').forEach(element => {
            element.style.display = 'none'
        })
    ) : 
    (   
        document.querySelector('.glider') ? (
            null
        ) : (
            location.reload()
        )
        
        
        
        
    )
    
})



