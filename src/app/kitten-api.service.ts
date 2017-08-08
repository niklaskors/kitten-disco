import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/range';
import 'rxjs/add/operator/mergeMap';
import { KITTEN_API_URL, LOCAL_STORAGE_KEY } from './app.constants';
import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { CoolLocalStorage } from 'angular2-cool-storage';

@Injectable()
export class KittenApiService {
  public loadedKittens = 0;
  public savedKittenUrls: string[] = [];
  public loadedKittenUrls: string[] = [];

  constructor(
    private http: Http,
    private localStorage: CoolLocalStorage
  ) {
    if (this.hasSavedKittens()) {
      this.savedKittenUrls = JSON.parse(this.localStorage.getItem(LOCAL_STORAGE_KEY));
    }
  }

  public deleteKitten(url: string) {
    if (this.isSaved(url)) {
      const i: number = this.savedKittenUrls.indexOf(url);
      this.savedKittenUrls.splice(i, 1);
      this.updateStorage();
    }
  }

  public saveKitten(url: string) {
    this.savedKittenUrls.push(url);
    this.updateStorage();
  }

  public getKittenCollection(amount: number = 10): Observable<string> {
    return Observable.range(0, amount)
      .flatMap((currentKitten: number) => {
        if (this.savedKittenUrls[this.loadedKittens]) {
          return Observable.of(this.savedKittenUrls[this.loadedKittens]);
        } else {
          return this.getKitten();
        }
      }).do((url: string) => {
        this.loadedKittens++;
        this.loadedKittenUrls.push(url);
      });
  }

  public isSaved(url: string): boolean {
    return (this.savedKittenUrls.indexOf(url) !== -1);
  }

  private getKitten(): Observable<string> {
    return this.http.get(KITTEN_API_URL).retry(3).map((response: Response) => {
      return response.url;
    }).flatMap((url: string) => {
      if (this.loadedKittenUrls.indexOf(url) !== -1) {
        return this.getKitten();
      }
      return Observable.of(url);
    });
  }

  private hasSavedKittens(): boolean {
    return !!this.localStorage.getItem(LOCAL_STORAGE_KEY);
  }

  private updateStorage() {
    this.localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(this.savedKittenUrls));
  }
}
