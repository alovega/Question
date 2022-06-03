import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { faker } from '@faker-js/faker';

@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.scss']
})
export class AnswerComponent implements OnInit {
  question:any
  question_body: any
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    const routeParams = this.route.snapshot.paramMap
    this.question = routeParams.get('answer-title')
    this.question_body = faker.lorem.paragraphs(2)
  }

}
