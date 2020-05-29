

function slide(){
    let burgerBar = document.querySelector('.burger')
    let nav = document.querySelector('.navigation-ul')
    const listOfLink = document.querySelectorAll('.navigation-li')

    burgerBar.addEventListener('click' , () => {
        nav.classList.toggle('nav-active')

        listOfLink.forEach((element, index) => { 

            if(element.style.animation)
            {
                element.style.animation = ''
            } else {
                element.style.animation = `navFade 0.5s ease forwards ${index/7 + 0.5 }s`
            }
        })

        burgerBar.classList.toggle('toogle')
    });
};


 slide()