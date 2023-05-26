class Box {
    constructor(x,y,z,w,h,d){
        this.position = createVector(x, y, z);
        this.x = x
        this.y = y
        this.z = z
        this.w = w
        this.h = h
        this.d = d
    }
    update(){
        push()
        translate(this.x,this.y,this.z)
        box(this.w,this.h,this.d)
        pop()
    }
    isOffscreen() {
        const buffer = 900; // Adjust the buffer size as needed
        return (
          this.x < -width / 2 - buffer ||
          this.x > width / 2 + buffer ||
          this.z < -height / 2 - buffer ||
          this.z > height / 2 + buffer
        );
      }
}