var itemText = [
  { 'id': '#symptoms', 
    'text': 'It is important to be as detailed as possible with your description of symptoms. Note changes in bathroom habits, weight loss, responsiveness and anything you can think of.' },
  { 'id': '#medications',
    'text': 'Please list all medications and make sure you list the date and the dosage you gave to your pet' }
];

function handleItem(id, text) {
  var newElement, targetElement, currentAlert;

  currentAlert = document.querySelector('#currentAlert');

  if (currentAlert !== null) {
    currentAlert.parentNode.removeChild(currentAlert);
  }

  newElement = document.createElement('div');
  newElement.id = 'currentAlert';
  newElement.className = 'alert alert-danger';
  newElement.innerHTML =  text;
  
  targetElement= document.querySelector(id).parentNode;
  targetElement.insertBefore(newElement, targetElement.childNodes[2]);
}

function initItem(id, text) {
  return function() {
    handleItem(id, text);
  }
}

function setupitem() {
  var DOMElement;

  for (var i = 0; i < itemText.length; i++) {
    DOMElement = document.querySelector(itemText[i].id);
    DOMElement.addEventListener('focus', initItem(itemText[i].id, itemText[i].text));
  } // Loop
} // setupitem

setupitem();