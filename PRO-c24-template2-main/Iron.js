class Iron {
	constructor(x,y,width,height,options)
	{
	// assign options to the rubber ball
	var options ={
		restitution:0.8,
		friction:3,
		density:30
	}
	this.body = Bodies.rectangle(x,y,width,height,options);
	this.width = width;
	this.height = height;
	World.add(world, this.body);
		//this.x=x;
		//this.y=y;
		//this.r=r
		//this.body=Bodies.rectangle(this.x, this.y, (this.r-20)/2, options)
		//World.add(world, this.body);

	}
	display()
	{
			var ironpos=this.body.position;		
			push()
			translate(ironpos.x, ironpos.y);
			rectMode(CENTER)
			rect(10, 10, this.width, this.height);
			strokeWeight(4);
			stroke("orange");
			fill("white");

			pop()
	}

}