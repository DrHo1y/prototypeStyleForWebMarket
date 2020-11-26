function Uncover(lol) {
    var id = lol.parentNode.parentNode.id
    var elem = document.getElementById(id)

    elem.classList.contains("open") ? 
        elem.classList.remove("open") : 
            elem.classList.add("open")
}

function VisibleInfo(){
    var element = document.querySelector(".info")
    setTimeout(() => element.classList.add("visible-info"), 100)
    
}

function HiddenInfo(){
    var element = document.querySelector(".info")
    setTimeout(() => element.classList.remove("visible-info"), 100)
}