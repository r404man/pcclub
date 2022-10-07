import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  isCatalogOpen: boolean = false;

  constructor() {}

  openCatalog(): void {
    this.isCatalogOpen = !this.isCatalogOpen;
  }

  ngOnInit(): void {}
}
