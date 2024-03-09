let imageDyna = document.getElementById("imageDyna")
let headerSec = document.querySelector("header")
let themeBtn = document.getElementById("bodyTheme")
let logoIcon = document.getElementById("logoIcon")
let nightMode = false

document.body.addEventListener("mousemove", mouseMove)
document.addEventListener("scroll", scrollHandler)

function mouseMove(event) {
    imageDyna.style.left = -78 + event.pageX/300
    imageDyna.style.bottom = 198 + event.pageY/300
}
function scrollHandler() {
    if (document.documentElement.scrollTop > 0) {
        headerSec.style.paddingTop = "0px"
        headerSec.style.paddingBottom = "0px"
    } else {
        headerSec.style.paddingTop = "10px"
        headerSec.style.paddingBottom = "10px"
    }
}

themeBtn.addEventListener("click", function () {
    if (nightMode) {
        nightMode = false
        themeBtn.setAttribute("src" , "svg/night.svg")
        document.body.style.backgroundColor = "rgba(251, 251, 251, 1)"
        document.querySelector("*").style.color = "black"
        document.querySelector("header").style.backgroundColor = "white"
        document.querySelector("header").style.boxShadow = "0px 4px 10px rgb(235, 235, 235)"
        logoIcon.setAttribute("src", "svg/logo.svg")
        Object.keys(document.getElementsByTagName("a")).forEach(function (item) {
            document.getElementsByTagName("a")[item].style.color = "black"
        })
    } else {
        nightMode = true
        themeBtn.setAttribute("src" , "svg/day.svg")
        document.body.style.backgroundColor = "rgba(23, 28, 34, 1)"
        document.querySelector("*").style.color = "white"
        document.querySelector("header").style.backgroundColor = "rgba(23, 28, 34, 1)"
        document.querySelector("header").style.boxShadow = "0px 4px 24px #464242"
        logoIcon.setAttribute("src", "svg/logoWhite.svg")
        Object.keys(document.getElementsByTagName("a")).forEach(function (item) {
            document.getElementsByTagName("a")[item].style.color = "white"
        })
    }
    }
)