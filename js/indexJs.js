const menuBtn = document.querySelector('.menu-btn');
var nav = document.querySelector('#link');
let menuOpen = false;


menuBtn.addEventListener('click',()=> {
    if(!menuOpen){
        menuBtn.classList.add('open');
        menuOpen = true;
        nav.classList.toggle('show-menu');
    } else{
        menuBtn.classList.remove('open');
        menuOpen = false;
        nav.classList.toggle('show-menu');
    }
})

const navLink = document.querySelectorAll('#btnnav');

function linkAction(){
    const navMenu = document.getElementById('link')
    navLink.forEach(nav => nav.classList.remove('active'));
    this.classList.add('active');
    navMenu.classList.remove('show-menu');
    menuBtn.classList.remove('open');
    menuOpen = false;
    
}

navLink.forEach(n => n.addEventListener('click', linkAction));

const sections = document.querySelectorAll('section[id]');

function scrollActive(){
    const scrollY = window.pageYOffset;

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 100;
        sectionId = current.getAttribute('id');

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.link a[href*=' + sectionId + ']').classList.add('active');
        }else{
            document.querySelector('.link a[href*=' + sectionId + ']').classList.remove('active');
        }
    })
}
window.addEventListener('scroll', scrollActive);



const project1 = document.querySelector('.project1');
var detail = document.querySelector('#detailProject');
