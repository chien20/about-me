window.addEventListener("scroll",function(){
    var header = document.querySelector("#header")
    header.classList.toggle("sticky",window.scrollY > 0)
})
const ulmenu = document.querySelector("#header .nav")
const navLink = document.querySelectorAll('.nav a');
const logo = document.querySelector('.logo');
const header = document.querySelector('#header');
const menu = document.querySelector('.menu-moblie');
menu.addEventListener("click",()=>{
    ulmenu.classList.toggle("active")
})
logo.addEventListener("click",()=>{
    navLink.forEach(e =>{
        e.classList = ""
    })
})
navLink.forEach(element => {
    element.addEventListener("click",()=>{
        navLink.forEach(e =>{
            e.classList = ""
        })
        element.classList = "active"
        ulmenu.classList.remove("active")
    })
});
for(let link of navLink){
  link.onclick = function(e) {
    e.preventDefault();
    const hash = link.hash;
    const section = document.querySelector(hash);
    const scrollToSection = section.offsetTop - header.offsetHeight;
    window.location.hash = hash;
    if (header.offsetHeight > 72) {
        window.scrollTo(0, scrollToSection + 32);
    }
    else{
        window.scrollTo(0, scrollToSection);
    }
  }
}
