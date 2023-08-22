function handleclick(target) {
    document.getElementById('result').value += target;
}
function clearResult() {
    document.getElementById('result').value = '';
}
function calculate() {
    try {
        const expression = document.getElementById('result').value;
        const answer = eval(expression);
        document.getElementById('result').value = answer;
    } catch (error) {
        document.getElementById('result').value = 'Error'
    }  
}   