import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
})
export class SliderComponent implements OnInit {
  images = [700, 533, 807, 124].map(
    (n) => `https://picsum.photos/id/${n}/1920/1080`
  );
  constructor(config: NgbCarouselConfig) {
    // customize default values of carousels used by this component tree
    config.interval = 15000;
    config.wrap = false;
    config.showNavigationArrows = false;
    config.keyboard = false;
    config.pauseOnHover = false;
  }

  ngOnInit(): void {}
}
