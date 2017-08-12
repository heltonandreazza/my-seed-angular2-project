import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from "rxjs/Observable";
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Subject } from "rxjs/Subject";

@Injectable()
export class HomeService {
  constructor(private http: Http) { }
}