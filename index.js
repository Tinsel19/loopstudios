// selects id of the menu image 
var mNav = document.querySelector("#mobile-nav");

// function responsible for menu toggle
mNav.addEventListener("click", function () {

    // conditional statement to check toggle image 
    if (mNav.attributes.src.textContent === "images/icon-hamburger.svg") {
        mNav.setAttribute("src", "images/icon-close.svg");
        
        // creates the toggle interfcae
        document.querySelector("#head").style.background = "none";
        document.querySelector(".head2").style.opacity = 0;
        document.querySelector("#body").style.opacity = 0;
        document.querySelector("#footer").style.opacity = 0;
        document.querySelector(".hide").style.visibility = "visible";


        document.querySelector("body").style.backgroundColor = "Black";
        document.querySelector("body").style.overflow = "hidden";
        document.querySelector("body").style.height = "100%";
        
    } 
    else if (mNav.attributes.src.textContent === "images/icon-close.svg") {
        mNav.setAttribute("src", "images/icon-hamburger.svg");
        // removes the toggle interface 

        document.querySelector("#head").style.backgroundImage = "url('images/mobile/image-hero.jpg')";
        document.querySelector(".head2").style.opacity = 1;
        document.querySelector("#body").style.opacity = 1;
        document.querySelector("#footer").style.opacity = 1;
        document.querySelector(".hide").style.visibility = "collapse";
        document.querySelector("body").style.backgroundColor = "white";
        document.querySelector("body").style.overflow = "visible";
        document.querySelector("body").style.height = "100%";
    } 
     
    
    
})
