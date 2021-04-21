class Dustbin{
    constructor(x,y,width,height){
        var options={
            isStatic:true, 
            
        }
        this.body=Bodies.rectangle(x,y,width,height,options);
        this.width=width;
        this.height=height;
        this.image = loadimage("https://s3-projectsassets.whjr.online/dustbingreen.png");
        World.add(world,this.body)
    }
    display (){
        var pos= this.body.position;
        fill("white");
        image(this.image,0,0,this.width,this.height);

    }
}
