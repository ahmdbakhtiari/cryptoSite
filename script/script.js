let imageDyna = document.getElementById("imageDyna")
let headerSec = document.querySelector("header")

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