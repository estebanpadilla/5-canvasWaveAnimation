function Ball(x, y, radius, color, context) {
    this.x = x;
    this.y = y;
    this.ox = x;
    this.oy = y;
    this.radius = radius;
    this.color = color;
    this.context = context;
}

Ball.prototype.update = function update() {
    //Update object properties first
    this.render();
}

Ball.prototype.render = function render() {
    this.context.beginPath();
    this.context.fillStyle = this.color;
    this.context.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    this.context.closePath();
    this.context.fill();
}