function dateTime(){
const date = new Date();
const jamElement = date.getHours();
const menitElement = date.getMinutes();
const detikElement = date.getSeconds();
const spanContainer = document.getElementById('card')
spanContainer.innerHTML = `${jamElement} : ${menitElement} : ${detikElement}`;
}
setInterval(dateTime, 10);