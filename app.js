function themeTransitions(){

    // toggle theme
    const themeBtn = document.querySelector('.theme-btn');
    const tooltip = themeBtn.querySelector('.tooltip');

    themeBtn.addEventListener('click', () =>{
        let element = document.body;
        element.classList.toggle('light-mode');

        if (tooltip.innerText === 'Light Mode'){
            tooltip.innerText = 'Dark Mode';
        } else {
            tooltip.innerText = 'Light Mode';
        }

    });
}
themeTransitions();