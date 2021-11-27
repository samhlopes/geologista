class Rock {
	constructor(x,y,width,height,options)
	{
	var options ={
		'restitution':0.8,
		'friction':0.9,
		'density':12
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
			var rockpos=this.body.position;		
			push()
			translate(rockpos.x, rockpos.y);
			rectMode(CENTER)
			rect(10, 10, this.width, this.height);
			strokeWeight(4);
			stroke('gray');
			fill('green');

			pop()
	}

}