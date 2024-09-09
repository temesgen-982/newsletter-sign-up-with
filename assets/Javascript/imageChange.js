
// this is our funciton
function imageLoader(){
    const image = document.querySelector('img'); // picking the first image

    if (window.innerWidth >= 700) { // the tricky part is this px number should be equal to 
                                    // the one in the media query
        image.src = 'assets/images/illustration-sign-up-desktop.svg';
    } else {
        image.src = 'assets/images/illustration-sign-up-mobile.svg';
    }
}

// to load the image on initial viewport

window.addEventListener('load', imageLoader);


// to change the image based on the screen size

window.addEventListener('resize', imageLoader);