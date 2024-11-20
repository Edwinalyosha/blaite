window.onload=()=>{
    const loader=document.querySelector('.loader');
    const anchors=document.querySelectorAll('a.trans');

    // these variables are for the randomizer not to be confused with the rest of the code
    
    var classes=["pg-left", "pg-right", "pg-fade", "pg-up", "pg-down"];

    setTimeout(()=>{
        loader.classList.remove('is-active');
    },500);

    for(let i=0; i<anchors.length;i++){
        const anchor=anchors[i];

        anchor.addEventListener('click', e =>{
            e.preventDefault();
            let target=e.currentTarget.href;
        
            loader.classList.add('is-active');



            // now we randomly swithch the anu=imation style

            // var rand=Math.random();
            // var curr_class="null"; // for current class
            // for(var j=0; j<classes.length; j++){
            //     if(loader.classList.contains(classes[j]))curr_class=classes[j];
            // }

            // console.log(curr_class, rand);
            // if(rand>0.8 && curr_class!= "null") {
            //     loader.classList.remove(curr_class);
            //     loader.classList.add("pg-left");
            // }
            // else if(rand>0.6 && curr_class!= "null")loader.classList.replace(curr_class,"pg-right");
            // else if(rand>0.4 && curr_class!= "null")loader.classList.replace(curr_class,"pg-fade");
            // else if(rand>0.2 && curr_class!= "null")loader.classList.replace(curr_class,"pg-up");
            // else loader.classList.replace(curr_class,"pg-down");

            // here ends the code resonsible for switching animations
            

            setTimeout(()=>{
                window.location.href=target;
            },1500);

        });
    }
}

