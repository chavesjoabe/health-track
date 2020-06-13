const btn = document.querySelector('#register-btn')
const registers = document.querySelector('#register-section')
const date = document.querySelector('#date')
const weight = document.querySelector('#weight')
var weightList = []

btn.addEventListener('click', function() {
    var createdDiv = document.createElement('div')
    if (date.value == '' || weight.value == '') {
        window.alert('Valor inválido!')
    } else {
        if (weightList.length % 2 != 0) {
            createdDiv.setAttribute('class', 'registers01')
        } else {
            createdDiv.setAttribute('class', 'registers02')
        }
        createdDiv.innerHTML =
            `<p>${date.value} </p>
        <p> ${Number(weight.value)} kg </p>
        <p> <span class="material-icons">
        create
        </span> <span class="material-icons">
            delete
            </span> </p>`

        registers.appendChild(createdDiv)

        addToList(addObject(weight.value, date.value), weightList)
        console.log(weightList)
    }
    date.value = ''
    weight.value = ''
})

function addObject(p, dt) {
    let ob = {
        peso: p,
        data: dt
    }
    return ob
}

function addToList(object, list) {
    list.push(object)
}