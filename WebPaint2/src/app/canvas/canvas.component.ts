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

  DrawImage(){
    this.ctx!.drawImage(this.ourImage, 0, 0);
  }

  ClearCanvas(){
    this.ctx!.clearRect(0, 0, this.canvas!.width, this.canvas!.height);
  }

  Download(){}

  

}
