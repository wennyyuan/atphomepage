"use strict";
(()=>{
  //宇宙特效
  var canvas = document.getElementById('canvas'),
    ctx = canvas.getContext('2d'),
    w = canvas.width = window.innerWidth,
    h = canvas.height = window.innerHeight,

    hue = 217,
    stars = [],
    count = 0,
    maxStars = 800;

  var canvas2 = document.createElement('canvas'),
    ctx2 = canvas2.getContext('2d');
  canvas2.width = 100;
  canvas2.height = 100;
  var half = canvas2.width / 2;
  var gradient2 = ctx2.createRadialGradient(half, half, 0, half, half, half);
  gradient2.addColorStop(0.025, '#CCC');
  // gradient2.addColorStop(0.1, 'hsl(' + hue + ', 61%, 33%)');
  gradient2.addColorStop(0.25, 'hsl(' + hue + ', 64%, 6%)');
  gradient2.addColorStop(1, 'transparent');

  ctx2.fillStyle = gradient2;
  ctx2.beginPath();
  ctx2.arc(half, half, half, 0, Math.PI * 2);
  ctx2.fill();

  // End cache

  function random(min, max) {
    if (arguments.length < 2) {
      max = min;
      min = 0;
    }

    if (min > max) {
      var hold = max;
      max = min;
      min = hold;
    }

    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function maxOrbit(x, y) {
    var max = Math.max(x, y),
      diameter = Math.round(Math.sqrt(max * max + max * max));
    return diameter / 2;
    //星星移动范围，值越大范围越小，
  }

  var Star = function(top, left, width, height) {

    this.orbitRadius = random(maxOrbit(w*width, h*height));
    //星星大小
    // if (document.body.clientWidth >= 800) {
    //   var size = 5;
    // } else {
    //   var size = 5;
    // }
    this.radius = random(60, this.orbitRadius) / 5; 
    
    this.orbitX = w / random(top[0],top[1]);
    this.orbitY = h / random(left[0],left[1]);
    this.timePassed = random(0, maxStars);
    this.speed = 0;
    //星星移动速度

    this.alpha = random(2, 10) / 10;

    count++;
    stars[count] = this;
  }

  Star.prototype.draw = function() {
    var x = Math.sin(this.timePassed) * this.orbitRadius + this.orbitX,
      y = Math.cos(this.timePassed) * this.orbitRadius + this.orbitY,
      twinkle = random(20);

    if (twinkle === 1 && this.alpha > 0) {
      this.alpha -= 0.05;
    } else if (twinkle === 2 && this.alpha < 1) {
      this.alpha += 0.05;
    }

    ctx.globalAlpha = this.alpha;
    ctx.drawImage(canvas2, x - this.radius / 2, y - this.radius / 2, this.radius, this.radius);
    this.timePassed += this.speed;
  }
  function createStar (top,left, width, height, maxStars) {
    maxStars = maxStars || 800;
    for (var i = 0; i < maxStars; i++) {
      new Star(top,left,width, height);
    }
  }

  function animation() {
    ctx.globalCompositeOperation = 'source-over';
    ctx.globalAlpha = 0.5; //尾巴
    // ctx.fillStyle = 'hsla(' + hue + ', 64%, 6%, 2)';
    ctx.fillRect(0, 0, w, h)

    // ctx.globalCompositeOperation = 'lighter';
    for (var i = 1, l = stars.length; i < l; i++) {
      stars[i].draw();
    };
  }
  // if (document.body.clientWidth >= 800) {
    createStar([8,8],[8,8],0.2,0.2,random(15,15));
    createStar([1.4,1.4],[1.4,1.4],0.2,0.2,random(15,15));
  // } else {
  //   createStar([10,10],[10,10],0.2,0.2,random(15,15));
  //   createStar([1.3,1.3],[1.3,1.3],0.2,0.2,random(15,15));
  // }
  animation();
})()
