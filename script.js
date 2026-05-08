document.addEventListener("DOMContentLoaded",()=>{
    // let body = document.querySelector('body')
    let login = document.querySelector('.login')
    let login_popup = document.querySelector(".login-popup")
    let close = document.querySelector(".close")

    let signup = document.querySelector('.signup')
    let signup_popup = document.querySelector(".signup-popup")
    let sclose = document.querySelector(".sclose")

    let searchboxpopup = document.querySelector(".searchboxpopup")
    let search = document.querySelector(".search")
    login.addEventListener("click",()=>{
        login_popup.style.visibility = "visible"
        signup_popup.style.visibility = "hidden";
        searchboxpopup.style.visibility = "hidden"
    })
    close.addEventListener("click",()=>{
        login_popup.style.visibility = "hidden";
        signup_popup.style.visibility = "hidden";
        searchboxpopup.style.visibility = "hidden"
    })

    signup.addEventListener("click",()=>{
        signup_popup.style.visibility = "visible";
        login_popup.style.visibility = "hidden";
        searchboxpopup.style.visibility = "hidden"
    })
    sclose.addEventListener("click",()=>{
        signup_popup.style.visibility = "hidden";
        login_popup.style.visibility = "hidden";;
        searchboxpopup.style.visibility = "hidden"
    })

    search.addEventListener("click",()=>{
        if (searchboxpopup.style.visibility === "hidden"){
        searchboxpopup.style.visibility = "visible"
        login_popup.style.visibility = "hidden";
        signup_popup.style.visibility = "hidden";
        } else{
            searchboxpopup.style.visibility = "hidden"
        login_popup.style.visibility = "hidden";
        signup_popup.style.visibility = "hidden";
        }
    })
    
})