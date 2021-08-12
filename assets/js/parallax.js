window.addEventListener('scroll',function(){
    const parallax = document.querySelector('.parallax');
        let scrollPosition = Number.parseInt(window.pageYOffset);
        
    parallax.style.backgroundPositionY = scrollPosition * -0.7 + 'px';
    // parallax.style.background.position.y= scrollPosition + 'px';

    var btnUp = this.document.querySelector('.gotop-btn')
    if(scrollPosition > 932){
        btnUp.style.opacity = '1';
    }else btnUp.style.opacity = '0';
})