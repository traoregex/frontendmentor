import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  goNext() {
    console.log("test");
    // if(this.getCurrentIndex() < (this.images.length - 1)) {
    //   this.currentImage = this.images[this.getCurrentIndex()+1];
    // } else {
    //   this.currentImage = this.images[0];
    // }
    // console.log(this.currentImage);
  }

}
