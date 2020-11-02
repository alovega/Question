import { Component, OnInit } from '@angular/core';
import { IconService } from './icon.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'Questions';

  constructor(private iconService: IconService) {
  }

  ngOnInit(): void {
    this.iconService.registerIcons();
  }
}
