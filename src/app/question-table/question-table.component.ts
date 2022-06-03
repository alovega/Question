import { AfterContentInit, AfterViewInit, Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { faker } from '@faker-js/faker';

@Component({
  selector: 'app-question-table',
  templateUrl: './question-table.component.html',
  styleUrls: ['./question-table.component.scss']
})

export class QuestionTableComponent implements OnInit {
  @ViewChild('editTmpl', { static: true }) editTmpl: TemplateRef<any>;
  @ViewChild('hdrTpl', { static: true }) hdrTpl: TemplateRef<any>;
  @ViewChild('table', { static: true }) table: any;
  currentPage: any
  searchable: boolean
  data:any  = {
      title: faker.lorem.words(20), 
      description: faker.lorem.paragraphs(2), 
      status: 'in progress',
      dateCreated: faker.date.between('2020-01-01T00:00:00.000Z', '2022-01-01T00:00:00.000Z'),
      answers: faker.random.numeric(),
      badge: faker.random.word()
  }
  columns:any[];
  rows = [ this.data, this.data, this.data];
  constructor() { 
    console.log(this.rows)
  }


  
  ngOnInit(): void {
    this.currentPage = 'Questions'
    this.searchable = true
    this.columns = [
      {
        headerTemplate: this.hdrTpl,
        cellTemplate: this.editTmpl,
        name: 'Question'
      }
    ];
  }

}
