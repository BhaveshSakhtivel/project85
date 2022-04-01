//Create a reference for canvas 
canvas= document.getElementById("mycanvas");
ctx=canvas.getcontext("2d");
//Give specific height and width to the car image
greencar_width= 75;
greencar_height= 100;
background_image = "parkingLot.jpg";
greencar_image = "car2.png";

//Set initial position for a car image.
greencar_x=5;
greencar_y=225;
function add() {
	background_imgTag = new Image();
	background_imgTag.onload= uploadBackground;
	background_imgTag.src= background_image;

	greencar_imgTag = new Image();
	background_imgTag.onload= uploadgreencar;
	background_imgTag.src= greencar_image;
}

function uploadBackground() {
	ctx.drawImage(background_imgTag,0,0,canvas.width,canvas.height);	
}

function uploadgreencar() {
	ctx.drawImage(greencar_imgTag,greencar_x,greencar_y,greencar_width,greencar_height);	
}



window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function down()
{
    if(rover_y <=500)
    {
        rover_y = rover_y -10;
        console.log("when up arrow key is pressed, x ="+rover_x+"|y= + rover_y ");
        uploadBackground();
        uploadrover();
    }
}

function left()
{
    if(rover_x >=0)
    {
        rover_x = rover_x +10;
        console.log("when up arrow key is pressed, x ="+rover_x+"|y= + rover_y ");
        uploadBackground();
        uploadrover();
    }
}

function right()
{
    if(rover_x <=700)
    {
        rover_x = rover_x +10;
        console.log("when up arrow key is pressed, x ="+rover_x+"|y= + rover_y ");
        uploadBackground();
        uploadrover();
    }
}

