document.addEventListener('DOMContentLoaded', function () {
  const dateElement = document.createElement('p');
  dateElement.textContent= 'Current Date and Time: ' + new Date().toLocaleString();
  document.body.appendChild(dateElement);
});  


