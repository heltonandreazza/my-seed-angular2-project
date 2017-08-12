import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html'
})
export class WelcomeComponent implements OnInit {
  // welcome data
  title: string = 'Welcome to MySeed project!!';
  description: string = 'MySeed project is a starter web application for angular 2.';

  constructor() { }

  ngOnInit() {
  }
}
