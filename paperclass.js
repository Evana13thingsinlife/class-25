class Paper{
    constructor(){
        var options={
            isStatic:false, 
            restitution:0.3,
            friction:0.5,
            density:1.2
        }
        this.body=Bodies.circle(200,200,30,options);
        this.radius = 70;
        this. image = loadImage("https://s3-projectsassets.whjr.online/paper.png");
        World.add(world,this.body)
    }
    display (){
        var pos= this.body.position;
        fill("pink");
        image(this.image,0,0,this.radius);

    }
}
