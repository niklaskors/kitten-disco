import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/range';
import 'rxjs/add/operator/mergeMap';
import { KITTEN_API_URL } from './app.constants';
import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class KittenApiService {

  constructor(private http: Http) { }

  getKittenCollection(amount: number = 10): Observable<string> {
    return Observable.range(0, amount).flatMap(() => this.getKitten());
  }

  getKitten(): Observable<string> {
    return this.http.get(KITTEN_API_URL).retry(1).map((response: Response) => response.url);
  }
}
