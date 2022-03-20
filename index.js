    const OpenBtn = document.querySelector('#open-btn');
    const CloseBtn = document.querySelector('#close-btn');
    const Sidebar = document.querySelector('.sidebar');
    const Btns = document.querySelectorAll('.btn');

    // OpenBtn.addEventListener('click',() =>{
    // Sidebar.classList.add('show-sidebar');
    // });

    // CloseBtn.addEventListener('click',() =>{
    // Sidebar.classList.remove('show-sidebar');
    // });

    Btns.forEach((items) =>{
        items.addEventListener('click', () =>{
            Sidebar.classList.toggle('show-sidebar');
            if(Sidebar.classList.contains('show-sidebar')){
                setTimeout(() => {
                    OpenBtn.style.display = 'none';
                }, 1000);
               
            }
            else{
                setTimeout(() => {
                    OpenBtn.style.display = 'inline';
                }, 1000);
            }
        })
    })
