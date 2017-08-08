import { KittenApiService } from './../kitten-api.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-kitten-block',
  templateUrl: './kitten-block.component.html',
  styleUrls: ['./kitten-block.component.scss']
})
export class KittenBlockComponent implements OnInit {
  @Input() public url: string;

  constructor(private kittenApiService: KittenApiService) { }

  ngOnInit() {
  }

  public isSaved(): boolean {
    return this.kittenApiService.isSaved(this.url);
  }

  public save(): void {
    this.kittenApiService.saveKitten(this.url);
  }

  public delete(): void {
    this.kittenApiService.deleteKitten(this.url);
  }
}
