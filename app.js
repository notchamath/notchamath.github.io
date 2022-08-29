const sections = document.querySelectorAll('.section');
const sectBtns = document.querySelectorAll('.controls');
const sectBtn = document.querySelectorAll('.control');
const allSections = document.querySelector('.main-content');

function PageTransitions(){

    //For nav buttons
    for(let i=0; i<sectBtn.length; i++){

        sectBtn[i].addEventListener('click', (e) => {
            let currBtn = document.querySelector('.active-btn');
            currBtn.className = currBtn.className.replace('active-btn', '');
            e.target.className += ' active-btn';
        });
    }

    //change page
    allSections.addEventListener('click', (e) => {

        const id = e.target.dataset.id;

        if(id){
            
            // // adding 'active' class to the selected btn and removing the class from the rest
            // sectBtn.forEach((btn) => {
            //     btn.classList.remove('active');
            // });
            // e.target.classList.add('active');

            // adding 'active' class to the selected section and removing the class from the rest
            sections.forEach((section) => {
                section.classList.remove('active');
            });
            const element = document.getElementById(id);
            element.classList.add('active');
        }
    });
}

PageTransitions();