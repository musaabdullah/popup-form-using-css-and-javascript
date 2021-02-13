   const pop = document.getElementById('pop');
        const popbutton = document.getElementById('popbutton');
        const close = document.getElementById("btn-cancel");
        const container = document.querySelector('.container');
        

        close.addEventListener('click', (e) => {
            e.preventDefault();
            pop.style.visibility = "hidden";
            // container.style.opacity = "20%";
            // container.style.background = "white";
        })
        // popbutton.onclick = () => {
        //     pop.style.display = "block";
        // }
        popbutton.addEventListener('click', () => {
            pop.style.visibility = "visible";
        })
    