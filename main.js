let op
function calc() {
    let result
    let num1 = Number(document.getElementById('num1').value)
    let num2 = Number(document.getElementById('num2').value)
switch (op) {
    case '+':
    result = num1 + num2
        break;
    case '-':
        result = num1 - num2
        break;
    case '*':
        result = num1 * num2
        break;
    case '/':
if (num2 === 0) {
document.getElementById('result').textContent = "ошибка"
    return
}
result = num1 / num2
        break
    default:
document.getElementById('result')
    .textContent = 'ошибка, выберите действие'
}
document.getElementById('result').innerText = result

}
