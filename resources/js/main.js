function editModal(bool, nomeFerr=null, numFerr=null, altFerr=null,) {
    let modal = document.querySelector(".edit-modal");
    let blackBack = document.querySelector(".black-back");

    if (bool && bool === true) {
        modal.classList.add("visible");
        blackBack.classList.add("visible");
    } else {
        modal.classList.remove("visible");
        blackBack.classList.remove("visible");
    }
}

function onLongPress(element, duration) {
    
    let timer = null;

    const start = () => {
        timer = setTimeout(()=> {
            editModal(true);
        }, duration)
    }

    const cancel = () => {
        clearTimeout(timer);
        timer = null;
    }

    element.addEventListener('mousedown', start);
    element.addEventListener('mouseup', cancel);
    element.addEventListener('mouseleave', cancel);

    element.addEventListener('touchstart', start);
    element.addEventListener('touchend', cancel);
    element.addEventListener('touchcancel', cancel);
}

document.querySelectorAll(".slot:not(.empty)").forEach(element => {
    onLongPress(element, 600);

});



/*for(let i=0; i < 5; i++) {
    let slots = document.querySelector(".slots");
    let newSlot = document.createElement("div");

    newSlot.innerHTML = `
        <div class="slot empty" onclick="editModal(true)">
            <h5>Vazio</h5>
            <h6>Clique para adicionar</h6>
        </div>
    `;

    slots.appendChild(newSlot);
}*/