import { ChangeDetectionStrategy } from '@angular/core';
import { Observable, ReplaySubject, Subject } from 'rxjs/Rx';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/debounce';
import { KittenApiService } from '../kitten-api.service';
import { DOCUMENT } from '@angular/platform-browser';
import { AfterViewInit, Component, ElementRef, HostListener, Inject, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-kitten-overview',
  templateUrl: './kitten-overview.component.html',
  styleUrls: ['./kitten-overview.component.scss']
})
export class KittenOverviewComponent implements OnInit {
  private loadKittens = 0;
  private kittens: string[] = [];
  public kittenUrls$: ReplaySubject<string[]> = new ReplaySubject<string[]>();

  constructor(
    private kittenApiService: KittenApiService,
    @Inject(DOCUMENT) private document: Document,
    private element: ElementRef) {
  }

  ngOnInit(): void {
    this.getKittens().subscribe();

    Observable.fromEvent(window, 'scroll').debounceTime(300).flatMap(() => {
      const scrolled: number = this.document.body.scrollTop + this.document.documentElement.clientHeight;
      const elementHeight: number = this.element.nativeElement.offsetHeight;
      if (scrolled > elementHeight - 300) {
        return this.getKittens();
      } else {
        return Observable.empty();
      }
    }).subscribe();
  }

  getKittens(): Observable<string> {
    return this.kittenApiService.getKittenCollection(10).do((url: string) => {
      this.kittens.push(url);
      this.kittenUrls$.next(this.kittens);
    });
  }
}
