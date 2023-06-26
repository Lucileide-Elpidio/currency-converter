
const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")

function convertValue() {
    const inputValue = document.querySelector(".input-value").value
    const currencyToconvert = document.querySelector(".currency-to-convert")
    const currencyConvert = document.querySelector(".currency-convert")

    const dolarToday = 4.77
    const euroToday = 5.23
    const libraToday = 6.09

    if (currencySelect.value == "dolar") {
        currencyConvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputValue / dolarToday)
    }

    if (currencySelect.value == "euro") {
        currencyConvert.innerHTML = new Intl.NumberFormat("de-De", {
            style: "currency",
            currency: "EUR"
        }).format(inputValue / euroToday)
    }

    if (currencySelect.value == "libra") {
        currencyConvert.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GPR"
        }).format(inputValue / libraToday)
    }

    currencyToconvert.innerHTML = new Intl.NumberFormat("pt-br", {
        style: "currency",
        currency: "BRL"
    }).format(inputValue)
}


function currencyChange() {
    const currencyName = document.getElementById("currency-name")
    const currencyImage = document.querySelector(".currency-img")

    if (currencySelect.value == "dolar") {
        currencyName.innerHTML = 'Dólar'
        currencyImage.src = "./assets/dolar.png"
    }

    if (currencySelect.value == "euro") {
        currencyName.innerHTML = 'Euro'
        currencyImage.src = "./assets/euro.png"
    }

    if (currencySelect.value == "libra") {
        currencyName.innerHTML = 'Libra'
        currencyImage.src = "./assets/libra.png"
    }
    convertValue()
}


currencySelect.addEventListener("change", currencyChange)
convertButton.addEventListener("click", convertValue)
