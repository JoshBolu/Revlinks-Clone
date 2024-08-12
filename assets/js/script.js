/*------- SHOW-MENU -------*/
const ham_menu = document.querySelector(".ham-menu");
const all_sections_cont = document.querySelectorAll(".section");
const subsidiares_dropdown_cont = document.querySelector(".subsidiares-dropdown-cont");
const nav_list_cont = document.querySelector(".nav-list-cont");

// menu show and menu hide- shifts all the element down when the menu is clicked 
ham_menu.addEventListener("click", () => {    
    all_sections_cont.forEach(element =>{
        if(element.style.top === "180px"){
            element.style.top = "0";
        }
        else if(element.style.top === "610px"){
            element.style.top = "0";
            subsidiares_dropdown_cont.style.display = "none";
        }
        else{
            element.style.top = "180px";            
            nav_list_cont.style.display = "block";
        }
    })
})

/*------ SHOW DROPDOWN ------*/
const align_horizontal = document.querySelector(".align-horizontal");
align_horizontal.addEventListener("click", ()=>{
    if(window.innerWidth < 720){
        if(subsidiares_dropdown_cont.style.display === "block"){
            subsidiares_dropdown_cont.style.display = "none";
            all_sections_cont.forEach(element =>{
                element.style.top = "180px";
            })
        }
        else{
            subsidiares_dropdown_cont.style.display = "block";
            all_sections_cont.forEach(element =>{
                element.style.top = "610px";
            })
        }   
    }    
})

/*--------- SHOW REVOLUTIONARY SOLUTIONS DESCRIPTION WHEN CLICKED ---------*/

const single_solu_cont = document.querySelectorAll(".single-solu-cont");
//get the images to be displayed depending on the selected list
const solu_img = document.querySelectorAll(".img");

single_solu_cont.forEach((element, index, array) => {
    element.addEventListener("click", ()=> {
        let num = index;
        switch (num) {
            case 0:
                addRemoveActive(array,0,1,2,3,solu_img);
                console.log(num);
                break;
            case 1:
                addRemoveActive(array,1,2,3,0,solu_img);
                console.log(num);
                break;
            case 2:
                addRemoveActive(array,2,1,3,0,solu_img);
                console.log(num);
                break;
            case 3:
                addRemoveActive(array,3,2,1,0,solu_img);
                console.log(num);
                break;
            default:
                console.log("error");
                break;
        }
    })
})

//adds and remove classlist depending on given arguments 
function addRemoveActive(array, index0, index1, index2, index3, imgArray){
    array[index0].classList.add("active");
    array[index1].classList.remove("active");
    array[index2].classList.remove("active");
    array[index3].classList.remove("active");
    
    //to show chosen images
    imgArray[index0].classList.add("active-img");
    imgArray[index1].classList.remove("active-img");
    imgArray[index2].classList.remove("active-img");
    imgArray[index3].classList.remove("active-img");
}

/*=============== DARK LIGHT THEME ===============*/ 
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'ri-sun-line'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

/*-------- SHOW SCROLL UP ---------*/ 
const scrollUp = ()=>{
    const scrollUp = document.getElementById("scroll-up");
    //when scroll is higher than 350 viewport height, add show-scroll class to the website 
    this.scrollY >= 350 ? scrollUp.classList.add("show-scroll")
                        : scrollUp.classList.remove("show-scroll")
}
window.addEventListener("scroll", scrollUp);

/*-------- SCROLL REVEAL ANIMATION ---------*/
/* const sr = ScrollReveal({
    origin: "top",
    distance: "60px",
    duration: 2500,
    delay: 400,
})

sr.reveal(".intro-cont-description, .def-revo-solu-cont, .reviews-cont, .newsletter-reveal, .footer-cont");
sr.reveal(".intro-cont-img", {origin: "bottom"});
sr.reveal(".oper-arms-cont",{origin: "left"}, {delay: 1000});
sr.reveal(".single-brand-cont", {interval: 100});
sr.reveal(".single-solu-cont", {origin: "left"}, {interval: 200});
sr.reveal(".stats_reveal", {interval: 300});
sr.reveal(".newsletter-reveal", {origin: "right"});
sr.reveal(".single-list", {interval: 300});
sr.reveal(".copyright-cont", {origin: "left"});
sr.reveal(".socials-cont", {origin: "right"}); */

//stop form from reloading upon submission
document.querySelector(".form-cont").addEventListener("submit", event =>{
    event.preventDefault()
    const input_mail = document.querySelector(".input-mail");
    input_mail.value = "";
});