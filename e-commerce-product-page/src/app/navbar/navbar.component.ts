import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  animations: [
    trigger('slideInOut', [
      state('in', style({
        transform: 'translate3d(0,0,0)',
        backgroundColor: 'rgba(0,0,0,0.7)'
      })),
      state('out', style({
        transform: 'translate3d(-100%, 0, 0)'
      })),
      transition('in => out', animate('400ms ease-in-out')),
      transition('out => in', animate('400ms ease-in-out'))
    ]),
  ]
})
export class NavbarComponent implements OnInit {

  menuState = "out";

  constructor() { }

  ngOnInit(): void {
  }

  toggle() {
    this.menuState = this.menuState === 'out' ? 'in' : 'out';
  }

}
