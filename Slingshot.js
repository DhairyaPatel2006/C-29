class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        this.image0 = loadImage("sprites/sling1.png");
        this.image1 = loadImage("sprites/sling2.png");
        this.image2 = loadImage("sprites/sling3.png");
        this.sling = Constraint.create(options);
        World.add(world, this.sling);

    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
        image(this.image0,230,40);
        image(this.image1,200,30);
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            push();
            if(pointA.x<200){
                strokeWeight(1);
                stroke(84,39,15);
                line(pointA.x-20, pointA.y, pointB.x, pointB.y);
                line(pointA.x-20, pointA.y, pointB.x+30, pointB.y+10);
                image(this.image2,pointA.x-30,pointA.y-10,15,30)
            }
            else{
                strokeWeight(4);
                stroke(84,39,15);
                line(pointA.x-20, pointA.y, pointB.x, pointB.y);
                line(pointA.x-20, pointA.y, pointB.x+30, pointB.y+10);
                image(this.image2,pointA.x-30,pointA.y-10,15,30)
            }
            
            pop();
        }
    }
    
}