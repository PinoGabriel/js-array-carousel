

let images = document.querySelectorAll("img")
console.log(images.length);
let btnUp = document.getElementById("btnUp")
let currentImg = 0
images[currentImg];
console.log(images[currentImg]);

btnUp.addEventListener("click", function() {
    console.log("avanti");
    currentImg+1;
    console.log(currentImg+1)

    if (currentImg < images.length - 1) {
        images[currentImg].classList.remove("my_display");
        currentImg++;
        images[currentImg].classList.add("my_display");
        console.log(images[currentImg])
    }
    
})

let btnDown = document.getElementById("btnDown")

btnDown.addEventListener("click", function() {
    console.log("indetro");
    console.log(currentImg-1)

    if (currentImg > 0) {
        images[currentImg].classList.remove("my_display");
        currentImg--;
        images[currentImg].classList.add("my_display");
    }
    
})