import { Component, OnInit } from '@angular/core';
import { AppGlobalRippleOptions } from '../app-global-ripple-options.service';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})

export class NavigationComponent implements OnInit {

  searchForm: FormGroup;

  constructor(private appRippleOptions: AppGlobalRippleOptions, private fb: FormBuilder) {
  }

  disableRipples(): void {
    this.appRippleOptions.disabled = true;
  }

  ngOnInit(): void {
    this.searchForm = this.fb.group({
      search: ['']
    });
  }

}
