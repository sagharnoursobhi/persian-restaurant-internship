$(document).ready(function () {
    //sticky-header
    var $header = $('header')
    var $sticky = $header.before($header.clone().addClass('sticky'));
    $(window).on('scroll', () => {
        var scrollFromTop = $(window).scrollTop();
        $('body').toggleClass('scroll' , scrollFromTop>350);
    })
    //smooth scroll
    $('.menu li a[href^= "#"]').on('click', function (e) {
        e.preventDefault();
        var target = $(this.hash);
        if (target.length) {
            $('html , body').stop().animate({
                scrollTop: target.offset().top - 60//offset specifys top coordinate of the element
            }, 1000)
        }
    })
});
    
    
    
    
    
    let menuTrigger = document.querySelector('.menu-trigger-js');
    let menuPart = document.querySelector('.menu-js');
    let body = document.getElementsByTagName('BODY')[0];
    responsiveMenu();

//testimonial mouseover mouseout
    [...document.querySelectorAll('.figure')].forEach((item)=>{
        
        item.addEventListener('mouseover' , (e)=>{
            let target =e.target
            while(!target.classList.contains('figure')){
                target = target.parentElement;
            }
            const image1 = target.querySelector('.figure-img');
            let text = target.querySelector('.figure-text');
            image1.style.opacity = '0.5';
            text.style.display = 'block';

            })

        item.addEventListener('mouseout' , (e)=>{
            let target = e.target;
            if(!target.classList.contains('figure')){
                target = target.parentElement;
            }
            const image2 = target.querySelector('.figure-img');
            let text = target.querySelector('.figure-text');
            image2.style.opacity = '1';
            text.style.display = 'none'
        })
        responsiveMenu();
    })
        
    
    
    

   function responsiveMenu(){
    document.addEventListener('click', (e) => {
        const target = e.target;
        if(target.classList.contains('menu-trigger-js')) {
            body.classList.add('menu-is-active');
        }
    })
    menuTrigger.addEventListener('click' , ()=>{
        
    })

    menuPart.addEventListener('click' , ()=>{
        body.classList.remove('menu-is-active');
    })

    document.querySelector('.menu-link').addEventListener('click' , ()=>{
        body.classList.remove('menu-is-active');
    })
   }


   //responive footer

//    let accountPart = window.getComputedStyle(
//     document.querySelector('.account-js'), '::after'
//     );
//     let footerMenu = document.querySelector('.footer-menu');
//     let footerCloseIcon = document.querySelector('.footer-close-icon');

//     accountPart.addEventListener('click' , ()=>{
//         footerMenu.classList.add('footer-menu-active');
//     })
//     footerCloseIcon.addEventListener('click' , ()=>{
//         footerMenu.classList.remove('footer-menu-active');
//     })

   

    