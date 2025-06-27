/*var slotsObj = [

    {name:"ESFERICA D1" , number: "71", height: "120.34"},
    {name:"ESFERICA D2" , number: "72", height: "120.34"},
    {name:"ESFERICA D3" , number: "73", height: "120.34"},
    {name:"ESFERICA D4" , number: "74", height: "120.34"},
];*/


function setSlot(index, toolName, toolNumber, toolHeight) {

    if (!toolName) {
        let editModal = document.querySelector(".edit-modal");
        let inputNameValue = editModal.querySelector("#tool-name-ipt").value;
        let inputNumberValue = editModal.querySelector("#tool-number-ipt").value;
        let inputHeightValue = editModal.querySelector("#tool-height-ipt").value;

        toolName = inputNameValue;
        toolNumber = inputNumberValue;
        toolHeight = inputHeightValue;
    }

    let slotsStorage = localStorage.getItem("slots");

    if (slotsStorage) {
        let slotsStorageOBJ = JSON.parse(slotsStorage);

        slotsStorageOBJ[index] = {name:`${toolName}` , number: `${toolNumber}`, height: `${toolHeight}`};

        localStorage.setItem("slots", JSON.stringify(slotsStorageOBJ));
        console.log(slotsStorageOBJ);
        return true;
    }
}


function loadSlots() {
    let slotsContainer = document.querySelector(".slots");

    let slotsStorage = localStorage.getItem("slots");

    if (!slotsStorage) {
        let newEmptyStorage =  Array.from({ length: 8 }, () => ({}));
        localStorage.setItem("slots", JSON.stringify(newEmptyStorage));
        notify("Slots vazios criados com <span>sucesso</span>.")
        loadSlots();
    } else {
        try {
            
            let slotsStorageOBJ = JSON.parse(slotsStorage);

            slotsContainer.innerHTML = '';

            slotsStorageOBJ.forEach((element, index) => {

                let newSlot = document.createElement("div");

                if (element.name == null && element.number == null && element.height == null) {
                    newSlot.setAttribute("class", "slot empty");
                    newSlot.setAttribute("onclick", `editModal(${true}, ${index})`);

                    newSlot.innerHTML = `
                        <h5>Vazio</h5>
                        <h6>Clique para adicionar</h6>
                    `;


                } else {
                    newSlot.setAttribute("class", "slot");
                    newSlot.setAttribute("onclick", `editModal(${true}, ${index})`);

                    newSlot.innerHTML = `

                        <h2>T${element.number}</h2>
                        <h3>${element.name}</h3>

                        <div>
                            <span>Altura máquina</span>
                            <h4>${element.height}</h4>
                        </div>

                    `;


                }

                console.log(element);
                slotsContainer.appendChild(newSlot);


            });

        } catch (error) {
            console.log("Deu merda: " + error)
        }
    }

    /*document.querySelectorAll(".slot:not(.empty)").forEach(element => {
        onLongPress(element, 600);

    });*/
}

document.addEventListener("DOMContentLoaded", ()=>{

    loadSlots();

})

function clearSlot(index) {
    let slotsStorage = localStorage.getItem("slots");

    if (slotsStorage) {
        try {
            let slotsStorageOBJ = JSON.parse(slotsStorage);
            slotsStorageOBJ[index] = {};
            localStorage.setItem("slots", JSON.stringify(slotsStorageOBJ));
            return true;
        } catch (error) {
            console.log("Erro: ".error);
        }

    }
}

//

