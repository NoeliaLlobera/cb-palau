// MOBILE NAVBAR BEHAVIOUR
let mobileMenu;
let mobileSubLists;
let mobileSubTitles;

window.addEventListener('DOMContentLoaded', function () {
    mobileMenu = this.document.querySelector(".mobile-menu");
    mobileMenu.style.display = "none";

    mobileSubTitles = document.querySelectorAll('.has-mobile-subs span');
    mobileSubLists = document.querySelectorAll('.has-mobile-subs ul');

    for (let element of mobileSubLists) {
        element.style.display = "none"
    }

    for (let i = 0; i < mobileSubTitles.length; i++) {
        mobileSubTitles[i].addEventListener('click', function (element) {
            console.log(element.target)
            element.target.classList.toggle('underline');
            if (mobileSubLists[i].style.display === "none") {
                mobileSubLists[i].style.display = "flex"
            } else {
                mobileSubLists[i].style.display = "none"
            }
        })
    }

    document.querySelector('#menuButton').addEventListener('click', function(){
        const display = mobileMenu.style.display;
        if (display === 'flex') {
            mobileMenu.style.display = "none";
        } else {
            mobileMenu.style.display = "flex";
        }
    });
    
})




