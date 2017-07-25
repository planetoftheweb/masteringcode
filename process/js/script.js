var howMany = 12;

function createBoxes(qty = 4) {
  var myBoxes = document.querySelector('.boxes');  

  for (var i = 0; i < qty; i++) {
    var myNode = document.createElement('div');
    myNode.className= 'box';
    myBoxes.appendChild(myNode);
  }

}

createBoxes(howMany);
