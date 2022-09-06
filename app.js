function themeTransitions(){

    // toggle theme
    const themeBtn = document.querySelector('.theme-btn');
    themeBtn.addEventListener('click', () =>{
        let element = document.body;
        element.classList.toggle('light-mode');
    })
}

themeTransitions();


function imageTransition(){

}

imageTransition();