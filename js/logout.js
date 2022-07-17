const button = document.querySelector(".logout .logoutBtn");

function logoutEvent(event) {
    event.preventDefault();
    localStorage.removeItem("username");
    localStorage.removeItem("news");
    localStorage.removeItem("todos");
    window.location.reload();
}

button.addEventListener("click", logoutEvent);

if(storedUsername === null){
    button.classList.add(HIDDEN_CLASSNAME);
}else if(storedUsername !== null) {
    button.classList.remove(HIDDEN_CLASSNAME);
    
}