import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  isCatalogOpen: boolean = false;
  cartAmount: number = 1;

  constructor() {}

  openCatalog(): void {
    this.isCatalogOpen = !this.isCatalogOpen;
  }

  checkCartAmount(): void {}

  ngOnInit(): void {}
}
