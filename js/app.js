
// mobile menu 

let navToggle = document.getElementById('navToggle');
let navMenu = document.getElementById('navMenu');
let navClose = document.getElementById('nav-close');

navToggle.addEventListener('click', () => {
    navMenu.classList.add('show-menu');
});
navClose.addEventListener('click', () => {
    navMenu.classList.remove('show-menu')
})

//scroll header

function scrollHeader() {
    let header = document.getElementById('header');
    if (this.scrollY > 80)
    {
        header.classList.add('scroll-header');
    }
    else {
        header.classList.remove('scroll-header');
    }
}

window.addEventListener('scroll', scrollHeader);

function setActive() {
    var sections = document.querySelectorAll('section[id]');
    var scrollY = window.pageYOffset;
    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 58,
            sectionId = current.getAttribute('id');
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active-link');
        } else {
            document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
            }
    )
}
window.addEventListener('scroll',setActive)

// menu tab

let menuTab = document.querySelector('.menu-tab');

menuTab.addEventListener('click', (e) => {
    if (e.target.classList.contains('menu-tab-item') && !e.target.classList.contains('active'))
    {
        const target = e.target.getAttribute('data-target');
        // console.log(target);
        menuTab.querySelector('.active').classList.remove('active');
        e.target.classList.add('active');
        const menuSection = document.querySelector('.menu-section');
        menuSection.querySelector('.menu-tab-content.active').classList.remove('active');
        menuSection.querySelector(target).classList.add('active');
    }
})




