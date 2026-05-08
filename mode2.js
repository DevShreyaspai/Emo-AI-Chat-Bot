document.addEventListener("DOMContentLoaded",()=>{
    let body = document.querySelector("body");
    let mode = document.querySelector(".mode");
    let header = document.querySelector("header")
    let header_content1 = document.querySelector("#item1")
    let header_content2 = document.querySelector("#item2 a")
    let header_content3 = document.querySelector("#item3 a")
    let header_content4 = document.querySelector("#item4 a")
    let header_content5 = document.querySelector("#item5 a")
    const span = document.getElementById('business-span');
    let headerswitch = document.querySelector(".headingswitch")
    let chatbotdisplay = document.querySelector(".chatbotdisplay")
    let chatbotdisplay_h1 = document.querySelector(".chatbotdisplay h1")
    let chatbotdisplay_btn = document.querySelector(".chatbotdisplay btn")
    let signup_popup = document.querySelector(".signup-popup")
    let login_popup = document.querySelector(".login-popup")
    let mode_img = document.querySelector(".mode img")
    let chatbox = document.querySelector(".chatbox")
    let chatboxInput = document.querySelector(".chatbox input")
    const setMode = (mode)=>{
        if(mode==="dark"){
            body.style.background = "black"
            header.style.background = "black"
            header_content1.style.color = "white"
            header_content2.style.color = "white"
            header_content3.style.color = "white"
            header_content4.style.color = "white"
            header_content5.style.color = "white"
            mode_img.src = "Images/light.svg"
            header.classList.add("header")
            header.classList.remove("headerb")
            headerswitch.style.color ="white"
            chatbotdisplay_h1.style.color ="white"
            signup_popup.style.backgroundColor = "white"
            login_popup.style.backgroundColor = "white"
            chatbox.style.background = "black"
            chatboxInput.style.caretColor = "white"
            chatboxInput.style.color = "white"
        }
        else{
            body.style.background = "white"
            header.style.background = "white"
            header_content1.style.color = "black"
            header_content2.style.color = "black"
            header_content3.style.color = "black"
            header_content4.style.color = "black"
            header_content5.style.color = "black"
            mode_img.src = "Images/dark.svg"
            header.classList.add("headerb")
            header.classList.remove("header")
            headerswitch.style.color ="black"
            chatbotdisplay_h1.style.color ="black"
            signup_popup.style.backgroundColor = "white"
            login_popup.style.backgroundColor = "white"
            chatbox.style.background = "linear-gradient(to right,lightblue,greenyellow)"
            chatboxInput.style.caretColor = "black"
            chatboxInput.style.color = "black"
        }
    }
    let currentMode = localStorage.getItem("mode")
    if (currentMode){
        setMode(currentMode)
    }
    else{
        setMode("light")
    }
    mode.addEventListener("click",()=>{
        let mode = localStorage.getItem("mode")
        if (mode==="dark"){
            setMode("light")
            localStorage.setItem("mode","light")
        }
        else{
            setMode("dark")
            localStorage.setItem("mode","dark")
        }
    })
})