import { Component, OnInit } from '@angular/core';
import { faker } from '@faker-js/faker';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {
  currentPage: any
  contactMessage: any
  aboutMessage: any
  constructor() { }

  ngOnInit(): void {
    this.currentPage = 'Contact Us'
    this.contactMessage = faker.lorem.paragraphs(1)
    this.aboutMessage = faker.lorem.paragraphs(3)
  }

}
