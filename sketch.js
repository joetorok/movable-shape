// give movableShape a nice, descriptive name to work with here
// (i.e., replace the variable name myShape with something more descriptive (e.g., myCar, myRocket).)
var rocket = movableShape;


// Redefine drawShape() by putting your moving shape in here
// (Basically, you can copy and paste your code from last time, although you may wish to refactor it so that it's more readable.)
// That said, you may wish to try putting your unrefactored, raw drawing code from week 1 in here
rocket.drawShape = function () {
	// your code goes here
	//main rocket body
  fill(188, 198, 204); //rocket color
  rect(175, 300, 50, 175); //rocket body shape

  //rocket fins
  fill(245, 198, 215); //rocket fin color
  triangle(150, 475, 175, 425, 175, 475 ); //left fin
  triangle(225, 475, 225, 425, 250, 475); //right fin

  //rocket window
  fill(255); //light interior color
  ellipse(200, 350, 25, 25); //window shape

  //upper rocket body
  fill(188, 198, 204); //rocket color
  rect(180, 250, 40, 50); //upper body shape

  //rocket cone
  fill(245, 198, 215); //rocket cone color
  triangle(182, 250, 200, 175, 218, 250); //cone shape
};

// You will also need to do some work to set the speed of the shape. How do you want it to move? What do you need to change to get it to move?

setup = function() {
	createCanvas(600, 600);
	rocket.speed.y = -1;

};

draw = function() {
  background(100); // refresh the background
  rocket.display(); // display myShape
  rocket.update(); // and then update it
};
