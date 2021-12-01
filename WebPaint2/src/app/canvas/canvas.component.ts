import { Component, ViewChild, ElementRef, OnInit, HostListener, Inject, Injectable } from '@angular/core';

  @Component({
    selector: 'app-canvas',
    templateUrl: './canvas.component.html',
    styleUrls: ['./canvas.component.css']
  })
  @Injectable()
  export class CanvasComponent implements OnInit {

  canvas: HTMLCanvasElement | null;
  ctx : CanvasRenderingContext2D | null;

  constructor(){
    this.canvas = null;
    this.ctx = null;
  }

  ngOnInit(): void {
    this.canvas = document.getElementById('myCanvas')! as HTMLCanvasElement;
    this.ctx = this.canvas.getContext('2d')! as CanvasRenderingContext2D;

    console.log(this.canvas);
    console.log(this.ctx);
  }

  

}
