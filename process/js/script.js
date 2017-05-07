var colors = [
               '#C94C24', //orange
               '#268BD2', //blue
               '#C4226F', //pink
               '#859835', // lime
               '#6D73C2', // purple
               '#37A198', // green
               '#DA3637', //red
               '#F0AD4E' //yellow
             ];

function makeBoxes(howMany) {
  var colorAmt = colors.length;
  var currColor = 0;

  for (var i = 0; i < howMany; i++) {

    if (currColor === colorAmt-1) {
      currColor = 0;
    } else {
      currColor++;
    }
  }
}

makeBoxes(20);