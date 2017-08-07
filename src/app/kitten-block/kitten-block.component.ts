import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-kitten-block',
  templateUrl: './kitten-block.component.html',
  styleUrls: ['./kitten-block.component.scss']
})
export class KittenBlockComponent implements OnInit {
  @Input() public url: string;

  constructor() { }

  ngOnInit() {
  }

}
