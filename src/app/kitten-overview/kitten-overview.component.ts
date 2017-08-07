import { Observable, Subject } from 'rxjs/Rx';
import { KittenApiService } from '../kitten-api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-kitten-overview',
  templateUrl: './kitten-overview.component.html',
  styleUrls: ['./kitten-overview.component.scss']
})
export class KittenOverviewComponent implements OnInit {
  public kittenUrls$: Subject<string[]> = new Subject<string[]>();

  constructor(private kittenApiService: KittenApiService) {
  }

  ngOnInit() {
    const kittens: string[] = [];
    this.kittenApiService.getKittenCollection(20).subscribe((url: string) => {
      kittens.push(url);
      this.kittenUrls$.next(kittens);
    });
  }

}
