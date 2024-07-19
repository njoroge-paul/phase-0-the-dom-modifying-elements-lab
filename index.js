// index.js

// Remove the <main> element with id "main"
document.querySelector('main#main').remove();

// Create a new <h1> element and assign it to the newHeader variable
window.newHeader = document.createElement('h1');
window.newHeader.id = 'victory';

// Set the text content of the <h1> element
window.newHeader.innerHTML = `${'Duncan'} is the champion`;

// Add the new <h1> element to the DOM
document.body.appendChild(window.newHeader);