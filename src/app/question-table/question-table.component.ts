import { AfterViewInit, Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { faker } from '@faker-js/faker';

@Component({
  selector: 'app-question-table',
  templateUrl: './question-table.component.html',
  styleUrls: ['./question-table.component.scss']
})

export class QuestionTableComponent implements OnInit, AfterViewInit {
  @ViewChild('editTmpl', { static: true }) editTmpl: TemplateRef<any>;
  @ViewChild('hdrTpl', { static: true }) hdrTpl: TemplateRef<any>;
  @ViewChild('table', { static: true }) table: any;

  data:any  = {
      title: faker.lorem.words(2), 
      description: faker.lorem.paragraph(), 
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
    
  }

  ngAfterViewInit(): void {
    this.columns = [
      {
        headerTemplate: this.hdrTpl,
        cellTemplate: this.editTmpl,
        name: 'Question'
      }
    ];
  }

  

}
