import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {

  images: string[] = [
    '../../assets/images/image-product-1.jpg',
    '../../assets/images/image-product-2.jpg',
    '../../assets/images/image-product-3.jpg',
    '../../assets/images/image-product-4.jpg'
  ];

  currentImage = this.images[0];

  constructor() { }

  ngOnInit(): void {

  }

  goNext() {
    console.log(this.currentImage);
    console.log('index', this.getCurrentIndex()+1);
    if(this.getCurrentIndex() < (this.images.length - 1)) {
      this.currentImage = this.images[this.getCurrentIndex()+1];
    } else {
      this.currentImage = this.images[0];
    }
    console.log(this.currentImage);
  }

  getCurrentIndex() {
    return this.images.findIndex(url => this.currentImage);
  }


}
