function appendToResult(value) {
    document.getElementById('result').value += value;
}

function clearResult() {
    document.getElementById('result').value = '';
}

function deleteCharacter() {
    var result = document.getElementById('result').value;
    document.getElementById('result').value = result.slice(0,-1);
}

function calculateResult() {
    var result = document.getElementById('result').value;
    var calculation = eval(result);
    document.getElementById('result').value = calculation;
}