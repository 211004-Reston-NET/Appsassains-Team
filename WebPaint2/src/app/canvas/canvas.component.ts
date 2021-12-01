import { Component, ViewChild, ElementRef, OnInit, HostListener, Inject, Injectable } from '@angular/core';

  @Component({
    selector: 'app-canvas',
    templateUrl: './canvas.component.html',
    styleUrls: ['./canvas.component.css']
  })

  export class CanvasComponent implements OnInit {

  canvas: HTMLCanvasElement | null;
  ctx : CanvasRenderingContext2D | null;
  ourImage = new Image();

  constructor(){
    this.canvas = null;
    this.ctx = null;
    this.ourImage.src = 'https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/home-improvement/wp-content/uploads/2021/10/featured-image-types-of-paint.jpeg.jpg';
  }

  ngOnInit(): void {
    this.canvas = document.getElementById('myCanvas')! as HTMLCanvasElement;
    this.ctx = this.canvas.getContext('2d')! as CanvasRenderingContext2D;
  }

  drawPoint:Function = this.drawPointPen;  // This is the function that is called when the user clicks on the canvas.
  nStartX = 0;
  nStartY = 0;
  bIsDrawing = false;
  nDeltaX = 0;
  nDeltaY = 0;
  radius = 10;

  putPoint(e: MouseEvent){    // e is event: e.clientX and e.clientY are the coordinates of the mouse.
    this.nStartX = e.clientX;
    this.nStartY = e.clientY;
    this.bIsDrawing = true;
  }
  stopPoint(){
    this.bIsDrawing = false; 
    // Record history
  }

  drawPointPen(e: MouseEvent){        // This draws on mouse
    if(!this.bIsDrawing)
        return;
    this.ctx!.beginPath();
    this.ctx!.moveTo(this.nStartX, this.nStartY);
    this.ctx!.lineTo(e.clientX, e.clientY);
    this.ctx!.stroke();

    this.nStartX = e.clientX;
    this.nStartY = e.clientY;
  }

  @HostListener('mousedown', ['$event']) onclick(e: MouseEvent)  {this.putPoint(e);}
  @HostListener('mousemove', ['$event']) onmove(e: MouseEvent)   {this.drawPoint(e);}
  @HostListener('mouseup',   ['$event']) onup()                  {this.stopPoint();}

  DrawImage(){
    this.ctx!.drawImage(this.ourImage, 0, 0);
  }

  ClearCanvas(){
    this.ctx!.clearRect(0, 0, this.canvas!.width, this.canvas!.height);
  }

  Download(){}

}
