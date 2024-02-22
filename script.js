const menu_open = document.getElementById("menu-open")
const menu = document.getElementById("menu")
const mail = document.getElementById("mail")
var email_id = document.getElementById("email-id")

menu_open.addEventListener('click',()=>{
    menu.classList.toggle('hidden')
})
mail.addEventListener('click',()=>{
    if(email_id.value == ""){
        alert("Enter email id")
    }
    else{
        alert("subscribed")
    }
})
