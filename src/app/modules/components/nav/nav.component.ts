import { Component } from '@angular/core';

@Component({
  selector: 'app-nav',
  imports: [],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss',
})
export class NavComponent {
  displayMenu: boolean = false;
  widthScreen: number = 0;
  constructor() {
    this.widthScreen = window.innerWidth;
    if (this.widthScreen <= 500) {
      this.displayMenu = true;
    } else {
      this.displayMenu = false;
    }
  }

  hiddenMenu() {
    this.displayMenu = !this.displayMenu;
  }
}
