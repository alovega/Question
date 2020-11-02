import { Component, OnInit } from '@angular/core';
import { AppGlobalRippleOptions } from '../app-global-ripple-options.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  constructor(private appRippleOptions: AppGlobalRippleOptions) {
  }

  disableRipples(): void {
    this.appRippleOptions.disabled = true;
  }

  ngOnInit(): void {
  }

}
