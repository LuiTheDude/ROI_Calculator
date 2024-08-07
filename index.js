const calcForm = document.getElementById('calcForm');

calcForm.addEventListener("submit", event => {
    event.preventDefault();
    calculateROI();
})

function calculateROI(){
    
    const initialCapital = parseFloat(document.getElementById('initialCapital').value);
    const annual = parseFloat(document.getElementById('annual').value/100);
    const years = parseInt(document.getElementById('years').value);
    const resultP = document.getElementById('result');
    
    let capital = initialCapital;
    for (let i=0; i<years; i++){
        capital += capital * annual;
    }
    let result = capital.toFixed(2);
    resultP.textContent = `${result}$💸🤑💰`;    
}

function changeAnnual(num){
    document.getElementById('annual').value = num;
}

