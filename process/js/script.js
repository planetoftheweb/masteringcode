// var howMany = 12;
/// createBoxes(howMany);

(function createBoxes(qty = 4) {
  var myBoxes = document.querySelector('.boxes');  
  // console.log(myNode);
  // console.log(i);

  for (let i = 0; i < qty; i++) {
    let myNode = document.createElement('div');
    myNode.className= 'box';
    myBoxes.appendChild(myNode);
  }
})(12);

