const length = 3.281
const volume = 0.264
const mass = 2.204

const metricUnit = ["meters", "liters", "kilos"]
const imperialUnit = ["feet", "gallons", "pounds"]

const toBeConverted = document.querySelector("#desired-conversion")

const lengthSelector = document.querySelector("#length-checkmark")
const volumeSelector = document.querySelector("#volume-checkmark")
const massSelector = document.querySelector("#mass-checkmark")
const lengthCheckbox = document.querySelector("#length-checkmark")
const volumeCheckbox = document.querySelector("#volume-checkmark")
const massCheckbox = document.querySelector("#mass-checkmark")
const lengthText = document.querySelector("#length-element")
const volumeText = document.querySelector("#volume-element")
const massText = document.querySelector("#mass-element")

const convertBtn = document.querySelector("#submit-btn")
const errorMessage = document.querySelector("#place-holder")

const message = "Please Choose At Least One Conversion Option Above"

let lengthResult = document.querySelector("#length-conversion-result")
let volumeResult = document.querySelector("#volume-conversion-result")
let massResult = document.querySelector("#mass-conversion-result")

convertBtn.addEventListener("click", function() {
    let input = toBeConverted.value

    let metric = ""
    let imperial = ""

    if (input == "") {
        lengthResult.innerHTML = ``
        volumeResult.innerHTML = ``
        massResult.innerHTML = ``
    } else {
        metric = input / length
        imperial = input * length
        lengthResult.innerHTML = `${input} ${metricUnit[0]} = ${imperial.toFixed(3)} ${imperialUnit[0]} | ${input} ${imperialUnit[0]} = ${metric.toFixed(3)} ${metricUnit[0]}` 

        metric = input / volume
        imperial = input * volume
        volumeResult.innerHTML = `${input} ${metricUnit[1]} = ${imperial.toFixed(3)} ${imperialUnit[1]} | ${input} ${imperialUnit[1]} = ${metric.toFixed(3)} ${metricUnit[1]}`
            
        metric = input / mass
        imperial = input * mass
        massResult.innerHTML = `${input} ${metricUnit[2]} = ${imperial.toFixed(3)} ${imperialUnit[2]} | ${input} ${imperialUnit[2]} = ${metric.toFixed(3)} ${metricUnit[2]}`
    }
})

function showLengthElement() {
    if (lengthCheckbox.checked == true) {
        lengthText.style.display = ""
    } else {
        lengthText.style.display = "none"
    }

    if (lengthCheckbox.checked == false && volumeCheckbox.checked == false && massCheckbox.checked == false) {
        errorMessage.innerHTML = message
    } else {
        errorMessage.innerHTML = ""
    }
}

function showVolumeElement() {
    if (volumeCheckbox.checked == true) {
        volumeText.style.display = ""
    } else {
        volumeText.style.display = "none"
    }

    if (lengthCheckbox.checked == false && volumeCheckbox.checked == false && massCheckbox.checked == false) {
        errorMessage.innerHTML = message
    } else {
        errorMessage.innerHTML = ""
    }
}

function showMassElement() {
    if (massCheckbox.checked == true) {
        massText.style.display = ""
    } else {
        massText.style.display = "none"
    }

    if (lengthCheckbox.checked == false && volumeCheckbox.checked == false && massCheckbox.checked == false) {
        errorMessage.innerHTML = message
    } else {
        errorMessage.innerHTML = ""
    }
}