//Converter

const apiKey = "fxr_live_0b2c92fc741a6c478fa1fcdf860198b1ba5d";

const SYMBOLS = { USD:'$', EUR:'€', GBP:'£', JPY:'¥', AUD:'A$', CAD:'C$' };
 
const form = document.getElementById('convertForm');
const amountInput = document.getElementById('amount');
const fromSelect = document.getElementById('fromCurrency');
const toSelect = document.getElementById('toCurrency');
const fromTag = document.getElementById('fromTag');
const swapBtn = document.getElementById('swapBtn');
const errorMsg = document.getElementById('errorMsg');
const placeholderText = document.getElementById('placeholderText');
const resultRow = document.getElementById('resultRow');
const resultFigure = document.getElementById('resultFigure');
const toTagOut = document.getElementById('toTagOut');
const rateNote = document.getElementById('rateNote');
 
form.addEventListener('submit', async event => {
    event.preventDefault();

    const amount = parseFloat(amountInput.value);
    const fromCurrency = fromSelect.value;
    const toCurrency = toSelect.value;

    try {
        const data = await getExchangeRate();
        displayResult(data, amount, fromCurrency, toCurrency);
    }catch (error) {
        console.error(error);
    }

});

async function getExchangeRate() {
    const apiUrl = `https://api.fxratesapi.com/latest?api_key=${apiKey}`;
    const response = await fetch(apiUrl);
    if (!response.ok) {
        throw new Error("Failed to fetch exchange rates.");
    }
    return await response.json();
}

function displayResult(data, amount, fromCurrency, toCurrency) {}