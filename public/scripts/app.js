const toggleThemeBtn = document.querySelectorAll(".toggle-theme");
const submenuOpen=document.querySelector(".submenu-open-btn");
const submenu=document.querySelector(".submenu");
const navOpneBtn=document.querySelector(".nav-icon")
const navCloseBtn=document.querySelector(".navCloseBtn")
const navPart=document.querySelector(".navPart")
const overlay=document.querySelector(".overlay")

toggleThemeBtn.forEach(btn=>{
btn.addEventListener("click" , () => {
    if (localStorage.theme === "dark"){
        document.documentElement.classList.remove("dark");
        localStorage.theme = "light";
    } else {
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme" , "dark");
    }
    })
})

submenuOpen.addEventListener("click",(e)=>{
    console.log(e.currentTarget.parentElement)
    e.currentTarget.parentElement.classList.toggle("text-orange-300")
    submenu.classList.toggle("submenu--open");
})

navOpneBtn.addEventListener("click" , ()=>{
    navPart.classList.remove("-right-0")
    navPart.classList.add("right-0")
    overlay.classList.add("overlay--visible")
})

navCloseBtn.addEventListener("click",()=>{
    navPart.classList.add("-right-0")
    navPart.classList.remove("right-0")
    overlay.classList.remove("overlay--visible")

})

overlay.addEventListener("click",()=>{
    navPart.classList.add("-right-0")
    navPart.classList.remove("right-0")
    overlay.classList.remove("overlay--visible")

})