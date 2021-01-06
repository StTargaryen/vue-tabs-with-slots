import { Circle } from "./Circle";

export class Layer {
  constructor(container) {
    // create new Canvas element
    this.canvas = document.createElement("canvas");
    // get access to 2d drawing tools
    this.context = this.canvas.getContext("2d");
    // put canvas to Container
    container.appendChild(this.canvas);
    // count of circles on Canvas
    this.circlesNum = 20;
    // set speed to animation
    this.speed = 0.005;
    // set radius range of circles
    this.minRadius = 400;
    this.maxRadius = 800;

    // create of circles
    this.fitToContainer(this.canvas);
    this.createCircles();
    this.drawAnimation();

    addEventListener("resize", () => this.fitToContainer(this.canvas));
  }

  fitToContainer(cnv) {
    this.w = cnv.width = cnv.offsetWidth;
    this.h = cnv.height = cnv.offsetHeight;
  }

  createCircles() {
    this.circles = [];
    for (let i = 0; i < this.circlesNum; ++i) {
      this.circles.push(
        new Circle(this.w, this.h, this.minRadius, this.maxRadius)
      );
    }
  }

  drawCircles() {
    this.circles.forEach((circle) => circle.draw(this.context, this.speed));
  }

  clearCanvas() {
    this.context.clearRect(0, 0, this.w, this.h);
  }

  drawAnimation() {
    this.clearCanvas();
    this.drawCircles();
    window.requestAnimationFrame(() => this.drawAnimation());
  }
}
