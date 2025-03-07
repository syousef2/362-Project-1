document.addEventListenr('DOMContentLoaded', function () {
  const dateElement = document.createElement('p');
  dateElement.textContent= 'Current Date and Time: ' + new Data().toLocateString();
  document.body.appendChild(dateElement);
});  


