import { Component, ViewChild, ElementRef, OnInit, HostListener } from '@angular/core';

  @Component({
    selector: 'app-canvas',
    template: '<canvas #myCanvas></canvas>',
  })
  export class CanvasComponent implements OnInit {

  @ViewChild('myCanvas', { static: false }) canvas: ElementRef<HTMLCanvasElement>;
  ctx: CanvasRenderingContext2D;

  constructor(private el: ElementRef<HTMLCanvasElement>, private img: HTMLImageElement) {
    this.canvas = el;
    this.ctx = this.canvas.nativeElement.getContext('2d')!;
    this.img = img;
  }

  nStartX = 0;
  nStartY = 0;
  bIsDrawing = false;
  nDeltaX = 0;
  nDeltaY = 0;
  radius = 10;

  ngOnInit(): void {
  }

  ClearCanvas() {
    this.ctx.clearRect(0, 0, this.canvas.nativeElement.width, this.canvas.nativeElement.height);
  }

  putPoint(e: MouseEvent){    // e is event: e.clientX and e.clientY are the coordinates of the mouse.
    this.nStartX = e.clientX;
    this.nStartY = e.clientY;
    this.bIsDrawing = true;
  }

  stopPoint(){
    this.bIsDrawing = false;
  }

  drawPoint(e: MouseEvent){        // This draws on mouse
    if(!this.bIsDrawing){
        return;
    }
    this.ctx.beginPath();
    this.ctx.moveTo(this.nStartX, this.nStartY);
    this.ctx.lineTo(e.clientX, e.clientY);
    this.ctx.stroke();
    this.nStartX = e.clientX;
    this.nStartY = e.clientY;
  }

  @HostListener('window:mousedown', ['$event']) onclick(e: MouseEvent)  {this.putPoint(e);}
  @HostListener('window:mousemove', ['$event']) onmove(e: MouseEvent)   {this.drawPoint(e);}
  @HostListener('window:mouseup',   ['$event']) onup(e: MouseEvent)     {this.stopPoint();}

}
