window.onload=()=>{
    const loader=document.querySelector('.loader');
    const anchors=document.querySelectorAll('a.trans');
    const navbar=document.querySelector(".navbar");
    


    setTimeout(()=>{
        loader.classList.remove('is-active');
        navbar.classList.remove('bg-black');
        navbar.classList.remove('navbar-dark');
        navbar.classList.add('bg-light');
        navbar.classList.add('navbar-light');
    },500);

    for(let i=0; i<anchors.length;i++){
        const anchor=anchors[i];

        anchor.addEventListener('click', e =>{
            e.preventDefault();
            let target=e.currentTarget.href;
        
            loader.classList.add('is-active');

            

            setTimeout(()=>{
                window.location.href=target;
            },1500);

        });
    }
}

