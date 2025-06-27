function notify(message, time=3) {
    if (message) {
        let notifyPopup = document.querySelector(".notification");
        notifyPopup.innerHTML = `<p>${message}</p>`
        notifyPopup.classList.add("visible");
        
        setTimeout(() => {
            notifyPopup.classList.remove("visible");
        }, (time * 1000));
    } else {
        console.error("Erro: Mensagem da notificação não definida.")
    }
}

function editModal(bool, index) {
    let modal = document.querySelector(".edit-modal");
    let blackBack = document.querySelector(".black-back");

    //
    let inputName = modal.querySelector("#tool-name-ipt");
    let inputNumber = modal.querySelector("#tool-number-ipt");
    let inputHeight = modal.querySelector("#tool-height-ipt");
    //
    inputName.value = "";
    inputNumber.value = "";
    inputHeight.value = "";

    if (index !== undefined && index !== null) {

        let slotsStorage = localStorage.getItem("slots");

        if (slotsStorage) {
            let slotsStorageOBJ = JSON.parse(slotsStorage);
            let slotOBJ = slotsStorageOBJ[index];
            inputName.value = slotOBJ.name || "";
            inputNumber.value = slotOBJ.number || "";
            inputHeight.value = slotOBJ.height || "";
        }

        let confirmButton = document.querySelector("#edit-modal-confirm-button");
        let clearButton = document.querySelector("#edit-modal-clear-button");


        confirmButton.onclick = ()=> {
            if (setSlot(index)) {
                loadSlots();
                notify(`<span>${inputName.value}</span> definido com sucesso.`);
                editModal(false);
            }    

        }

        clearButton.onclick = ()=> {
            console.log("Fora");
            if (clearSlot(index)) {
                console.log("Dentro");
                loadSlots();
                notify(`<span>${inputName.value}</span> excluído com sucesso.`);
                editModal(false);

            }    

        }
    }


    if (bool === true) {
        modal.classList.add("visible");
        blackBack.classList.add("visible");
    } else {
        modal.classList.remove("visible");
        blackBack.classList.remove("visible");
    }

}

/*function onLongPress(element, duration) {
    
    let timer = null;

    let slots = Array.from(document.querySelectorAll(".slot"));

    const start = () => {
        timer = setTimeout(()=> {
            editModal(true, slots.indexOf(element));
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

});*/




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